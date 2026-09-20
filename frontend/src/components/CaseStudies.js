import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

const Metric = ({ label, before, after }) => (
  <div className="bg-white rounded-xl border border-line p-4">
    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink-3">{label}</p>
    <div className="mt-2 flex items-center gap-2 sm:gap-3">
      <span className="font-mono text-base sm:text-lg font-bold text-danger">{before}</span>
      <ArrowRight className="w-4 h-4 text-ink-3 shrink-0" />
      <span className="font-mono text-lg sm:text-2xl font-bold text-success">{after}</span>
    </div>
  </div>
);

export const CaseStudies = () => (
  <section id="cases" data-section="case-studies" data-track-event="ViewContent_CaseStudy" className="bg-white py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="05" eyebrow="Proof" title={caseStudies.title} />
      <div className="space-y-8">
        {caseStudies.studies.map((study, i) => (
          <Reveal key={study.category} delay={i * 0.1}>
            <article className="grid lg:grid-cols-[0.9fr_1.1fr] rounded-3xl border border-line overflow-hidden shadow-card bg-alt" data-testid={`case-study-${i}`}>
              <div className="p-7 sm:p-10 bg-white">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-tint text-blue">{study.category}</span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-danger">The problem</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-ink leading-snug">{study.problem}</h3>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink-3">What we did</p>
                <ul className="mt-3 space-y-3">
                  {study.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3 text-sm sm:text-base text-ink-2 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-success shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 sm:p-10">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
                  <span className="text-danger">Before</span>
                  <span className="text-success">After 90 days</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {Object.keys(study.metrics.before).map((key) => (
                    <Metric key={key} label={caseStudies.metricLabels[key] || key} before={study.metrics.before[key]} after={study.metrics.after[key]} />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
