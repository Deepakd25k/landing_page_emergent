import { motion } from "framer-motion";

export const PMExecution = () => {
  return (
    <section className="py-4 sm:py-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5D5FEF]/10 text-[#5D5FEF] text-[11px] font-bold tracking-widest uppercase mb-3">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3 leading-tight">
            The New Standard.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium px-4">
            How we operate differently from every agency you've ever fired.
          </p>
        </div>

        {/* The Massive Single Card */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.04)] border border-slate-100/60 relative overflow-hidden">
          
          {/* Subtle background element inside card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#5D5FEF]/5 to-transparent rounded-bl-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 relative z-10">
            
            {/* Pillar 1 */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">7 Days to Core Math.</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We don't take 3 months to "learn your brand". We lock in your profitable unit economics in 7 days or less.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">48-Hour Fixes.</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  When ROAS drops, we don't say "we're figuring it out." We know exactly what broke in the funnel and deploy fixes in 2 days.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">Data-Native Creatives.</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Your creatives aren't made by isolated artists. They are built by performance marketers who analyze live spend data daily.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-4 sm:gap-5 group">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">n8n AI + Human Intel.</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We don't blindly copy-paste ChatGPT. We use custom n8n multi-layer AI trained on actual data, validated strictly by human experts.
                </p>
                <div className="mt-2.5 bg-slate-50 border border-slate-100 rounded-md p-2 inline-block shadow-sm">
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    *Fact: Generic AI ad copy sees a 41% lower conversion rate.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
