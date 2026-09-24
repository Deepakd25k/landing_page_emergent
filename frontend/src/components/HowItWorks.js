import { howItWorks } from "@/data/content";
import { Reveal } from "@/components/shared";

const stepColors = [
  { bg: "bg-blue", shadow: "shadow-[0_8px_20px_rgba(13,110,253,0.4)]", dot: "bg-blue" },
  { bg: "bg-ink", shadow: "shadow-[0_8px_20px_rgba(5,44,101,0.3)]", dot: "bg-ink" },
  { bg: "bg-blue", shadow: "shadow-[0_8px_20px_rgba(13,110,253,0.4)]", dot: "bg-blue" },
];

export const HowItWorks = () => (
  <section id="how" data-section="how-it-works" className="bg-white py-10 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header — inline, tight */}
      <Reveal>
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full">08 — Process</span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-ink tracking-tight">{howItWorks.title}</h2>
        </div>
      </Reveal>

      {/* MOBILE: horizontal scroll cards */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:hidden" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {howItWorks.steps.map((step, i) => (
          <div
            key={step.number}
            className="flex-shrink-0 w-[72vw] max-w-[260px] bg-white rounded-2xl border border-line p-4 shadow-soft relative"
          >
            {/* Step number badge */}
            <span className={`inline-grid place-items-center w-10 h-10 rounded-xl ${stepColors[i].bg} text-white font-mono font-bold text-sm ${stepColors[i].shadow}`}>
              {step.number}
            </span>

            {/* Arrow connector (not on last) */}
            {i < howItWorks.steps.length - 1 && (
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 text-blue font-bold text-lg z-10">›</span>
            )}

            <h3 className="mt-3 text-base font-bold text-ink tracking-tight leading-snug">{step.title}</h3>
            <p className="mt-1.5 text-xs text-ink-2 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
      {/* Swipe hint */}
      <p className="text-[10px] text-ink-3 mt-2 md:hidden text-center tracking-wide">← swipe →</p>

      {/* DESKTOP: 3-col grid with connecting line */}
      <div className="hidden md:block relative">
        <div className="absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-blue/0 via-blue/40 to-blue/0" />
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div
                className="relative bg-white rounded-2xl border border-line p-6 h-full hover:shadow-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
                data-testid={`step-${i}`}
              >
                <span className={`inline-grid place-items-center w-12 h-12 rounded-xl ${stepColors[i].bg} text-white font-mono font-bold text-base ${stepColors[i].shadow}`}>
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </div>
  </section>
);
