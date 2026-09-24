import { motion } from "framer-motion";
import { Bot, Gift } from "lucide-react";
import { bonuses } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const BonusAutomations = () => (
  <section id="bonus" data-section="bonuses" className="relative bg-night text-white py-10 sm:py-16 overflow-hidden noise">
    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[140px]" />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="04" eyebrow="Bonus Stack" title={bonuses.title} light>
        <p className="mt-2 text-sm sm:text-base text-white/60">{bonuses.subtitle}</p>
      </SectionHeader>

      {/* 2-col grid on mobile too */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-5">
        {bonuses.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3.5 sm:p-6 hover:border-blue/60 hover:bg-white/[0.07] transition-[border-color,background-color] duration-300"
              data-testid={`bonus-${i}`}
            >
              {/* Icon + value in one row */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue/20 text-blue-300 grid place-items-center flex-shrink-0">
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                <span className="font-mono text-[9px] sm:text-xs font-bold text-white/60 border border-white/15 px-1.5 py-0.5 rounded text-right">
                  ₹{item.value}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base tracking-tight leading-snug">{item.name}</h3>
              <p className="mt-1 text-xs text-white/60 leading-relaxed line-clamp-2">{item.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Total value strip — compact */}
      <Reveal delay={0.2} className="mt-6 sm:mt-10">
        <div
          className="flex flex-wrap items-center gap-3 rounded-xl bg-blue px-4 py-3 sm:px-6 sm:py-4 shadow-[0_20px_50px_rgba(13,110,253,0.4)]"
          data-testid="bonus-total"
        >
          <Gift className="w-5 h-5 flex-shrink-0" />
          <span className="font-semibold text-sm sm:text-base">Total bonus value</span>
          <span className="font-mono text-xl sm:text-2xl font-bold">₹{bonuses.totalValue}</span>
          <span className="text-xs sm:text-sm text-white/80">— included at ₹0</span>
        </div>
      </Reveal>
    </div>
  </section>
);
