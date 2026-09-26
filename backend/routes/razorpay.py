import hashlib
import hmac
import json
import logging
from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, Request

from config import RAZORPAY_WEBHOOK_SECRET, CURRENCY
from services.hash_utils import split_name
from services.mongo import bookings
from routes.webhook import resolve_session, fire_purchase_and_schedule

logger = logging.getLogger("razorpay")
router = APIRouter(tags=["razorpay"])


def verify_razorpay_signature(raw: bytes, signature: str) -> bool:
    if not RAZORPAY_WEBHOOK_SECRET:
        return True
    if not signature:
        return False
    expected = hmac.new(RAZORPAY_WEBHOOK_SECRET.encode(), raw, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)


@router.post("/api/webhook/razorpay")
async def razorpay_webhook(request: Request):
    raw = await request.body()
    signature = request.headers.get("x-razorpay-signature")
    
    if not verify_razorpay_signature(raw, signature):
        raise HTTPException(status_code=401, detail="Invalid Razorpay signature")

    try:
        body = json.loads(raw or b"{}")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON")

    event = body.get("event")
    # Only process successful payments
    if event != "payment.captured":
        return {"ok": True, "msg": "ignored event"}

    payload = body.get("payload", {})
    payment_entity = payload.get("payment", {}).get("entity", {})
    
    email = payment_entity.get("email")
    phone = payment_entity.get("contact")
    amount = (payment_entity.get("amount", 0) / 100)
    payment_id = payment_entity.get("id")
    order_id = payment_entity.get("order_id")
    notes = payment_entity.get("notes") or {}

    first_name, last_name = split_name(notes.get("name", ""))

    booking = {
        "booking_uid": payment_id,
        "booking_id": None,
        "title": "D2C Performance Marketing Course",
        "start_time": None,
        "end_time": None,
        "timezone": None,
        "email": (email or "").strip().lower() or None,
        "name": notes.get("name", ""),
        "first_name": first_name,
        "last_name": last_name,
        "phone": phone,
        "brand": None,
        "session_id": notes.get("session_id"), # Now passed via API order creation
        "payment_id": payment_id,
        "payment_amount": amount,
        "payment_currency": payment_entity.get("currency", CURRENCY),
        "payment_success": True,
        "meeting_url": None,
    }

    now = datetime.now(timezone.utc).isoformat()
    session = await resolve_session(booking)
    
    # Force campaign to course for these payments
    if session:
        session["campaign"] = "course"

    existing = await bookings.find_one({"booking_uid": booking["booking_uid"]})
    if existing:
        return {"ok": True, "msg": "already processed"}

    # Remove the unpaid lead record if it exists so we don't have duplicates
    if email:
        await bookings.delete_one({"email": email, "status": "lead", "campaign": "course"})

    doc = {
        **booking,
        "status": "paid",
        "session_id": session.get("session_id") if session else None,
        "campaign": "course",
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
        "created_at": now,
        "updated_at": now,
        "retainer_status": "none",
        "retainer_value": 0,
        "notes": "Razorpay direct payment",
        "webhook_history": [{"trigger": event, "at": now}],
        "capi_events": []
    }
    await bookings.insert_one(doc)

    capi_results, fields = await fire_purchase_and_schedule(booking, session or {"campaign": "course"}, "COHORT_BOOKED")
    
    if capi_results:
        await bookings.update_one(
            {"booking_uid": booking["booking_uid"]},
            {"$push": {"capi_events": {"$each": capi_results}}, "$set": {"user_data_fields": fields}}
        )

    return {"ok": True, "event": event, "booking_uid": booking["booking_uid"]}
