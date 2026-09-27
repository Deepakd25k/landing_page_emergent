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
      name: "The Scaling Wall",
      industry: "Jewelry Brand",
      problem: [
        "Stuck at ₹10L/month",
        "CPA spikes instantly",
        "Rapid creative fatigue"
      ],
      action: [
        "Deployed n8n AI Workflows",
        "Data-Native Testing"
      ],
      result: [
        "Scaled to ₹50L/month",
        "CPA Reduced by 40%"
      ],
      footer: "End-to-End Fix: Maintained highly consistent ROAS while scaling ad spend 5x in 60 days."
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold tracking-widest uppercase mb-4">
            End-To-End Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-5 leading-tight">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">vanity metrics.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Other agencies stop at ad clicks. We fix D2C end-to-end: <strong className="text-slate-900">from click, to logistics negotiation, to final delivered order.</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 sm:mb-12">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm border ${
                activeTab === idx 
                ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105" 
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700"
              }`}
            >
              {study.name}
            </button>
          ))}
        </div>

        {/* The Master Card */}
        <div className="w-full max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-200 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col h-full"
            >
              
              {/* Card Header */}
              <div className="bg-slate-50/50 p-6 sm:px-10 border-b border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{caseStudies[activeTab].industry}</h3>
                  <p className="text-sm text-slate-500 font-medium">Case Study: {caseStudies[activeTab].name}</p>
                </div>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider inline-flex w-fit">
                  Verified Data
                </div>
              </div>

              {/* Card Body (The Row/Path) */}
              <div className="p-6 sm:p-10 relative bg-white">
                
                {/* Horizontal Path Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-100 -translate-y-1/2 z-0">
                  <div className="h-full bg-blue-500 w-full animate-[flow_2s_linear_infinite] opacity-30" style={{ background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)', backgroundSize: '50% 100%' }}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8 relative z-10">
                  
                  {/* Step 1: Problem */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Problem</span>
                    <ul className="flex flex-col gap-2.5 w-full">
                      {caseStudies[activeTab].problem.map((p, i) => (
                        <li key={i} className="text-[13px] font-semibold text-slate-700 bg-slate-50 py-2 px-3 rounded-md border border-slate-100">{p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Step 2: Fix */}
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col items-center text-center md:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[15px] rounded-full"></div>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3 relative z-10">Our Execution</span>
                    <ul className="flex flex-col gap-2.5 w-full relative z-10">
                      {caseStudies[activeTab].action.map((a, i) => (
                        <li key={i} className="text-[13px] font-semibold text-slate-200 bg-white/5 py-2 px-3 rounded-md border border-white/10">{a}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Step 3: Result */}
                  <div className="bg-white border border-emerald-100 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col items-center text-center">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">Result</span>
                    <ul className="flex flex-col gap-2.5 w-full">
                      {caseStudies[activeTab].result.map((r, i) => (
                        <li key={i} className="text-[13px] font-bold text-emerald-700 bg-emerald-50 py-2 px-3 rounded-md border border-emerald-100">{r}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-slate-900 px-6 py-5 sm:px-10 border-t border-slate-800 flex items-center">
                <svg className="w-5 h-5 text-emerald-400 shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {caseStudies[activeTab].footer}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @keyframes flow {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};
