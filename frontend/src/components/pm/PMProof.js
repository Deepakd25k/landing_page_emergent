import { motion } from "framer-motion";

export const PMProof = () => {
  const caseStudies = [
    {
      brand: "Premium Skincare • ₹15L/month Spend",
      problem: "CAC spiked from ₹800 to ₹1,400 when attempting to scale daily budgets past ₹50k. Overly reliant on bottom-of-funnel retargeting.",
      work: "Rebuilt the creative testing framework for broad targeting. Implemented Server-Side API (CAPI). Shifted 40% budget to education-first video ads.",
      result: "CAC stabilized at ₹850 while successfully doubling daily ad spend within 45 days.",
      impact: "Monthly revenue scaled from ₹45L to ₹95L with a 15% increase in contribution margin."
    },
    {
      brand: "FMCG & Health Foods • ₹20L/month Spend",
      problem: "High RTOs (28%) on their Shopify store were destroying profitability, despite the Meta dashboard showing a healthy 3.5x ROAS.",
      work: "Shifted budgets towards Blinkit/Zepto collaborative ads. Redesigned D2C funnels to heavily feature prepaid-only offers to combat RTO.",
      result: "RTO dropped to 12% in 2 months. Q-Commerce volume tripled simultaneously.",
      impact: "₹1.2Cr monthly GMV achieved with true EBITDA profitability for the first time in 14 months."
    }
  ];

  return (
    <section className="py-4 sm:py-6 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Subtle Dotted Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.3]" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[11px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Outcomes
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900"
          >
            Big budgets show experience.<br className="hidden sm:block" />
            <span className="text-slate-400">Business outcomes show the work.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Across our founders’ work in D2C, we’ve managed <span className="font-bold text-slate-900 border-b-2 border-emerald-200">₹60Cr in ad spend</span> over three years, including monthly budgets above ₹2Cr.
            <br className="hidden sm:block" />Here’s what we found, what we changed and what happened next.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {caseStudies.map((caseStudy, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Card Header (Brand) */}
              <div className="bg-[#FAFAFA] border-b border-slate-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-base sm:text-lg font-black text-slate-800 tracking-tight uppercase">
                  {caseStudy.brand.split('•')[0].trim()}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm w-fit">
                  {caseStudy.brand.split('•')[1].trim()}
                </span>
              </div>

              {/* Card Body (Details) */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-rose-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Problem</h4>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-slate-800 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                {/* Our Work */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Our Work</h4>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed">
                    {caseStudy.work}
                  </p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-orange-500">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </span>
                    <h4 className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Result</h4>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>

              </div>

              {/* Card Footer (Business Impact) */}
              <div className="mt-auto bg-[#F0FDF4] border-t border-emerald-100 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </span>
                  <h4 className="text-[11px] sm:text-xs font-black text-emerald-800 uppercase tracking-widest">Business Impact</h4>
                </div>
                <p className="text-[16px] sm:text-[18px] font-bold text-emerald-950 leading-tight">
                  {caseStudy.impact}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Backed By Footer */}
        <div className="mt-12 sm:mt-16 px-4">
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-3 text-xs sm:text-sm font-bold text-slate-800">
            <div className="flex items-center text-slate-400 tracking-widest text-[9px] sm:text-[10px] uppercase mr-1">
              Backed By
            </div>
            
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-[#FF6600] flex items-center justify-center text-white font-bold text-[9px] sm:text-[11px] leading-none">
                Y
              </div>
              <span>Y Combinator</span>
            </div>
            
            <div className="text-slate-300">•</div>
            <div>Lightspeed</div>
            
            <div className="text-slate-300">•</div>
            <div>Chiratae</div>
            
            <div className="text-slate-300">•</div>
            <div>Kunal Shah</div>
          </div>
        </div>

      </div>
    </section>
  );
};
