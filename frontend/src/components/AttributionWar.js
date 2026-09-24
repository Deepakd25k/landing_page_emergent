import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared";

export const AttributionWar = () => {
  return (
    <section id="attribution" className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Reveal>
          <div className="relative bg-[#f8f9fb] rounded-[2rem] border border-line p-6 sm:p-16 text-center overflow-hidden shadow-sm">
            
            {/* Subtle dot grid background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 mb-6 sm:mb-8 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-danger" />
                <span className="text-[10px] sm:text-xs font-bold text-ink-2 uppercase tracking-wide">04 — The Big Data Lie</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.1] mb-12">
                The Attribution War.
              </h2>

              {/* Single Flow Timeline */}
              <div className="w-full max-w-lg mx-auto flex flex-col items-center">
                
                {/* Step 1 */}
                <div className="bg-white border border-line rounded-xl p-4 w-full shadow-sm">
                  <p className="font-bold text-ink text-sm sm:text-base flex items-center justify-center gap-2">
                    <span className="text-xl">🛒</span> Customer buys a shirt for <span className="text-[#22c55e]">₹2,000</span>.
                  </p>
                </div>

                <div className="h-6 sm:h-8 w-[2px] bg-line flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-ink-3 bg-[#f8f9fb]" />
                </div>

                {/* Step 2 */}
                <div className="bg-white border-2 border-blue/20 rounded-xl p-4 w-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue" />
                  <p className="font-bold text-ink text-sm sm:text-base">
                    Meta claims the sale.
                  </p>
                  <p className="text-xs sm:text-sm text-ink-3 mt-1">"They saw our ad 2 days ago."</p>
                </div>

                <div className="h-6 sm:h-8 w-[2px] bg-line flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-ink-3 bg-[#f8f9fb]" />
                </div>

                {/* Step 3 */}
                <div className="bg-white border-2 border-[#fbbc05]/30 rounded-xl p-4 w-full shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#fbbc05]" />
                  <p className="font-bold text-ink text-sm sm:text-base">
                    Google claims the sale.
                  </p>
                  <p className="text-xs sm:text-sm text-ink-3 mt-1">"They searched your brand today."</p>
                </div>

                <div className="h-6 sm:h-8 w-[2px] bg-line flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-ink-3 bg-[#f8f9fb]" />
                </div>

                {/* Step 4 */}
                <div className="bg-danger/10 border border-danger/20 rounded-xl p-4 w-full">
                  <p className="font-bold text-danger text-sm sm:text-base">
                    You pay agency commissions on BOTH.
                  </p>
                </div>

                <div className="h-8 sm:h-12 w-[2px] bg-line border-dashed border-l-2 border-transparent"></div>

                {/* The Trap */}
                <div className="bg-ink text-white rounded-2xl p-6 sm:p-8 w-full shadow-lg">
                  <h4 className="text-danger font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3">The Result</h4>
                  <p className="text-base sm:text-lg font-medium leading-relaxed">
                    Dashboards show <span className="line-through text-ink-3">₹4,000</span> revenue.<br />
                    Your bank gets <span className="text-[#22c55e] font-bold">₹2,000</span>.<br />
                    <span className="text-white mt-4 block font-bold text-lg sm:text-xl border-t border-white/10 pt-4">You are scaling on ghost revenue.</span>
                  </p>
                </div>

              </div>

              {/* CTA Button */}
              <div className="mt-12 w-full flex justify-center">
                <a href="https://rzp.io/l/foxads" target="_blank" rel="noopener noreferrer" className="group w-full max-w-md bg-blue text-white rounded-xl py-4 px-6 flex items-center justify-center gap-2 text-sm sm:text-base font-bold shadow-[0_8px_20px_-4px_rgba(13,110,253,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(13,110,253,0.5)] hover:-translate-y-0.5 transition-all duration-300">
                  Find Your Real CM2 — ₹1,999
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
