import { motion } from "framer-motion";
import { deliverables, siteConfig } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";
import { CTAButton } from "@/components/CTAButton";

export const WhatYouGet = () => (
  <section id="pricing" data-section="pricing" data-track-event="ViewContent" className="bg-alt py-10 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader number="03" eyebrow="What You Get" title={deliverables.title} />

      <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 lg:gap-12 items-start">

        {/* Pricing card — shows FIRST on mobile via order */}
        <Reveal delay={0.1} className="lg:sticky lg:top-24 order-first lg:order-last">
          <div
            className="bg-ink text-white rounded-2xl p-5 sm:p-8 shadow-[0_30px_80px_rgba(5,44,101,0.3)] relative overflow-hidden noise"
            data-testid="value-stack"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue/40 blur-3xl" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{deliverables.stackLabel}</p>
            <p className="font-mono text-3xl sm:text-4xl font-bold mt-1 strike-soft text-white/70">₹{siteConfig.totalValue}</p>
            <div className="my-4 h-px bg-white/15" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">{deliverables.payLabel}</p>
            <div className="flex items-end gap-3 mt-1">
              <p className="font-mono text-4xl sm:text-5xl font-bold tracking-tight">₹{siteConfig.price}</p>
              <p className="font-mono text-base text-white/50 strike-soft mb-1">₹{siteConfig.originalPrice}</p>
            </div>
            {/* Compact bullet list */}
            <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-white/80">
              <li>· 60-minute live deep dive</li>
              <li>· 6 deliverables, delivered on call</li>
              <li>· 4 AI automations worth ₹{siteConfig.bonusTotalValue} — free</li>
              <li>· Zero insights? Full refund.</li>
            </ul>
            <CTAButton label={deliverables.cta} location="pricing" className="w-full mt-5" testId="pricing-cta-button" />
          </div>
        </Reveal>

        {/* Deliverables grid — 2 cols even on mobile */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 order-last lg:order-first">
          {deliverables.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full bg-blue-tint rounded-xl p-3.5 sm:p-5 border border-blue/15 hover:border-blue/40 hover:shadow-hover transition-[border-color,box-shadow] duration-300"
                data-testid={`deliverable-${i}`}
              >
                <div className="flex items-start justify-between gap-1">
                  <span className="font-mono text-[10px] font-bold text-blue">0{i + 1}</span>
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold text-ink-3 bg-white px-1.5 py-0.5 rounded">₹{item.value}</span>
                </div>
                <h3 className="mt-2.5 font-bold text-ink text-sm sm:text-base tracking-tight leading-snug">{item.name}</h3>
                <p className="mt-1 text-xs text-ink-2 leading-relaxed line-clamp-2">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </div>
  </section>
);
