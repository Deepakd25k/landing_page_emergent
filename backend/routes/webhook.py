import hashlib
import hmac
import json
import logging
import time
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, HTTPException, Request

from config import (CALID_WEBHOOK_SECRET, CURRENCY, DIAGNOSTIC_PRICE, PREDICTED_LTV,
                    PRODUCT_CATEGORY, PRODUCT_NAME)
from services.hash_utils import build_hashed_user_data, split_name
from services.meta_capi import build_event, send_events
from services.mongo import bookings, events, sessions

logger = logging.getLogger("webhook")
router = APIRouter(tags=["webhook"])


def verify_signature(raw: bytes, signature: Optional[str]) -> bool:
    if not CALID_WEBHOOK_SECRET:
        return True
    if not signature:
        return False
    expected = hmac.new(CALID_WEBHOOK_SECRET.encode(), raw, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature.strip())


def _response_value(responses: dict, *keys):
    for key in keys:
        val = responses.get(key)
        if isinstance(val, dict):
            val = val.get("value")
        if val:
            return val
    return None


def extract_booking(payload: dict) -> dict:
    attendees = payload.get("attendees") or []
    attendee = attendees[0] if attendees else {}
    responses = payload.get("responses") or {}
    metadata = payload.get("metadata") or {}
    email = attendee.get("email") or _response_value(responses, "email")
    name = attendee.get("name") or _response_value(responses, "name")
    phone = _response_value(responses, "phone", "attendeePhoneNumber", "smsReminderNumber") or attendee.get("phoneNumber")
    location = payload.get("location")
    if isinstance(location, str) and location.startswith("+"):
        phone = phone or location
    payment = (payload.get("payment") or [{}])
    payment = payment[0] if isinstance(payment, list) and payment else (payment if isinstance(payment, dict) else {})
    first_name, last_name = split_name(name or "")
    return {
        "booking_uid": payload.get("uid") or str(payload.get("bookingId") or ""),
        "booking_id": payload.get("bookingId"),
        "title": payload.get("title") or payload.get("eventTitle"),
        "start_time": payload.get("startTime"),
        "end_time": payload.get("endTime"),
        "timezone": attendee.get("timeZone"),
        "email": (email or "").strip().lower() or None,
        "name": name,
        "first_name": first_name,
        "last_name": last_name,
        "phone": phone,
        "brand": _response_value(responses, "brand", "company", "brandName", "notes"),
        "session_id": metadata.get("session_id") or metadata.get("sessionId"),
        "payment_id": payload.get("paymentId") or payment.get("id") or payment.get("externalId"),
        "payment_amount": (payment.get("amount") / 100) if isinstance(payment.get("amount"), (int, float)) else 0,
        "payment_currency": payment.get("currency") or CURRENCY,
        "payment_success": payment.get("success", True),
        "meeting_url": payload.get("videoCallData", {}).get("url") if isinstance(payload.get("videoCallData"), dict) else payload.get("location"),
        "raw_metadata": metadata,
    }


async def resolve_session(booking: dict):
    if booking.get("session_id"):
        session = await sessions.find_one({"session_id": booking["session_id"]})
        if session:
            return session
    queries = []
    if booking.get("email"):
        queries.append({"email": booking["email"]})
    if booking.get("phone"):
        # Strip all non-digit characters for robust phone matching
        phone_digits = ''.join(filter(str.isdigit, booking["phone"]))
        if len(phone_digits) >= 10:
            # Match last 10 digits to handle country codes
            queries.append({"phone": {"$regex": f"{phone_digits[-10:]}$"}})

    if queries:
        prior = await bookings.find_one({"$or": queries, "session_id": {"$ne": None}}, sort=[("created_at", -1)])
        if prior:
            return await sessions.find_one({"session_id": prior["session_id"]})
            
    return None


