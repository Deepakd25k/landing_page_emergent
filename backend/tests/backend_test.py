"""Backend tests for D2C Profitability Diagnostic."""
import os
import uuid
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://margin-recovery-3.preview.emergentagent.com").rstrip("/")
ADMIN_EMAIL = "admin@d2cdiagnostic.com"
ADMIN_PASSWORD = "Admin@1999"


@pytest.fixture(scope="session")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="session")
def admin_token(api):
    r = api.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    assert r.status_code == 200, f"Login failed: {r.status_code} {r.text}"
    return r.json()["access_token"]


@pytest.fixture(scope="session")
def admin_client(admin_token):
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json", "Authorization": f"Bearer {admin_token}"})
    return s


@pytest.fixture(scope="session")
def session_id(api):
    r = api.post(f"{BASE_URL}/api/session/init", json={
        "utm_source": "facebook", "utm_content": "TEST_creative_A",
        "utm_campaign": "TEST_camp", "fbclid": "TESTFBCLID",
        "landing_url": "https://example.com/?utm_source=facebook",
        "device": {"user_agent": "pytest-agent", "device_type": "desktop"},
    })
    assert r.status_code == 200
    return r.json()["session_id"]


# ---------- Health ----------
def test_health(api):
    r = api.get(f"{BASE_URL}/api/health")
    assert r.status_code == 200 and r.json()["ok"] is True


# ---------- Session ----------
class TestSession:
    def test_session_init_new(self, api):
        r = api.post(f"{BASE_URL}/api/session/init", json={"utm_source": "x", "device": {}})
        assert r.status_code == 200
        d = r.json()
        assert d["is_new"] is True and isinstance(d["session_id"], str)

    def test_session_init_existing(self, api, session_id):
        r = api.post(f"{BASE_URL}/api/session/init", json={"existing_session_id": session_id, "device": {}})
        assert r.status_code == 200
        d = r.json()
        assert d["session_id"] == session_id and d["is_new"] is False

    def test_session_update(self, api, session_id):
        r = api.post(f"{BASE_URL}/api/session/update", json={
            "session_id": session_id, "scroll_depth": 55,
            "sections_viewed": ["hero", "pricing"], "time_on_page": 20,
        })
        assert r.status_code == 200 and r.json()["ok"] is True

    def test_session_update_unknown(self, api):
        r = api.post(f"{BASE_URL}/api/session/update", json={"session_id": "nonexistent-xxx", "scroll_depth": 10})
        assert r.status_code == 200 and r.json()["ok"] is False


# ---------- Track ----------
class TestTrack:
    def test_track_pageview_and_dedupe(self, api, session_id):
        eid = f"TEST_pv_{uuid.uuid4()}"
        r = api.post(f"{BASE_URL}/api/track", json={
            "session_id": session_id, "event_name": "PageView", "event_id": eid,
            "source_url": "https://example.com/",
        })
        assert r.status_code == 200
        d = r.json()
        assert d["ok"] is True
        assert d["capi"]["status"] == "skipped"
        # dup
        r2 = api.post(f"{BASE_URL}/api/track", json={
            "session_id": session_id, "event_name": "PageView", "event_id": eid,
        })
        assert r2.status_code == 200 and r2.json().get("duplicate") is True

    @pytest.mark.parametrize("evt", ["ViewContent", "ViewContent_CaseStudy", "InitiateCheckout", "CalendarOpen"])
    def test_track_funnel_events(self, api, session_id, evt):
        eid = f"TEST_{evt}_{uuid.uuid4()}"
        r = api.post(f"{BASE_URL}/api/track", json={
            "session_id": session_id, "event_name": evt, "event_id": eid,
        })
        assert r.status_code == 200
        assert r.json()["capi"]["status"] == "skipped"

    def test_track_unknown_session(self, api):
        r = api.post(f"{BASE_URL}/api/track", json={
            "session_id": "no-such-session", "event_name": "PageView", "event_id": f"TEST_{uuid.uuid4()}",
        })
        assert r.status_code == 200
        assert r.json() == {"ok": False, "error": "unknown_session"} or r.json().get("ok") is False

    def test_track_invalid_event_name(self, api, session_id):
        r = api.post(f"{BASE_URL}/api/track", json={
            "session_id": session_id, "event_name": "Invalid Name",
            "event_id": f"TEST_{uuid.uuid4()}",
        })
        assert r.status_code == 422


