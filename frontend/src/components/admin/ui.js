export const PageTitle = ({ title, subtitle, right }) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
    <div>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h1>
      {subtitle && <p className="text-sm text-ink-3 mt-1">{subtitle}</p>}
    </div>
    {right}
  </div>
);

export const Panel = ({ title, children, className = "", right, testId }) => (
  <section className={`bg-white rounded-2xl border border-line shadow-soft ${className}`} data-testid={testId}>
    {(title || right) && (
      <div className="flex items-center justify-between px-5 py-4 border-b border-line">
        <h2 className="font-bold text-sm uppercase tracking-[0.15em] text-ink-2">{title}</h2>
        {right}
      </div>
    )}
    <div className="p-5">{children}</div>
  </section>
);

const TONES = {
  sent: "bg-success-bg text-success",
  skipped: "bg-alt text-ink-3 border border-line",
  error: "bg-danger-bg text-danger",
  not_sent: "bg-alt text-ink-3 border border-line",
  paid: "bg-success-bg text-success",
  completed: "bg-blue-tint text-blue",
  created: "bg-blue-tint text-blue",
  cancelled: "bg-danger-bg text-danger",
  rejected: "bg-danger-bg text-danger",
  no_show: "bg-danger-bg text-danger",
  rescheduled: "bg-blue-tint text-blue",
  browser: "bg-blue-tint text-blue",
  server_webhook: "bg-ink text-white",
  converted: "bg-success-bg text-success",
  pitched: "bg-blue-tint text-blue",
  lost: "bg-danger-bg text-danger",
  none: "bg-alt text-ink-3 border border-line",
};

export const Badge = ({ value, testId }) => (
  <span data-testid={testId} className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold font-mono uppercase ${TONES[value] || "bg-alt text-ink-2 border border-line"}`}>
    {value || "—"}
  </span>
);

export const Empty = ({ text }) => <p className="text-sm text-ink-3 py-10 text-center" data-testid="empty-state">{text}</p>;
