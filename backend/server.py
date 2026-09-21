import logging
import traceback
import sys
import os
from contextlib import asynccontextmanager

sys.path.append(os.path.dirname(__file__))

from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(title="D2C Diagnostic - Booting...")

try:
    import config
    from routes import admin, auth, session, track, webhook
    from services.auth import seed_admin
    from services.mongo import client, ensure_indexes

    logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")

    @asynccontextmanager
    async def lifespan_app(app: FastAPI):
        await ensure_indexes()
        await seed_admin()
        yield
        client.close()
        
    app.router.lifespan_context = lifespan_app

    app.include_router(session.router)
    app.include_router(track.router)
    app.include_router(webhook.router)
    app.include_router(admin.router)
    app.include_router(auth.router)

    @app.get("/api/")
    async def root():
        return {"service": "d2c-diagnostic-api", "meta_capi_configured": config.META_CONFIGURED}

    @app.get("/api/health")
    async def health():
        return {"ok": True}

    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_origins=config.CORS_ORIGINS,
        allow_methods=["*"],
        allow_headers=["*"],
    )

except Exception as e:
    error_msg = traceback.format_exc()
    
    @app.api_route("/{path:path}", methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
    async def catch_all(path: str):
        return PlainTextResponse(f"Startup Error:\n{error_msg}", status_code=500)

