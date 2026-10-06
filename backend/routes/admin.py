import csv
import io
from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse

from config import DIAGNOSTIC_PRICE, META_CONFIGURED, META_PIXEL_ID, CALID_WEBHOOK_SECRET
from models.booking import AdSpendRequest, BookingUpdateRequest
from services.auth import get_current_admin
from services.mongo import ad_spend, bookings, events, sessions, strip_id

router = APIRouter(prefix="/api/admin", tags=["admin"])

def get_funnel(campaign: Optional[str] = None):
    if campaign == "cohort":
        return [
            ("landing_page_views", "PageView", "Landing Page Views"),
            ("scroll_depth", "ViewContent", "Scroll Depth"),
            ("scroll_CTA", "ScrolledToCTA", "Reached to CTA"),
            ("click_sticky_CTA", "InitiateCheckout_Sticky", "Clicked Sticky CTA"),
            ("d2c_cohort_lead", "d2c_cohort_lead", "Form Filled"),
            ("d2c_cohort_payment", "d2c_cohort_payment", "Payment Intent"),
        ]
    elif campaign == "d2c_growth":
        return [
            ("visitors", "PageView", "Landing Page View"),
            ("scrolled", "ViewContent", "Content Scroll"),
            ("clicked_cta", "InitiateCheckout", "Clicked CTA"),
            ("calendar_open", "CalendarOpen", "Opened Calendar"),
            ("lead", "CalendarTimeSelected", "Selected Time"),
            ("booked", "growth_session_booked", "Confirmed Session"),
        ]
    return [
        ("visitors", "PageView", "Visitors"),
        ("scrolled", "ViewContent", "Scrolled to Offer"),
        ("clicked_cta", "InitiateCheckout", "Clicked CTA"),
        ("calendar_open", "CalendarOpen", "Opened Calendar"),
        ("paid", "Purchase", "Purchase"),
        ("booked", "Schedule", "Booked Slot"),
    ]


