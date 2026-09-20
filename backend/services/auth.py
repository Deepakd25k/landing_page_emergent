from datetime import datetime, timedelta, timezone

import bcrypt
import jwt
from fastapi import HTTPException, Request

from config import ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET
from services.mongo import login_attempts, strip_id, users

JWT_ALGORITHM = "HS256"
MAX_ATTEMPTS = 5
LOCKOUT_MINUTES = 15


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(email: str, hours: int = 24) -> str:
    payload = {"sub": email, "email": email, "type": "access",
               "exp": datetime.now(timezone.utc) + timedelta(hours=hours)}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def seed_admin():
    existing = await users.find_one({"email": ADMIN_EMAIL})
    if existing is None:
        await users.insert_one({"email": ADMIN_EMAIL, "password_hash": hash_password(ADMIN_PASSWORD),
                                "name": "Admin", "role": "admin",
                                "created_at": datetime.now(timezone.utc).isoformat()})
    elif not verify_password(ADMIN_PASSWORD, existing["password_hash"]):
        await users.update_one({"email": ADMIN_EMAIL}, {"$set": {"password_hash": hash_password(ADMIN_PASSWORD)}})


async def check_lockout(identifier: str):
    record = await login_attempts.find_one({"identifier": identifier})
    if not record:
        return
    locked_until = record.get("locked_until")
    if locked_until and datetime.fromisoformat(locked_until) > datetime.now(timezone.utc):
        raise HTTPException(status_code=429, detail="Too many failed attempts. Try again in 15 minutes.")


async def record_failure(identifier: str):
    record = await login_attempts.find_one({"identifier": identifier})
    count = (record or {}).get("count", 0) + 1
    update = {"count": count, "last_attempt": datetime.now(timezone.utc).isoformat()}
    if count >= MAX_ATTEMPTS:
        update["locked_until"] = (datetime.now(timezone.utc) + timedelta(minutes=LOCKOUT_MINUTES)).isoformat()
        update["count"] = 0
    await login_attempts.update_one({"identifier": identifier}, {"$set": update}, upsert=True)


async def clear_failures(identifier: str):
    await login_attempts.delete_one({"identifier": identifier})


async def get_current_admin(request: Request) -> dict:
    token = request.cookies.get("access_token")
    if not token:
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            token = auth_header[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")
    if payload.get("type") != "access":
        raise HTTPException(status_code=401, detail="Invalid token type")
    user = await users.find_one({"email": payload["email"]})
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    user.pop("password_hash", None)
    return strip_id(user)
