import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

import config
from routes import admin, auth, session, track, webhook
from services.auth import seed_admin
from services.mongo import client, ensure_indexes

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")


@asynccontextmanager
async def lifespan(app: FastAPI):
    await ensure_indexes()
    await seed_admin()
    yield
    client.close()


app = FastAPI(title="D2C Profitability Diagnostic API", lifespan=lifespan)

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
