from typing import Optional, List
from pydantic import BaseModel, Field


class DeviceInfo(BaseModel):
    user_agent: Optional[str] = None
    screen: Optional[str] = None
    language: Optional[str] = None
    timezone: Optional[str] = None
    device_type: Optional[str] = None


class SessionInitRequest(BaseModel):
    existing_session_id: Optional[str] = None
    fbclid: Optional[str] = None
    fbc: Optional[str] = None
    fbp: Optional[str] = None
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None
    utm_content: Optional[str] = None
    utm_term: Optional[str] = None
    referrer: Optional[str] = None
    landing_url: Optional[str] = None
    device: DeviceInfo = Field(default_factory=DeviceInfo)


class SessionUpdateRequest(BaseModel):
    session_id: str
    scroll_depth: Optional[int] = None
    sections_viewed: List[str] = Field(default_factory=list)
    time_on_page: Optional[int] = None
    fbp: Optional[str] = None
    fbc: Optional[str] = None

class LeadRequest(BaseModel):
    session_id: str
    name: str
    email: str
    phone: str
    role: str
