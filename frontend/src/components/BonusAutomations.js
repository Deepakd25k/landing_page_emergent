import { motion } from "framer-motion";
import { Gift, Zap, LineChart, ShieldAlert, FileSearch, Workflow } from "lucide-react";
import { bonuses } from "@/data/content";
import { Reveal } from "@/components/shared";

// Assign distinct icons for each automation based on their typical order
const icons = [FileSearch, LineChart, Zap, ShieldAlert];

export const BonusAutomations = () => (
  <section id="bonus" data-section="bonuses" className="relative bg-white text-ink py-16 sm:py-24 overflow-hidden border-t border-line">
    
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <Reveal>
        <div className="mb-10 sm:mb-16 md:text-center">
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

      {/* Grid for Desktop / Horizontal Snap Scroll for Mobile */}
      {/* This fixes the "too much scrolling on mobile" issue by making it a swipeable row */}
      <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-6 sm:pb-0 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {bonuses.items.map((item, i) => {
          const Icon = icons[i] || Zap;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-center shrink-0 w-[85vw] sm:w-auto relative p-[1px] rounded-[1.5rem] bg-gradient-to-b from-line to-transparent hover:from-blue/30 hover:to-transparent transition-all duration-500"
            >
              <div className="h-full rounded-[1.5rem] bg-[#f8f9fb] border border-white p-6 sm:p-8 relative overflow-hidden shadow-sm">
                
                <div className="relative z-10 flex flex-col h-full">
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
                  
                  <h3 className="font-bold text-lg sm:text-xl tracking-tight leading-snug mb-3 text-ink">
                    {item.name}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Total value strip */}
      <Reveal delay={0.2} className="mt-6 sm:mt-12">
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue/30 via-purple-500/30 to-blue/30 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white border border-white px-6 py-5 sm:px-8 sm:py-6 shadow-inner">
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
              <span className="text-[10px] sm:text-xs font-bold text-blue bg-blue/10 px-3 py-1.5 rounded-full border border-blue/20">
                INCLUDED FREE
              </span>
            </div>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
