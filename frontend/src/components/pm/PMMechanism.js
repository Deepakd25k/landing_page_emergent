import { motion } from "framer-motion";

export const PMMechanism = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Deep Background Gradients for Premium Tech feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-b from-[#5D5FEF]/20 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Side: The Copy */}
          <div className="flex flex-col items-start">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-6 sm:mb-8">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
               The 48-Hour Trap
             </div>
             
             <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 sm:mb-8 leading-[1.1]">
               They are blindly killing your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#5D5FEF]">winning ads.</span>
             </h2>
             
             <div className="space-y-6 text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
               <p>
                 Most marketers panic and kill creatives after 3-4 days based on low initial CTRs. It's the standard, outdated industry playbook.
               </p>
               
               <div className="relative p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                 {/* Subtle glow inside the box */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#5D5FEF]/20 blur-[30px] rounded-full"></div>
                 
                 <strong className="text-white block mb-2 font-bold text-lg flex items-center gap-2">
                   <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                   </svg>
                   What they don't know:
                 </strong>
                 <span className="text-slate-400 text-sm sm:text-base">
                   <span className="text-white font-semibold">40-60% of conversion signals are lost</span> due to iOS updates and cross-device attribution gaps. The algorithm hasn't even seen the full picture yet, and they've already pulled the plug.
                 </span>
               </div>
             </div>
          </div>

          {/* Right Side: The Visual Mechanism */}
          <div className="w-full relative mt-8 lg:mt-0">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-[#5D5FEF]/20 rounded-[2.5rem] blur-2xl transform rotate-2"></div>
            
            <div className="relative bg-[#0F1115] border border-white/5 rounded-[2rem] p-6 sm:p-8 shadow-2xl flex flex-col gap-8">
               
               {/* Section 1: The Trap (Red) */}
               <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-end border-b border-white/5 pb-2">
                   <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">Day 3 (Agency View)</span>
                   <span className="text-red-400 font-bold text-sm bg-red-400/10 px-2 py-1 rounded">Action: Kill Ad</span>
                 </div>
                 
                 <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>Signals Captured</span>
                      <span>35%</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full flex h-8 bg-black/50 rounded-full overflow-hidden p-1 shadow-inner">
                        <div className="h-full bg-gradient-to-r from-red-600 to-red-500 w-[35%] rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)]"></div>
                    </div>
                 </div>
               </div>

               <div className="flex items-center justify-center">
                 <div className="w-px h-8 bg-gradient-to-b from-red-500/20 via-white/10 to-emerald-500/20"></div>
               </div>

               {/* Section 2: The Reality (Green) */}
               <div className="flex flex-col gap-4">
                 <div className="flex justify-between items-end border-b border-white/5 pb-2">
                   <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">Day 7 (The Reality)</span>
                   <span className="text-emerald-400 font-bold text-sm bg-emerald-400/10 px-2 py-1 rounded">The Real Winner</span>
                 </div>
                 
                 <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <span>True Conversions</span>
                      <span className="text-emerald-400">95%</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="w-full flex h-8 bg-black/50 rounded-full overflow-hidden p-1 gap-1.5 shadow-inner">
                        <div className="h-full bg-emerald-500 w-[35%] rounded-full"></div>
                        
                        {/* The Missing Gap */}
                        <div className="h-full bg-emerald-500/10 w-[60%] rounded-full border border-dashed border-emerald-500/40 flex items-center justify-center relative overflow-hidden group">
                           {/* Animated scanning line inside the dashed box */}
                           <div className="absolute top-0 left-0 w-4 h-full bg-emerald-500/20 blur-[2px] animate-[slide-right_2s_ease-in-out_infinite]"></div>
                           <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400/80 uppercase tracking-wider z-10 whitespace-nowrap">Lost in Attribution</span>
                        </div>
                    </div>
                 </div>
               </div>

               {/* Absolute Floating Badge - The Secret */}
               <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white text-slate-900 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-2xl font-bold border border-slate-200 flex items-center gap-3 sm:gap-4 z-20 hover:scale-105 transition-transform cursor-default">
                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-widest font-bold">Our Advantage</span>
                   <span className="text-sm sm:text-base leading-tight tracking-tight text-slate-900 font-black mt-0.5">We track the missing 60%.</span>
                 </div>
               </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Custom Keyframe for scanning line */}
      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(400%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
