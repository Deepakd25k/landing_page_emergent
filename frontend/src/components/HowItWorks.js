import { motion } from "framer-motion";
import {
  CreditCard, Smartphone, Wifi,
  FileText, BarChart2, DollarSign,
  TrendingUp, Map, Bot,
} from "lucide-react";
import { Reveal } from "@/components/shared";

const steps = [
  {
    number: "01",
    timeLabel: "BEFORE CALL",
    title: "Book & Pay",
    desc: (
      <>
        Pick your slot and pay <strong>₹1,999</strong>. You'll get a calendar
        invite + pre-diagnostic form <strong>instantly</strong>.
      </>
    ),
    chips: [
      { icon: CreditCard,   label: "UPI / Card" },
      { icon: Smartphone,   label: "Razorpay Secure" },
      { icon: Wifi,         label: "Instant Confirm" },
    ],
  },
  {
    number: "02",
    timeLabel: "SAME DAY",
    title: "Fill the Form",
    desc: (
      <>
        10-minute form. Ad accounts, revenue, real costs.{" "}
        <strong>No fluff</strong> — so we don't waste a second on the call.
      </>
    ),
    chips: [
      { icon: BarChart2,    label: "Ad Accounts" },
      { icon: DollarSign,   label: "Real Costs" },
      { icon: FileText,     label: "Revenue Data" },
    ],
  },
  {
    number: "03",
    timeLabel: "ON THE CALL",
    title: "60-Min Deep Dive",
    desc: (
      <>
        Live P&L breakdown. Your <strong>true CM2</strong> exposed. A{" "}
        <strong>90-day roadmap</strong> + 4 AI automations — all yours by the
        end of the call.
      </>
    ),
    chips: [
      { icon: TrendingUp,   label: "P&L Live" },
      { icon: Map,          label: "90-Day Roadmap" },
      { icon: Bot,          label: "4 Automations" },
    ],
  },
];

export const HowItWorks = () => (
  <section id="how" data-section="how-it-works" className="bg-white py-10 sm:py-16">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Compact inline header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full whitespace-nowrap">
            08 — Process
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-ink tracking-tight">3 Simple Steps.</h2>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue via-blue/40 to-blue/10 rounded-full" />

        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <motion.div
              className="relative flex gap-5 mb-8 last:mb-0"
              data-testid={`step-${i}`}
            >
              {/* Circle node */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-blue shadow-[0_0_0_4px_rgba(13,110,253,0.12)] flex items-center justify-center z-10">
                  <span className="font-mono text-xs font-bold text-blue">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-1 pb-2 flex-1">
                {/* Time label */}
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-3 mb-1">
                  {step.timeLabel}
                </p>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-ink tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  {step.desc}
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2">
                  {step.chips.map((chip) => {
                    const Icon = chip.icon;
                    return (
                      <span
                        key={chip.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-line bg-ink-bg text-xs font-semibold text-ink-2"
                      >
                        <Icon className="w-3 h-3 text-blue" />
                        {chip.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}

      </div>
    </div>
  </section>
);
