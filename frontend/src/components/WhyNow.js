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
          <div className="bg-white border border-line rounded-2xl sm:rounded-3xl shadow-card overflow-hidden flex flex-col md:flex-row h-auto md:h-[400px]">
            
            {/* Left/Top: Active Display */}
            <div className="flex-1 relative p-6 sm:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white to-ink-bg/50 min-h-[300px]">
              
              {/* Background Visualizations */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-2/3 h-full opacity-15 md:opacity-20 pointer-events-none flex items-center justify-end pr-4 sm:pr-10 overflow-hidden">
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
                      <div className="flex flex-col gap-3 w-40 md:w-48 items-end">
                        <div className="h-4 bg-ink-bg rounded-full w-full relative overflow-hidden">
                           <motion.div initial={{ width: "100%" }} animate={{ width: "100%" }} className="absolute inset-y-0 left-0 bg-ink-3/40" />
                        </div>
                        <div className="h-4 bg-orange-500 rounded-full relative overflow-hidden flex self-start">
                           <motion.div initial={{ width: "10%" }} animate={{ width: "100%" }} transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }} className="h-full w-24 md:w-32 bg-orange-500" />
                        </div>
                      </div>
                    )}
                    {activeStat.visual === "pulse-ring" && (
                      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                        <motion.div initial={{ scale: 0.5, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} className="absolute w-16 h-16 md:w-20 md:h-20 bg-danger/30 rounded-full" />
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-danger/50 rounded-full" />
                      </div>
                    )}
                    {activeStat.visual === "counter" && (
                      <div className="font-mono text-6xl md:text-7xl font-black text-ink-3 mix-blend-multiply tracking-tighter opacity-20 select-none">
                        $$$
                      </div>
                    )}
                    {activeStat.visual === "nodes" && (
                      <div className="flex items-center gap-2">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue/30" />
                        <motion.div initial={{ width: 0 }} animate={{ width: 60 }} transition={{ duration: 0.8 }} className="h-1 bg-blue/20" />
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue/50" />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col h-full justify-between mt-4 md:mt-0">
                <div>
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${activeStat.bg} flex items-center justify-center mb-5 md:mb-6`}>
                    <ActiveIcon className={`w-5 h-5 md:w-6 md:h-6 ${activeStat.color}`} />
                  </div>
                  
                  {/* Rolling Data Display */}
                  <div className="relative flex flex-col min-h-[140px] md:min-h-[auto] justify-center">
                    {/* Mobile: Faded Previous Preview */}
                    <motion.div
                      key={`prev-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="md:hidden text-ink-3/20 font-mono text-2xl font-black tracking-tighter absolute -top-4 pointer-events-none select-none"
                    >
                      {enrichedStats[(activeIndex - 1 + enrichedStats.length) % enrichedStats.length].stat}
                    </motion.div>

                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="py-1"
                      >
                        <h3 className="font-mono text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-ink mb-1 md:mb-2 drop-shadow-sm">
                          {activeStat.stat}
                        </h3>
                        <p className="text-sm sm:text-base md:text-xl font-bold text-ink-2 leading-snug max-w-[250px] md:max-w-[280px]">
                          {activeStat.label}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    {/* Mobile: Faded Next Preview */}
                    <motion.div
                      key={`next-${activeIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="md:hidden text-ink-3/20 font-mono text-2xl font-black tracking-tighter absolute -bottom-4 pointer-events-none select-none"
                    >
                      {enrichedStats[(activeIndex + 1) % enrichedStats.length].stat}
                    </motion.div>
                  </div>
                </div>

                {/* Source Badge */}
                <div className="mt-6 md:mt-8 flex items-center gap-2">
                  <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-ink text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded">
                    Source
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-ink-3 truncate max-w-[180px] md:max-w-[200px]">
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

            {/* Right: Navigation List (HIDDEN ON MOBILE for cleaner UX) */}
            <div className="hidden md:flex w-[360px] bg-white border-l border-line p-5 flex-col justify-center gap-1.5 overflow-y-auto">
              <p className="text-[10px] font-bold text-ink-3 uppercase tracking-wider px-3 mb-2">Market Reality</p>
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
                    <span className={`text-sm font-semibold truncate ${isSelected ? 'text-blue' : 'text-ink-2'}`}>
                      {stat.stat} - <span className="font-normal">{stat.label.split('—')[0]}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Ultra-Compact Premium Alert Strip */}
        <Reveal delay={0.2} className="mt-8 sm:mt-12">
          <div className="relative rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-red-950 p-[1px] shadow-[0_4px_20px_-10px_rgba(220,38,38,0.4)] group overflow-hidden max-w-3xl mx-auto">
            {/* Animated glowing border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/40 to-transparent -translate-x-full group-hover:animate-[shimmer_2.5s_infinite] pointer-events-none" />
            
            <div className="bg-[#0f0505] rounded-2xl p-3 sm:p-4 flex flex-row items-center gap-3 sm:gap-4 relative z-10">
              
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-red-500 blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center relative z-10">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                </div>
              </div>
              
              <div className="flex-1 text-left min-w-0">
                <p className="text-[13px] sm:text-base font-bold text-white tracking-tight leading-tight" data-testid="why-now-closer">
                  Brands that don't fix unit economics now <span className="text-red-400">won't survive 2027.</span>
                  <span className="hidden md:inline text-white/50 font-normal ml-2">Not a prediction. It's just math.</span>
                </p>
                <p className="md:hidden text-white/50 text-[10px] sm:text-xs mt-0.5">
                  Not a prediction. It's just math.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
