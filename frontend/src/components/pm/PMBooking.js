import React from "react";
import { motion } from "framer-motion";

export const PMBooking = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#0B1120] text-white relative overflow-hidden font-sans border-t border-slate-800">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-10 leading-[1.1]"
        >
          Let’s talk about <br className="hidden sm:block" />
          <span className="text-blue-500">what’s holding your brand back.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto space-y-6 text-[16px] sm:text-[18px] text-slate-400 font-medium leading-relaxed mb-12"
        >
          <p>
            Already selling? Spending ₹3 lakh or more each month on ads? Looking for a team that works closely with you across performance, creative and business problems?
          </p>
          <p className="text-white font-bold text-xl sm:text-2xl tracking-tight">
            Speak directly with one of our founders.
          </p>
          <p>
            We’ll discuss your current setup, your biggest challenge and whether our partnership is the right fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            data-cal-link="d2cdeepak-audit/d2c-growth-call"
            onClick={() => window.trackEvent?.("InitiateCheckout", { section: "pm-final-booking" })}
            className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg sm:text-xl transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            Book a Founder Call
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <p className="mt-8 text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest">
            Tell us about your brand. Choose a time. Meet the people who would work with you.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
