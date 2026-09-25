import { deliverables, siteConfig } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";
import { CTAButton } from "@/components/CTAButton";

export const WhatYouGet = () => (
  <section id="pricing" data-section="pricing" data-track-event="ViewContent" className="bg-alt py-10 sm:py-16">
    <div className="max-w-md mx-auto px-4 sm:px-6">
      <SectionHeader align="center" number="07" eyebrow="The Offer" title="Book Your Diagnostic" />

      <Reveal delay={0.1}>
        <div
          className="bg-ink text-white rounded-2xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(5,44,101,0.3)] relative overflow-hidden noise text-center"
          data-testid="value-stack"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue/40 blur-3xl" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{deliverables.stackLabel}</p>
          <p className="font-mono text-3xl sm:text-4xl font-bold mt-1 strike-soft text-white/70 mx-auto">₹{siteConfig.totalValue}</p>
          <div className="my-4 h-px bg-white/15" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">{deliverables.payLabel}</p>
          <div className="flex items-end justify-center gap-3 mt-1">
            <p className="font-mono text-4xl sm:text-5xl font-bold tracking-tight">₹{siteConfig.price}</p>
            <p className="font-mono text-base text-white/50 strike-soft mb-1">₹{siteConfig.originalPrice}</p>
          </div>
          {/* Compact bullet list */}
          <ul className="mt-6 space-y-2 text-sm text-white/80 text-left w-max mx-auto">
            <li>· 60-minute live deep dive</li>
            <li>· The 6 advisory pillars</li>
            <li>· 4 AI automations worth ₹{siteConfig.bonusTotalValue} — free</li>
            <li>· Zero insights? Full refund.</li>
          </ul>
          <CTAButton label={deliverables.cta} location="pricing" className="w-full mt-8" testId="pricing-cta-button" />
        </div>
      </Reveal>
    </div>
  </section>
);
