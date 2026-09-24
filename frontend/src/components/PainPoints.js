import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";
import { painPoints } from "@/data/content";
import { Reveal } from "@/components/shared";

export const PainPoints = () => (
  <section id="pain" data-section="pain-points" className="bg-alt py-8 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Inline compact header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4 sm:mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-danger border border-danger/30 bg-danger/8 px-2.5 py-1 rounded-full whitespace-nowrap">
            01 — The Leak
          </span>
          <h2 className="text-base sm:text-2xl font-extrabold text-ink tracking-tight leading-tight">
            {painPoints.title}
          </h2>
        </div>
      </Reveal>

      {/* 2×2 grid always — all 4 cards visible on mobile */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {painPoints.cards.map((card, i) => (
          <Reveal key={card.agencySays} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full bg-white rounded-xl border border-line shadow-soft overflow-hidden"
              data-testid={`pain-card-${i}`}
            >
              {/* Agency Says */}
              <div className="px-3 py-2 border-b border-dashed border-line relative">
                <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r bg-danger" />
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-danger flex items-center gap-1 mb-0.5">
                  <Quote className="w-2.5 h-2.5" /> Agency
                </p>
                <p className="text-xs sm:text-sm font-bold text-ink leading-snug line-clamp-2">{card.agencySays}</p>
              </div>
              {/* Reality */}
              <div className="px-3 py-2 bg-success-bg/40 relative">
                <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r bg-success" />
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-success flex items-center gap-1 mb-0.5">
                  <AlertTriangle className="w-2.5 h-2.5" /> Real
                </p>
                <p className="text-[11px] sm:text-xs text-ink-2 leading-relaxed line-clamp-3">{card.reality}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* Closer — tight */}
      <Reveal delay={0.15} className="mt-4 sm:mt-8">
        <p className="text-xs sm:text-lg font-bold text-ink tracking-tight border-l-4 border-blue pl-3" data-testid="pain-closer">
          {painPoints.closer}
        </p>
      </Reveal>

    </div>
  </section>
);
