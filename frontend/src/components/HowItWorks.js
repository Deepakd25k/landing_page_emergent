import { howItWorks } from "@/data/content";
import { Reveal } from "@/components/shared";

export const HowItWorks = () => (
  <section id="how" data-section="how-it-works" className="bg-white py-10 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Inline compact header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-7 sm:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full whitespace-nowrap">
            08 — Process
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-ink tracking-tight">{howItWorks.title}</h2>
        </div>
      </Reveal>

      {/* MOBILE: vertical timeline — all visible, no scroll */}
      <div className="md:hidden relative pl-5">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue via-blue/50 to-blue/20 rounded-full" />

        {howItWorks.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div className="relative flex items-start gap-4 mb-0" data-testid={`step-mobile-${i}`}>
              {/* Dot on the line */}
              <div className="absolute -left-5 top-0.5 flex flex-col items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-blue border-2 border-white shadow-[0_0_0_2px_rgba(13,110,253,0.4)] z-10" />
              </div>

              {/* Card */}
              <div className={`w-full bg-white border border-line rounded-xl px-4 py-3 ${i < howItWorks.steps.length - 1 ? "mb-4" : ""} shadow-soft`}>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[10px] font-bold text-blue bg-blue/10 px-1.5 py-0.5 rounded">{step.number}</span>
                  <h3 className="text-sm font-bold text-ink tracking-tight">{step.title}</h3>
                </div>
                <p className="text-xs text-ink-2 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* DESKTOP: 3-col grid with horizontal connecting line */}
      <div className="hidden md:block relative">
        <div className="absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-blue/0 via-blue/40 to-blue/0" />
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.12}>
              <div
                className="relative bg-white rounded-2xl border border-line p-6 h-full hover:shadow-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
                data-testid={`step-${i}`}
              >
                <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-blue text-white font-mono font-bold text-base shadow-[0_8px_20px_rgba(13,110,253,0.4)]">
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
