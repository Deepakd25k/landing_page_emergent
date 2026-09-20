import { motion } from "framer-motion";
import { deliverables, siteConfig } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";
import { CTAButton } from "@/components/CTAButton";

export const WhatYouGet = () => (
  <section id="pricing" data-section="pricing" data-track-event="ViewContent" className="bg-alt py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="03" eyebrow="What You Get" title={deliverables.title} />
      <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-12 items-start">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {deliverables.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full bg-blue-tint rounded-2xl p-6 border border-blue/15 hover:border-blue/40 hover:shadow-hover transition-[border-color,box-shadow] duration-300"
                data-testid={`deliverable-${i}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-blue">0{i + 1}</span>
                  <span className="font-mono text-xs font-bold text-ink-3 bg-white px-2 py-1 rounded-md">₹{item.value}</span>
                </div>
                <h3 className="mt-4 font-bold text-ink text-base sm:text-lg tracking-tight leading-snug">{item.name}</h3>
                <p className="mt-2 text-sm text-ink-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="lg:sticky lg:top-24">
          <div className="bg-ink text-white rounded-3xl p-7 sm:p-9 shadow-[0_30px_80px_rgba(5,44,101,0.3)] relative overflow-hidden noise" data-testid="value-stack">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue/40 blur-3xl" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">{deliverables.stackLabel}</p>
            <p className="font-mono text-4xl sm:text-5xl font-bold mt-2 strike-soft text-white/70">₹{siteConfig.totalValue}</p>
            <div className="my-6 h-px bg-white/15" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">{deliverables.payLabel}</p>
            <div className="flex items-end gap-3 mt-2">
              <p className="font-mono text-5xl sm:text-6xl font-bold tracking-tight">₹{siteConfig.price}</p>
              <p className="font-mono text-lg text-white/50 strike-soft mb-2">₹{siteConfig.originalPrice}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>· 60-minute live deep dive</li>
              <li>· 6 deliverables, delivered on call</li>
              <li>· 4 AI automations worth ₹{siteConfig.bonusTotalValue} — free</li>
              <li>· Zero insights? Full refund.</li>
            </ul>
            <CTAButton label={deliverables.cta} location="pricing" className="w-full mt-8" testId="pricing-cta-button" />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
