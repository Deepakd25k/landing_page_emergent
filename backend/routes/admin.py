from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query

from config import DIAGNOSTIC_PRICE, META_CONFIGURED, META_PIXEL_ID, CALID_WEBHOOK_SECRET
from models.booking import AdSpendRequest, BookingUpdateRequest
from services.auth import get_current_admin
from services.mongo import ad_spend, bookings, events, sessions, strip_id

router = APIRouter(prefix="/api/admin", tags=["admin"])

FUNNEL = [
    ("visitors", "PageView", "Visitors"),
    ("scrolled", "ViewContent", "Scrolled to Offer"),
    ("clicked_cta", "InitiateCheckout", "Clicked CTA"),
    ("calendar_open", "CalendarOpen", "Opened Calendar"),
    ("paid", "Purchase", "Paid ₹1,999"),
    ("booked", "Schedule", "Booked Slot"),
]


def get_filter(start_date: Optional[str], end_date: Optional[str], campaign: Optional[str] = None) -> dict:
    match = {}
    if campaign:
        match["campaign"] = campaign
    if start_date or end_date:
        created_at = {}
        if start_date:
            created_at["$gte"] = start_date
        if end_date:
            created_at["$lte"] = end_date if "T" in end_date else f"{end_date}T23:59:59.999Z"
        if created_at:
            match["created_at"] = created_at
    return match


def pct(part, whole):
    return round((part / whole) * 100, 1) if whole else 0.0


@router.get("/stats")
async def stats(start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    b_match = {**match, "status": {"$in": ["paid", "completed", "rescheduled"]}}
    
    total_sessions = await sessions.count_documents(match)
    total_events = await events.count_documents(match)
    paid = await bookings.count_documents(b_match)
    total_bookings = await bookings.count_documents(match)
    revenue_cursor = bookings.aggregate([{"$match": b_match},
                                         {"$group": {"_id": None, "sum": {"$sum": "$payment_amount"}}}])
    revenue = [r async for r in revenue_cursor]
    retainers = await bookings.count_documents({**match, "retainer_status": "converted"})
    capi_sent = await events.count_documents({**match, "capi.status": "sent"})
    capi_skipped = await events.count_documents({**match, "capi.status": "skipped"})
    capi_error = await events.count_documents({**match, "capi.status": "error"})
    since = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0).isoformat()
    today_visitors = await sessions.count_documents({"created_at": {"$gte": since}})
    today_events = await events.count_documents({"created_at": {"$gte": since}})
    return {
        "sessions": total_sessions, "events": total_events, "bookings": total_bookings, "paid_bookings": paid,
        "revenue": revenue[0]["sum"] if revenue else 0, "conversion_rate": pct(paid, total_sessions),
        "retainers": retainers, "retainer_rate": pct(retainers, paid),
        "capi": {"sent": capi_sent, "skipped": capi_skipped, "error": capi_error,
                 "configured": META_CONFIGURED, "pixel_id": META_PIXEL_ID[:4] + "…" if META_PIXEL_ID else None},
        "webhook_signature": bool(CALID_WEBHOOK_SECRET),
        "today": {"visitors": today_visitors, "events": today_events},
        "price": DIAGNOSTIC_PRICE,
    }


