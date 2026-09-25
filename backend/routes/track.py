import time
from datetime import datetime, timezone

from fastapi import APIRouter, Request
from pymongo.errors import DuplicateKeyError

from config import CURRENCY, DIAGNOSTIC_PRICE, PRODUCT_CATEGORY, PRODUCT_NAME
from models.event import TrackRequest
from routes.session import client_ip
from services.hash_utils import sha256
from services.meta_capi import send_event
from services.mongo import events, sessions

router = APIRouter(prefix="/api", tags=["track"])

FUNNEL_STEPS = {"PageView", "ViewContent", "ViewContent_CaseStudy", "InitiateCheckout", "CalendarOpen", "AddPaymentInfo", "Purchase", "Schedule"}


@router.post("/track")
async def track_event(body: TrackRequest, request: Request):
    session = await sessions.find_one({"session_id": body.session_id})
    if session is None:
        return {"ok": False, "error": "unknown_session"}

    now = datetime.now(timezone.utc)
    fbp = body.fbp or session.get("fbp")
    fbc = body.fbc or session.get("fbc")
    user_agent = request.headers.get("user-agent") or session.get("user_agent")
    ip = client_ip(request) or session.get("ip")

    user_data = {
        "client_ip_address": ip,
        "client_user_agent": user_agent,
        "fbp": fbp,
        "fbc": fbc,
        "external_id": [sha256(body.session_id)],
    }
    custom_data = {
        "content_name": PRODUCT_NAME,
        "content_category": PRODUCT_CATEGORY,
        "currency": CURRENCY,
        "value": DIAGNOSTIC_PRICE,
        **body.custom_data,
    }
    if body.event_name == "PageView":
        custom_data = {k: v for k, v in body.custom_data.items()}

    event_doc = {
        "event_id": body.event_id,
        "event_name": body.event_name,
        "session_id": body.session_id,
        "source": "browser",
        "section": body.section,
        "source_url": body.source_url,
        "created_at": now.isoformat(),
        "event_time": int(time.time()),
        "user_data_fields": [k for k, v in user_data.items() if v],
        "custom_data": custom_data,
        "utm_content": session.get("utm_content"),
        "capi": None,
    }
    try:
        await events.insert_one(event_doc)
    except DuplicateKeyError:
        return {"ok": True, "duplicate": True, "event_id": body.event_id}

    if body.send_capi:
        capi_result = await send_event(
            event_name=body.event_name,
            event_id=body.event_id,
            event_source_url=body.source_url or session.get("landing_url") or "",
            user_data=user_data,
            custom_data=custom_data,
        )
    else:
        capi_result = {"status": "not_sent", "reason": "audit-only event"}
    capi_result.pop("payload_preview", None)
    await events.update_one({"event_id": body.event_id}, {"$set": {"capi": capi_result}})

    session_update = {"$inc": {"events_count": 1}, "$set": {"last_seen_at": now.isoformat()}}
    if body.event_name in FUNNEL_STEPS:
        session_update["$set"][f"funnel.{body.event_name}"] = now.isoformat()
    if fbp and not session.get("fbp"):
        session_update["$set"]["fbp"] = fbp
    if fbc and not session.get("fbc"):
        session_update["$set"]["fbc"] = fbc
    await sessions.update_one({"session_id": body.session_id}, session_update)

    return {"ok": True, "event_id": body.event_id, "capi": capi_result}
