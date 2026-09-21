import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export const PnlReveal = () => {
  return (
    <section className="py-20 sm:py-32 bg-ink text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(13,110,253,0.15)_0%,transparent_70%)]" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-danger/20 text-danger-light border border-danger/30 mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Silent Margin Killers
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Stop Optimizing for ROAS.<br />
              Start Calculating <span className="text-danger-light">RTO Drag</span> & <span className="text-danger-light">Burnt CAC</span>.
            </h2>
            
            <p className="text-ink-3 text-lg leading-relaxed mb-8">
              This is an actual screenshot of our internal <strong>Per-Order P&L Audit Sheet</strong>. While agencies celebrate high ROAS, we look at the raw truth. If you aren't factoring in the compounding cost of returned orders (<span className="text-danger-light font-bold">RTO Drag</span>) and the marketing money wasted on them (<span className="text-danger-light font-bold">Burnt CAC</span>), your CM2 is likely negative.
            </p>
            
            <ul className="space-y-4 text-sm sm:text-base text-ink-2">
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-blue/20 text-blue-light flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                <span>We map out every hidden cost: PG Fees, Forward Freight, and Packaging.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-danger/20 text-danger-light flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                <span>We calculate your exact <strong className="text-white">RTO Drag</strong> to show how much margin is bleeding.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-success/20 text-success-light flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                <span>We find your true <strong className="text-white">CM2 (Net Profit)</strong> so you know exactly when to scale.</span>
              </li>
            </ul>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-blue/20 blur-[80px] rounded-full" />
            
            <div className="relative rounded-2xl overflow-hidden border border-line-dark shadow-2xl bg-ink-bg transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
              {/* Browser/Excel Header Mock */}
              <div className="bg-[#f1f3f4] border-b border-[#dadce0] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-white rounded px-3 py-1 text-xs text-ink-2 font-mono flex-1 text-center shadow-sm">
                  D2C_PerOrder_PnL_Master.xlsx
                </div>
              </div>
              
              {/* Actual Screenshot */}
              <img 
                src="/images/pnl-screenshot.png" 
                alt="Per-Order P&L Audit Sheet" 
                className="w-full h-auto block"
                onError={(e) => {
                  e.target.src = "https://placehold.co/800x600/1a1d24/ffffff?text=Save+your+screenshot+as+%0A/images/pnl-screenshot.png";
                }}
              />
            </div>
            
            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 sm:-left-10 bg-danger text-white px-5 py-3 rounded-xl shadow-xl border border-danger-light/30"
            >
              <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-0.5">The Real Audit</p>
              <p className="font-mono text-lg font-bold">CM2 = -₹114</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
