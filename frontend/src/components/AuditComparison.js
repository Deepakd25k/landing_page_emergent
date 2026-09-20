import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { comparison } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const AuditComparison = () => (
  <section id="compare" data-section="comparison" className="bg-white py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="02" eyebrow="The Difference" title={comparison.title} />
      <Reveal>
        <div className="rounded-2xl border border-line overflow-hidden shadow-card" data-testid="comparison-table">
          <div className="grid grid-cols-2 text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
            <div className="bg-alt text-ink-3 px-5 sm:px-8 py-4">{comparison.leftHeading}</div>
            <div className="bg-blue text-white px-5 sm:px-8 py-4">{comparison.rightHeading}</div>
          </div>
          {comparison.rows.map((row, i) => (
            <motion.div
              key={row.normal}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-2 border-t border-line group"
              data-testid={`comparison-row-${i}`}
            >
              <div className="px-5 sm:px-8 py-5 flex items-start gap-3 text-sm sm:text-base text-ink-3 bg-white">
                <X className="w-4 h-4 mt-1 shrink-0 text-danger" />
                <span className="strike-soft decoration-danger/40">{row.normal}</span>
              </div>
              <div className="px-5 sm:px-8 py-5 flex items-start gap-3 text-sm sm:text-base text-ink font-medium bg-blue-tint/60 group-hover:bg-blue-tint transition-colors duration-300">
                <Check className="w-4 h-4 mt-1 shrink-0 text-success" />
                <span>{row.ours}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.15} className="mt-10 sm:mt-14">
        <p className="text-lg sm:text-2xl font-bold text-ink tracking-tight max-w-3xl border-l-4 border-blue pl-5" data-testid="comparison-closer">
          {comparison.closer}
        </p>
      </Reveal>
    </div>
  </section>
);
