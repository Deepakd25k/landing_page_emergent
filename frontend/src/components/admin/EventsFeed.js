import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { usePolling, fmtTime, shortId } from "@/hooks/usePolling";
import { PageTitle, Panel, Badge, Empty } from "@/components/admin/ui";

const EVENT_NAMES = ["", "PageView", "ViewContent", "ViewContent_CaseStudy", "InitiateCheckout", "CalendarOpen", "AddPaymentInfo", "Purchase", "Schedule"];

export const EventsFeed = () => {
  const [filter, setFilter] = useState("");
  const [searchParams] = useSearchParams();
  const start_date = searchParams.get("start") || undefined;
  const end_date = searchParams.get("end") || undefined;
  
  const { data } = usePolling("/admin/events", { interval: 5000, params: { limit: 100, event_name: filter || undefined, start_date, end_date } });
  const seen = useRef(null);

  useEffect(() => {
    if (!data) return;
    if (seen.current === null) {
      seen.current = new Set(data.map((e) => e.event_id));
      return;
    }
    const fresh = data.filter((e) => !seen.current.has(e.event_id));
    fresh.forEach((e) => {
      seen.current.add(e.event_id);
      if (e.event_name === "Purchase") toast.success(`💰 Purchase — ${e.custom_data?.value} ${e.custom_data?.currency}`, { description: `session ${shortId(e.session_id)}` });
      else toast(`${e.event_name}`, { description: `${e.source} · ${shortId(e.session_id)}` });
    });
  }, [data]);

  return (
    <div>
      <PageTitle
        title="Live Events"
        subtitle="Every Pixel / CAPI / webhook event, polled every 5s. Newest first."
        right={
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="text-sm border border-line rounded-full px-4 py-2 bg-white font-mono" data-testid="events-filter-select">
            {EVENT_NAMES.map((n) => <option key={n} value={n}>{n || "All events"}</option>)}
          </select>
        }
      />
      <Panel testId="events-panel" className="overflow-hidden">
        {!data ? (
          <p className="text-sm text-ink-3">Loading…</p>
        ) : data.length === 0 ? (
          <Empty text="No events yet. Open the landing page in another tab and scroll — events will stream in here." />
        ) : (
          <div className="overflow-x-auto -m-5">
            <table className="w-full text-sm" data-testid="events-table">
              <thead className="bg-alt text-[11px] uppercase tracking-[0.15em] text-ink-3">
                <tr>
                  {["Time", "Event", "Layer", "CAPI", "Section", "Session", "Creative", "Fields"].map((h) => (
                    <th key={h} className="text-left font-bold px-5 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <AnimatePresence initial={false}>
                  {data.map((e) => (
                    <motion.tr key={e.event_id} initial={{ opacity: 0, backgroundColor: "#E7F1FF" }} animate={{ opacity: 1, backgroundColor: "#FFFFFF" }} transition={{ duration: 1.2 }} data-testid={`event-row-${e.event_id}`}>
                      <td className="px-5 py-3 whitespace-nowrap text-xs text-ink-3 font-mono">{fmtTime(e.created_at)}</td>
                      <td className="px-5 py-3 font-semibold whitespace-nowrap">
                        <span className={e.event_name === "Purchase" ? "text-success" : e.event_name === "InitiateCheckout" ? "text-blue" : "text-ink"}>{e.event_name}</span>
                      </td>
                      <td className="px-5 py-3"><Badge value={e.source} /></td>
                      <td className="px-5 py-3"><Badge value={e.capi?.status} /></td>
                      <td className="px-5 py-3 text-xs text-ink-2">{e.section || e.custom_data?.cta_location || "—"}</td>
                      <td className="px-5 py-3">
                        {e.session_id ? <Link to={`/admin/journeys/${e.session_id}`} className="font-mono text-xs text-blue hover:underline">{shortId(e.session_id)}</Link> : <span className="text-xs text-ink-3">—</span>}
                      </td>
                      <td className="px-5 py-3 font-mono text-xs text-ink-2">{e.utm_content || "—"}</td>
                      <td className="px-5 py-3 font-mono text-[11px] text-ink-3">{(e.user_data_fields || []).join(", ")}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </Panel>
    </div>
  );
};
