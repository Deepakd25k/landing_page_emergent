import React from "react";
import { motion } from "framer-motion";

const Highlight = ({ children }) => (
  <span className="font-mono text-[0.85em] font-semibold text-neutral-900 bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded shadow-sm leading-none inline-block align-baseline mx-0.5">
    {children}
  </span>
);

export const PMComparison = () => {
  const comparisonData = [
    {
      pain: "“Let me check with the performance team.”",
      solution: (
        <>
          Speak directly with the <Highlight>people making decisions</Highlight> on your account.
        </>
      )
    },
    {
      pain: "You don’t know who actually handles your budget.",
      solution: (
        <>
          <Highlight>Know who owns the work</Highlight> and what experience they bring.
        </>
      )
    },
    {
      pain: "You keep explaining your brand to the creative team.",
      solution: (
        <>
          <Highlight>Creative and performance work together</Highlight> on your customers, product and results.
        </>
      )
    },
    {
      pain: "“We’re testing” is the entire explanation.",
      solution: (
        <>
          Every test has a <Highlight>reason</Highlight>, a <Highlight>success measure</Highlight> and a next decision.
        </>
      )
    },
    {
      pain: "“Give us 90 days” before you see a clear plan.",
      solution: (
        <>
          We start reviewing and prioritising action in <Highlight>week one</Highlight>, once access is ready.
        </>
      )
    },
    {
      pain: "“Payment failures and RTO aren’t our department.”",
      solution: (
        <>
          We <Highlight>investigate with tech & operations</Highlight> partners and help move the fix forward.
        </>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-neutral-200 overflow-hidden font-sans">
      
      {/* Subtle tech background (grid) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Brutalist / Clean Tech */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl leading-[1.1] font-extrabold text-neutral-900 mb-4 tracking-[-0.03em]"
          >
            You hired a team.<br className="hidden sm:block"/> You shouldn’t have to coordinate everyone.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl font-medium text-neutral-500"
          >
            Here’s what changes with Incremental Value.
          </motion.p>
        </div>

        {/* Universal Two-Column Tech Table */}
        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] mb-12 sm:mb-16 bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-neutral-50 border-b border-neutral-200">
            <div className="p-4 sm:p-5 flex items-center">
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                Current Agency
              </span>
            </div>
            <div className="p-4 sm:p-5 bg-[#fafafa] border-l border-neutral-200 flex items-center">
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Incremental Value
              </span>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-neutral-100">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 transition-colors hover:bg-neutral-50/50">
                
                {/* Left Column (Pain) */}
                <div className="p-4 sm:p-6 flex items-center">
                  <p className="text-[13px] sm:text-[15px] font-medium text-neutral-500 leading-snug sm:leading-relaxed">
                    {row.pain}
                  </p>
                </div>
                
                {/* Right Column (Solution) */}
                <div className="p-4 sm:p-6 bg-[#fafafa] border-l border-neutral-200 flex items-center">
                  <p className="text-[13px] sm:text-[15px] font-medium text-neutral-900 leading-snug sm:leading-relaxed">
                    {row.solution}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Closing Line - Console log style / Monospace badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-md bg-neutral-900 text-white border border-neutral-800 shadow-xl">
            <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-mono text-xs sm:text-sm tracking-tight font-medium">
              Your question shouldn’t need three meetings.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
