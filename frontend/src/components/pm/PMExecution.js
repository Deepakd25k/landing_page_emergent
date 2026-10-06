import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMExecution = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "UNDERSTAND",
      desc: "We review your ads, creative, tracking, store and order economics once access and data are ready."
    },
    {
      id: "02",
      title: "PRIORITISE",
      desc: "In week one, we agree on the first priorities, who owns each action and how we’ll measure progress. We start the fixes that are ready."
    },
    {
      id: "03",
      title: "EXECUTE AND REVIEW",
      desc: "We launch creative tests, improve campaigns and move agreed business fixes forward.",
      extra: "Each review shows what changed, what we learned and what happens next."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
          >
            You’ll know what we’re doing.<br/>
            <span className="text-blue-600">And why.</span>
          </motion.h2>
        </div>

        {/* Steps Layout */}
        <div className="relative mb-16 sm:mb-20">
          {/* Mobile connecting line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-slate-200 md:hidden z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex md:flex-col items-start gap-5 md:gap-4 relative group">
                {/* Number Badge */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-black text-sm relative z-10 group-hover:border-blue-500 group-hover:text-blue-600 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                  {step.id}
                </div>
                
                {/* Content */}
                <div className="pt-1.5 md:pt-2">
                  <h3 className="text-base sm:text-[17px] font-black text-slate-900 tracking-tight uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15.5px] font-medium text-slate-600 leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  {step.extra && (
                    <p className="text-[13px] font-bold text-slate-700 bg-slate-200/50 p-2.5 rounded-lg leading-snug border border-slate-200">
                      {step.extra}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Accountability Section */}
        <div className="mt-12 sm:mt-16 bg-white border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-sm relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Text Side (45%) */}
            <div className="w-full md:w-[45%] text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-700 uppercase tracking-widest mb-5">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                AI-ENABLED. HUMAN-LED.
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] leading-[1.1] mb-5 tracking-tight">
                AI can do more.<br/>
                But who’s <span className="text-blue-600">accountable?</span>
              </h3>
              
              <p className="text-base sm:text-[17px] font-bold text-slate-800 mb-4 leading-relaxed">
                You need a team that knows how to use these tools—and takes responsibility for the work.
              </p>
              
              <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed pr-0 sm:pr-4">
                Our in-house n8n workflows help us analyse data, develop creative ideas and critique them faster. Our team owns the decisions, execution and follow-through—and measures what actually improves your business.
              </p>
            </div>

            {/* Image Side (55%) */}
            <div className="w-full md:w-[55%] relative">
              {/* Subtle light-grey dot grid behind image area only */}
              <div className="absolute -inset-4 sm:-inset-6 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 rounded-3xl z-0 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-start sm:items-center w-full">
                <div className="bg-white px-3 py-1 border border-slate-200 rounded shadow-sm text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 relative z-20 self-start sm:self-center">
                  n8n / Creative workflow
                </div>
                
                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full group relative block rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-[#1a1a1a] transition-all hover:shadow-md cursor-zoom-in"
                  aria-label="Tap to explore workflow"
                >
                  <img 
                    src="/assets/n8n-workflow.png" 
                    alt="n8n Workflow Preview" 
                    className="w-full h-auto opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors"></div>
                </button>
                
                <p className="mt-3 text-[11px] font-semibold text-slate-400 self-center">
                  Tap to explore workflow
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* AI Workflow Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Internal n8n AI Architecture</h3>
                  <p className="text-[11px] font-medium text-slate-500">How we develop, challenge and critique ad angles before production.</p>
                </div>
                <button 
                  onClick={() => setModalOpen(false)} 
                  className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-100 rounded-full text-slate-600 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              
              <div className="p-4 sm:p-6 overflow-auto flex-1 flex justify-center items-center bg-[#1E1E1E]">
                {/* Fallback to dark background since n8n workflow image looks better against dark/original themes */}
                <img 
                  src="/assets/n8n-workflow.png" 
                  alt="n8n AI Creative Workflow" 
                  className="w-full h-auto max-h-full object-contain rounded border border-white/10" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div style={{ display: 'none' }} className="text-white text-sm">
                  Workflow image unavailable.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
