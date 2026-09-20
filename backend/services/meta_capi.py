import asyncio
import logging
import time
from typing import Optional

import httpx

from config import (META_ACCESS_TOKEN, META_CONFIGURED, META_GRAPH_API_VERSION,
                    META_PIXEL_ID, META_TEST_EVENT_CODE)

logger = logging.getLogger("meta_capi")

STANDARD_EVENTS = {"PageView", "ViewContent", "InitiateCheckout", "Purchase", "Schedule",
                   "Lead", "Contact", "AddToCart", "CompleteRegistration"}


def build_event(*, event_name: str, event_id: str, event_source_url: str, user_data: dict,
                custom_data: Optional[dict] = None, event_time: Optional[int] = None) -> dict:
    event = {
        "event_name": event_name,
        "event_time": event_time or int(time.time()),
        "event_id": event_id,
        "action_source": "website",
        "event_source_url": event_source_url,
        "user_data": {k: v for k, v in user_data.items() if v},
    }
    if custom_data:
        event["custom_data"] = {k: v for k, v in custom_data.items() if v is not None}
    return event


async def send_events(events: list[dict], retries: int = 2) -> dict:
    if not META_CONFIGURED:
        return {"status": "skipped", "reason": "META_PIXEL_ID / META_ACCESS_TOKEN not configured",
                "payload_preview": {"data": events}}

    payload = {"data": events}
    if META_TEST_EVENT_CODE:
        payload["test_event_code"] = META_TEST_EVENT_CODE
    url = f"https://graph.facebook.com/{META_GRAPH_API_VERSION}/{META_PIXEL_ID}/events"

    last_error = None
    for attempt in range(retries + 1):
        try:
            async with httpx.AsyncClient(timeout=10) as client:
                resp = await client.post(url, params={"access_token": META_ACCESS_TOKEN}, json=payload)
            body = resp.json() if resp.content else {}
            if resp.status_code < 400:
                return {"status": "sent", "http_status": resp.status_code,
                        "events_received": body.get("events_received"), "fbtrace_id": body.get("fbtrace_id")}
            last_error = {"http_status": resp.status_code, "error": body.get("error", body)}
            if resp.status_code < 500:
                break
        except httpx.HTTPError as exc:
            last_error = {"error": str(exc)}
        await asyncio.sleep(0.5 * (attempt + 1))

    logger.warning("Meta CAPI send failed: %s", last_error)
    return {"status": "error", **(last_error or {})}


async def send_event(**kwargs) -> dict:
    return await send_events([build_event(**kwargs)])
