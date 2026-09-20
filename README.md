# D2C Profitability Diagnostic — Landing + Tracking + Admin

## Edit content
Everything (copy, prices, Cal.id link, Pixel ID) lives in `frontend/src/data/content.js`.

## Go-live checklist
1. `content.js` → `siteConfig.calLink = "yourname/d2c-diagnostic"`, `siteConfig.metaPixelId = "123456789"`.
2. `backend/.env` → `META_PIXEL_ID`, `META_ACCESS_TOKEN`, optionally `META_TEST_EVENT_CODE` (remove for prod), `CALID_WEBHOOK_SECRET`.
3. Cal.id → Settings → Developer → Webhooks: URL `https://<your-backend>/api/webhook/calid`, triggers `BOOKING_PAID`, `BOOKING_CREATED`, `BOOKING_CANCELLED`, secret = same as `CALID_WEBHOOK_SECRET`.
4. Change `ADMIN_EMAIL` / `ADMIN_PASSWORD` in `backend/.env` (admin re-seeds on restart).
5. Admin dashboard: `/admin/login`.

## Event map
| Step | Event | Layer |
|---|---|---|
| Page load | PageView | Pixel + CAPI |
| Scroll to #pricing | ViewContent | Pixel + CAPI |
| Scroll to #cases | ViewContent_CaseStudy | Pixel + CAPI (custom) |
| Any CTA click | InitiateCheckout | Pixel + CAPI |
| Cal embed in view | CalendarOpen | Pixel + CAPI (custom) |
| Cal.id BOOKING_PAID | Purchase + Schedule | CAPI (server, hashed PII, predicted_ltv 30000) |

Every event is also stored in MongoDB (`events`) with its CAPI response.
