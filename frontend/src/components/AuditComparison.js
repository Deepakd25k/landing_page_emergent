import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Reveal } from "@/components/shared";

const rows = [
  {
    problem: { initials: "A", color: "bg-[#6366f1]", title: "An Ad Agency",        desc: "Runs ads. Sends ROAS reports. That's the whole scope.",           badge: "Invoice: ₹40K/mo" },
    solution: { title: "fox.ads",                                                    desc: "Ads + Dev + CRO under one roof. One system, not four vendors.",  badge: "One call" },
  },
  {
    problem: { initials: "D", color: "bg-[#f59e0b]", title: "A Developer",         desc: "Built the site. Has no idea about conversion or unit economics.", badge: "Invoice: ₹50K" },
    solution: { title: "Full-Stack + Marketing",                                     desc: "We build and we market. Both sides of the funnel, connected.",   badge: "Included" },
  },
  {
    problem: { initials: "S", color: "bg-[#10b981]", title: "A Spreadsheet",       desc: "Someone tracks CM2 manually. Last updated: nobody knows.",        badge: "Last updated: ?" },
    solution: { title: "Live Unit Economics",                                         desc: "CM1, CM2, RTO drag — calculated live on the 60-min call.",       badge: "On the call" },
  },
  {
    problem: { initials: "R", color: "bg-[#ef4444]", title: "RTO Unchecked",       desc: "25–35% orders return. No one owns it. ₹15K lost every month.",   badge: "3 missed" },
    solution: { title: "RTO Kill System",                                            desc: "PIN-code risk map, COD-to-prepaid strategy, NDR automation.",    badge: "Free included" },
  },
  {
    problem: { initials: "Y", color: "bg-[#8b5cf6]", title: "You",                 desc: "Project-managing 4 vendors. Every single day. Alone.",           badge: "After hours" },
    solution: { title: "One Point of Contact",                                       desc: "Everything reported in one 60-min call. Nothing slips through.", badge: "₹1,999 total" },
  },
];

const EASE = [0.22, 1, 0.36, 1];

export const AuditComparison = () => (
  <section id="compare" data-section="comparison" className="bg-[#f8f9fb] py-10 sm:py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <Reveal>
        <div className="mb-6 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full">
            02 — The Difference
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
            Most D2C setups vs{" "}
            <span className="text-blue">fox.ads</span>
          </h2>
          <p className="mt-1.5 text-sm text-ink-2">Everything visible. No clicking needed.</p>
        </div>
      </Reveal>

      {/* Column headers */}
      <Reveal delay={0.04}>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-ink text-white text-xs font-bold">
            <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
            Most D2C Setups
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue text-white text-xs font-bold">
            <Check className="w-3.5 h-3.5 text-green-300 flex-shrink-0" />
            With fox.ads
          </div>
        </div>
      </Reveal>

      {/* Comparison rows */}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
              className="grid grid-cols-2 gap-2 sm:gap-4"
              data-testid={`comparison-row-${i}`}
            >
              {/* Problem side */}
              <div className="bg-white border border-line rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-danger/40 rounded-l-xl" />
                <div className="flex items-center gap-2 pl-1">
                  <div className={`w-6 h-6 rounded-full ${row.problem.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-[9px] font-bold">{row.problem.initials}</span>
                  </div>
                  <p className="text-xs font-bold text-ink leading-snug line-clamp-1">{row.problem.title}</p>
                </div>
                <p className="text-[10px] sm:text-xs text-ink-3 leading-relaxed line-clamp-2 pl-1">{row.problem.desc}</p>
                <span className="self-start text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-ink-bg border border-line text-ink-3 ml-1">
                  {row.problem.badge}
                </span>
              </div>

              {/* Solution side */}
              <div className="bg-blue/[0.06] border border-blue/20 rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-blue rounded-l-xl" />
                <div className="flex items-center gap-2 pl-1">
                  <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-xs font-bold text-blue leading-snug line-clamp-1">{row.solution.title}</p>
                </div>
                <p className="text-[10px] sm:text-xs text-ink-2 leading-relaxed line-clamp-2 pl-1">{row.solution.desc}</p>
                <span className="self-start text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue/10 border border-blue/20 text-blue ml-1">
                  {row.solution.badge}
                </span>
              </div>

            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Closing summary */}
      <Reveal delay={0.15}>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-4">
          <div className="bg-danger/8 border border-danger/20 rounded-xl px-3 py-2.5">
            <p className="text-xs font-bold text-danger">5 vendors. ₹0 connected. You hold it together.</p>
          </div>
          <div className="bg-blue border border-blue rounded-xl px-3 py-2.5">
            <p className="text-xs font-bold text-white">One call. One system. Everything fixed.</p>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
