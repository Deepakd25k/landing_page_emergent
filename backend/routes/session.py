import uuid
from datetime import datetime, timezone

from fastapi import APIRouter, Request

from models.session import SessionInitRequest, SessionUpdateRequest
from services.mongo import sessions

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
            if body.fbp and not existing.get("fbp"):
                patch["fbp"] = body.fbp
            if body.fbc and not existing.get("fbc"):
                patch["fbc"] = body.fbc
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
