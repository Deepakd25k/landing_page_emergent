import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MousePointerClick, Eye, CalendarDays, BadgeIndianRupee, Globe, Smartphone } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { usePolling, fmtTime, shortId, fmtINR } from "@/hooks/usePolling";
import { PageTitle, Panel, Badge, Empty } from "@/components/admin/ui";

const ICONS = { PageView: Globe, ViewContent: Eye, ViewContent_CaseStudy: Eye, InitiateCheckout: MousePointerClick, CalendarOpen: CalendarDays, AddPaymentInfo: BadgeIndianRupee, Purchase: BadgeIndianRupee, Schedule: CalendarDays };

const Field = ({ label, value }) => (
  <div>
    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-3">{label}</p>
    <p className="text-sm font-mono text-ink break-all">{value || "—"}</p>
  </div>
);

export const JourneyViewer = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const { api } = useAuth();
  const [query, setQuery] = useState(sessionId || "");
  const [journey, setJourney] = useState(null);
  const [error, setError] = useState("");
  const { data: sessions } = usePolling("/admin/sessions", { interval: 15000, params: { limit: 30 } });

  useEffect(() => {
    if (!sessionId) {
      setJourney(null);
      return;
    }
    setError("");
    api.get(`/admin/journey/${sessionId}`).then((r) => setJourney(r.data)).catch((e) => setError(e.response?.data?.detail || "Not found"));
  }, [sessionId, api]);

  const s = journey?.session;

  return (
    <div>
      <PageTitle
        title="User Journeys"
        subtitle="Replay any visitor: attribution, device, scroll depth and every event in order."
        right={
          <form onSubmit={(e) => { e.preventDefault(); if (query.trim()) navigate(`/admin/journeys/${query.trim()}`); }} className="flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 w-full sm:w-96">
            <Search className="w-4 h-4 text-ink-3" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Paste session_id…" className="text-sm outline-none w-full bg-transparent font-mono" data-testid="journey-search-input" />
          </form>
        }
      />

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        <Panel title="Recent sessions" testId="recent-sessions-panel" className="max-h-[70vh] overflow-y-auto">
          {!sessions ? <p className="text-sm text-ink-3">Loading…</p> : sessions.length === 0 ? <Empty text="No sessions yet." /> : (
            <ul className="space-y-1 -m-2">
              {sessions.map((x) => (
                <li key={x.session_id}>
                  <Link to={`/admin/journeys/${x.session_id}`} className={`block rounded-xl px-3 py-2.5 hover:bg-blue-tint transition-colors ${x.session_id === sessionId ? "bg-blue-tint" : ""}`} data-testid={`session-item-${x.session_id}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-ink">{shortId(x.session_id)}</span>
                      <span className="text-[11px] text-ink-3">{fmtTime(x.created_at)}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-[11px] text-ink-3">
                      <span className="font-mono">{x.utm_content || "direct"}</span>
                      <span>· {x.events_count || 0} ev</span>
                      <span>· {x.scroll_depth || 0}% scroll</span>
                      {x.funnel?.Purchase && <Badge value="paid" />}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <div className="space-y-6">
          {error && <Panel><p className="text-sm text-danger" data-testid="journey-error">{error}</p></Panel>}
          {!sessionId && !error && <Panel><Empty text="Select a session on the left or paste a session_id to replay the journey." /></Panel>}
          {s && (
            <>
              <Panel title={`Session ${shortId(s.session_id)}`} testId="journey-session-panel" right={<span className="text-xs text-ink-3 flex items-center gap-1"><Smartphone className="w-3.5 h-3.5" /> {s.device?.device_type} · {s.device?.screen}</span>}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Field label="utm_source" value={s.utm_source} />
                  <Field label="utm_campaign" value={s.utm_campaign} />
                  <Field label="utm_content" value={s.utm_content} />
                  <Field label="utm_medium" value={s.utm_medium} />
                  <Field label="fbclid" value={s.fbclid ? shortId(s.fbclid) : null} />
                  <Field label="fbp" value={s.fbp} />
                  <Field label="fbc" value={s.fbc ? `${s.fbc.slice(0, 22)}…` : null} />
                  <Field label="IP" value={s.ip} />
                  <Field label="Scroll depth" value={`${s.scroll_depth || 0}%`} />
                  <Field label="Time on page" value={`${s.time_on_page || 0}s`} />
                  <Field label="Page views" value={s.page_views} />
                  <Field label="Referrer" value={s.referrer} />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {(s.sections_viewed || []).map((sec) => <span key={sec} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-alt border border-line">{sec}</span>)}
                </div>
              </Panel>

              <Panel title="Timeline" testId="journey-timeline-panel">
                {journey.events.length === 0 ? <Empty text="No events for this session." /> : (
                  <ol className="relative border-l-2 border-line ml-3 space-y-5">
                    {journey.events.map((e, i) => {
                      const Icon = ICONS[e.event_name] || Eye;
                      const isPurchase = e.event_name === "Purchase";
                      return (
                        <motion.li key={e.event_id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className="ml-6 relative" data-testid={`timeline-event-${e.event_id}`}>
                          <span className={`absolute -left-[37px] top-0.5 w-7 h-7 rounded-full grid place-items-center ${isPurchase ? "bg-success text-white" : "bg-blue-tint text-blue"}`}><Icon className="w-3.5 h-3.5" /></span>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`font-bold ${isPurchase ? "text-success" : "text-ink"}`}>{e.event_name}</span>
                            <Badge value={e.source} /><Badge value={e.capi?.status} />
                            <span className="text-xs text-ink-3 font-mono">{fmtTime(e.created_at)}</span>
                          </div>
                          <p className="text-xs text-ink-3 mt-1 font-mono">
                            {e.section ? `section=${e.section} · ` : ""}{e.custom_data?.cta_location ? `cta=${e.custom_data.cta_location} · ` : ""}
                            {isPurchase ? `value=${fmtINR(e.custom_data?.value)} · ltv=${fmtINR(e.custom_data?.predicted_ltv)} · ` : ""}
                            fields: {(e.user_data_fields || []).join(", ") || "—"}
                          </p>
                        </motion.li>
                      );
                    })}
                  </ol>
                )}
              </Panel>

              {journey.bookings.length > 0 && (
                <Panel title="Bookings" testId="journey-bookings-panel">
                  {journey.bookings.map((b) => (
                    <div key={b.booking_uid} className="flex flex-wrap items-center justify-between gap-3 text-sm">
                      <div><p className="font-semibold">{b.name}</p><p className="text-xs text-ink-3">{b.email}</p></div>
                      <div className="flex items-center gap-2"><Badge value={b.status} /><span className="font-mono font-bold">{fmtINR(b.payment_amount)}</span><span className="text-xs text-ink-3">{fmtTime(b.start_time)}</span></div>
                    </div>
                  ))}
                </Panel>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
