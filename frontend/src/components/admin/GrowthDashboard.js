import React from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, CalendarCheck, Zap, ServerCog, Globe, Target } from "lucide-react";
import { usePolling } from "@/hooks/usePolling";
import { PageTitle, Panel, Badge } from "@/components/admin/ui";

const Stat = ({ icon: Icon, label, value, sub, testId, tone = "text-blue" }) => (
  <div className="bg-white rounded-2xl border border-line p-5 shadow-soft" data-testid={testId}>
    <div className="flex items-center justify-between">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink-3">{label}</p>
      <Icon className={`w-4 h-4 ${tone}`} />
    </div>
    <p className="mt-3 font-mono text-3xl font-bold tracking-tight">{value}</p>
    {sub && <p className="mt-1 text-xs text-ink-3">{sub}</p>}
  </div>
);

const FunnelBars = ({ funnel }) => (
  <div className="space-y-3" data-testid="funnel-chart">
    {funnel.steps.map((step, i) => {
      const width = Math.max(step.pct_of_visitors, step.count ? 3 : 0);
      return (
        <div key={step.key} className="grid grid-cols-[160px_1fr_auto] sm:grid-cols-[200px_1fr_auto] items-center gap-3 sm:gap-4" data-testid={`funnel-step-${step.key}`}>
          <div>
            <p className="text-sm font-semibold text-ink">{step.label}</p>
            <p className="text-[11px] font-mono text-ink-3">{step.event}</p>
          </div>
          <div className="h-9 bg-alt rounded-lg overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full rounded-lg ${i >= 4 ? "bg-success" : "bg-blue"}`}
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-xs font-mono font-bold text-ink mix-blend-difference text-white">{step.count}</span>
          </div>
          <div className="text-right w-24">
            <p className="font-mono text-sm font-bold">{step.pct_of_visitors}%</p>
            {i > 0 && <p className={`text-[11px] font-mono ${step.drop_off > 50 ? "text-danger" : "text-ink-3"}`}>−{step.drop_off}% drop</p>}
          </div>
        </div>
      );
    })}
  </div>
);

