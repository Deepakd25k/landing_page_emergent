import { motion } from "framer-motion";

export const PMMechanism = () => {
  return (
    <section className="pt-10 pb-20 sm:pt-16 sm:pb-32 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Subtle Dotted Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.3]" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5D5FEF]/10 text-[#5D5FEF] text-[11px] font-bold tracking-widest uppercase mb-3">
            The 48-Hour Trap
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-3 leading-tight">
            Stop killing your winning ads.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium px-4">
            In 2026, D2C is data-driven. Agencies panic and kill ads on Day 3—ignoring the massive attribution lag.
          </p>
        </div>

        {/* The Single Premium Card */}
        <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          
          {/* Left: Punchy Copy */}
          <div className="flex-1 space-y-6">
            <div>
              <span className="text-red-500 font-bold text-[11px] uppercase tracking-widest mb-1.5 block">What they do</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Panic on Day 3.</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Killing ads early because of low initial CTRs.</p>
            </div>
            
            <div className="w-10 h-1 bg-slate-100 rounded-full"></div>

            <div>
              <span className="text-emerald-500 font-bold text-[11px] uppercase tracking-widest mb-1.5 block">The Reality</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">60% Data is Missing.</h3>
              <p className="text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                Cross-device drops and iOS privacy blocks delay signals. You are pulling the plug on <strong className="text-slate-800">profitable winners</strong> before the algorithm optimizes.
              </p>
              
              {/* Source Citation */}
              <div className="mt-4 inline-block bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1.5">
                <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  *Source: Meta iOS Attribution Impact Report
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Visual */}
          <div className="w-full lg:w-[380px] bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-100 shrink-0 shadow-inner">
            {/* Day 3 */}
            <div className="mb-8">
               <div className="flex justify-between items-end mb-3">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Day 3 (Agency sees)</span>
                 <span className="text-red-500 font-bold text-sm">35%</span>
               </div>
               <div className="h-4 w-full bg-white rounded-full overflow-hidden shadow-sm border border-slate-200">
                  <div className="h-full bg-red-400 w-[35%] rounded-full relative">
                    {/* Tiny animated stripes for the red bar */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:10px_10px]"></div>
                  </div>
               </div>
               <div className="mt-2 text-right">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded">Action: Kill</span>
               </div>
            </div>

            {/* Day 7 */}
            <div>
               <div className="flex justify-between items-end mb-3">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Day 7 (Actual Data)</span>
                 <span className="text-emerald-500 font-bold text-sm">95%</span>
               </div>
               <div className="h-4 w-full bg-white rounded-full overflow-hidden shadow-sm border border-slate-200 flex p-0.5 gap-0.5">
                  <div className="h-full bg-emerald-400 w-[35%] rounded-l-full rounded-r-sm"></div>
                  <div className="h-full bg-emerald-50 w-[60%] rounded-r-full rounded-l-sm border border-dashed border-emerald-300 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-8 h-full bg-emerald-400/20 blur-[4px] animate-[slide-right_2s_ease-in-out_infinite]"></div>
                  </div>
               </div>
               <div className="text-center mt-3">
                  <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full inline-block">
                    ↑ The Missing 60%
                  </span>
               </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(300%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
