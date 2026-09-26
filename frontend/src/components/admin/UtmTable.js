import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { usePolling, fmtINR } from "@/hooks/usePolling";
import { PageTitle, Panel, Empty } from "@/components/admin/ui";

const SpendInput = ({ row, onSave }) => {
  const [val, setVal] = useState(row.spend || "");
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-ink-3">₹</span>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onBlur={() => Number(val) !== Number(row.spend) && onSave(row.utm_content, Number(val || 0))}
        className="w-24 font-mono text-xs border border-line rounded-md px-2 py-1"
        placeholder="spend"
        data-testid={`spend-input-${row.utm_content}`}
      />
    </div>
  );
};

export const UtmTable = () => {
  const { api } = useAuth();
  const [searchParams] = useSearchParams();
  const start_date = searchParams.get("start") || undefined;
  const end_date = searchParams.get("end") || undefined;
  const campaign = searchParams.get("campaign") || undefined;
  
  const { data, refresh } = usePolling("/admin/utm", { interval: 15000, params: { start_date, end_date, campaign } });

  const saveSpend = async (utm_content, spend) => {
    try {
      await api.post("/admin/spend", { utm_content, spend });
      toast.success("Spend saved — cost per booking updated");
      refresh();
    } catch {
      toast.error("Could not save spend");
    }
  };

  return (
    <div>
      <PageTitle title="Attribution" subtitle="Which ad creative (utm_content) actually converts. Enter spend per creative to see real cost per booking." />
      <Panel testId="utm-panel" className="overflow-hidden">
        {!data ? (
          <p className="text-sm text-ink-3">Loading…</p>
        ) : data.length === 0 ? (
          <Empty text="No sessions yet." />
        ) : (
          <div className="overflow-x-auto -m-5">
            <table className="w-full text-sm" data-testid="utm-table">
              <thead className="bg-alt text-[11px] uppercase tracking-[0.15em] text-ink-3">
                <tr>
                  {["Creative (utm_content)", "Source / Campaign", "Visitors", "Scrolled", "CTA", "Calendar", "Paid", "CVR", "Revenue", "Spend", "Cost / booking"].map((h) => (
                    <th key={h} className="text-left font-bold px-4 py-3 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {data.map((r) => (
                  <tr key={r.utm_content} className="hover:bg-blue-tint/40" data-testid={`utm-row-${r.utm_content}`}>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-ink">{r.utm_content}</td>
                    <td className="px-4 py-3 text-xs text-ink-3">{r.utm_source || "—"} {r.utm_campaign ? `· ${r.utm_campaign}` : ""}</td>
                    <td className="px-4 py-3 font-mono">{r.visitors}</td>
                    <td className="px-4 py-3 font-mono">{r.scrolled}</td>
                    <td className="px-4 py-3 font-mono">{r.clicked_cta}</td>
                    <td className="px-4 py-3 font-mono">{r.calendar_open}</td>
                    <td className="px-4 py-3 font-mono font-bold text-success">{r.paid}</td>
                    <td className="px-4 py-3 font-mono">{r.cvr}%</td>
                    <td className="px-4 py-3 font-mono">{fmtINR(r.revenue)}</td>
                    <td className="px-4 py-3"><SpendInput row={r} onSave={saveSpend} /></td>
                    <td className="px-4 py-3 font-mono font-bold">{r.cost_per_booking != null ? fmtINR(r.cost_per_booking) : <span className="text-ink-3 font-normal">—</span>}</td>
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
