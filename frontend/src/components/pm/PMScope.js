import React from "react";
import { motion } from "framer-motion";

export const PMScope = () => {
  const steps = [
    {
      id: "01",
      title: "PERFORMANCE MARKETING",
      desc: "Campaigns, budgets and acquisition across the channels relevant to your brand.",
      nodeColor: "border-green-300",
      lineColor: "bg-green-200",
      pillClass: "bg-green-100 text-green-700",
      pillText: "Usually running",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      card: (
        <div className="w-[120px] h-[90px] bg-white rounded-[14px] shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-slate-100 p-2.5 flex flex-col justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[8px] font-bold text-white">M</div>
            <div className="text-[9px] font-extrabold text-slate-700">Sponsored</div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-auto"></div>
          </div>
          <div className="h-6 w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded mt-1.5 border border-blue-100/50"></div>
          <div className="w-full h-5 bg-blue-600 rounded text-white text-[9px] font-bold flex items-center justify-center mt-1.5">Book now</div>
        </div>
      )
    },
    {
      id: "02",
      title: "PERFORMANCE CREATIVE",
      desc: "Customer research, angles, scripts and ads produced in-house—with a clear testing plan.",
      nodeColor: "border-rose-400",
      lineColor: "bg-rose-200",
      pillClass: "bg-rose-50 text-rose-600",
      pillText: "Often unoptimised",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      card: (
        <div className="w-[120px] h-[90px] bg-white rounded-[14px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-1.5">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
          <span className="text-[10px] font-bold">Missing</span>
        </div>
      )
    },
    {
      id: "03",
      title: "OFFERS & WEBSITE",
      desc: "Pricing offers, bundles, product pages and checkout friction that affect buying decisions.",
      nodeColor: "border-rose-400",
      lineColor: "bg-rose-200",
      pillClass: "bg-rose-50 text-rose-600",
      pillText: "Rarely optimised",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      card: (
        <div className="w-[120px] h-[90px] bg-white rounded-[14px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 gap-1.5">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/></svg>
          <span className="text-[10px] font-bold">Missing</span>
        </div>
      )
    },
    {
      id: "04",
      title: "PAYMENTS & DELIVERY",
      desc: "Payment failures, COD verification, delivery issues and RTO—worked through with your tech and logistics partners.",
      nodeColor: "border-amber-300",
      lineColor: "bg-amber-200",
      pillClass: "bg-amber-100 text-amber-800",
      pillText: "Manual, if at all",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      card: (
        <div className="w-[120px] h-[90px] bg-[#FEF9C3] rounded-[14px] border border-[#FEF08A] p-2.5 flex flex-col shadow-sm">
          <p className="text-[9px] font-semibold text-amber-900/80 leading-snug italic mb-1">
            "Check RTO daily" — sticky note on someone's desk.
          </p>
          <div className="mt-auto flex gap-1.5">
            <span className="bg-amber-200/80 text-amber-900 text-[8px] font-extrabold px-1.5 py-0.5 rounded">Day 1</span>
            <span className="bg-amber-200/80 text-amber-900 text-[8px] font-extrabold px-1.5 py-0.5 rounded">Day 3</span>
          </div>
        </div>
      )
    },
    {
      id: "05",
      title: "PROFITABILITY & RETENTION",
      desc: "Product margins, acquisition costs, returns and repeat purchases.",
      nodeColor: "border-rose-400",
      lineColor: "bg-transparent",
      pillClass: "bg-rose-50 text-rose-600",
      pillText: "Never tracked",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      card: (
        <div className="w-[120px] h-[90px] bg-[#FEF9C3] rounded-[14px] border border-[#FEF08A] p-2.5 flex flex-col shadow-sm">
          <div className="text-[9px] font-extrabold text-amber-950 leading-tight mb-2">First Order →<br/>Repeat Customer</div>
          <div className="w-full h-1.5 bg-amber-200/80 rounded-full mb-2 overflow-hidden">
            <div className="w-[40%] h-full bg-amber-500 rounded-full"></div>
          </div>
          <div className="flex gap-1.5 mt-auto">
            <span className="bg-emerald-100 text-emerald-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded">Repeat</span>
            <span className="bg-rose-100 text-rose-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded">Churned</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden font-sans border-b border-slate-100">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-5 tracking-tight leading-[1.15]"
          >
            The problem doesn’t always start—or end—in Ads Manager.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl font-semibold text-slate-500"
          >
            We work across the parts of your D2C business that affect growth.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 sm:gap-10 relative">
              
              {/* Left Timeline Line & Node */}
              <div className="flex flex-col items-center w-8 shrink-0 relative pt-2">
                <div className={`w-[22px] h-[22px] rounded-full border-[3px] bg-white z-10 ${step.nodeColor}`} />
                {index !== steps.length - 1 && (
                  <div className={`w-[2px] absolute top-[22px] bottom-[-8px] ${step.lineColor}`} />
                )}
              </div>

              {/* Middle Visual Card (Hidden on mobile for cleaner layout, visible on sm+) */}
              <div className="hidden sm:flex w-32 shrink-0 justify-center pt-1">
                {step.card}
              </div>

              {/* Right Content */}
              <div className="flex-1 pb-12 sm:pb-16 pt-0.5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="shrink-0">{step.icon}</span>
                  <span className="text-slate-400 font-black text-sm tracking-widest">{step.id}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-2.5 tracking-tight">
                  {step.title}
                </h3>
                
                <div className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wide mb-3 sm:mb-4 border border-current/10 ${step.pillClass}`}>
                  {step.pillText}
                </div>
                
                <p className="text-[14px] sm:text-[15px] font-semibold text-slate-600 leading-relaxed max-w-sm">
                  {step.desc}
                </p>

                {/* Mobile-only visual card injection */}
                <div className="sm:hidden mt-6 mb-2">
                  {step.card}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 flex"
        >
          <div className="flex items-center gap-4 sm:gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 w-full max-w-2xl shadow-sm">
            <div className="shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Built</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Half</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 border-2 border-rose-400 bg-transparent"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Missing</span>
              </div>
            </div>
            <div className="w-[1px] h-12 bg-slate-200 shrink-0"></div>
            <p className="text-[14px] sm:text-base font-bold text-slate-800 leading-snug">
              We own the marketing work and coordinate the fixes that need your other teams.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
