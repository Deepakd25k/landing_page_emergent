from typing import Optional, Dict, Any
from pydantic import BaseModel, Field


class TrackRequest(BaseModel):
    session_id: str
    event_name: str = Field(pattern=r"^[A-Za-z][A-Za-z0-9_]{0,39}$")
    event_id: str = Field(min_length=1, max_length=128)
    source_url: Optional[str] = None
    fbp: Optional[str] = None
    fbc: Optional[str] = None
    custom_data: Dict[str, Any] = Field(default_factory=dict)
    section: Optional[str] = None
    send_capi: bool = True
