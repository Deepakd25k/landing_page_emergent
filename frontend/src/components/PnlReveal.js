import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export const PnlReveal = () => {
  return (
    <section className="py-12 sm:py-20 bg-ink text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(13,110,253,0.15)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Text Content — compressed on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-danger/20 text-danger-light border border-danger/30 mb-4">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Silent Margin Killers
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Stop Optimizing for ROAS.<br />
              Start Calculating <span className="text-danger-light">RTO Drag</span> &{" "}
              <span className="text-danger-light">Burnt CAC</span>.
            </h2>

            {/* Compressed: 2-line summary instead of long paragraph */}
            <p className="text-ink-3 text-sm sm:text-base leading-relaxed mb-4">
              Agencies celebrate high ROAS. We open your real P&L — every hidden cost, every returned order, every rupee of margin bleeding.
            </p>

            {/* Inline chips instead of numbered list */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue/15 text-blue-light text-xs font-semibold border border-blue/20">① Hidden Costs</span>
              <span className="px-3 py-1 rounded-full bg-danger/15 text-danger-light text-xs font-semibold border border-danger/20">② RTO Drag</span>
              <span className="px-3 py-1 rounded-full bg-success/15 text-success-light text-xs font-semibold border border-success/20">③ True CM2</span>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue/20 blur-[80px] rounded-full" />

            <div className="relative rounded-2xl overflow-hidden border border-line-dark shadow-2xl bg-ink-bg transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
              {/* Browser header mock */}
              <div className="bg-[#f1f3f4] border-b border-[#dadce0] px-4 py-2 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white rounded px-3 py-0.5 text-xs text-ink-2 font-mono flex-1 text-center shadow-sm">
                  D2C_PerOrder_PnL_Master.xlsx
                </div>
              </div>

              <img
                src="/images/pnl-screenshot.png"
                alt="Per-Order P&L Audit Sheet"
                className="w-full h-auto block"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/1a1d24/ffffff?text=Save+your+screenshot+as+%0A/images/pnl-screenshot.png";
                }}
              />
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute -bottom-5 -left-4 sm:-left-8 bg-danger text-white px-4 py-2.5 rounded-xl shadow-xl border border-danger-light/30"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-90 mb-0.5">The Real Audit</p>
              <p className="font-mono text-base font-bold">CM2 = -₹114</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
