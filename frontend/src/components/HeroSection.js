import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, TrendingDown } from "lucide-react";
import { hero, siteConfig } from "@/data/content";
import { CTAButton } from "@/components/CTAButton";

const EASE = [0.22, 1, 0.36, 1];

function splitLines(text, lines = 3) {
  const words = text.split(" ");
  const per = Math.ceil(words.length / lines);
  const out = [];
  for (let i = 0; i < words.length; i += per) out.push(words.slice(i, i + per).join(" "));
  return out;
}

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%", rotate: 2 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

const PnlCard = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.9 }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative bg-white rounded-2xl border border-line shadow-[0_30px_80px_rgba(5,44,101,0.18)] p-6 sm:p-7 w-full max-w-md ml-auto"
        data-testid="hero-pnl-card"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-3">Live example</p>
            <p className="font-bold text-ink mt-1">{hero.pnlCard.title}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-danger-bg text-danger">
            <TrendingDown className="w-3.5 h-3.5" /> Bleeding
          </span>
        </div>
        <ul className="divide-y divide-line">
          {hero.pnlCard.rows.map((row, i) => (
            <motion.li
              key={row.label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
              className="flex items-center justify-between py-2.5 text-sm"
            >
              <span className="text-ink-2">{row.label}</span>
              <span className={`font-mono font-bold ${row.tone === "neg" ? "text-danger" : "text-ink"}`}>{row.value}</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t-2 border-ink flex items-center justify-between">
          <span className="font-bold text-ink">{hero.pnlCard.footerLabel}</span>
          <span className="font-mono text-xl font-bold text-danger">{hero.pnlCard.footerValue}</span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 0.5, ease: EASE }}
          style={{ transform: "translateZ(40px)" }}
          className="absolute -bottom-6 -left-4 sm:-left-8 bg-success text-white rounded-xl px-4 py-2.5 shadow-[0_12px_30px_rgba(25,135,84,0.35)] rotate-[-4deg]"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] font-bold opacity-80">{hero.pnlCard.agencyLabel}</p>
          <p className="font-mono font-bold text-lg leading-tight">{hero.pnlCard.agencyValue}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const HeroSection = () => {
  const lines = splitLines(hero.headline, 3);
  return (
    <section id="top" data-section="hero" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-blue/10 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-tint text-blue border border-blue/30 mb-7"
            data-testid="hero-eyebrow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue live-dot" />
            {hero.eyebrow}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink" data-testid="hero-headline">
            {lines.map((line, i) => (
              <MaskedLine key={line} delay={0.25 + i * 0.12}>{line}</MaskedLine>
            ))}
            <MaskedLine delay={0.25 + lines.length * 0.12} className="text-blue mt-2">
              {hero.headlineAccent}
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="mt-7 text-base sm:text-lg text-ink-2 leading-relaxed max-w-xl"
            data-testid="hero-subheadline"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <CTAButton label={hero.cta} location="hero" testId="hero-cta-button" />
            <div className="flex items-center gap-2 text-sm text-ink-3">
              <span className="strike-soft font-mono">₹{siteConfig.originalPrice}</span>
              <span className="font-bold text-ink font-mono">₹{siteConfig.price}</span>
              <span>· {siteConfig.slotsPerMonth} slots/month</span>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-4 flex items-center gap-2 text-xs text-ink-3"
          >
            <ShieldCheck className="w-4 h-4 text-success" /> {hero.ctaSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.35, ease: EASE }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-line pt-8"
            data-testid="hero-trust-bar"
          >
            {hero.trustBar.map((item) => (
              <div key={item.label}>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-ink tracking-tight">{item.metric}</p>
                <p className="text-xs sm:text-sm text-ink-3 mt-1 leading-snug">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block pl-6">
          <PnlCard />
        </div>
      </div>
    </section>
  );
};
