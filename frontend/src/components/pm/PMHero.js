
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
          <div
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-[10px] sm:text-xs font-bold tracking-widest text-slate-700 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              YOUR END-TO-END D2C GROWTH TEAM
            </div>
          </div>

          {/* H1 */}
          <h1
            className="text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 sm:mb-8 max-w-4xl mx-auto text-slate-900"
          >
            Better <span className="text-blue-600">performance.</span><br />
            <span className="text-slate-600 text-[1.8rem] sm:text-4xl md:text-5xl mt-2 block">
              From the first ad to the <span className="text-slate-800">delivered order.</span>
            </span>
          </h1>

          {/* Subtext */}
          <div
            className="flex flex-col items-center gap-4 mb-8 sm:mb-10 w-full"
          >
            <p className="text-[14px] sm:text-lg font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
              We run your ads, create performance creatives in-house, and fix the problems that hurt <span className="text-slate-900 font-bold">sales and profit</span>—from <span className="text-slate-900 font-bold">tracking</span> and <span className="text-slate-900 font-bold">checkout</span> to <span className="text-slate-900 font-bold">payment failures</span> and <span className="text-slate-900 font-bold">RTO</span>.
            </p>
            <p className="text-[15px] sm:text-lg font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed px-1">
              We look beyond dashboards to what your brand <span className="text-slate-900 font-bold">actually earns</span>.
            </p>
            <p className="text-[15px] sm:text-lg font-bold text-slate-800 max-w-2xl mx-auto leading-relaxed px-1">
              Work directly with the founders doing the work.
            </p>
          </div>

          {/* CTA Area */}
          <div
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
              Your website. Your ad accounts. Your customer data.<br />
              <span className="font-bold text-slate-800">Owned by you. Always.</span>
            </div>
          </div>

          {/* Stats Row */}
          <div
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
          </div>

          <p
            className="text-[9px] sm:text-[10px] text-slate-600 font-medium mt-3"
          >
            *Combined experience across our founders' prior roles and engagements.
          </p>

        </div>
      </div>
    </section>
  );
};
