import { motion } from "framer-motion";
import { deliverables } from "@/data/content";
import { Reveal } from "@/components/shared";

export const AdvisoryPillars = () => (
  <section id="advisory" data-section="advisory-pillars" className="bg-white py-12 sm:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <Reveal>
        <div className="relative bg-[#f8f9fb] rounded-[2rem] border border-line p-6 sm:p-16 overflow-hidden">
          
          {/* Subtle dot grid background */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 mb-6 sm:mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue" />
              <span className="text-[10px] sm:text-xs font-bold text-ink-2 uppercase tracking-wide">06 — The Advisory Framework</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.1] mb-12 text-center max-w-2xl mx-auto">
              60 Minutes. Raw Truth. <span className="text-blue">Zero Fluff.</span>
            </h2>

            {/* Grid of Deliverables */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 w-full text-left">
              {deliverables.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-line shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue/20 group-hover:bg-blue transition-colors" />
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-tint text-blue flex items-center justify-center border border-blue/20 font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-ink-3 bg-ink-bg px-2 py-1 rounded">
                      Value: ₹{item.value}
                    </span>
                  </div>
                  <h3 className="font-bold text-ink text-base sm:text-lg mb-2 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
