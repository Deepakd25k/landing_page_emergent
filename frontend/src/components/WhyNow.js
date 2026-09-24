import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, AlertTriangle, FileText, Activity, Server } from "lucide-react";
import { whyNow } from "@/data/content";
import { Reveal } from "@/components/shared";

// Enriched data with sources and animation types
const enrichedStats = [
  {
    ...whyNow.stats[0],
    source: "Industry Average (2023-2026)",
    icon: TrendingUp,
    color: "text-danger",
    bg: "bg-danger/10",
    visual: "line-chart",
  },
  {
    ...whyNow.stats[1],
    source: "Post-iOS14 Attribution Studies",
    icon: AlertTriangle,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    visual: "gap-bar",
  },
  {
    ...whyNow.stats[2],
    source: "Indian E-com Logistics Reports",
    icon: Activity,
    color: "text-danger",
    bg: "bg-danger/10",
    visual: "pulse-ring",
  },
  {
    ...whyNow.stats[3],
    source: "Tracxn / D2C Financials",
    icon: FileText,
    color: "text-ink",
    bg: "bg-ink/5",
    visual: "counter",
  },
  {
    ...whyNow.stats[4],
    source: "Meta CAPI Case Studies",
    icon: Server,
    color: "text-blue",
    bg: "bg-blue/10",
    visual: "nodes",
  },
];

export const WhyNow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the dashboard
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % enrichedStats.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const activeStat = enrichedStats[activeIndex];
  const ActiveIcon = activeStat.icon;

  return (
    <section id="why" data-section="why-now" className="bg-[#f8f9fb] py-10 sm:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Reveal>
          <div className="mb-8 sm:mb-12 md:text-center">
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

        {/* Unified Dashboard Card */}
        <Reveal delay={0.1}>
          <div className="bg-white border border-line rounded-2xl sm:rounded-3xl shadow-card overflow-hidden flex flex-col md:flex-row h-[420px] md:h-[400px]">
            
            {/* Left/Top: Active Display */}
            <div className="flex-1 relative p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white to-ink-bg/50">
              
              {/* Background Visualizations */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-full opacity-20 pointer-events-none flex items-center justify-end pr-6 sm:pr-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStat.visual}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-end w-full"
                  >
                    {activeStat.visual === "line-chart" && (
                      <svg width="200" height="100" viewBox="0 0 120 60" className="stroke-danger drop-shadow-md">
                        <motion.path d="M0,50 L30,45 L60,20 L90,25 L120,5" fill="none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} />
                      </svg>
                    )}
                    {activeStat.visual === "gap-bar" && (
                      <div className="flex flex-col gap-3 w-48 items-end">
                        <div className="h-4 bg-ink-bg rounded-full w-full relative overflow-hidden">
                           <motion.div initial={{ width: "100%" }} animate={{ width: "100%" }} className="absolute inset-y-0 left-0 bg-ink-3/40" />
                        </div>
                        <div className="h-4 bg-orange-500 rounded-full relative overflow-hidden flex self-start">
                           <motion.div initial={{ width: "10%" }} animate={{ width: "100%" }} transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }} className="h-full w-32 bg-orange-500" />
                        </div>
                      </div>
                    )}
                    {activeStat.visual === "pulse-ring" && (
                      <div className="relative w-32 h-32 flex items-center justify-center">
                        <motion.div initial={{ scale: 0.5, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} className="absolute w-20 h-20 bg-danger/30 rounded-full" />
                        <div className="w-10 h-10 bg-danger/50 rounded-full" />
                      </div>
                    )}
                    {activeStat.visual === "counter" && (
                      <div className="font-mono text-7xl font-black text-ink-3 mix-blend-multiply tracking-tighter opacity-30 select-none">
                        $$$
                      </div>
                    )}
                    {activeStat.visual === "nodes" && (
                      <div className="flex items-center gap-2">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-6 h-6 rounded-full bg-blue/30" />
                        <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8 }} className="h-1 bg-blue/20" />
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="w-8 h-8 rounded-full bg-blue/50" />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${activeStat.bg} flex items-center justify-center mb-6`}>
                    <ActiveIcon className={`w-6 h-6 ${activeStat.color}`} />
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-mono text-5xl sm:text-7xl font-black tracking-tighter text-ink mb-3 drop-shadow-sm">
                        {activeStat.stat}
                      </h3>
                      <p className="text-base sm:text-xl font-bold text-ink-2 leading-snug max-w-[280px]">
                        {activeStat.label}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Source Badge */}
                <div className="mt-8 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-ink text-white text-[10px] font-bold uppercase tracking-wider rounded">
                    Source
                  </span>
                  <span className="text-xs font-semibold text-ink-3 truncate max-w-[200px]">
                    {activeStat.source}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar (Mobile only indicator) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-line md:hidden">
                <motion.div
                  key={activeIndex}
                  className="h-full bg-blue"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "linear" }}
                />
              </div>

            </div>

            {/* Right/Bottom: Navigation List */}
            <div className="w-full md:w-[360px] bg-white border-t md:border-t-0 md:border-l border-line p-3 sm:p-5 flex flex-col justify-center gap-1.5 overflow-y-auto">
              <p className="text-[10px] font-bold text-ink-3 uppercase tracking-wider px-3 mb-2 hidden md:block">Market Reality</p>
              {enrichedStats.map((stat, i) => {
                const isSelected = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex items-center gap-3 w-full text-left p-3 rounded-xl transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue/10 border-blue/20 shadow-sm' 
                        : 'bg-transparent hover:bg-ink-bg border-transparent'
                    } border`}
                  >
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${isSelected ? 'bg-blue' : 'bg-line-dark'}`} />
                    <span className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-blue' : 'text-ink-2'}`}>
                      {stat.stat} - <span className="font-normal">{stat.label.split('—')[0]}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Closer Alert */}
        <Reveal delay={0.2} className="mt-8 sm:mt-12">
          <div className="bg-danger-bg/50 border border-danger/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-danger" />
            <div className="w-10 h-10 shrink-0 rounded-full bg-danger/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-danger" />
            </div>
            <p className="text-sm sm:text-lg font-bold text-danger-dark tracking-tight" data-testid="why-now-closer">
              {whyNow.closer}
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
