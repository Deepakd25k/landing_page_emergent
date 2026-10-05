import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-start items-center bg-white overflow-hidden px-3 sm:px-6 pt-24 pb-12 sm:pt-32">
      
      {/* Outer Card Container */}
      <div className="relative w-full max-w-5xl mx-auto bg-[#FAFAFA] border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center mt-2 sm:mt-0">
        
        {/* Dotted Background inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40" 
          style={{
            backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />

        <div className="relative z-10 text-center flex flex-col items-center w-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-[10px] sm:text-xs font-bold tracking-widest text-slate-700 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              FOUNDER-LED D2C GROWTH PARTNERSHIP
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 sm:mb-8 max-w-4xl mx-auto text-slate-900"
          >
            You hired a growth team.<br className="hidden sm:block" />
            <span className="text-slate-400">Why are you still doing their job?</span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mb-8 sm:mb-10 w-full"
          >
            <p className="text-[15px] sm:text-xl font-bold text-slate-800 max-w-2xl mx-auto leading-snug sm:leading-relaxed">
              Briefing the creative team. Chasing your account manager. Asking what gets tested next.
            </p>
            <p className="text-[14px] sm:text-lg font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
              Work directly with <span className="text-slate-900 font-bold border-b-2 border-blue-200">two hands-on D2C operators</span> and our own performance creative team. We connect customer insights, creative, media and profitability—with <span className="text-slate-900 font-bold bg-blue-50 px-1 rounded">clear ownership</span> of the work.
            </p>
          </motion.div>

          {/* Stats Row - Forced into 1 row on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-2xl mb-8"
          >
            <div className="flex-1 flex flex-col items-center bg-white px-2 py-4 sm:py-5 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">₹60Cr+</span>
              <span className="text-[11px] sm:text-sm text-slate-500 font-semibold mt-1 text-center leading-tight">Managed over 3 years</span>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white px-2 py-4 sm:py-5 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">₹2Cr+</span>
              <span className="text-[11px] sm:text-sm text-slate-500 font-semibold mt-1 text-center leading-tight">Monthly ad budgets</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] sm:text-xs text-slate-400 font-medium mb-8 -mt-5"
          >
            Combined experience of founders across prior roles.
          </motion.p>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-sm mx-auto flex flex-col items-center"
          >
            <button
              data-cal-link="d2cdeepak-audit/d2c-growth-call"
              onClick={() => window.trackEvent?.("InitiateCheckout", { section: "pm-hero" })}
              className="w-full px-6 py-4 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_0_rgb(93,95,239,0.39)] hover:shadow-[0_6px_20px_rgba(93,95,239,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-4"
            >
              Book a Founder Fit Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium">
              For established D2C brands spending <span className="font-bold text-slate-800">₹3 lakh+/month</span>.<br/>
              Best suited to brands spending <span className="font-bold text-slate-800">₹5 lakh+/month</span> & above.
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
