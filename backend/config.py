import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent / ".env")

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
CORS_ORIGINS = os.environ.get("CORS_ORIGINS", "*").split(",")

JWT_SECRET = os.environ["JWT_SECRET"]
ADMIN_EMAIL = os.environ["ADMIN_EMAIL"].strip().lower()
ADMIN_PASSWORD = os.environ["ADMIN_PASSWORD"]

META_PIXEL_ID = os.environ.get("META_PIXEL_ID", "").strip()
META_ACCESS_TOKEN = os.environ.get("META_ACCESS_TOKEN", "").strip()
META_GRAPH_API_VERSION = os.environ.get("META_GRAPH_API_VERSION", "v21.0").strip()
META_TEST_EVENT_CODE = os.environ.get("META_TEST_EVENT_CODE", "").strip()

CALID_WEBHOOK_SECRET = os.environ.get("CALID_WEBHOOK_SECRET", "").strip()

DIAGNOSTIC_PRICE = float(os.environ.get("DIAGNOSTIC_PRICE", "1999"))
PREDICTED_LTV = float(os.environ.get("PREDICTED_LTV", "30000"))
CURRENCY = "INR"
PRODUCT_NAME = "D2C Profitability Diagnostic"
PRODUCT_CATEGORY = "Consulting"

META_CONFIGURED = bool(META_PIXEL_ID and META_ACCESS_TOKEN)
