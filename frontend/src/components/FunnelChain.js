import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

const EASE = [0.22, 1, 0.36, 1];

// Status types
const STATUS = {
  BUILT:      { label: "BUILT",       dot: "bg-[#22c55e]", ring: "shadow-[0_0_0_3px_rgba(34,197,94,0.2)]",  textColor: "text-[#16a34a]",  badgeBg: "bg-[#dcfce7] border-[#bbf7d0]" },
  HALF:       { label: "HALF-BUILT",  dot: "bg-[#f59e0b]", ring: "shadow-[0_0_0_3px_rgba(245,158,11,0.2)]", textColor: "text-[#b45309]",  badgeBg: "bg-[#fef3c7] border-[#fde68a]" },
  MISSING:    { label: "MISSING",     dot: "bg-white border-2 border-[#f43f5e]", ring: "shadow-[0_0_0_3px_rgba(244,63,94,0.15)]", textColor: "text-[#f43f5e]", badgeBg: "bg-[#fff1f2] border-[#fecdd3]" },
};

const steps = [
  {
    num: "01",
    title: "Ad Creative",
    badge: "Usually running",
    status: STATUS.BUILT,
    icon: "campaign",           // Material Icon
    preview: (
      <div className="w-full h-full flex flex-col items-start justify-between p-2 bg-white rounded-lg">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-[#1877f2] flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">M</span>
          </div>
          <span className="text-[8px] font-semibold text-ink-2">Sponsored</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] ml-auto" />
        </div>
        <div className="w-full h-10 rounded bg-gradient-to-br from-blue/20 to-blue/5 mt-1" />
        <div className="mt-1 w-full bg-blue rounded text-center text-white text-[8px] font-bold py-0.5">Book now</div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Landing Page",
    badge: "Often unoptimised",
    status: STATUS.MISSING,
    icon: "web",
    preview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed border-line rounded-lg bg-ink-bg/50">
        <span className="material-icons-round text-ink-3 text-xl">add</span>
        <span className="text-[8px] text-ink-3 font-semibold">Missing</span>
      </div>
    ),
  },
  {
    num: "03",
    title: "Checkout & COD Flow",
    badge: "Rarely optimised",
    status: STATUS.MISSING,
    icon: "shopping_cart_checkout",
    preview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed border-line rounded-lg bg-ink-bg/50">
        <span className="material-icons-round text-ink-3 text-xl">add</span>
        <span className="text-[8px] text-ink-3 font-semibold">Missing</span>
      </div>
    ),
  },
  {
    num: "04",
    title: "RTO Management",
    badge: "Manual, if at all",
    status: STATUS.HALF,
    icon: "assignment_return",
    preview: (
      <div className="w-full h-full flex flex-col justify-between p-2 bg-[#fffbeb] rounded-lg border border-[#fde68a]">
        <p className="text-[7px] text-[#92400e] italic leading-tight">"Check RTO daily" — sticky note on someone's desk.</p>
        <div className="flex gap-1 mt-1">
          <span className="text-[6px] bg-[#fde68a] text-[#92400e] font-bold px-1 py-0.5 rounded">Day 1</span>
          <span className="text-[6px] bg-[#fde68a] text-[#92400e] font-bold px-1 py-0.5 rounded">Day 3</span>
        </div>
      </div>
    ),
  },
  {
    num: "05",
    title: "Unit Economics",
    badge: "Never tracked",
    status: STATUS.MISSING,
    icon: "calculate",
    preview: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed border-line rounded-lg bg-ink-bg/50">
        <span className="material-icons-round text-ink-3 text-xl">add</span>
        <span className="text-[8px] text-ink-3 font-semibold">Missing</span>
      </div>
    ),
  },
  {
    num: "06",
    title: "Retention & Repeat",
    badge: "Left to chance",
    status: STATUS.HALF,
    icon: "repeat",
    preview: (
      <div className="w-full h-full flex flex-col justify-between p-2 bg-[#fffbeb] rounded-lg border border-[#fde68a]">
        <p className="text-[7px] text-[#92400e] leading-tight font-semibold">Leads → clients?</p>
        <div className="w-full bg-[#fde68a] rounded-full h-1 mt-1">
          <div className="bg-[#f59e0b] h-1 rounded-full w-2/5" />
        </div>
        <div className="flex gap-1 mt-1">
          <span className="text-[6px] bg-[#dcfce7] text-[#166534] font-bold px-1 py-0.5 rounded">Booked</span>
          <span className="text-[6px] bg-[#fff1f2] text-[#f43f5e] font-bold px-1 py-0.5 rounded">No-show</span>
        </div>
      </div>
    ),
  },
];

export const FunnelChain = () => (
  <section id="funnel" data-section="funnel-chain" className="bg-white py-10 sm:py-16">
    <div className="max-w-xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <Reveal>
        <div className="mb-7">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full">
            The Funnel Gap
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight leading-tight">
            "Ads → Orders → Profit" sounds simple.{" "}
            <span className="text-blue">The real chain has 6 links.</span>
          </h2>
          <p className="mt-2 text-sm text-ink-2 leading-relaxed">
            Most D2C brands have <strong>only 1 link built.</strong> We audit all 6.
          </p>
        </div>
      </Reveal>

      {/* Chain */}
      <div className="relative pl-1">
        {/* Vertical line */}
        <div className="absolute left-[13px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#22c55e] via-[#f59e0b] to-[#f43f5e] opacity-40 rounded-full" />

        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className={`flex items-center gap-3 mb-3 last:mb-0 relative z-10`}
              data-testid={`funnel-step-${i}`}
            >
              {/* Left: timeline dot */}
              <div className="w-5 flex-shrink-0 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full ${step.status.dot} ${step.status.ring} flex items-center justify-center bg-white`}>
                  {step.status === STATUS.BUILT && (
                    <span className="material-icons-round text-white text-[10px]">check</span>
                  )}
                </div>
              </div>

              {/* Center: preview card */}
              <div className="w-[88px] h-[72px] flex-shrink-0 rounded-xl overflow-hidden border border-line shadow-soft bg-white">
                {step.preview}
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="material-icons-round text-blue text-base flex-shrink-0">{step.icon}</span>
                    <div>
                      <p className="text-[10px] font-bold text-ink-3 uppercase tracking-wider leading-none mb-0.5">{step.num}</p>
                      <p className="text-sm font-extrabold text-ink tracking-tight leading-snug">{step.title}</p>
                    </div>
                  </div>
                  <span className={`flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full border ${step.status.badgeBg} ${step.status.textColor} whitespace-nowrap`}>
                    {step.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Legend */}
      <Reveal delay={0.15}>
        <div className="mt-6 flex items-center gap-4 text-[10px] font-bold text-ink-2 px-1">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            BUILT
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            HALF-BUILT
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full border-2 border-[#f43f5e] bg-white" />
            MISSING
          </div>
        </div>
        <p className="mt-3 text-[11px] text-ink-3 italic">
          Tap a missing link to see what belongs there.
        </p>
      </Reveal>

    </div>
  </section>
);
