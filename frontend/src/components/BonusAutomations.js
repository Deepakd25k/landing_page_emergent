import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Zap, LineChart, ShieldAlert, FileSearch, Workflow } from "lucide-react";
import { bonuses } from "@/data/content";
import { Reveal } from "@/components/shared";

// Assign distinct icons for each automation based on their typical order
const icons = [FileSearch, LineChart, Zap, ShieldAlert];

export const BonusAutomations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bonuses.items.length);
    }, 3500); // Auto-advance every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Helper to determine the relative position in the carousel
  const getCardStyle = (index) => {
    const total = bonuses.items.length;
    const diff = index - currentIndex;
    
    // Normalize diff to -1, 0, 1
    let normalizedDiff = diff;
    if (diff < -1) normalizedDiff = diff + total;
    if (diff > 1) normalizedDiff = diff - total;

    if (normalizedDiff === 0) {
      // Active (Center)
      return { x: "0%", scale: 1, opacity: 1, zIndex: 10 };
    } else if (normalizedDiff === 1) {
      // Next (Right)
      return { x: "40%", scale: 0.85, opacity: 0.4, zIndex: 5 };
    } else if (normalizedDiff === -1) {
      // Prev (Left)
      return { x: "-40%", scale: 0.85, opacity: 0.4, zIndex: 5 };
    } else {
      // Hidden
      return { x: "0%", scale: 0.7, opacity: 0, zIndex: 1 };
    }
  };

  return (
    <section id="bonus" data-section="bonuses" className="relative bg-white text-ink py-16 sm:py-24 overflow-hidden border-t border-line">
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <Reveal>
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f8f9fb] border border-line rounded-full px-3 py-1.5 mb-5 shadow-sm">
              <span className="text-[10px] sm:text-xs font-bold text-ink-2 uppercase tracking-widest">Bonus Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              4 AI-Powered Automations.<br className="hidden sm:block" /> Ready To Use. <span className="text-blue">Free.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base text-ink-3 font-medium">
              <p>Handed over on the call. Yours forever. Built in</p>
              {/* n8n Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#FF6E6E]/10 border border-[#FF6E6E]/20 text-[#FF6E6E] px-2 py-0.5 rounded-md font-bold">
                <Workflow className="w-3.5 h-3.5" />
                <span>n8n</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3D Carousel Stack */}
        <div className="relative w-full max-w-3xl mx-auto h-[320px] sm:h-[280px] flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <AnimatePresence initial={false}>
            {bonuses.items.map((item, i) => {
              const Icon = icons[i] || Zap;
              const style = getCardStyle(i);
              
              return (
                <motion.div
                  key={item.name}
                  initial={style}
                  animate={style}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-0 w-full max-w-[280px] sm:max-w-sm rounded-[1.5rem] bg-[#f8f9fb] border-2 border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-6 sm:p-8 cursor-pointer pointer-events-auto"
                  onClick={() => setCurrentIndex(i)} // Allow clicking side cards to bring them to front
                >
                  <div className="relative z-10 flex flex-col h-full bg-transparent">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center text-blue shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-ink-3 uppercase tracking-widest font-bold mb-1">Value</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-ink bg-white border border-line px-2.5 py-1 rounded-md shadow-sm">
                          ₹{item.value}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg sm:text-xl tracking-tight leading-snug mb-3 text-ink line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-ink-2 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-4">
          {bonuses.items.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-blue" : "w-2 bg-line-dark hover:bg-ink-3"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Total value strip */}
        <Reveal delay={0.2} className="mt-8 sm:mt-12 w-full max-w-4xl">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue/30 via-purple-500/30 to-blue/30 shadow-sm w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white border border-white px-6 py-5 sm:px-8 sm:py-6 shadow-inner w-full">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-blue" />
                </div>
                <span className="font-bold text-ink text-sm sm:text-base tracking-wide uppercase">Total Bonus Stack Value</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-black text-ink">
                  ₹{bonuses.totalValue}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-blue bg-blue/10 px-3 py-1.5 rounded-full border border-blue/20 whitespace-nowrap">
                  INCLUDED FREE
                </span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
