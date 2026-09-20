import { motion } from "framer-motion";
import { Users, IndianRupee, CalendarCheck, Zap, ServerCog, Repeat } from "lucide-react";
import { usePolling, fmtINR } from "@/hooks/usePolling";
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

export const Overview = () => {
  const { data: stats } = usePolling("/admin/stats", { interval: 10000 });
  const { data: funnel } = usePolling("/admin/funnel", { interval: 10000 });

  return (
    <div>
      <PageTitle
        title="Overview"
        subtitle="Live view of the full funnel — refreshes every 10 seconds."
        right={
          stats && (
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-success live-dot" />
              <span className="text-ink-3">Today: <b className="text-ink font-mono">{stats.today.visitors}</b> visitors · <b className="text-ink font-mono">{stats.today.events}</b> events</span>
            </div>
          )
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <Stat icon={Users} label="Visitors" value={stats?.sessions ?? "—"} sub="Unique sessions" testId="stat-visitors" />
        <Stat icon={Zap} label="Events" value={stats?.events ?? "—"} sub="Stored in MongoDB" testId="stat-events" />
        <Stat icon={CalendarCheck} label="Paid bookings" value={stats?.paid_bookings ?? "—"} sub={`${stats?.conversion_rate ?? 0}% visitor → paid`} testId="stat-paid" tone="text-success" />
        <Stat icon={IndianRupee} label="Revenue" value={stats ? fmtINR(stats.revenue) : "—"} sub={`@ ${stats ? fmtINR(stats.price) : ""} each`} testId="stat-revenue" tone="text-success" />
        <Stat icon={Repeat} label="Retainers" value={stats?.retainers ?? "—"} sub={`${stats?.retainer_rate ?? 0}% of paid`} testId="stat-retainers" />
        <div className="bg-white rounded-2xl border border-line p-5 shadow-soft" data-testid="stat-capi">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink-3">Meta CAPI</p>
            <ServerCog className="w-4 h-4 text-blue" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Badge value={stats?.capi?.configured ? "sent" : "skipped"} />
            <span className="text-xs text-ink-3">{stats?.capi?.configured ? `Pixel ${stats.capi.pixel_id}` : "Add META_PIXEL_ID + token"}</span>
          </div>
          <p className="mt-2 text-[11px] font-mono text-ink-3">sent {stats?.capi?.sent ?? 0} · skipped {stats?.capi?.skipped ?? 0} · err {stats?.capi?.error ?? 0}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 mt-6">
        <Panel title="Conversion funnel" testId="funnel-panel" right={funnel && <span className="text-xs font-mono text-ink-3">{funnel.total} sessions</span>}>
          {funnel ? <FunnelBars funnel={funnel} /> : <p className="text-sm text-ink-3">Loading…</p>}
        </Panel>
        <Panel title="3-layer tracking status" testId="tracking-status-panel">
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">1</span>
              <div><p className="font-semibold">Browser · Meta Pixel</p><p className="text-xs text-ink-3">Fires PageView, ViewContent, InitiateCheckout with shared event_id. Set <span className="font-mono">siteConfig.metaPixelId</span>.</p></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">2</span>
              <div><p className="font-semibold">Server · Meta CAPI</p><p className="text-xs text-ink-3">{stats?.capi?.configured ? "Configured — events relayed with hashed PII." : "Not configured. Events stored, CAPI send skipped."}</p></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-tint text-blue grid place-items-center font-mono text-xs font-bold">3</span>
              <div><p className="font-semibold">MongoDB · Audit trail</p><p className="text-xs text-ink-3">{stats?.events ?? 0} events, {stats?.sessions ?? 0} sessions, {stats?.bookings ?? 0} bookings stored.</p></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-alt text-ink-3 grid place-items-center font-mono text-xs font-bold">W</span>
              <div><p className="font-semibold">Cal.id webhook</p><p className="text-xs text-ink-3">POST <span className="font-mono">/api/webhook/calid</span> · signature {stats?.webhook_signature ? "verified" : "not verified (secret empty)"}</p></div>
            </li>
          </ul>
        </Panel>
      </div>
    </div>
  );
};
