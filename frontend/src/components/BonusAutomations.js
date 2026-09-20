import { motion } from "framer-motion";
import { Bot, Gift } from "lucide-react";
import { bonuses } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const BonusAutomations = () => (
  <section id="bonus" data-section="bonuses" className="relative bg-night text-white py-16 sm:py-24 overflow-hidden noise">
    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[140px]" />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="04" eyebrow="Bonus Stack" title={bonuses.title} light>
        <p className="mt-4 text-base sm:text-lg text-white/60">{bonuses.subtitle}</p>
      </SectionHeader>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {bonuses.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-7 hover:border-blue/60 hover:bg-white/[0.07] transition-[border-color,background-color] duration-300"
              data-testid={`bonus-${i}`}
            >
              <div className="flex items-start justify-between">
                <span className="w-11 h-11 rounded-xl bg-blue/20 text-blue-300 grid place-items-center">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs font-bold text-white/60 border border-white/15 px-2 py-1 rounded-md">₹{item.value} value</span>
              </div>
              <h3 className="mt-5 font-bold text-lg tracking-tight">{item.name}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{item.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mt-10 sm:mt-14">
        <div className="inline-flex flex-wrap items-center gap-4 rounded-2xl bg-blue px-6 py-4 shadow-[0_20px_50px_rgba(13,110,253,0.4)]" data-testid="bonus-total">
          <Gift className="w-6 h-6" />
          <span className="font-semibold">Total bonus value</span>
          <span className="font-mono text-2xl font-bold">₹{bonuses.totalValue}</span>
          <span className="text-sm text-white/80">— included at ₹0</span>
        </div>
      </Reveal>
    </div>
  </section>
);
