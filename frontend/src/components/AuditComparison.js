import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared";

// ── "Most D2C Setups" items ──────────────────────────────
const problemItems = [
  {
    initials: "A",
    color: "bg-[#6366f1]",
    title: "An Ad Agency",
    desc: "Runs Meta ads. Sends ROAS reports. That's the whole scope.",
    badge: "Invoice: ₹40K/mo",
    badgeColor: "bg-ink-bg text-ink-3 border border-line",
  },
  {
    initials: "D",
    color: "bg-[#f59e0b]",
    title: "A Developer",
    desc: "Built the site. Has no idea about conversion or RTO.",
    badge: "Invoice: ₹50K",
    badgeColor: "bg-ink-bg text-ink-3 border border-line",
  },
  {
    initials: "S",
    color: "bg-[#10b981]",
    title: "A Spreadsheet",
    desc: "Someone tracks CM2 manually. Last updated: nobody knows.",
    badge: "Last updated: ?",
    badgeColor: "bg-ink-bg text-ink-3 border border-line",
  },
  {
    initials: "R",
    color: "bg-[#ef4444]",
    title: "RTO Goes Unchecked",
    desc: "25-35% orders return. No one owns it. No one fixes it.",
    badge: "3 missed → ₹lost",
    badgeColor: "bg-danger/10 text-danger border border-danger/20",
  },
  {
    initials: "Y",
    color: "bg-[#8b5cf6]",
    title: "You",
    desc: "Project-managing all 4 vendors. Every day. Alone.",
    badge: "After hours",
    badgeColor: "bg-[#fef3c7] text-[#92400e] border border-[#fde68a]",
  },
];

// ── "With fox.ads" items ──────────────────────────────────
const solutionItems = [
  {
    initials: "1",
    color: "bg-blue",
    title: "One Diagnostic Call",
    desc: "We open your real P&L — every hidden cost, every leaking rupee.",
    badge: "₹1,999 flat",
    badgeColor: "bg-blue/10 text-blue border border-blue/20",
  },
  {
    initials: "2",
    color: "bg-blue",
    title: "Ads + Dev + CRO",
    desc: "Performance marketing and full-stack dev under one roof. No invoice juggling.",
    badge: "One system",
    badgeColor: "bg-blue/10 text-blue border border-blue/20",
  },
  {
    initials: "3",
    color: "bg-blue",
    title: "Real Unit Economics",
    desc: "CM1, CM2, RTO drag — calculated live on the call, not in a report 2 weeks later.",
    badge: "Live on call",
    badgeColor: "bg-blue/10 text-blue border border-blue/20",
  },
  {
    initials: "4",
    color: "bg-blue",
    title: "90-Day Roadmap",
    desc: "Week-by-week priorities. What to fix first. What to scale next.",
    badge: "Actionable",
    badgeColor: "bg-blue/10 text-blue border border-blue/20",
  },
  {
    initials: "5",
    color: "bg-blue",
    title: "4 AI Automations",
    desc: "RTO filter, NDR flow, prepaid nudge, creative testing matrix — all yours.",
    badge: "Free included",
    badgeColor: "bg-success/10 text-success border border-success/20",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export const AuditComparison = () => {
  const [active, setActive] = useState("problem");

  const items = active === "problem" ? problemItems : solutionItems;
  const closingLine =
    active === "problem"
      ? "5 vendors. ₹0 connected. You hold it together."
      : "One call. One system. Everything connected.";

  return (
    <section id="compare" data-section="comparison" className="bg-[#f8f9fb] py-10 sm:py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <Reveal>
          <div className="mb-6 sm:mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full">
              02 — The Difference
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
              One partner.{" "}
              <span className="text-blue">A connected system.</span>
            </h2>
            <p className="mt-2 text-sm text-ink-2">
              Not another ad account. Not another invoice.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.05}>
          <div className="inline-flex items-center bg-white border border-line rounded-full p-1 mb-5 shadow-soft">
            <button
              onClick={() => setActive("problem")}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === "problem"
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink-2 hover:text-ink"
              }`}
            >
              Most D2C Setups
            </button>
            <button
              onClick={() => setActive("solution")}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === "solution"
                  ? "bg-blue text-white shadow-sm"
                  : "text-ink-2 hover:text-ink"
              }`}
            >
              With fox.ads
            </button>
          </div>
        </Reveal>

        {/* List card */}
        <Reveal delay={0.08}>
          <div className="bg-white border border-line rounded-2xl shadow-card overflow-hidden" data-testid="comparison-table">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                {items.map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 px-4 py-3.5 ${
                      i < items.length - 1 ? "border-b border-line/70" : ""
                    }`}
                    data-testid={`comparison-row-${i}`}
                  >
                    {/* Avatar circle */}
                    <div
                      className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <span className="text-white text-xs font-bold">{item.initials}</span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-ink leading-snug">{item.title}</p>
                      <p className="text-xs text-ink-3 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>

                    {/* Badge */}
                    <span
                      className={`flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Closing line */}
        <Reveal delay={0.12}>
          <AnimatePresence mode="wait">
            <motion.p
              key={closingLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 text-sm font-bold px-1 ${
                active === "problem" ? "text-danger" : "text-blue"
              }`}
              data-testid="comparison-closer"
            >
              {closingLine}
            </motion.p>
          </AnimatePresence>
        </Reveal>

      </div>
    </section>
  );
};
