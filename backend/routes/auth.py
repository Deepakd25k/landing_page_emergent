from fastapi import APIRouter, Depends, HTTPException, Request, Response
from pydantic import BaseModel

from services.auth import (check_lockout, clear_failures, create_access_token,
                           get_current_admin, record_failure, verify_password)
from services.mongo import users

router = APIRouter(prefix="/api/auth", tags=["auth"])


class LoginRequest(BaseModel):
    email: str
    password: str


@router.post("/login")
async def login(body: LoginRequest, request: Request, response: Response):
    email = body.email.strip().lower()
    ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown").split(",")[0].strip()
    identifier = f"{ip}:{email}"
    await check_lockout(identifier)
    
    # Ensure admin user exists (Vercel serverless workaround)
    from services.auth import seed_admin
    await seed_admin()

    user = await users.find_one({"email": email})
    if not user or not verify_password(body.password, user["password_hash"]):
        await record_failure(identifier)
        raise HTTPException(status_code=401, detail="Invalid email or password")
    await clear_failures(identifier)
    token = create_access_token(email)
    response.set_cookie("access_token", token, httponly=True, secure=True, samesite="none", max_age=86400, path="/")
    return {"access_token": token, "user": {"email": email, "name": user.get("name", "Admin"), "role": user.get("role", "admin")}}


@router.get("/me")
async def me(user: dict = Depends(get_current_admin)):
    return user


@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("access_token", path="/")
    return {"ok": True}
