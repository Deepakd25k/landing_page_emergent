import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";
import { painPoints } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const PainPoints = () => (
  <section id="pain" data-section="pain-points" className="bg-alt py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="01" eyebrow="The Leak" title={painPoints.title} />
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {painPoints.cards.map((card, i) => (
          <Reveal key={card.agencySays} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="h-full bg-white rounded-2xl border border-line shadow-soft hover:shadow-hover transition-shadow duration-300 overflow-hidden"
              data-testid={`pain-card-${i}`}
            >
              <div className="p-6 sm:p-8 border-b border-dashed border-line relative">
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-danger" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-danger flex items-center gap-2">
                  <Quote className="w-3.5 h-3.5" /> Agency says
                </p>
                <p className="mt-3 text-xl sm:text-2xl font-bold text-ink tracking-tight">{card.agencySays}</p>
              </div>
              <div className="p-6 sm:p-8 bg-success-bg/40 relative">
                <span className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-success" />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-success flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> Reality
                </p>
                <p className="mt-3 text-base text-ink-2 leading-relaxed">{card.reality}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12 sm:mt-16">
        <p className="text-lg sm:text-2xl font-bold text-ink tracking-tight max-w-3xl border-l-4 border-blue pl-5" data-testid="pain-closer">
          {painPoints.closer}
        </p>
      </Reveal>
    </div>
  </section>
);
