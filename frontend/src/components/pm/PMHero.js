import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative w-full flex flex-col justify-start items-center bg-white overflow-hidden px-3 sm:px-6 pt-4 pb-4 sm:pt-8 sm:pb-6">
      
      {/* Integrated Logo */}
      <div className="w-full max-w-5xl mx-auto flex justify-start items-center pb-5 sm:pb-6 px-1 sm:px-2">
        <div className="text-[20px] sm:text-[22px] tracking-tight">
          <span className="font-normal text-slate-500">incremental</span>
          <span className="font-extrabold text-slate-900">value</span>
          <span className="font-extrabold text-blue-600">.in</span>
        </div>
      </div>

      {/* Outer Card Container */}
      <div className="relative w-full max-w-5xl mx-auto bg-[#FAFAFA] border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center">
        
        {/* Dotted Background inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 rounded-[2rem] sm:rounded-[2.5rem]" 
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
              YOUR END-TO-END D2C GROWTH TEAM
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 sm:mb-8 max-w-4xl mx-auto text-slate-900"
          >
            From the first ad <br className="hidden sm:block" />
            to the <span className="text-blue-600">delivered order.</span><br />
            <span className="text-slate-600 text-[1.8rem] sm:text-4xl md:text-5xl mt-2 block">
              We work on what <span className="text-slate-800">drives growth.</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center gap-4 mb-8 sm:mb-10 w-full"
          >
            <p className="text-[14px] sm:text-lg font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
              We manage performance marketing and create your ads in-house. We also work on{" "}
              <span className="text-slate-900 font-bold">tracking</span>,{" "}
              <span className="text-slate-900 font-bold">offers</span>,{" "}
              <span className="text-slate-900 font-bold">checkout</span>,{" "}
              <span className="text-slate-900 font-bold">payment failures</span> and{" "}
              <span className="text-slate-900 font-bold">RTO</span>—the problems that affect your sales and profit.
            </p>
            <p className="text-[15px] sm:text-lg font-bold text-slate-800 max-w-2xl mx-auto leading-relaxed px-1">
              Work directly with our two founders and performance creative team.
            </p>
          </motion.div>

          {/* CTA Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-sm mx-auto flex flex-col items-center mb-8"
          >
            <button
              data-cal-namespace="default"
              data-cal-link="d2cdeepak-audit/d2c-growth-call"
              data-cal-origin="https://cal.id"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => window.trackEvent?.("InitiateCheckout", { section: "pm-hero" })}
              className="w-full px-6 py-4 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_0_rgb(93,95,239,0.39)] hover:shadow-[0_6px_20px_rgba(93,95,239,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-4"
            >
              Book a Founder Call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-medium text-center">
              For established D2C brands spending <span className="font-bold text-slate-800">₹3 lakh+/month</span> on ads.
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-2xl"
          >
            <div className="flex-1 flex flex-col items-center bg-white px-2 py-4 sm:py-5 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">₹60Cr+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-1 text-center leading-tight">managed over 3 years</span>
            </div>
            <div className="flex-1 flex flex-col items-center bg-white px-2 py-4 sm:py-5 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">₹2Cr+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-1 text-center leading-tight">monthly ad budgets handled</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[9px] sm:text-[10px] text-slate-600 font-medium mt-3"
          >
            *Combined experience across our founders' prior roles and engagements.
          </motion.p>

        </div>
      </div>
    </section>
  );
};
