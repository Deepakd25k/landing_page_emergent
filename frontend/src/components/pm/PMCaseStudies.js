import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMCaseStudies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: "cs1",
      name: "High AOV Fix",
      industry: "Premium D2C Apparel",
      problem: [
        "High AOV (₹3.5k - ₹4k)",
        "Massive Fake Orders",
        "High RTO %"
      ],
      action: [
        "Fixed Logistics Backend",
        "ISP-Specific Video Ads"
      ],
      result: [
        "3.5x ROAS in 1 Month",
        "RTO Dropped to 2%"
      ],
      footer: "End-to-End Fix: We also collected a massive surge in verified Google Reviews to build trust."
    },
    {
      id: "cs2",
      name: "Profitable Scaling",
      industry: "D2C Fashion",
      problem: [
        "Stuck at ₹2L/month spend",
        "Low Efficiency (1.5x ROAS)",
        "Revenue capped at ₹3L/month"
      ],
      action: [
        "Aggressive Spend Scaling",
        "Real-Time Efficiency Optimization"
      ],
      result: [
        "Scaled Spend to ₹22L/month",
        "ROAS improved to 3.5x",
        "Revenue hit ₹80L/month (25x Growth)"
      ],
      footer: "The Bigger Picture: Scaling is only meaningful when efficiency scales with it. We proved the business could absorb 11x more capital profitably."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-widest uppercase mb-4">
            End-To-End Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
            Beyond vanity metrics.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Other agencies stop at ad clicks. We fix D2C end-to-end: <strong className="text-slate-900">from click, to logistics negotiation, to final delivered order.</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                activeTab === idx 
                ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105" 
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>

        {/* The Master Card */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-200 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full"
            >
              
              {/* Header */}
              <div className="p-6 sm:p-8 pb-4 text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">{caseStudies[activeTab].industry}</h3>
                <div className="w-px h-6 bg-slate-200 mx-auto mt-4 mb-2"></div>
              </div>

              {/* Body (Strictly Horizontal Flowchart, No Scroll) */}
              <div className="p-3 sm:p-10 pt-0 relative w-full">
                <div className="grid grid-cols-[1fr_auto_1.2fr_auto_1fr] items-stretch gap-1 sm:gap-4 w-full mx-auto max-w-4xl">
                  
                  {/* Step 1: Problem */}
                  <div className="flex flex-col items-center text-center w-full">
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 sm:mb-4">The Problem</span>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 sm:p-5 w-full h-full flex items-center justify-center">
                      <ul className="flex flex-col gap-1.5 sm:gap-3 w-full">
                        {caseStudies[activeTab].problem.map((p, i) => (
                          <li key={i} className="text-[9px] sm:text-[13px] font-semibold text-slate-600 leading-[1.2]">{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="flex shrink-0 items-center justify-center text-slate-300">
                    <svg className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Step 2: Execution */}
                  <div className="flex flex-col items-center text-center relative z-10 w-full">
                    <span className="text-[8px] sm:text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2 sm:mb-4">Our Execution</span>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 sm:p-5 w-full h-full shadow-lg sm:scale-110 flex items-center justify-center">
                      <ul className="flex flex-col gap-1.5 sm:gap-3 w-full">
                        {caseStudies[activeTab].action.map((a, i) => (
                          <li key={i} className="text-[9px] sm:text-[13px] font-semibold text-slate-300 leading-[1.2]">{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="flex shrink-0 items-center justify-center text-slate-300">
                    <svg className="w-3 h-3 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Step 3: Result */}
                  <div className="flex flex-col items-center text-center w-full">
                    <span className="text-[8px] sm:text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-2 sm:mb-4">The Result</span>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 sm:p-5 w-full h-full flex items-center justify-center">
                      <ul className="flex flex-col gap-1.5 sm:gap-3 w-full">
                        {caseStudies[activeTab].result.map((r, i) => (
                          <li key={i} className="text-[9px] sm:text-[13px] font-bold text-emerald-700 leading-[1.2]">{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-center text-center">
                <p className="text-xs text-slate-500 font-medium">
                  {caseStudies[activeTab].footer}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
