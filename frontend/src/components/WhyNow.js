import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, FileText, Activity, Server } from "lucide-react";
import { whyNow } from "@/data/content";
import { Reveal } from "@/components/shared";

const EASE = [0.22, 1, 0.36, 1];

// Add sources and visual types to the stats
const enrichedStats = [
  {
    ...whyNow.stats[0],
    source: "Industry Average (2023-2026)",
    icon: TrendingUp,
    color: "text-danger",
    bg: "bg-danger/5",
    visual: "line-chart",
    colSpan: "md:col-span-2",
  },
  {
    ...whyNow.stats[1],
    source: "Post-iOS14 Attribution Studies",
    icon: AlertTriangle,
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    visual: "gap-bar",
    colSpan: "md:col-span-3",
  },
  {
    ...whyNow.stats[2],
    source: "Indian E-com Logistics Reports",
    icon: Activity,
    color: "text-danger",
    bg: "bg-danger/5",
    visual: "pulse-ring",
    colSpan: "md:col-span-2",
  },
  {
    ...whyNow.stats[3],
    source: "Tracxn / D2C Financials",
    icon: FileText,
    color: "text-ink",
    bg: "bg-ink-bg",
    visual: "counter",
    colSpan: "md:col-span-1",
  },
  {
    ...whyNow.stats[4],
    source: "Meta CAPI Case Studies",
    icon: Server,
    color: "text-blue",
    bg: "bg-blue/5",
    visual: "nodes",
    colSpan: "md:col-span-2",
  },
];

export const WhyNow = () => (
  <section id="why" data-section="why-now" className="bg-[#f8f9fb] py-16 sm:py-24 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <Reveal>
        <div className="mb-10 sm:mb-16 md:text-center">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-3 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
            06 — The Reality Check
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight max-w-3xl mx-auto">
            {whyNow.title.split('Every Year.').map((part, i) => (
              i === 0 ? <span key={i}>{part}Every Year.<br className="hidden md:block"/></span> : <span key={i} className="text-danger">{part}</span>
            ))}
          </h2>
        </div>
      </Reveal>

      {/* Asymmetric Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6" data-testid="why-now-stats">
        {enrichedStats.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={i} delay={i * 0.1} className={item.colSpan}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-white border border-line rounded-2xl p-6 sm:p-8 overflow-hidden group shadow-soft hover:shadow-card hover:border-line-dark`}
              >
                {/* Visual Background Animations */}
                <div className="absolute top-0 right-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex items-center justify-end pr-4 sm:pr-8">
                  {item.visual === "line-chart" && (
                    <motion.svg width="120" height="60" viewBox="0 0 120 60" className="stroke-danger drop-shadow-md">
                      <motion.path
                        d="M0,50 L30,45 L60,20 L90,25 L120,5"
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </motion.svg>
                  )}
                  {item.visual === "gap-bar" && (
                    <div className="flex flex-col gap-2 w-32 items-end">
                      <div className="h-3 bg-ink-bg rounded-full w-full relative overflow-hidden">
                         <div className="absolute inset-0 bg-line" />
                         <motion.div initial={{ width: "100%" }} whileInView={{ width: "100%" }} className="absolute inset-y-0 left-0 bg-ink-3/40" />
                      </div>
                      <div className="h-3 bg-orange-500 rounded-full relative overflow-hidden flex self-start">
                         <motion.div initial={{ width: "10%" }} whileInView={{ width: "100%" }} transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }} className="h-full w-24 bg-orange-500" />
                      </div>
                    </div>
                  )}
                  {item.visual === "pulse-ring" && (
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <motion.div initial={{ scale: 0.8, opacity: 1 }} whileInView={{ scale: 2, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} className="absolute w-12 h-12 bg-danger/20 rounded-full" />
                      <div className="w-6 h-6 bg-danger/40 rounded-full" />
                    </div>
                  )}
                  {item.visual === "counter" && (
                    <div className="font-mono text-5xl font-black text-ink-bg mix-blend-multiply tracking-tighter opacity-50 select-none">
                      $$$
                    </div>
                  )}
                  {item.visual === "nodes" && (
                    <div className="flex items-center gap-2">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="w-3 h-3 rounded-full bg-blue/30" />
                      <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} transition={{ duration: 0.8 }} className="h-0.5 bg-blue/20" />
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }} className="w-4 h-4 rounded-full bg-blue/50" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <h3 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-ink mb-3 group-hover:scale-[1.02] origin-left transition-transform duration-300">
                      {item.stat}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-ink-2 leading-snug max-w-[200px] sm:max-w-[240px]">
                      {item.label}
                    </p>
                  </div>
                  
                  {/* Source Badge */}
                  <div className="mt-8 flex items-center gap-1.5">
                    <span className="px-2 py-1 bg-ink-bg text-ink-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded border border-line">
                      Source
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-ink-3 truncate max-w-[150px] sm:max-w-xs">
                      {item.source}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Closer Alert */}
      <Reveal delay={0.4} className="mt-12 sm:mt-16">
        <div className="bg-danger-bg/50 border border-danger/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-danger" />
          <div className="w-12 h-12 shrink-0 rounded-full bg-danger/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-danger" />
          </div>
          <div>
            <p className="text-base sm:text-xl md:text-2xl font-bold text-danger-dark tracking-tight leading-snug" data-testid="why-now-closer">
              {whyNow.closer}
            </p>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
