import { motion } from "framer-motion";

export const PMAttribution = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
            The 48-Hour Trap & <br />
            <span className="text-blue">The Attribution Secret</span>
          </h2>
          <p className="text-white/60 text-lg font-medium">
            We don't guess. We built a system to read the lost signals and move faster.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-3xl font-black tracking-tighter text-white mb-6">Blindly Killing Winners</h3>
              <p className="text-white/70 mb-6 font-medium leading-relaxed">
                Most marketers kill creatives after 3-4 days based on low initial CTRs. What they don't know: <strong>40% to 60% of signals are lost</strong> due to attribution gaps.
              </p>
              <p className="text-white/70 font-medium leading-relaxed">
                That "failing" creative they just paused? It might have been your biggest winner, suffering from signal loss. They are flying blind. We are not.
              </p>
            </div>
            
            <div className="bg-[#0A0A0A] rounded-[2rem] p-8 border border-white/5">
              <h4 className="text-xl font-black tracking-tighter text-white mb-6">How We Fix It</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center shrink-0 text-blue font-black text-sm mt-1">1</div>
                  <p className="text-white/60 font-medium leading-relaxed">We don't rely solely on pixel data. We map the exact touchpoints that standard Meta/Google tracking misses entirely.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue/20 flex items-center justify-center shrink-0 text-blue font-black text-sm mt-1">2</div>
                  <p className="text-white/60 font-medium leading-relaxed">We read the math beyond the dashboard. We know exactly when to hold a creative and when to scale it aggressively.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
