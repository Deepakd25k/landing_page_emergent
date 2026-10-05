import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center items-center bg-white overflow-hidden px-3 sm:px-6">
      
      {/* Outer Card Container */}
      <div className="relative w-full h-[95%] sm:h-auto max-w-5xl mx-auto bg-[#FAFAFA] border border-slate-100 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-center">
        
        {/* Dotted Background inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50" 
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative z-10 text-center flex flex-col items-center justify-center w-full h-full">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200 text-[10px] sm:text-xs font-bold tracking-wider text-slate-600 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              FOUNDER-LED D2C GROWTH PARTNERSHIP
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto text-slate-900"
          >
            You hired a growth team.<br className="hidden sm:block" />
            <span className="text-slate-400">Why are you still doing their job?</span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-3 mb-6 sm:mb-8"
          >
            <p className="text-[13px] sm:text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-snug sm:leading-relaxed">
              Briefing the creative team. Chasing your account manager. Asking what gets tested next.
            </p>
            <p className="text-[13px] sm:text-base font-normal text-slate-500 max-w-3xl mx-auto leading-snug sm:leading-relaxed px-2">
              Work directly with two hands-on D2C operators and our own performance creative team. We connect customer insights, creative, media and profitability—with clear ownership of the work.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full mb-6 sm:mb-8"
          >
            <div className="flex flex-col items-center bg-white px-4 py-2 sm:py-3 rounded-xl shadow-sm border border-slate-100 w-full sm:w-auto">
              <span className="text-lg sm:text-2xl font-black text-slate-900">₹60Cr+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Managed over 3 years</span>
            </div>
            <div className="flex flex-col items-center bg-white px-4 py-2 sm:py-3 rounded-xl shadow-sm border border-slate-100 w-full sm:w-auto">
              <span className="text-lg sm:text-2xl font-black text-slate-900">₹2Cr+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Monthly ad budgets handled</span>
            </div>
            <p className="text-[9px] sm:text-[10px] text-slate-400 mt-1 sm:hidden w-full text-center">
              Combined experience of founders across prior roles.
            </p>
          </motion.div>

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
              className="w-full px-6 py-3.5 sm:py-4 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mb-3"
            >
              Book a Founder Fit Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <div className="text-[10px] sm:text-xs text-slate-500 leading-tight">
              For established D2C brands spending <span className="font-semibold text-slate-700">₹3 lakh+/month</span> on ads.
              <br />Best suited to brands spending <span className="font-semibold text-slate-700">₹5 lakh+/month</span> & above.
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