@router.get("/funnel")
async def funnel(utm_content: Optional[str] = None, start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    if utm_content:
        match["utm_content"] = utm_content
    total = await sessions.count_documents(match)
    steps = []
    prev = total
    for key, event_name, label in FUNNEL:
        if key == "visitors":
            count = total
        else:
            count = await sessions.count_documents({**match, f"funnel.{event_name}": {"$exists": True}})
        steps.append({"key": key, "label": label, "event": event_name, "count": count,
                      "pct_of_visitors": pct(count, total), "pct_of_prev": pct(count, prev),
                      "drop_off": round(100 - pct(count, prev), 1) if prev else 0.0})
        prev = count
    return {"total": total, "steps": steps}


@router.get("/bookings")
async def list_bookings(limit: int = Query(100, le=500), status: Optional[str] = None, start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    query = get_filter(start_date, end_date, campaign)
    if status:
        query["status"] = status
    cursor = bookings.find(query).sort("created_at", -1).limit(limit)
    return [strip_id(b) async for b in cursor]


@router.patch("/bookings/{booking_uid}")
async def update_booking(booking_uid: str, body: BookingUpdateRequest):
    patch = {k: v for k, v in body.model_dump().items() if v is not None}
    if not patch:
        raise HTTPException(status_code=400, detail="Nothing to update")
    patch["updated_at"] = datetime.now(timezone.utc).isoformat()
    result = await bookings.find_one_and_update({"booking_uid": booking_uid}, {"$set": patch}, return_document=True)
    if not result:
        raise HTTPException(status_code=404, detail="Booking not found")
    return strip_id(result)


@router.get("/events")
async def list_events(limit: int = Query(100, le=500), since: Optional[str] = None, event_name: Optional[str] = None, start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    query = get_filter(start_date, end_date, campaign)
    if since:
        if "created_at" not in query:
            query["created_at"] = {}
        query["created_at"]["$gt"] = since
    if event_name:
        query["event_name"] = event_name
    cursor = events.find(query).sort("created_at", -1).limit(limit)
    return [strip_id(e) async for e in cursor]


@router.get("/sessions")
async def list_sessions(limit: int = Query(100, le=500), start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    query = get_filter(start_date, end_date, campaign)
    cursor = sessions.find(query).sort("created_at", -1).limit(limit)
    return [strip_id(s) async for s in cursor]


@router.get("/utm")
async def utm_performance(start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    pipeline = []
    if match:
        pipeline.append({"$match": match})
    pipeline.extend([
        {"$group": {
            "_id": {"$ifNull": ["$utm_content", "(direct / none)"]},
            "visitors": {"$sum": 1},
            "utm_source": {"$first": "$utm_source"},
            "utm_campaign": {"$first": "$utm_campaign"},
            "scrolled": {"$sum": {"$cond": [{"$ifNull": ["$funnel.ViewContent", False]}, 1, 0]}},
            "clicked_cta": {"$sum": {"$cond": [{"$ifNull": ["$funnel.InitiateCheckout", False]}, 1, 0]}},
            "calendar_open": {"$sum": {"$cond": [{"$ifNull": ["$funnel.CalendarOpen", False]}, 1, 0]}},
            "paid": {"$sum": {"$cond": [{"$ifNull": ["$funnel.Purchase", False]}, 1, 0]}},
        }},
        {"$sort": {"paid": -1, "visitors": -1}},
    ])
    rows = [r async for r in sessions.aggregate(pipeline)]
    spend_map = {s["utm_content"]: s["spend"] async for s in ad_spend.find({})}
    out = []
    for r in rows:
        key = r["_id"]
        spend = spend_map.get(key, 0)
        out.append({
            "utm_content": key, "utm_source": r.get("utm_source"), "utm_campaign": r.get("utm_campaign"),
            "visitors": r["visitors"], "scrolled": r["scrolled"], "clicked_cta": r["clicked_cta"],
            "calendar_open": r["calendar_open"], "paid": r["paid"],
            "cvr": pct(r["paid"], r["visitors"]), "spend": spend,
            "cost_per_booking": round(spend / r["paid"], 2) if r["paid"] and spend else None,
            "revenue": r["paid"] * DIAGNOSTIC_PRICE,
        })
    return out


@router.post("/spend")
async def set_spend(body: AdSpendRequest):
    await ad_spend.update_one({"utm_content": body.utm_content}, {"$set": {"spend": body.spend}}, upsert=True)
    return {"ok": True}


@router.get("/journey/{session_id}")
async def journey(session_id: str):
    session = await sessions.find_one({"session_id": session_id})
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    evs = [strip_id(e) async for e in events.find({"session_id": session_id}).sort("created_at", 1)]
    bks = [strip_id(b) async for b in bookings.find({"session_id": session_id}).sort("created_at", 1)]
    return {"session": strip_id(session), "events": evs, "bookings": bks}
