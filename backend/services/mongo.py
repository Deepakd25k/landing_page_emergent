from motor.motor_asyncio import AsyncIOMotorClient
from config import MONGO_URL, DB_NAME

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

sessions = db.sessions
events = db.events
bookings = db.bookings
users = db.users
login_attempts = db.login_attempts
ad_spend = db.ad_spend


async def ensure_indexes():
    await sessions.create_index("session_id", unique=True)
    await sessions.create_index("created_at")
    await sessions.create_index("utm_content")
    await events.create_index("event_id", unique=True)
    await events.create_index([("session_id", 1), ("created_at", 1)])
    await events.create_index("created_at")
    await bookings.create_index("booking_uid", unique=True)
    await bookings.create_index("session_id")
    await bookings.create_index("email")
    await users.create_index("email", unique=True)
    await login_attempts.create_index("identifier")
    await ad_spend.create_index("utm_content", unique=True)


def strip_id(doc):
    if doc is None:
        return None
    doc.pop("_id", None)
    return doc
