import React from "react";
import { motion } from "framer-motion";

export const PMComparison = () => {
  const comparisonData = [
    {
      pain: "“Let me check with the performance team.”",
      solution: (
        <>
          Speak directly with the <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">people making decisions</span> on your account.
        </>
      )
    },
    {
      pain: "You don’t know who actually handles your budget.",
      solution: (
        <>
          <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">Know who owns the work</span> and what experience they bring.
        </>
      )
    },
    {
      pain: "You keep explaining your brand to the creative team.",
      solution: (
        <>
          <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">Creative and performance work together</span> on your customers, product and results.
        </>
      )
    },
    {
      pain: "“We’re testing” is the entire explanation.",
      solution: (
        <>
          Every test has a <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">reason</span>, a <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">success measure</span> and a next decision.
        </>
      )
    },
    {
      pain: "“Give us 90 days” before you see a clear plan.",
      solution: (
        <>
          We start reviewing and prioritising action in <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">week one</span>, once access is ready.
        </>
      )
    },
    {
      pain: "“Payment failures and RTO aren’t our department.”",
      solution: (
        <>
          We <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded">investigate with your tech and operations</span> partners and help move the fix forward.
        </>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-[40px] leading-[1.2] sm:leading-[1.1] font-extrabold text-slate-900 mb-4 sm:mb-5 tracking-tight"
          >
            You hired a team.<br className="hidden sm:block"/> You shouldn’t have to coordinate everyone.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] sm:text-xl font-medium text-slate-600 leading-relaxed"
          >
            Here’s what changes with Incremental Value.
          </motion.p>
        </div>

        {/* Universal Two-Column Table (Desktop & Mobile) */}
        <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] mb-10 sm:mb-12 bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
            <div className="p-3 sm:p-6 flex items-end">
              <span className="text-[9px] sm:text-sm font-black text-slate-400 uppercase tracking-widest leading-tight">
                If this sounds familiar…
              </span>
            </div>
            <div className="p-3 sm:p-6 bg-blue-50/50 border-l border-slate-200 flex items-end">
              <span className="text-[9px] sm:text-sm font-black text-blue-600 uppercase tracking-widest leading-tight">
                With Incremental Value
              </span>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-slate-100 sm:divide-slate-200">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 group hover:bg-slate-50/50 transition-colors">
                <div className="p-3 sm:p-6 flex items-center">
                  <p className="text-[12px] sm:text-base font-medium text-slate-600 leading-snug sm:leading-relaxed">
                    {row.pain}
                  </p>
                </div>
                <div className="p-3 sm:p-6 bg-blue-50/30 border-l border-slate-200 flex items-center group-hover:bg-blue-50/60 transition-colors">
                  <p className="text-[12px] sm:text-base font-semibold text-slate-900 leading-snug sm:leading-relaxed">
                    {row.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="inline-block px-4 sm:px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 font-bold text-[12px] sm:text-base tracking-tight border border-slate-200 shadow-sm">
            Your question shouldn’t need three meetings.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
