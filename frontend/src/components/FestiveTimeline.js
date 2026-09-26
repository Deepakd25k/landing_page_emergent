import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { festiveReality } from "@/data/content";

const EASE = [0.22, 1, 0.36, 1];

export const FestiveTimeline = () => (
  <section id="festive" data-section="festive-timeline" className="bg-ink text-white py-12 sm:py-24 relative overflow-hidden">
    {/* Background glow effects */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-danger/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-orange-500/10 blur-[120px] pointer-events-none" />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Header */}
      <Reveal>
        <div className="mb-10 md:mb-16 md:text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-danger border border-danger/30 bg-danger/10 px-3 py-1.5 rounded-full inline-block mb-3">
            URGENT REALITY CHECK
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {festiveReality.title}
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/60 leading-relaxed max-w-2xl md:mx-auto">
            {festiveReality.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Chain */}
      <div className="relative pl-2 md:pl-0">
        {/* Vertical line: Left on mobile, Center on desktop */}
        <div className="absolute left-[17px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-danger via-orange-500 to-danger opacity-40 rounded-full" />

        {festiveReality.facts.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={step.num} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className={`group relative flex items-start gap-4 mb-8 md:mb-16 z-10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 md:items-center`}
              >
                {/* CARD */}
                <div className={`flex-1 md:flex-none p-5 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-danger/30 ${isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-3 md:text-left'} order-2 md:order-none`}>
                  <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="material-icons-round text-danger text-xl md:text-2xl">{step.icon}</span>
                    <h3 className="text-base md:text-xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-white/60 leading-relaxed">
                    {step.reality}
                  </p>
                </div>

                {/* DOT */}
                <div className="w-8 flex-shrink-0 flex flex-col items-center col-start-2 order-1 md:order-none mt-1 md:mt-0">
                  <div className={`w-8 h-8 rounded-full shadow-[0_0_0_6px_rgba(239,68,68,0.2)] flex items-center justify-center bg-danger z-10 transition-transform duration-500 group-hover:scale-125`}>
                     <span className="text-[10px] font-bold text-white">{step.num}</span>
                  </div>
                </div>

              </motion.div>
            </Reveal>
          );
        })}
      </div>

    </div>
  </section>
);
