import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";
import { painPoints } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const PainPoints = () => (
  <section id="pain" data-section="pain-points" className="bg-alt py-10 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="01" eyebrow="The Leak" title={painPoints.title} />
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
        {painPoints.cards.map((card, i) => (
          <Reveal key={card.agencySays} delay={i * 0.06}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full bg-white rounded-2xl border border-line shadow-soft overflow-hidden"
              data-testid={`pain-card-${i}`}
            >
              {/* Agency Says — compact top strip */}
              <div className="px-4 py-3 border-b border-dashed border-line relative">
                <span className="absolute left-0 top-0 bottom-0 w-1 rounded-r bg-danger" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-danger flex items-center gap-1.5 mb-1">
                  <Quote className="w-3 h-3" /> Agency says
                </p>
                <p className="text-base sm:text-lg font-bold text-ink tracking-tight leading-snug">{card.agencySays}</p>
              </div>
              {/* Reality — compact bottom */}
              <div className="px-4 py-3 bg-success-bg/40 relative">
                <span className="absolute left-0 top-0 bottom-0 w-1 rounded-r bg-success" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-success flex items-center gap-1.5 mb-1">
                  <AlertTriangle className="w-3 h-3" /> Reality
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">{card.reality}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-8 sm:mt-10">
        <p className="text-base sm:text-xl font-bold text-ink tracking-tight max-w-3xl border-l-4 border-blue pl-4" data-testid="pain-closer">
          {painPoints.closer}
        </p>
      </Reveal>
    </div>
  </section>
);
