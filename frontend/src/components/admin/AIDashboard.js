import { useSearchParams } from "react-router-dom";
import { usePolling, fmtINR } from "@/hooks/usePolling";
import { PageTitle, Panel, Empty } from "@/components/admin/ui";
import { Bot, Monitor, Smartphone, Tablet } from "lucide-react";

export const AIDashboard = () => {
  const [searchParams] = useSearchParams();
  const start_date = searchParams.get("start") || undefined;
  const end_date = searchParams.get("end") || undefined;
  const campaign = searchParams.get("campaign") || undefined;
  
  const { data } = usePolling("/admin/ai_traffic", { interval: 30000, params: { start_date, end_date, campaign } });

  const getDeviceIcon = (device) => {
    if (device === "mobile") return <Smartphone className="w-4 h-4 text-ink-3" />;
    if (device === "tablet") return <Tablet className="w-4 h-4 text-ink-3" />;
    return <Monitor className="w-4 h-4 text-ink-3" />;
  };

  const getUrlLabel = (urls) => {
    if (!urls || urls.length === 0) return "—";
    const mapped = urls.map(u => {
      if (u.includes("/course")) return "Course";
      if (u.includes("/pm")) return "PM";
      return "Diagnostic";
    });
    return Array.from(new Set(mapped)).join(", ");
  };

  return (
    <div>
      <PageTitle title="AI Discovery Engine" subtitle="Track organic discovery from ChatGPT, Claude, and Perplexity AEO strategies." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Panel className="flex flex-col items-center justify-center py-6">
          <Bot className="w-8 h-8 text-blue mb-2" />
          <p className="text-sm font-semibold text-ink-2">Total AI Visitors</p>
          <p className="text-3xl font-black text-ink">
            {data ? data.reduce((acc, curr) => acc + curr.visitors, 0) : "—"}
          </p>
        </Panel>
        <Panel className="flex flex-col items-center justify-center py-6">
          <Bot className="w-8 h-8 text-success mb-2" />
          <p className="text-sm font-semibold text-ink-2">AI Generated Leads</p>
          <p className="text-3xl font-black text-ink">
            {data ? data.reduce((acc, curr) => acc + curr.leads, 0) : "—"}
          </p>
        </Panel>
        <Panel className="flex flex-col items-center justify-center py-6">
          <Bot className="w-8 h-8 text-purple-500 mb-2" />
          <p className="text-sm font-semibold text-ink-2">AI Conversions (Paid)</p>
          <p className="text-3xl font-black text-ink">
            {data ? data.reduce((acc, curr) => acc + curr.paid, 0) : "—"}
          </p>
        </Panel>
      </div>

      <Panel testId="ai-panel" className="overflow-hidden">
        {!data ? (
          <p className="text-sm text-ink-3">Scanning AI references…</p>
        ) : data.length === 0 ? (
          <Empty text="No AI traffic found yet. Indexing might take some time." />
        ) : (
          <div className="overflow-x-auto -m-5">
            <table className="w-full text-sm">
              <thead className="bg-alt text-[11px] uppercase tracking-[0.15em] text-ink-3">
                <tr>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">AI Engine</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Device</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Landing Page</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Visitors</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Scrolled</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Clicked CTA</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Leads (1st Click)</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Paid (Last Click)</th>
                  <th className="text-left font-bold px-4 py-3 whitespace-nowrap">Raw Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {data.map((r, i) => (
                  <tr key={i} className="hover:bg-blue-tint/40">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${
                          r.ai_name === 'ChatGPT' ? 'bg-green-100 text-green-700' :
                          r.ai_name === 'Claude' ? 'bg-orange-100 text-orange-700' :
                          r.ai_name === 'Perplexity' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {r.ai_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 capitalize text-xs font-semibold text-ink-2">
                        {getDeviceIcon(r.device)} {r.device}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs font-semibold text-ink-2">
                      {getUrlLabel(r.landing_urls)}
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold">{r.visitors}</td>
                    <td className="px-4 py-3 font-mono">{r.scrolled}</td>
                    <td className="px-4 py-3 font-mono">{r.clicked_cta}</td>
                    <td className="px-4 py-3 font-mono font-bold text-blue">{r.leads}</td>
                    <td className="px-4 py-3 font-mono font-bold text-success">{r.paid}</td>
                    <td className="px-4 py-3 text-[10px] text-ink-3 max-w-[150px] truncate" title={r.raw_referrer}>
                      {r.raw_referrer}
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
