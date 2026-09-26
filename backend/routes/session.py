import uuid
from datetime import datetime, timezone
from fastapi import APIRouter, Request

import httpx
import time
from models.session import SessionInitRequest, SessionUpdateRequest, LeadRequest
from services.mongo import sessions, bookings
from config import RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
from services.meta_capi import send_event
from services.hash_utils import sha256

router = APIRouter(prefix="/api/session", tags=["session"])


def client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    return request.client.host if request.client else ""


@router.post("/init")
async def init_session(body: SessionInitRequest, request: Request):
    now = datetime.now(timezone.utc).isoformat()
    if body.existing_session_id:
        existing = await sessions.find_one({"session_id": body.existing_session_id})
        if existing:
            patch = {"last_seen_at": now, "page_views": existing.get("page_views", 1) + 1}
            for key in ("fbp", "fbc", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"):
                value = getattr(body, key)
                if value and not existing.get(key):
                    patch[key] = value
            await sessions.update_one({"session_id": body.existing_session_id}, {"$set": patch})
            return {"session_id": body.existing_session_id, "is_new": False}

    session_id = str(uuid.uuid4())
    doc = {
        "session_id": session_id,
        "created_at": now,
        "last_seen_at": now,
        "page_views": 1,
        "fbclid": body.fbclid,
        "fbc": body.fbc,
        "fbp": body.fbp,
        "utm_source": body.utm_source,
        "utm_medium": body.utm_medium,
        "utm_campaign": body.utm_campaign,
        "utm_content": body.utm_content,
        "utm_term": body.utm_term,
        "referrer": body.referrer,
        "landing_url": body.landing_url,
        "ip": client_ip(request),
        "user_agent": body.device.user_agent or request.headers.get("user-agent"),
        "device": body.device.model_dump(),
        "scroll_depth": 0,
        "sections_viewed": [],
        "time_on_page": 0,
        "funnel": {},
        "events_count": 0,
    }
    await sessions.insert_one(doc)
    return {"session_id": session_id, "is_new": True}


@router.post("/update")
async def update_session(body: SessionUpdateRequest):
    update = {"$set": {"last_seen_at": datetime.now(timezone.utc).isoformat()}, "$max": {}}
    if body.scroll_depth is not None:
        update["$max"]["scroll_depth"] = body.scroll_depth
    if body.time_on_page is not None:
        update["$max"]["time_on_page"] = body.time_on_page
    if body.sections_viewed:
        update["$addToSet"] = {"sections_viewed": {"$each": body.sections_viewed}}
    if body.fbp:
        update["$set"]["fbp"] = body.fbp
    if body.fbc:
        update["$set"]["fbc"] = body.fbc
    if not update["$max"]:
        del update["$max"]
    result = await sessions.update_one({"session_id": body.session_id}, update)
    return {"ok": result.matched_count == 1}

@router.post("/lead")
async def create_lead(body: LeadRequest, request: Request):
    session = await sessions.find_one({"session_id": body.session_id})
    if not session:
        return {"ok": False, "error": "session_not_found"}

    now = datetime.now(timezone.utc).isoformat()
    # Save lead data to session
    update = {
        "name": body.name,
        "email": body.email.strip().lower(),
        "phone": body.phone.strip(),
        "role": body.role,
        "lead_captured_at": now,
        "funnel.Lead": now
    }
    await sessions.update_one({"session_id": body.session_id}, {"$set": update})

    # Send CAPI Lead Event
    user_data = {
        "client_ip_address": session.get("ip") or client_ip(request),
        "client_user_agent": session.get("user_agent") or request.headers.get("user-agent"),
        "fbp": session.get("fbp"),
        "fbc": session.get("fbc"),
        "em": [sha256(update["email"])],
        "ph": [sha256(update["phone"])],
        "external_id": [sha256(body.session_id)],
    }
    capi_result = await send_event(
        event_name="Lead",
        event_id=f"lead_{body.session_id}",
        event_source_url=session.get("landing_url") or "",
        user_data={k: v for k, v in user_data.items() if v},
    )

    # Insert into bookings as a lead
    booking_doc = {
        "booking_uid": f"lead_{body.session_id}",
        "booking_id": None,
        "title": "D2C Performance Marketing Course (Lead)",
        "start_time": None,
        "end_time": None,
        "timezone": None,
        "email": update["email"],
        "name": update["name"],
        "first_name": update["name"].split()[0] if update["name"] else "",
        "last_name": " ".join(update["name"].split()[1:]) if update["name"] else "",
        "phone": update["phone"],
        "brand": update["role"],
        "session_id": body.session_id,
        "payment_id": None,
        "payment_amount": 0,
        "payment_currency": "INR",
        "payment_success": False,
        "meeting_url": None,
        "status": "lead",
        "campaign": "course",
        "attribution": {
            "utm_source": session.get("utm_source"),
            "utm_medium": session.get("utm_medium"),
            "utm_campaign": session.get("utm_campaign"),
            "utm_content": session.get("utm_content"),
            "utm_term": session.get("utm_term"),
            "fbclid": session.get("fbclid"),
            "referrer": session.get("referrer"),
            "matched": True,
        },
        "created_at": now,
        "updated_at": now,
        "retainer_status": "none",
        "retainer_value": 0,
        "notes": "Lead submitted, pending payment",
        "webhook_history": [{"trigger": "LEAD_SUBMITTED", "at": now}],
        "capi_events": [{"event_name": "Lead", "status": capi_result.get("status")}] if capi_result else []
    }
    # Upsert to prevent duplicates if they click submit multiple times
    await bookings.update_one(
        {"booking_uid": booking_doc["booking_uid"]},
        {"$set": booking_doc},
        upsert=True
    )

    payment_link = "https://rzp.io/rzp/mFuxe8ep"
    if RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET:
        try:
            async with httpx.AsyncClient() as client:
                resp = await client.post(
                    "https://api.razorpay.com/v1/payment_links",
                    auth=(RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET),
                    json={
                        "amount": 100,
                        "currency": "INR",
                        "description": "Payment for Cohort",
                        "customer": {
                            "name": booking_doc["name"],
                            "email": booking_doc["email"],
                            "contact": booking_doc["phone"]
                        },
                        "notify": {
                            "sms": False,
                            "email": False
                        },
                        "notes": {
                            "session_id": booking_doc["session_id"],
                            "booking_uid": booking_doc["booking_uid"]
                        }
                    }
                )
                if resp.status_code == 200:
                    payment_link = resp.json().get("short_url", payment_link)
                else:
                    print(f"Razorpay link creation failed: {resp.text}")
        except Exception as e:
            print(f"Razorpay link exception: {e}")

    return {"ok": True, "session_id": body.session_id, "payment_link": payment_link}
