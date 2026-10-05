import React from "react";
import { motion } from "framer-motion";

export const PMComparison = () => {
  const comparisonData = [
    {
      pain: "“Let me check with the performance team.”",
      solution: "Speak directly with the people making decisions on your account."
    },
    {
      pain: "You don’t know who actually handles your budget.",
      solution: "Know who owns the work and what experience they bring."
    },
    {
      pain: "You keep explaining your brand to the creative team.",
      solution: "Creative and performance work together on your customers, product and results."
    },
    {
      pain: "“We’re testing” is the entire explanation.",
      solution: "Every test has a reason, a success measure and a next decision."
    },
    {
      pain: "“Give us 90 days” before you see a clear plan.",
      solution: "We start reviewing and prioritising action in week one, once access is ready."
    },
    {
      pain: "“Payment failures and RTO aren’t our department.”",
      solution: "We investigate with your tech and operations partners and help move the fix forward."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] font-extrabold text-slate-900 mb-5 tracking-tight"
          >
            You hired a team.<br className="hidden sm:block"/> You shouldn’t have to coordinate everyone.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl font-medium text-slate-600 leading-relaxed"
          >
            Here’s what changes with Incremental Value.
          </motion.p>
        </div>

        {/* Desktop Table (Visible on md and up) */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-12">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
            <div className="p-6">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                If this sounds familiar…
              </span>
            </div>
            <div className="p-6 bg-blue-50/50 border-l border-slate-200">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                With Incremental Value
              </span>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-slate-200">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 group hover:bg-slate-50/50 transition-colors">
                <div className="p-6 flex items-center">
                  <p className="text-base font-medium text-slate-700 leading-relaxed">
                    {row.pain}
                  </p>
                </div>
                <div className="p-6 bg-blue-50/30 border-l border-slate-200 flex items-center group-hover:bg-blue-50/60 transition-colors">
                  <p className="text-base font-semibold text-slate-900 leading-relaxed">
                    {row.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile List (Visible on sm and down) */}
        <div className="md:hidden space-y-6 mb-12">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              
              {/* Complaint Part */}
              <div className="p-5 bg-slate-50/50 border-b border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Current Frustration
                </span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {row.pain}
                </p>
              </div>
              
              {/* Response Part */}
              <div className="p-5 bg-blue-50/30">
                <span className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">
                  Our Approach
                </span>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  {row.solution}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="inline-block px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 font-bold text-sm sm:text-base tracking-tight border border-slate-200 shadow-sm">
            Your question shouldn’t need three meetings.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
