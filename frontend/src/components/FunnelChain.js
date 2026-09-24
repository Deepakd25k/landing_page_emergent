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
  <section id="funnel" data-section="funnel-chain" className="bg-white py-12 sm:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <Reveal>
        <div className="mb-10 md:mb-16 md:text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-3 py-1.5 rounded-full inline-block mb-3">
            The Funnel Gap
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight">
            "Ads → Orders → Profit" sounds simple.<br className="hidden md:block" />
            <span className="text-blue">The real chain has 6 links.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-ink-2 leading-relaxed max-w-2xl md:mx-auto">
            Most D2C brands have <strong>only 1 link built.</strong> We audit all 6.
          </p>
        </div>
      </Reveal>

      {/* Chain */}
      <div className="relative pl-1 md:pl-0">
        {/* Vertical line: Left on mobile, Center on desktop */}
        <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#22c55e] via-[#f59e0b] to-[#f43f5e] opacity-30 rounded-full" />

        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <Reveal key={step.num} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                className={`group relative flex items-center gap-3 mb-5 md:mb-10 z-10 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12`}
                data-testid={`funnel-step-${i}`}
              >
                {/* MOBILE DOT (Hidden on desktop) */}
                <div className="md:hidden w-5 flex-shrink-0 flex flex-col items-center">
                  <div className={`w-5 h-5 rounded-full ${step.status.dot} ${step.status.ring} flex items-center justify-center bg-white`}>
                    {step.status === STATUS.BUILT && (
                      <span className="material-icons-round text-white text-[10px]">check</span>
                    )}
                  </div>
                </div>

                {/* CARD */}
                <div className={`w-[88px] h-[72px] md:w-[160px] md:h-[110px] flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border border-line shadow-soft bg-white transition-transform duration-500 group-hover:scale-105 group-hover:shadow-card ${isEven ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-3 md:justify-self-start'}`}>
                  {/* Scale up the preview content on desktop */}
                  <div className="w-full h-full md:scale-125 md:origin-top-left">
                    {step.preview}
                  </div>
                </div>

                {/* DESKTOP DOT (Hidden on mobile) */}
                <div className="hidden md:flex w-10 flex-shrink-0 flex-col items-center justify-center col-start-2">
                  <div className={`w-10 h-10 rounded-full ${step.status.dot} shadow-[0_0_0_6px_rgba(255,255,255,1)] flex items-center justify-center bg-white z-10 transition-transform duration-500 group-hover:scale-125`}>
                    {step.status === STATUS.BUILT && (
                      <span className="material-icons-round text-white text-[16px]">check</span>
                    )}
                  </div>
                </div>

                {/* TEXT */}
                <div className={`flex-1 min-w-0 flex flex-col justify-center ${isEven ? 'md:col-start-3 md:items-start' : 'md:col-start-1 md:row-start-1 md:items-end'}`}>
                  <div className={`flex items-center gap-1.5 md:gap-2 min-w-0 mb-1.5 md:mb-2 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <span className={`material-icons-round text-blue text-base md:text-2xl flex-shrink-0 transition-transform duration-500 ${isEven ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}>{step.icon}</span>
                    <div className={`flex flex-col ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <p className="text-[10px] md:text-xs font-bold text-ink-3 uppercase tracking-wider leading-none mb-0.5">{step.num}</p>
                      <p className="text-sm md:text-xl font-extrabold text-ink tracking-tight leading-snug">{step.title}</p>
                    </div>
                  </div>
                  <span className={`flex-shrink-0 text-[9px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full border ${step.status.badgeBg} ${step.status.textColor} whitespace-nowrap`}>
                    {step.badge}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Legend */}
      <Reveal delay={0.2}>
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-[10px] md:text-xs font-bold text-ink-2 px-1">
          <div className="flex items-center gap-4">
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
          <p className="text-[11px] md:text-xs text-ink-3 italic">
            Tap a missing link to see what belongs there.
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
