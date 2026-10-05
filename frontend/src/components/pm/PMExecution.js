import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMExecution = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "UNDERSTAND",
      desc: "Once access and business data are ready, we review your accounts, creative, tracking, store and order economics."
    },
    {
      id: "02",
      title: "PRIORITISE",
      desc: "In week one, we agree on the first problems to address, tests to run and who owns each action. We begin the fixes that are ready to move."
    },
    {
      id: "03",
      title: "BUILD, TEST, LEARN",
      desc: "Our in-house creative team turns customer insights into ads. Our n8n AI workflow develops and critiques ideas; we make the final call before production.",
      extra: "Results feed into the next brief and the next business decision."
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

        {/* Closing Punchline */}
        <div className="text-center mb-10 overflow-x-auto hide-scrollbar">
          <p className="inline-block px-4 sm:px-6 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] sm:text-xs font-semibold text-slate-800 tracking-wider uppercase whitespace-nowrap">
            Clear priorities <span className="text-slate-300 mx-1.5 sm:mx-2">•</span> Visible work <span className="text-slate-300 mx-1.5 sm:mx-2">•</span> Direct conversations
          </p>
        </div>

        {/* AI Callout & Modal Trigger */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left hover:border-blue-200 hover:shadow-md transition-all">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-50 border border-blue-100 text-[10px] font-black text-blue-700 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Creative Workflow
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              AI develops and critiques.<br className="hidden sm:block" /> Our team makes the final call.
            </p>
          </div>
          
          <button 
            onClick={() => setModalOpen(true)}
            className="shrink-0 group flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            See our creative workflow
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
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
