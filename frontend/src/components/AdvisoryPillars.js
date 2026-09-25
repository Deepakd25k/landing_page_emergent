import { motion } from "framer-motion";
import { deliverables } from "@/data/content";
import { Reveal } from "@/components/shared";

const EASE = [0.22, 1, 0.36, 1];

const ICONS = [
  "account_balance", // Dashboard vs. Bank
  "policy", // Agency B.S. Detector
  "trending_up", // True Scale vs Fake Scale
  "bar_chart", // 3 Metrics That Matter
  "bolt", // Actionable Fixes
  "lightbulb" // Direct Founder Insights
];

export const AdvisoryPillars = () => (
  <section id="advisory" data-section="advisory-pillars" className="bg-white py-12 sm:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <Reveal>
        <div className="mb-10 md:mb-16 md:text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-3 py-1.5 rounded-full inline-block mb-3">
            06 — The Advisory Framework
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            60 Minutes. Raw Truth.<br className="hidden md:block" />
            <span className="text-blue">Zero Fluff.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-ink-2 leading-relaxed max-w-2xl md:mx-auto">
            We don't build useless dashboards. We diagnose the exact problem and tell you what to solve.
          </p>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-0 mt-8 md:mt-16">
        {/* Vertical line: Left on mobile, Center on desktop */}
        <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue via-blue-light to-blue-300 opacity-20 rounded-full" />

        {deliverables.items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={item.name} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className={`group relative flex items-start gap-4 mb-8 md:mb-16 z-10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:items-center`}
              >
                {/* MOBILE DOT (Hidden on desktop) */}
                <div className="md:hidden absolute -left-6 top-1.5 w-6 flex-shrink-0 flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-white border-[3px] border-blue shadow-[0_0_0_3px_rgba(13,110,253,0.1)] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue leading-none mt-px">{i + 1}</span>
                  </div>
                </div>

                {/* CONTENT CARD (Left or Right on desktop) */}
                <div className={`w-full bg-white rounded-xl md:rounded-2xl border border-line shadow-sm p-4 sm:p-6 transition-all duration-300 group-hover:border-blue/30 group-hover:shadow-card ${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-3 md:text-left'}`}>
                  <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-blue bg-blue-tint px-2 py-1 rounded mb-3">
                      Value: ₹{item.value}
                    </span>
                    <h3 className="font-bold text-ink text-base sm:text-lg tracking-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* DESKTOP DOT (Hidden on mobile) */}
                <div className="hidden md:flex w-12 flex-shrink-0 flex-col items-center justify-center col-start-2">
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-blue shadow-[0_0_0_6px_rgba(255,255,255,1)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                    <span className="material-icons-round text-blue text-lg">{ICONS[i]}</span>
                  </div>
                </div>

                {/* EMPTY SPACE for alternating layout */}
                <div className={`hidden md:block ${isEven ? 'md:col-start-3' : 'md:col-start-1'}`} />

              </motion.div>
            </Reveal>
          );
        })}
      </div>

    </div>
  </section>
);
