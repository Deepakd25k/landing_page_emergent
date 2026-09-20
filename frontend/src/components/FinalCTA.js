import { Clock3, ShieldCheck } from "lucide-react";
import { finalCta } from "@/data/content";
import { Reveal } from "@/components/shared";
import { CTAButton } from "@/components/CTAButton";

export const FinalCTA = () => (
  <section id="final" data-section="final-cta" className="relative bg-blue text-white py-20 sm:py-28 overflow-hidden noise">
    <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-navy/60 blur-[120px]" />
    <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]" />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-4xl" data-testid="final-line1">{finalCta.line1}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 font-mono text-base sm:text-xl text-white/80 tracking-wide">{finalCta.line2}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 text-lg sm:text-2xl font-semibold max-w-3xl flex items-start gap-3">
          <ShieldCheck className="w-7 h-7 shrink-0 mt-0.5" /> {finalCta.line3}
        </p>
      </Reveal>
      <Reveal delay={0.3} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
        <CTAButton label={finalCta.cta} location="final" variant="white" testId="final-cta-button" />
        <p className="flex items-center gap-2 text-sm text-white/85" data-testid="final-scarcity">
          <Clock3 className="w-4 h-4" /> {finalCta.scarcity}
        </p>
      </Reveal>
    </div>
  </section>
);
