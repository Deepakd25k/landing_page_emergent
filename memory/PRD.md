# PRD — D2C Profitability Diagnostic (Landing Page + 3-Layer Tracking + Admin)

## Original problem statement
CRO-focused landing page selling a ₹1,999 D2C Profitability Diagnostic with Cal.id embedded booking (Razorpay via Cal.id), and a 3-layer Meta tracking system (Pixel + CAPI + MongoDB audit trail), plus an admin dashboard (funnel, bookings, live events, utm attribution, journey replay). All copy lives in a single editable content file.

## User choices
- Cal.id link: placeholder (`siteConfig.calLink` in `frontend/src/data/content.js`)
- Meta Pixel ID + CAPI token: placeholders → CAPI sends are SKIPPED (status `skipped`) until keys are set in `backend/.env`
- Cal.id webhook secret: empty → signature verification skipped until `CALID_WEBHOOK_SECRET` is set
- Admin: email/password login (JWT), real-time tracking/sales view
- Stack: React (CRA, JS) + FastAPI + MongoDB (instead of Vite/TS)

## Architecture
- `frontend/src/data/content.js` — ONLY file to edit for copy/numbers/links
- `frontend/src/components/*` — 10 landing sections + Navbar, Marquee, CalEmbed, Footer, CTAButton, shared (Reveal/SectionHeader/scroll helpers)
- `frontend/src/hooks/` — useCookieCapture, useSessionInit, useMetaPixel, useScrollTracker, usePolling
- `frontend/src/lib/` — tracking.js (/api calls), cookies.js, hash.js
- `frontend/src/context/TrackingContext.js` — session + `track()` (Pixel + CAPI relay with shared event_id)
- `frontend/src/pages/` — Landing, AdminLogin, AdminDashboard (+ `components/admin/*`)
- `backend/server.py` → routes: session, track, webhook (calid), admin, auth; services: mongo, meta_capi, hash_utils, auth; models
- Mongo collections: sessions, events (unique event_id), bookings (unique booking_uid), users, login_attempts, ad_spend

## Funnel events
PageView → ViewContent (#pricing) → ViewContent_CaseStudy (#cases) → InitiateCheckout (any CTA) → CalendarOpen (#book in view / cal linkReady) → Purchase + Schedule (Cal.id BOOKING_PAID webhook, predicted_ltv 30000, hashed em/ph/fn/ln/country/external_id + fbp/fbc/ip/ua)

## Implemented (2026-06-20)
- Full landing page (kinetic masked hero, 3D tilt P&L card, marquee, numbered chapters, framer-motion reveals, lenis smooth scroll)
- Cal.id inline embed (@calcom/embed-react, brand color, `metadata[session_id]` passed for attribution)
- Tracking: session init w/ UTM + fbclid→_fbc, scroll depth/sections/time-on-page updates, dedup event_ids, CAPI relay with retries, MongoDB audit
- Webhook: BOOKING_PAID/CREATED/CANCELLED handling, session matching, Purchase + Schedule CAPI, idempotent
- Admin: JWT login (bcrypt, lockout), Overview (stats + funnel drop-off + tracking status), Bookings (retainer tracking), Live Events (5s poll + toasts), Attribution (utm_content + spend → cost/booking), Journeys (timeline replay)
- Testing: 28/28 backend tests, frontend flows verified (iteration_1)

## Mobile visibility and navigation fix (2026-07)
- User priority: about 99% of visitors are on mobile; make the hero Per-Order P&L card from desktop visible and readable on phones. Remove public Admin navigation; retain direct URL access.
- Reproduced root cause: `hidden lg:block` wrapper hid the entire P&L card below 1024px (iteration_2).
- `HeroSection.js`: card now visible at every breakpoint, centered under hero content below desktop; responsive padding/title, non-wrapping values, wrapping CM2 summary, and in-flow green ROAS badge on mobile/tablet prevent clipping. Desktop retains two columns and floating badge. Tilt responds only to mouse pointers, not touch.
- `Navbar.js` and `Footer.js`: removed public Admin links from desktop header, mobile menu and footer. `/admin/login` and protected `/admin` routes unchanged. Mobile navigation and P&L metrics have explicit test IDs.
- Verified in browser at 320, 360, 390, 430, 768, 1024 and 1920px: all six rows, margin and ROAS badge visible, no horizontal overflow, touch interaction stable, navigation links work, direct admin login and protection pass (iteration_3).
- Targeted CTA follow-up passed (iteration_4): both hero and mobile-menu booking buttons scroll to the existing `#book` section. The missing-anchor comment in iteration_3 was incorrect; no CTA code fix was needed.
- No backend/auth logic or integration configuration changed. Cal.id remains a placeholder; Meta sends remain skipped pending credentials.

## Backlog
- P0 (deferred while mobile fix prioritized): Add `frontend/vercel.json` SPA fallback for direct frontend route access on Vercel; not implemented in this fix.
- P0: Set real `calLink`, `META_PIXEL_ID`, `META_ACCESS_TOKEN`, `CALID_WEBHOOK_SECRET`; point Cal.id webhook to `<backend>/api/webhook/calid`; verify in Meta Events Manager (test_event_code) — dedup + EMQ
- P1: Admin CSV export of bookings; date range filters; email/WhatsApp notification on Purchase
- P1: Pre-diagnostic form link auto-send after booking
- P2: OG image asset (`public/og-image.png`), sitemap, favicon
- P2: Retainer pipeline view (pitched → converted, value)
