import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Search, RouteIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { usePolling, fmtINR, fmtTime } from "@/hooks/usePolling";
import { PageTitle, Panel, Badge, Empty } from "@/components/admin/ui";

const RETAINER = ["none", "pitched", "converted", "lost"];

export const BookingsTable = () => {
  const { api } = useAuth();
  const [searchParams] = useSearchParams();
  const start_date = searchParams.get("start") || undefined;
  const end_date = searchParams.get("end") || undefined;
  
  const { data, refresh } = usePolling("/admin/bookings", { interval: 15000, params: { start_date, end_date } });
  const [q, setQ] = useState("");

  const rows = (data || []).filter((b) => {
    if (!q) return true;
    const hay = `${b.name} ${b.email} ${b.phone} ${b.attribution?.utm_content} ${b.status}`.toLowerCase();
    return hay.includes(q.toLowerCase());
  });

  const setRetainer = async (uid, retainer_status) => {
    try {
      await api.patch(`/admin/bookings/${uid}`, { retainer_status });
      toast.success(`Retainer status → ${retainer_status}`);
      refresh();
    } catch (e) {
      toast.error("Update failed");
    }
  };

  return (
    <div>
      <PageTitle
        title="Bookings"
        subtitle="Every Cal.id booking with payment, attribution and retainer conversion."
        right={
          <div className="flex items-center gap-2 bg-white border border-line rounded-full px-4 py-2 w-full sm:w-72">
            <Search className="w-4 h-4 text-ink-3" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email, creative…" className="text-sm outline-none w-full bg-transparent" data-testid="bookings-search-input" />
          </div>
        }
      />
      <Panel testId="bookings-panel" className="overflow-hidden">
        {!data ? (
          <p className="text-sm text-ink-3">Loading…</p>
        ) : rows.length === 0 ? (
          <Empty text="No bookings yet. Once Cal.id sends BOOKING_PAID to /api/webhook/calid they'll appear here in real time." />
        ) : (
          <div className="overflow-x-auto -m-5">
            <table className="w-full text-sm" data-testid="bookings-table">
              <thead className="bg-alt text-[11px] uppercase tracking-[0.15em] text-ink-3">
                <tr>
                  {["Person", "Slot", "Status", "Amount", "Creative", "CAPI", "Retainer", ""].map((h) => (
                    <th key={h} className="text-left font-bold px-5 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((b) => (
                  <tr key={b.booking_uid} className="hover:bg-blue-tint/40 transition-colors" data-testid={`booking-row-${b.booking_uid}`}>
                    <td className="px-5 py-3.5">
                      <p className="font-semibold text-ink">{b.name || "—"}</p>
                      <p className="text-xs text-ink-3">{b.email} {b.phone ? `· ${b.phone}` : ""}</p>
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-ink-2">{fmtTime(b.start_time)}</td>
                    <td className="px-5 py-3.5"><Badge value={b.status} /></td>
                    <td className="px-5 py-3.5 font-mono font-bold">{fmtINR(b.payment_amount)}</td>
                    <td className="px-5 py-3.5">
                      <p className="font-mono text-xs">{b.attribution?.utm_content || "(direct)"}</p>
                      <p className="text-[11px] text-ink-3">{b.attribution?.utm_source || ""} {b.attribution?.utm_campaign ? `· ${b.attribution.utm_campaign}` : ""}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex flex-wrap gap-1">
                        {(b.capi_events || []).map((c) => (
                          <span key={c.event_id} className="inline-flex items-center gap-1 text-[11px]">
                            <span className="font-mono text-ink-3">{c.event}</span><Badge value={c.capi?.status} />
                          </span>
                        ))}
                        {(!b.capi_events || !b.capi_events.length) && <span className="text-xs text-ink-3">—</span>}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <select value={b.retainer_status || "none"} onChange={(e) => setRetainer(b.booking_uid, e.target.value)} className="text-xs font-mono border border-line rounded-md px-2 py-1 bg-white" data-testid={`retainer-select-${b.booking_uid}`}>
                        {RETAINER.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </td>
                    <td className="px-5 py-3.5">
                      {b.session_id ? (
                        <Link to={`/admin/journeys/${b.session_id}`} className="inline-flex items-center gap-1 text-xs font-semibold text-blue hover:underline" data-testid={`journey-link-${b.booking_uid}`}>
                          <RouteIcon className="w-3.5 h-3.5" /> Journey
                        </Link>
                      ) : (
                        <span className="text-xs text-ink-3">unmatched</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
    </div>
  );
};
