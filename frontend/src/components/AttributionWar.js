import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

export const AttributionWar = () => {
  return (
    <section id="attribution" className="bg-ink py-16 sm:py-24 overflow-hidden text-white relative">
      {/* Background glow for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-danger/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <Reveal>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-danger border border-danger/30 bg-danger/10 px-3 py-1.5 rounded-full inline-block mb-4">
              04 — The Big Data Lie
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              The Attribution War: Why Your Agencies Are Both Claiming Credit.
            </h2>
            <p className="text-ink-3 text-lg sm:text-xl">
              You are paying two different agencies for the exact same sale. Here is how the trap works.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {/* The Customer Journey */}
            <div className="mb-10 text-center">
              <h3 className="text-sm font-bold text-ink-3 uppercase tracking-wider mb-6">Real Customer Journey</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="bg-ink px-4 py-3 rounded-lg border border-white/5 shadow-md flex flex-col items-center min-w-[140px]">
                  <span className="text-2xl mb-1">📱</span>
                  <span className="text-xs text-ink-3 font-mono">Step 1</span>
                  <span className="font-bold text-sm">Sees Meta Ad</span>
                </div>
                <div className="w-[2px] h-6 sm:w-8 sm:h-[2px] bg-white/20"></div>
                <div className="bg-ink px-4 py-3 rounded-lg border border-white/5 shadow-md flex flex-col items-center min-w-[140px]">
                  <span className="text-2xl mb-1">🔍</span>
                  <span className="text-xs text-ink-3 font-mono">Step 2</span>
                  <span className="font-bold text-sm">Googles Brand</span>
                </div>
                <div className="w-[2px] h-6 sm:w-8 sm:h-[2px] bg-white/20"></div>
                <div className="bg-ink px-4 py-3 rounded-lg border border-white/5 shadow-md flex flex-col items-center min-w-[140px]">
                  <span className="text-2xl mb-1">💻</span>
                  <span className="text-xs text-ink-3 font-mono">Step 3</span>
                  <span className="font-bold text-sm">Clicks Google Ad</span>
                </div>
                <div className="w-[2px] h-6 sm:w-8 sm:h-[2px] bg-white/20"></div>
                <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 px-4 py-3 rounded-lg flex flex-col items-center min-w-[140px]">
                  <span className="text-2xl mb-1">🛒</span>
                  <span className="text-xs text-[#22c55e] font-mono">Result</span>
                  <span className="font-bold text-sm text-[#22c55e]">Buys for ₹2,000</span>
                </div>
              </div>
            </div>

            {/* The War (Dashboards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              
              {/* VS Divider */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] p-2 z-10 hidden sm:block">
                <span className="bg-danger/20 text-danger text-xs font-bold px-2 py-1 rounded">VS</span>
              </div>

              {/* Meta Side */}
              <div className="bg-[#121212] border border-blue/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue"></div>
                <h4 className="font-mono text-sm text-blue mb-4">META ADS MANAGER</h4>
                <p className="text-xl font-bold mb-2">"We got this sale."</p>
                <p className="text-sm text-ink-3 mb-4">(7-day click / 1-day view attribution)</p>
                <div className="bg-white/5 rounded p-3 flex justify-between items-center border border-white/5">
                  <span className="text-sm text-ink-3">Reported Revenue:</span>
                  <span className="font-bold text-[#22c55e]">₹2,000</span>
                </div>
              </div>

              {/* Google Side */}
              <div className="bg-[#121212] border border-[#fbbc05]/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#fbbc05]"></div>
                <h4 className="font-mono text-sm text-[#fbbc05] mb-4">GOOGLE ADS DASHBOARD</h4>
                <p className="text-xl font-bold mb-2">"No, WE got this sale."</p>
                <p className="text-sm text-ink-3 mb-4">(Data-Driven / Last-click attribution)</p>
                <div className="bg-white/5 rounded p-3 flex justify-between items-center border border-white/5">
                  <span className="text-sm text-ink-3">Reported Revenue:</span>
                  <span className="font-bold text-[#22c55e]">₹2,000</span>
                </div>
              </div>

            </div>

            {/* The Reality */}
            <div className="mt-8 bg-danger/10 border border-danger/30 rounded-xl p-6 text-center">
              <h4 className="text-danger font-bold uppercase tracking-widest text-sm mb-2">The D2C Trap</h4>
              <p className="text-lg sm:text-xl font-medium leading-relaxed">
                Agency dashboards report <span className="line-through text-ink-3">₹4,000</span> in total revenue.<br />
                Your Shopify and Bank only see <span className="font-bold text-white">₹2,000</span>.<br />
                <span className="text-danger mt-2 block">You are calculating ROAS on ghost revenue.</span>
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};
