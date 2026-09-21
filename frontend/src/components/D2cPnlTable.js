import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1];

const Tooltip = ({ children, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative flex items-center cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-ink text-white text-xs rounded shadow-lg z-10 text-center">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-ink" />
        </div>
      )}
    </div>
  );
};

export const D2cPnlTable = () => {
  const rows = [
    { label: "Gross AOV", amount: "₹1,500", pct: "100%", tone: "neutral", note: "Average Order Value", bold: true },
    { label: "COGS", amount: "−₹375", pct: "25%", tone: "neg", note: "Product & Manufacturing Cost" },
    { label: "PG Fees & Platform", amount: "−₹35", pct: "2.3%", tone: "neg", note: "Razorpay / Shopify" },
    { label: "Packaging & Ops", amount: "−₹45", pct: "3.0%", tone: "neg", note: "Boxes, Inserts, Warehouse" },
    { label: "Forward Freight", amount: "−₹75", pct: "5.0%", tone: "neg", note: "Shipping to customer" },
    {
      label: "RTO Drag (30% RTO)",
      amount: "−₹84",
      pct: "5.6%",
      tone: "neg",
      note: "Reverse shipping + waste for unaccepted orders",
      tooltip: "Calculated as [RTO% / (1 - RTO%)] × (Forward + Reverse + Packaging). This is the 'silent killer' of D2C.",
      bold: true
    },
    { label: "CM1 (Contribution Margin 1)", amount: "+₹886", pct: "59%", tone: "pos", note: "Healthy margin before marketing", bold: true, bg: "bg-success-bg" },
    { label: "Delivered CAC (Meta/Google)", amount: "−₹700", pct: "46.6%", tone: "neg", note: "Marketing cost per delivered order" },
    {
      label: "Burnt CAC (Due to RTO)",
      amount: "−₹300",
      pct: "20.0%",
      tone: "neg",
      note: "Marketing money wasted on 30% who returned",
      tooltip: "You paid Meta to acquire them, but they rejected the package. That CAC is burnt.",
      bold: true
    },
    { label: "CM2 (Net Profit Per Order)", amount: "−₹114", pct: "−7.6%", tone: "danger", note: "Bleeding Money at Scale", bold: true, bg: "bg-danger-bg" },
  ];

  return (
    <section className="py-20 bg-ink-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-danger-bg text-danger border border-danger/20 mb-4">
            The Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            What A Real Audit Looks Like.
          </h2>
          <p className="mt-4 text-ink-2 text-lg max-w-2xl mx-auto">
            This is exactly how we break down your business on our call. If your agency isn't calculating <strong>RTO Drag</strong> and <strong>Burnt CAC</strong>, they are hiding your real losses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(5,44,101,0.08)] border border-line overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-ink-bg border-b-2 border-line">
                  <th className="py-4 px-6 text-xs font-bold text-ink-3 uppercase tracking-wider w-1/3">Metric</th>
                  <th className="py-4 px-6 text-xs font-bold text-ink-3 uppercase tracking-wider text-right">Amount</th>
                  <th className="py-4 px-6 text-xs font-bold text-ink-3 uppercase tracking-wider text-right">% of AOV</th>
                  <th className="py-4 px-6 text-xs font-bold text-ink-3 uppercase tracking-wider">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.map((row, i) => (
                  <tr key={i} className={`group hover:bg-ink-bg transition-colors ${row.bg || ""}`}>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm sm:text-base ${row.bold ? "font-bold text-ink" : "font-medium text-ink-2"}`}>
                          {row.label}
                        </span>
                        {row.tooltip && (
                          <Tooltip content={row.tooltip}>
                            <Info className="w-4 h-4 text-ink-3 hover:text-blue transition-colors" />
                          </Tooltip>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className={`font-mono text-sm sm:text-base ${row.bold ? "font-bold" : "font-medium"} 
                        ${row.tone === "neg" ? "text-danger/80" : row.tone === "pos" ? "text-success" : row.tone === "danger" ? "text-danger text-lg" : "text-ink"}`}>
                        {row.amount}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-mono text-sm text-ink-3">
                        {row.pct}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-xs sm:text-sm ${row.bold && row.tone === "danger" ? "font-bold text-danger" : "text-ink-2"}`}>
                        {row.note}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
