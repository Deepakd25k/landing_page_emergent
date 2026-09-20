import { whyNow } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const WhyNow = () => (
  <section id="why" data-section="why-now" className="bg-alt py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="06" eyebrow="Why Now" title={whyNow.title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-line rounded-2xl overflow-hidden border border-line" data-testid="why-now-stats">
        {whyNow.stats.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07} className="bg-white p-6 sm:p-7 hover:bg-blue-tint transition-colors duration-300 group">
            <p className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-blue group-hover:scale-105 origin-left transition-transform duration-300">{item.stat}</p>
            <p className="mt-3 text-sm text-ink-2 leading-snug">{item.label}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-12 sm:mt-16">
        <p className="text-xl sm:text-3xl font-extrabold text-ink tracking-tight max-w-4xl leading-tight" data-testid="why-now-closer">
          {whyNow.closer}
        </p>
      </Reveal>
    </div>
  </section>
);