export const GrowthDashboard = () => {
  const [searchParams] = useSearchParams();
  const start_date = searchParams.get("start") || undefined;
  const end_date = searchParams.get("end") || undefined;
  const campaign = "d2c_growth";

  const { data: stats } = usePolling("/admin/stats", { interval: 10000, params: { start_date, end_date, campaign } });
  const { data: funnel } = usePolling("/admin/funnel", { interval: 10000, params: { start_date, end_date, campaign } });
  const { data: utmData } = usePolling("/admin/utm", { interval: 15000, params: { start_date, end_date, campaign } });

  return (
    <div className="pb-10">
      <PageTitle
        title="D2C Growth (growth.incrementalvalue.in)"
        subtitle="Dedicated realtime funnel, meta tracking, and UTM performance for the PM landing page."
        right={
          stats && (
            <div className="flex items-center gap-2 text-xs bg-white px-3 py-1.5 rounded-full border border-line shadow-sm">
              <span className="w-2 h-2 rounded-full bg-success live-dot" />
              <span className="text-ink-3">Live: <b className="text-ink font-mono">{stats.today.visitors}</b> visitors today</span>
            </div>
          )
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat icon={Users} label="Total Visitors" value={stats?.sessions ?? "—"} sub="Unique sessions" />
        <Stat icon={Zap} label="Events Triggered" value={stats?.events ?? "—"} sub="Pixel & CAPI Events" />
        <Stat icon={CalendarCheck} label="Confirmed Bookings" value={stats?.paid_bookings ?? "—"} sub={`${stats?.conversion_rate ?? 0}% conversion rate`} tone="text-success" />
        
        <div className="bg-white rounded-2xl border border-line p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink-3">Meta CAPI & Pixel</p>
            <ServerCog className="w-4 h-4 text-blue" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Badge value={stats?.capi?.configured ? "active" : "disabled"} />
            <span className="text-[11px] text-ink-3">{stats?.capi?.configured ? `Hashed PII Synced` : "CAPI Not Configured"}</span>
          </div>
          <p className="mt-2 text-[11px] font-mono text-ink-3">sent {stats?.capi?.sent ?? 0} · skipped {stats?.capi?.skipped ?? 0} · err {stats?.capi?.error ?? 0}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
        <Panel title="Realtime Conversion Funnel" right={funnel && <span className="text-xs font-mono text-ink-3">{funnel.total} sessions</span>}>
          {funnel ? <FunnelBars funnel={funnel} /> : <p className="text-sm text-ink-3">Loading funnel data...</p>}
        </Panel>

        <Panel title="Tracking Infrastructure">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">1</span>
              <div><p className="font-semibold">Browser · Meta Pixel</p><p className="text-xs text-ink-3">Fires PageView, ViewContent, InitiateCheckout directly from the user's browser with standard event ID.</p></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">2</span>
              <div>
                <p className="font-semibold flex items-center gap-2">
                  Backend · Meta CAPI 
                  {!stats?.webhook_signature && (
                    <span className="bg-danger/10 text-danger text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">Webhook Missing</span>
                  )}
                </p>
                <p className="text-xs text-ink-3 mt-1">Receives the Cal.com webhook with Name, Email & Phone. Hashes PII and sends <span className="font-mono text-blue bg-blue-tint px-1 rounded">growth_session_booked</span> securely to Meta for maximum optimization match rate.</p>
                {!stats?.webhook_signature && (
                  <p className="text-[11px] text-danger mt-2 font-medium">⚠️ Add your Render API URL (<span className="font-mono">/api/webhook/calid</span>) to Cal.com webhooks and set CALID_WEBHOOK_SECRET in .env to enable rich CAPI.</p>
                )}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">3</span>
              <div><p className="font-semibold">Deduplication</p><p className="text-xs text-ink-3">Frontend Pixel and Backend CAPI share the exact same Booking UID as the <span className="font-mono">event_id</span>, ensuring Meta deduplicates properly without overcounting.</p></div>
            </li>
          </ul>
        </Panel>
      </div>

      <Panel title="UTM & Source Attribution (growth.incrementalvalue.in)">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wider text-ink-3">
                <th className="p-3 font-semibold">Source / Campaign</th>
                <th className="p-3 font-semibold text-right">Visitors</th>
                <th className="p-3 font-semibold text-right">Opened Cal</th>
                <th className="p-3 font-semibold text-right text-blue">LinkedIn Clicks</th>
                <th className="p-3 font-semibold text-right text-success">Bookings</th>
                <th className="p-3 font-semibold text-right">CVR</th>
              </tr>
            </thead>
            <tbody>
              {!utmData ? (
                <tr><td colSpan={6} className="p-3 text-center text-ink-3">Loading...</td></tr>
              ) : utmData.length === 0 ? (
                <tr><td colSpan={6} className="p-3 text-center text-ink-3">No attribution data recorded yet.</td></tr>
              ) : (
                utmData.map((row, i) => {
                  const label = row.utm_source ? `${row.utm_source} / ${row.utm_campaign || "none"}` : (row.utm_content === "(direct / none)" ? "Direct / Unknown" : row.utm_content);
                  return (
                    <tr key={i} className="border-b border-line hover:bg-alt/50 transition-colors">
                      <td className="p-3 font-medium text-ink flex items-center gap-2">
                        {row.utm_source === "linkedin" ? <span className="w-2 h-2 rounded-full bg-blue-500"></span> : <Globe className="w-3 h-3 text-ink-3" />}
                        {label}
                        {row.utm_content && row.utm_content !== "(direct / none)" && <span className="text-[10px] bg-alt px-1.5 py-0.5 rounded text-ink-3 ml-2">{row.utm_content}</span>}
                      </td>
                      <td className="p-3 text-right font-mono text-ink-2">{row.visitors}</td>
                      <td className="p-3 text-right font-mono text-ink-2">{row.calendar_open}</td>
                      <td className="p-3 text-right font-mono text-blue font-bold">{row.linkedin_clicks || 0}</td>
                      <td className="p-3 text-right font-mono text-success font-bold">{row.paid}</td>
                      <td className="p-3 text-right font-mono text-ink-2">{row.cvr}%</td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
};
