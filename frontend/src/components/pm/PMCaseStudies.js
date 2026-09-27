import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMCaseStudies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies = [
    {
      id: "cs1",
      name: "High AOV Fix",
      industry: "Premium D2C",
      problem: [
        "High AOV (₹3.5k - ₹4k)",
        "Massive Fake Orders",
        "High RTO % (Return to Origin)"
      ],
      action: [
        "Fixed Logistics Backend",
        "ISP-Specific Video Creatives"
      ],
      result: [
        "3.5x ROAS in 1 Month",
        "RTO Dropped to Flat 2%",
        "Huge surge in Google Reviews"
      ]
    },
    {
      id: "cs2",
      name: "Scaling Wall",
      industry: "Apparel Brand",
      problem: [
        "Stuck at ₹10L/month",
        "CPA spikes on budget increase",
        "Rapid creative fatigue"
      ],
      action: [
        "Deployed n8n AI Workflows",
        "Data-Native Creative Testing"
      ],
      result: [
        "Scaled to ₹50L/month",
        "CPA Reduced by 40%",
        "Consistent ROAS at Scale"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[11px] font-bold tracking-widest uppercase mb-4">
            End-To-End Execution
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-5 leading-tight">
            We don't just solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">vanity metrics.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Other agencies stop at ad clicks and ROAS dashboard numbers. We fix D2C end-to-end: <strong className="text-slate-900">from click, to logistics negotiation, to final delivered order.</strong>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
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

        {/* The Flowchart UI */}
        <div className="relative w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative"
            >
              
              {/* Connecting Lines (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-200 -translate-y-1/2 z-0">
                <div className="h-full bg-blue-500 w-full animate-[flow_2s_linear_infinite] opacity-50" style={{ background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)', backgroundSize: '50% 100%' }}></div>
              </div>

              {/* Node 1: Problem */}
              <div className="w-full lg:w-1/3 relative z-10">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-red-100 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500"></div>
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 border border-red-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">The Problem</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-5">{caseStudies[activeTab].industry}</h3>
                  <ul className="flex flex-col gap-3 w-full">
                    {caseStudies[activeTab].problem.map((p, i) => (
                      <li key={i} className="text-sm font-semibold text-slate-700 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 whitespace-pre-wrap">{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting Line (Mobile) */}
              <div className="block lg:hidden h-8 w-1 bg-slate-200 relative overflow-hidden">
                 <div className="w-full h-full bg-blue-500 animate-[flow-down_1.5s_linear_infinite] opacity-50" style={{ background: 'linear-gradient(180deg, transparent 0%, #3b82f6 50%, transparent 100%)', backgroundSize: '100% 50%' }}></div>
              </div>

              {/* Node 2: Action */}
              <div className="w-full lg:w-1/3 relative z-10">
                <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 flex flex-col items-center text-center relative overflow-hidden transform lg:scale-110">
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-blue-500/10 blur-[20px] rounded-full"></div>
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 border border-blue-500/30 relative z-10">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400 mb-1 relative z-10">The Execution</span>
                  <h3 className="text-xl font-bold text-white mb-5 relative z-10">Our Fix</h3>
                  <ul className="flex flex-col gap-3 w-full relative z-10">
                    {caseStudies[activeTab].action.map((a, i) => (
                      <li key={i} className="text-[13px] sm:text-sm font-semibold text-slate-200 bg-white/5 py-2.5 px-3 rounded-lg border border-white/10 whitespace-pre-wrap">{a}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting Line (Mobile) */}
              <div className="block lg:hidden h-8 w-1 bg-slate-200 relative overflow-hidden">
                 <div className="w-full h-full bg-emerald-500 animate-[flow-down_1.5s_linear_infinite] opacity-50" style={{ background: 'linear-gradient(180deg, transparent 0%, #10b981 50%, transparent 100%)', backgroundSize: '100% 50%' }}></div>
              </div>

              {/* Node 3: Result */}
              <div className="w-full lg:w-1/3 relative z-10">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 flex flex-col items-center text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 border border-emerald-100">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">The Result</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-5">Final Delivery</h3>
                  <ul className="flex flex-col gap-3 w-full">
                    {caseStudies[activeTab].result.map((r, i) => (
                      <li key={i} className="text-sm font-bold text-emerald-700 bg-emerald-50 py-2 px-3 rounded-lg border border-emerald-100 whitespace-pre-wrap">{r}</li>
                    ))}
                  </ul>
                </div>
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
        @keyframes flow-down {
          0% { background-position: 0 -200%; }
          100% { background-position: 0 200%; }
        }
      `}</style>
    </section>
  );
};