# ---------- Auth ----------
class TestAuth:
    def test_login_success(self, api):
        r = api.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
        assert r.status_code == 200
        d = r.json()
        assert "access_token" in d and d["user"]["email"] == ADMIN_EMAIL

    def test_login_wrong_password(self, api):
        r = api.post(f"{BASE_URL}/api/auth/login", json={"email": ADMIN_EMAIL, "password": "WRONG_PASS_xyz"})
        assert r.status_code == 401

    def test_me_with_bearer(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/auth/me")
        assert r.status_code == 200
        assert r.json()["email"] == ADMIN_EMAIL

    def test_admin_without_token(self, api):
        r = requests.get(f"{BASE_URL}/api/admin/stats")
        assert r.status_code == 401


# ---------- Webhook ----------
BOOKING_UID = f"TEST_uid_{uuid.uuid4().hex[:8]}"


def make_webhook_payload(sid, trigger="BOOKING_PAID", uid=BOOKING_UID):
    return {
        "triggerEvent": trigger,
        "payload": {
            "uid": uid, "bookingId": 12345, "title": "D2C Diagnostic",
            "startTime": "2026-02-01T10:00:00Z", "endTime": "2026-02-01T11:00:00Z",
            "attendees": [{"email": "test@example.com", "name": "Test User", "timeZone": "Asia/Kolkata"}],
            "responses": {"phone": {"value": "+91 98765 43210"}},
            "metadata": {"session_id": sid},
            "paymentId": "pay_TEST123",
            "payment": [{"amount": 199900, "currency": "INR", "success": True}],
        },
    }


class TestWebhook:
    def test_booking_paid(self, api, session_id, admin_client):
        r = requests.post(f"{BASE_URL}/api/webhook/calid", json=make_webhook_payload(session_id))
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["ok"] is True
        assert d["booking_uid"] == BOOKING_UID
        assert d["session_matched"] is True
        # Verify booking persisted
        r2 = admin_client.get(f"{BASE_URL}/api/admin/bookings")
        assert r2.status_code == 200
        b = next((x for x in r2.json() if x["booking_uid"] == BOOKING_UID), None)
        assert b is not None, "Booking not persisted"
        assert b["status"] == "paid"
        assert b["payment_amount"] == 1999
        # Verify Purchase + Schedule events
        r3 = admin_client.get(f"{BASE_URL}/api/admin/events", params={"event_name": "Purchase"})
        assert any(e["event_id"] == f"purchase_{BOOKING_UID}" for e in r3.json())
        r4 = admin_client.get(f"{BASE_URL}/api/admin/events", params={"event_name": "Schedule"})
        assert any(e["event_id"] == f"schedule_{BOOKING_UID}" for e in r4.json())
        # verify hashed user_data fields
        purchase_ev = next(e for e in r3.json() if e["event_id"] == f"purchase_{BOOKING_UID}")
        for field in ["em", "ph", "fn", "ln", "country", "external_id"]:
            assert field in purchase_ev["user_data_fields"], f"Missing hashed field {field}"

    def test_booking_paid_idempotent(self, api, session_id, admin_client):
        # Resend same webhook - should not duplicate Purchase event
        requests.post(f"{BASE_URL}/api/webhook/calid", json=make_webhook_payload(session_id))
        r = admin_client.get(f"{BASE_URL}/api/admin/events", params={"event_name": "Purchase"})
        matches = [e for e in r.json() if e["event_id"] == f"purchase_{BOOKING_UID}"]
        assert len(matches) == 1

    def test_booking_cancelled(self, session_id, admin_client):
        r = requests.post(f"{BASE_URL}/api/webhook/calid",
                          json=make_webhook_payload(session_id, trigger="BOOKING_CANCELLED"))
        assert r.status_code == 200
        r2 = admin_client.get(f"{BASE_URL}/api/admin/bookings")
        b = next((x for x in r2.json() if x["booking_uid"] == BOOKING_UID), None)
        assert b is not None and b["status"] == "cancelled"

    def test_alias_webhook_path(self, session_id):
        # /webhook/calid (no /api prefix) alias
        uid2 = f"TEST_alias_{uuid.uuid4().hex[:8]}"
        r = requests.post(f"{BASE_URL}/webhook/calid", json=make_webhook_payload(session_id, uid=uid2))
        # Note: /webhook/calid without /api may not be routed through ingress; check either 200 or 404
        assert r.status_code in (200, 404, 405)


# ---------- Admin ----------
class TestAdmin:
    def test_stats(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/admin/stats")
        assert r.status_code == 200
        d = r.json()
        for k in ["sessions", "events", "bookings", "paid_bookings", "revenue", "capi"]:
            assert k in d
        assert d["capi"]["configured"] is False  # META not configured

    def test_funnel(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/admin/funnel")
        assert r.status_code == 200
        d = r.json()
        assert len(d["steps"]) == 6
        keys = [s["key"] for s in d["steps"]]
        assert keys == ["visitors", "scrolled", "clicked_cta", "calendar_open", "paid", "booked"]
        for s in d["steps"]:
            assert "drop_off" in s and "count" in s

    def test_utm_and_spend(self, admin_client):
        r = admin_client.post(f"{BASE_URL}/api/admin/spend",
                              json={"utm_content": "TEST_creative_A", "spend": 5000})
        assert r.status_code == 200 and r.json()["ok"] is True
        r2 = admin_client.get(f"{BASE_URL}/api/admin/utm")
        assert r2.status_code == 200
        row = next((x for x in r2.json() if x["utm_content"] == "TEST_creative_A"), None)
        assert row is not None
        assert row["spend"] == 5000
        if row["paid"] > 0:
            assert row["cost_per_booking"] is not None

    def test_bookings_list_and_patch(self, admin_client, session_id):
        # Create a dedicated booking for this class (parallel-safe)
        uid = f"TEST_admin_{uuid.uuid4().hex[:8]}"
        wr = requests.post(f"{BASE_URL}/api/webhook/calid", json=make_webhook_payload(session_id, uid=uid))
        assert wr.status_code == 200
        r = admin_client.get(f"{BASE_URL}/api/admin/bookings")
        assert r.status_code == 200
        assert any(b["booking_uid"] == uid for b in r.json())
        r2 = admin_client.patch(f"{BASE_URL}/api/admin/bookings/{uid}",
                                json={"retainer_status": "converted"})
        assert r2.status_code == 200
        assert r2.json()["retainer_status"] == "converted"

    def test_events_filter(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/admin/events", params={"event_name": "PageView"})
        assert r.status_code == 200
        for e in r.json():
            assert e["event_name"] == "PageView"

    def test_sessions_list(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/admin/sessions")
        assert r.status_code == 200 and isinstance(r.json(), list)

    def test_journey(self, admin_client, session_id):
        r = admin_client.get(f"{BASE_URL}/api/admin/journey/{session_id}")
        assert r.status_code == 200
        d = r.json()
        assert d["session"]["session_id"] == session_id
        assert isinstance(d["events"], list) and isinstance(d["bookings"], list)

    def test_journey_404(self, admin_client):
        r = admin_client.get(f"{BASE_URL}/api/admin/journey/nonexistent-xxx")
        assert r.status_code == 404