async def fire_purchase_and_schedule(booking: dict, session: Optional[dict], trigger: str):
    now_ts = int(time.time())
    session = session or {}
    user_data = build_hashed_user_data(
        email=booking.get("email"), phone=booking.get("phone"),
        first_name=booking.get("first_name"), last_name=booking.get("last_name"),
        country="in", external_id=session.get("session_id"),
    )
    user_data.update({
        "fbp": session.get("fbp"), "fbc": session.get("fbc"),
        "client_ip_address": session.get("ip"), "client_user_agent": session.get("user_agent"),
    })
    order_id = booking.get("payment_id") or booking["booking_uid"]
    is_course = session.get("campaign") == "course"
    content_name = "D2C Performance Marketing Course" if is_course else PRODUCT_NAME
    content_category = "Training" if is_course else PRODUCT_CATEGORY
    content_ids = ["d2c-course"] if is_course else ["d2c-diagnostic"]
    default_price = 4999 if is_course else DIAGNOSTIC_PRICE

    custom_data = {
        "value": booking.get("payment_amount") or 0,
        "currency": booking.get("payment_currency") or CURRENCY,
        "content_name": content_name,
        "content_category": content_category,
        "content_type": "product",
        "content_ids": content_ids,
        "num_items": 1,
        "order_id": order_id,
        "predicted_ltv": PREDICTED_LTV,
    }
    source_url = session.get("landing_url") or "https://cal.id"
    to_send = []
    if trigger == "BOOKING_PAID":
        to_send.append(("Purchase", f"purchase_{booking['booking_uid']}", custom_data))
    elif trigger == "RAZORPAY_PAID":
        to_send.append(("razorpay_course_payment", f"razorpay_{booking['booking_uid']}", custom_data))
    elif trigger == "COHORT_BOOKED":
        to_send.append(("cohort_booked", f"cohort_{booking['booking_uid']}", custom_data))
        
    if trigger not in ("RAZORPAY_PAID", "COHORT_BOOKED"):
        to_send.append(("booking_scheduled", f"booking_scheduled_{booking['booking_uid']}",
                        {**custom_data, "appointment_time": booking.get("start_time")}))

    results = []
    for event_name, event_id, cdata in to_send:
        if await events.find_one({"event_id": event_id}):
            continue
        capi_event = build_event(event_name=event_name, event_id=event_id, event_source_url=source_url,
                                 user_data=user_data, custom_data=cdata, event_time=now_ts)
        capi_result = await send_events([capi_event])
        capi_result.pop("payload_preview", None)
        await events.insert_one({
            "event_id": event_id, "event_name": event_name,
            "session_id": session.get("session_id"), "source": "server_webhook",
            "booking_uid": booking["booking_uid"], "source_url": source_url,
            "created_at": datetime.now(timezone.utc).isoformat(), "event_time": now_ts,
            "campaign": session.get("campaign") or "diagnostic",
            "user_data_fields": sorted(k for k, v in user_data.items() if v),
            "custom_data": cdata, "utm_content": session.get("utm_content"), "capi": capi_result,
        })
        if session.get("session_id"):
            await sessions.update_one({"session_id": session["session_id"]},
                                      {"$set": {f"funnel.{event_name}": datetime.now(timezone.utc).isoformat()}, "$inc": {"events_count": 1}})
        results.append({"event": event_name, "event_id": event_id, "capi": capi_result})
    return results, sorted(k for k, v in user_data.items() if v)


async def handle_webhook(request: Request):
    raw = await request.body()
    signature = request.headers.get("x-cal-signature-256")
    if not verify_signature(raw, signature):
        raise HTTPException(status_code=401, detail="Invalid webhook signature")
    try:
        body = json.loads(raw or b"{}")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")

    trigger = body.get("triggerEvent") or body.get("trigger_event") or ""
    payload = body.get("payload") or {}
    booking = extract_booking(payload)
    if not booking["booking_uid"]:
        raise HTTPException(status_code=400, detail="Missing booking uid")

    now = datetime.now(timezone.utc).isoformat()
    session = await resolve_session(booking)
    existing = await bookings.find_one({"booking_uid": booking["booking_uid"]})

    status_map = {"BOOKING_CREATED": "created", "BOOKING_PAID": "paid", "BOOKING_RESCHEDULED": "rescheduled",
                  "BOOKING_CANCELLED": "cancelled", "BOOKING_REJECTED": "rejected", "BOOKING_REQUESTED": "requested",
                  "MEETING_ENDED": "completed", "BOOKING_NO_SHOW_UPDATED": "no_show"}
    status = status_map.get(trigger, trigger.lower() or "unknown")

    doc = {
        **{k: v for k, v in booking.items() if k != "raw_metadata"},
        "status": status,
        "session_id": session.get("session_id") if session else booking.get("session_id"),
        "campaign": session.get("campaign") if session else "diagnostic",
        "attribution": {
            "utm_source": session.get("utm_source") if session else None,
            "utm_medium": session.get("utm_medium") if session else None,
            "utm_campaign": session.get("utm_campaign") if session else None,
            "utm_content": session.get("utm_content") if session else None,
            "utm_term": session.get("utm_term") if session else None,
            "fbclid": session.get("fbclid") if session else None,
            "referrer": session.get("referrer") if session else None,
            "matched": session is not None,
        },
        "updated_at": now,
        "webhook_history": ((existing or {}).get("webhook_history") or []) + [{"trigger": trigger, "at": now}],
    }
    if existing is None:
        doc.update({"created_at": now, "retainer_status": "none", "retainer_value": 0, "notes": "", "capi_events": []})
        await bookings.insert_one(doc)
    else:
        if existing.get("status") == "paid" and status in ("created", "requested"):
            doc["status"] = "paid"
        await bookings.update_one({"booking_uid": booking["booking_uid"]}, {"$set": doc})

    capi_results = []
    if trigger in ("BOOKING_PAID", "BOOKING_CREATED"):
        capi_results, fields = await fire_purchase_and_schedule(booking, session, trigger)
        if capi_results:
            await bookings.update_one({"booking_uid": booking["booking_uid"]},
                                      {"$push": {"capi_events": {"$each": capi_results}}, "$set": {"user_data_fields": fields}})

    return {"ok": True, "trigger": trigger, "booking_uid": booking["booking_uid"],
            "session_matched": session is not None, "capi_events": capi_results}


@router.post("/webhook/calid")
async def calid_webhook(request: Request):
    return await handle_webhook(request)


@router.post("/api/webhook/calid")
async def calid_webhook_api(request: Request):
    return await handle_webhook(request)


@router.get("/api/webhook/calid")
async def calid_webhook_ping():
    return {"ok": True, "signature_verification": bool(CALID_WEBHOOK_SECRET)}
