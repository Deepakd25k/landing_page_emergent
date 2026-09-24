import { motion } from "framer-motion";
import { Gift, Zap, LineChart, ShieldAlert, FileSearch } from "lucide-react";
import { bonuses } from "@/data/content";
import { Reveal } from "@/components/shared";

const EASE = [0.22, 1, 0.36, 1];

// Assign distinct icons for each automation based on their typical order
const icons = [FileSearch, LineChart, Zap, ShieldAlert];

export const BonusAutomations = () => (
  <section id="bonus" data-section="bonuses" className="relative bg-[#050505] text-white py-16 sm:py-28 overflow-hidden">
    
    {/* Premium Background Effects */}
    <div className="absolute top-0 inset-x-0 h-[500px] opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, #1e3a8a 0%, transparent 70%)" }} />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <Reveal>
        <div className="mb-12 md:mb-20 md:text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-widest">Bonus Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {bonuses.title.split('.').map((part, i, arr) => (
              i < arr.length - 1 ? <span key={i}>{part}.<br className="hidden sm:block" /></span> : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{part}</span>
            ))}
          </h2>
          <p className="text-sm md:text-base text-white/50 max-w-2xl mx-auto font-mono tracking-tight">
            {bonuses.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Grid: 1 col on mobile, 2 col on tablet/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {bonuses.items.map((item, i) => {
          const Icon = icons[i] || Zap;
          return (
            <Reveal key={item.name} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className="group relative p-[1px] rounded-[1.5rem] bg-gradient-to-b from-white/15 to-white/5 hover:from-blue-500/50 hover:to-purple-500/30 transition-all duration-500"
                data-testid={`bonus-${i}`}
              >
                <div className="h-full rounded-[1.5rem] bg-[#0a0a0a] p-5 sm:p-7 relative overflow-hidden">
                  
                  {/* Hover Glow */}
                  <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 shadow-inner">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Value</span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-white/80 bg-white/5 border border-white/10 px-2 py-1 rounded-md group-hover:border-white/20 transition-colors">
                          ₹{item.value}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg sm:text-xl tracking-tight leading-snug mb-2 group-hover:text-blue-100 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Total value strip */}
      <Reveal delay={0.3} className="mt-8 sm:mt-12">
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-600/50 via-purple-500/50 to-blue-600/50" data-testid="bonus-total">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-black/40 backdrop-blur-xl px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white/90 text-sm sm:text-base tracking-wide uppercase">Total Bonus Stack Value</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="font-mono text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                ₹{bonuses.totalValue}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                INCLUDED FREE
              </span>
            </div>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
