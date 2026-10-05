import { motion } from "framer-motion";

export const PMProof = () => {
  const caseStudies = [
    {
      brand: "EdTech • Google + Meta",
      problem: "Capped at ₹15L/mo spend due to high ₹3L CAC. Unscalable economics.",
      work: "Systematically scaled the acquisition engine over 12 months.",
      result: "Spend grew 16.7× (to ₹2.5Cr/mo). CAC dropped by 50% (to ₹1.5L).",
      impact: "Revenue grew 25× to hit ₹7.5Cr/mo with highly profitable unit economics."
    },
    {
      brand: "D2C Fashion • Meta + Google",
      problem: "Stuck at ₹2L/mo spend with inefficient 1.5× ROAS. No room for error.",
      work: "Progressively increased advertising investment while improving return on every rupee.",
      result: "Spend scaled 11× (to ₹22L/mo). ROAS improved by 2.3× (to 3.5×).",
      impact: "Revenue exploded 25×+ to reach ₹75–80L/mo. Efficient at scale."
    },
    {
      brand: "Fashion & Apparel • End-to-End",
      problem: "Plagued by fake RTOs and low realized returns despite good top-line ROAS.",
      work: "Fixed logistics, PG routing, and checkout flows end-to-end to capture real intent.",
      result: "Converted fake RTOs to successful deliveries. Stabilized AOV at ₹4000.",
      impact: "Delivered 3× Attributed ROAS purely on successful post-return orders."
    },
    {
      brand: "D2C Brand • Persona Testing",
      problem: "Burning ₹16L/mo at stagnant 1× ROAS. No messaging was converting.",
      work: "Redefined ICPs and aggressively tested 10 ad creatives daily for 2 months.",
      result: "Found winning messaging that connected deeply with the actual target buyers.",
      impact: "Attributed ROAS doubled to 2× at the exact same ₹16L/mo ad spend."
    },
    {
      type: "image",
      platform: "shopify",
      brand: "Store Dashboard • Shopify Growth",
      imageUrl: "/assets/shopify-proof.png",
      impact: "We don't just optimize for ad clicks. We optimize for this."
    },
    {
      type: "image",
      platform: "amazon",
      brand: "Marketplace Sales • Amazon Dashboard",
      imageUrl: "/assets/amazon-proof.png",
      impact: "Omnichannel scaling. We capture demand wherever your customers buy."
    }
  ];

  return (
    <section className="py-4 sm:py-6 bg-white relative border-b border-slate-100">
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
            className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
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

        {/* Case Studies Stack */}
        <div className="flex flex-col gap-10 sm:gap-20 w-full max-w-3xl mx-auto pb-10 sm:pb-20">
          {caseStudies.map((caseStudy, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="sticky bg-white rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden flex flex-col z-20 h-[500px] sm:h-[460px]"
              style={{ top: `calc(100px + ${index * 32}px)` }}
            >
              {/* Card Header (Brand) */}
              <div className="bg-[#FAFAFA] border-b border-slate-200 px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                <span className="text-base sm:text-lg font-black text-slate-800 tracking-tight uppercase">
                  {caseStudy.brand.split('•')[0].trim()}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm w-fit">
                  {caseStudy.brand.split('•')[1].trim()}
                </span>
              </div>

              {/* Card Body (Details or Image) */}
              {caseStudy.type === "image" ? (
                <div className="flex-1 relative bg-slate-50 flex items-center justify-center p-2 sm:p-4">
                  <img src={caseStudy.imageUrl} alt="Verified Store Dashboard" className="w-full h-full object-contain rounded-xl shadow-sm border border-slate-200" />
                  
                  {/* Platform Icon Badge */}
                  <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2">
                    {caseStudy.platform === "amazon" ? (
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon" className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                    <span className="text-[11px] sm:text-xs font-black text-slate-800 pr-1 tracking-tight">Verified Data</span>
                  </div>
                </div>
              ) : (
                <div className="p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 flex-1 justify-center">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-rose-500">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      </span>
                      <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Problem</h4>
                    </div>
                    <p className="text-[14px] sm:text-[15px] font-semibold text-slate-800 leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </div>

                  {/* Our Work */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-blue-500">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </span>
                      <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Our Work</h4>
                    </div>
                    <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed">
                      {caseStudy.work}
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-orange-500">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </span>
                      <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Result</h4>
                    </div>
                    <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>
              )}

              {/* Card Footer (Business Impact) */}
              <div className="mt-auto bg-[#F0FDF4] border-t border-emerald-100 p-6 sm:p-8 shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-emerald-600">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </span>
                  <h4 className="text-[11px] sm:text-xs font-black text-emerald-800 uppercase tracking-widest">Business Impact</h4>
                </div>
                <p className="text-[15px] sm:text-[17px] font-bold text-emerald-950 leading-tight">
                  {caseStudy.impact}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Built In The Accounts Footer */}
        <div className="mt-8 sm:mt-12 px-4 pb-4">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-12 h-[1px] bg-slate-200"></span>
              <span className="text-slate-400 tracking-[0.2em] text-[10px] sm:text-[11px] font-bold uppercase">
                Built In The Accounts
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-slate-200"></span>
            </div>
            
            <div className="text-base sm:text-xl font-extrabold text-slate-900 mb-2 tracking-tight">
              ₹60Cr managed <span className="text-slate-300 mx-1.5 sm:mx-2">•</span> ₹2Cr+ monthly budgets
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 font-medium mb-6">
              Across our founders’ experience over the last 3 years.
            </p>

            <div className="bg-white border border-rose-100 shadow-[0_4px_14px_rgba(225,29,72,0.08)] rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 flex items-center gap-3 w-fit transition-transform hover:-translate-y-0.5">
              <span className="text-rose-500 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </span>
              <span className="text-[13px] sm:text-[15px] font-bold text-slate-800 text-left leading-snug">
                No forwarding your questions to <span className="text-rose-600">“the concerned team.”</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
