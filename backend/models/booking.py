from typing import Optional
from pydantic import BaseModel


class BookingUpdateRequest(BaseModel):
    retainer_status: Optional[str] = None
    retainer_value: Optional[float] = None
    notes: Optional[str] = None
    status: Optional[str] = None


class AdSpendRequest(BaseModel):
    utm_content: str
    spend: float