def get_filter(start_date: Optional[str], end_date: Optional[str], campaign: Optional[str] = None) -> dict:
    match = {}
    if campaign:
        if campaign == "diagnostic":
            match["$or"] = [{"campaigns": "diagnostic"}, {"campaign": "diagnostic"}, {"campaign": {"$exists": False}}]
        else:
            match["$or"] = [{"campaigns": campaign}, {"campaign": campaign}]
    if start_date or end_date:
        from datetime import datetime, timezone, timedelta
        ist_offset = timedelta(hours=5, minutes=30)
        created_at = {}
        if start_date:
            try:
                dt = datetime.strptime(start_date[:10], "%Y-%m-%d").replace(tzinfo=timezone(ist_offset))
                created_at["$gte"] = dt.astimezone(timezone.utc).isoformat()
            except Exception:
                pass
        if end_date:
            try:
                dt = datetime.strptime(end_date[:10], "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999, tzinfo=timezone(ist_offset))
                created_at["$lte"] = dt.astimezone(timezone.utc).isoformat()
            except Exception:
                pass
        if created_at:
            match["created_at"] = created_at
    match["is_bot"] = {"$ne": True}
    return match


def pct(part, whole):
    return round((part / whole) * 100, 1) if whole else 0.0


@router.get("/stats")
async def stats(start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    b_match = {**match, "status": {"$in": ["paid", "completed", "rescheduled"]}}
    if campaign == "d2c_growth":
        b_match["status"]["$in"].append("created")
    
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
    ist_offset = __import__("datetime").timedelta(hours=5, minutes=30)
    now_ist = datetime.now(timezone.utc) + ist_offset
    start_of_day_ist = now_ist.replace(hour=0, minute=0, second=0, microsecond=0)
    since = (start_of_day_ist - ist_offset).isoformat()
    
    today_visitors = await sessions.count_documents({**match, "created_at": {"$gte": since}})
    today_events = await events.count_documents({**match, "created_at": {"$gte": since}})
    
    if campaign == "d2c_growth":
        # If webhook is missing/delayed, rely on the frontend tracking which updates the session funnel.
        paid = await sessions.count_documents({**match, "funnel.growth_session_booked": {"$exists": True}})
    
    one_hour_ago = (datetime.now(timezone.utc) - __import__("datetime").timedelta(hours=1)).isoformat()
    twentyfour_hours_ago = (datetime.now(timezone.utc) - __import__("datetime").timedelta(hours=24)).isoformat()
    
    velocity_1h = await bookings.count_documents({**b_match, "created_at": {"$gte": one_hour_ago}})
    velocity_24h = await bookings.count_documents({**b_match, "created_at": {"$gte": twentyfour_hours_ago}})
    return {
        "sessions": total_sessions, "events": total_events, "bookings": total_bookings, "paid_bookings": paid,
        "revenue": revenue[0]["sum"] if revenue else 0, "conversion_rate": pct(paid, total_sessions),
        "retainers": retainers, "retainer_rate": pct(retainers, paid),
        "capi": {"sent": capi_sent, "skipped": capi_skipped, "error": capi_error,
                 "configured": META_CONFIGURED, "pixel_id": META_PIXEL_ID[:4] + "…" if META_PIXEL_ID else None},
        "webhook_signature": bool(CALID_WEBHOOK_SECRET),
        "today": {"visitors": today_visitors, "events": today_events},
        "velocity_1h": velocity_1h,
        "velocity_24h": velocity_24h,
    }


@router.get("/funnel")
async def funnel(utm_content: Optional[str] = None, start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    if utm_content:
        match["utm_content"] = utm_content
    total = await sessions.count_documents(match)
    steps = []
    prev = total
    funnel_config = get_funnel(campaign)
    for key, event_name, label in funnel_config:
        if key == "visitors":
            count = total
        else:
            count = await sessions.count_documents({**match, f"funnel.{event_name}": {"$exists": True}})
        steps.append({"key": key, "label": label, "event": event_name, "count": count,
                      "pct_of_visitors": pct(count, total), "pct_of_prev": pct(count, prev),
                      "drop_off": round(100 - pct(count, prev), 1) if prev else 0.0})
        prev = count
    return {"total": total, "steps": steps}


@router.get("/export/bookings")
async def export_bookings(status: Optional[str] = None, start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    query = get_filter(start_date, end_date, campaign)
    if status:
        query["status"] = status
    
    cursor = bookings.find(query).sort("created_at", -1)
    
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Date", "Campaign", "Name", "Email", "Phone", "Status", "Amount", "UTM Source", "UTM Medium", "UTM Campaign", "UTM Content", "UTM Term"])
    
    async for b in cursor:
        writer.writerow([
            b.get("created_at", ""),
            b.get("campaign", ""),
            b.get("name") or f"{b.get('first_name', '')} {b.get('last_name', '')}".strip(),
            b.get("email", ""),
            b.get("phone", ""),
            b.get("status", ""),
            b.get("payment_amount", 0),
            b.get("attribution", {}).get("utm_source", ""),
            b.get("attribution", {}).get("utm_medium", ""),
            b.get("attribution", {}).get("utm_campaign", ""),
            b.get("attribution", {}).get("utm_content", ""),
            b.get("attribution", {}).get("utm_term", "")
        ])
    
    output.seek(0)
    return StreamingResponse(iter([output.getvalue()]), media_type="text/csv", headers={"Content-Disposition": f"attachment; filename=bookings_{datetime.now(timezone.utc).strftime('%Y%m%d')}.csv"})


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
        
    if campaign == "cohort":
        paid_event = "funnel.d2c_cohort_payment"
    elif campaign == "d2c_growth":
        paid_event = "funnel.growth_session_booked"
    else:
        paid_event = "funnel.Purchase"
    
    pipeline.extend([
        {"$group": {
            "_id": {"$ifNull": ["$utm_content", "(direct / none)"]},
            "visitors": {"$sum": 1},
            "utm_source": {"$first": "$utm_source"},
            "utm_medium": {"$first": "$utm_medium"},
            "utm_campaign": {"$first": "$utm_campaign"},
            "utm_term": {"$first": "$utm_term"},
            "scrolled": {"$sum": {"$cond": [{"$ifNull": ["$funnel.ViewContent", False]}, 1, 0]}},
            "clicked_cta": {"$sum": {"$cond": [{"$ifNull": ["$funnel.InitiateCheckout", False]}, 1, 0]}},
            "calendar_open": {"$sum": {"$cond": [{"$ifNull": ["$funnel.CalendarOpen", False]}, 1, 0]}},
            "linkedin_clicks": {"$sum": {"$cond": [{"$ifNull": ["$funnel.LinkedInClicked", False]}, 1, 0]}},
            "leads": {"$sum": {"$cond": [{"$ifNull": ["$funnel.Lead", False]}, 1, 0]}},
            "paid": {"$sum": {"$cond": [{"$ifNull": [f"${paid_event}", False]}, 1, 0]}},
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
            "utm_content": key, "utm_source": r.get("utm_source"), "utm_medium": r.get("utm_medium"), 
            "utm_campaign": r.get("utm_campaign"), "utm_term": r.get("utm_term"),
            "visitors": r["visitors"], "scrolled": r["scrolled"], "clicked_cta": r["clicked_cta"],
            "calendar_open": r["calendar_open"], "linkedin_clicks": r.get("linkedin_clicks", 0), "paid": r["paid"],
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


@router.get("/ai_traffic")
async def ai_traffic(start_date: Optional[str] = None, end_date: Optional[str] = None, campaign: Optional[str] = None):
    match = get_filter(start_date, end_date, campaign)
    # AI Domains Regex
    ai_regex = r"(chatgpt\.com|claude\.ai|perplexity\.ai|openai\.com|poe\.com|anthropic\.com)"
    if not match:
        match = {}
    match["referrer"] = {"$regex": ai_regex, "$options": "i"}
    
    pipeline = []
    pipeline.append({"$match": match})
    
    # Group by referrer domain/AI Tool
    pipeline.extend([
        {"$group": {
            "_id": {
                "referrer": "$referrer",
                "device": "$device.device_type"
            },
            "visitors": {"$sum": 1},
            "scrolled": {"$sum": {"$cond": [{"$ifNull": ["$funnel.ViewContent", False]}, 1, 0]}},
            "clicked_cta": {"$sum": {"$cond": [{"$ifNull": ["$funnel.InitiateCheckout", False]}, 1, 0]}},
            "leads": {"$sum": {"$cond": [{"$ifNull": ["$funnel.Lead", False]}, 1, 0]}},
            "paid": {"$sum": {"$cond": [{"$ifNull": ["$funnel.Purchase", False]}, 1, 0]}},
            "landing_urls": {"$addToSet": "$landing_url"}
        }},
        {"$sort": {"visitors": -1}}
    ])
    
    rows = [r async for r in sessions.aggregate(pipeline)]
    
    out = []
    for r in rows:
        referrer = r["_id"]["referrer"] or "Unknown AI"
        
        # Friendly Name mapping
        ai_name = "Other AI"
        if "chatgpt" in referrer.lower() or "openai" in referrer.lower():
            ai_name = "ChatGPT"
        elif "claude" in referrer.lower() or "anthropic" in referrer.lower():
            ai_name = "Claude"
        elif "perplexity" in referrer.lower():
            ai_name = "Perplexity"
        elif "poe" in referrer.lower():
            ai_name = "Poe"
            
        out.append({
            "ai_name": ai_name,
            "raw_referrer": referrer,
            "device": r["_id"].get("device") or "unknown",
            "visitors": r["visitors"],
            "scrolled": r["scrolled"],
            "clicked_cta": r["clicked_cta"],
            "leads": r["leads"],
            "paid": r["paid"],
            "landing_urls": r["landing_urls"]
        })
        
    return out
