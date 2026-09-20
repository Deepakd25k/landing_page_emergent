import { howItWorks } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const HowItWorks = () => (
  <section id="how" data-section="how-it-works" className="bg-alt py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="08" eyebrow="Process" title={howItWorks.title} />
      <div className="relative grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-blue/0 via-blue/50 to-blue/0" />
        {howItWorks.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <div className="relative bg-white rounded-2xl border border-line p-7 sm:p-8 h-full hover:shadow-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300" data-testid={`step-${i}`}>
              <span className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-blue text-white font-mono font-bold text-lg shadow-[0_10px_25px_rgba(13,110,253,0.35)]">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-ink-2 leading-relaxed">{step.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
