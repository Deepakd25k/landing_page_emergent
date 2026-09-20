import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.75, ease: EASE, delay }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ number, eyebrow, title, align = "left", light = false, children }) => (
  <Reveal className={`mb-12 sm:mb-16 ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
    <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
      <span className={`font-mono text-xs font-bold tracking-[0.25em] ${light ? "text-blue-300" : "text-blue"}`}>{number}</span>
      <span className={`h-px w-10 ${light ? "bg-white/30" : "bg-blue/40"}`} />
      <span className={`text-xs uppercase font-bold tracking-[0.2em] ${light ? "text-white/60" : "text-ink-3"}`}>{eyebrow}</span>
    </div>
    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.1] ${light ? "text-white" : "text-ink"}`}>
      {title}
    </h2>
    {children}
  </Reveal>
);

export function scrollToBooking() {
  const target = document.getElementById("book");
  if (!target) return;
  if (window.__lenis) window.__lenis.scrollTo(target, { offset: -72, duration: 1.4 });
  else target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;
  if (window.__lenis) window.__lenis.scrollTo(target, { offset: -72, duration: 1.2 });
  else target.scrollIntoView({ behavior: "smooth" });
}
