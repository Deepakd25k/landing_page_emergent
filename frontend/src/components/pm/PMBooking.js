import React from "react";
import { motion } from "framer-motion";

export const PMBooking = () => {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden font-sans border-t border-neutral-200">
      
      {/* Tech Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[28px] sm:text-[40px] font-extrabold tracking-tight mb-6 leading-[1.1] text-neutral-900"
        >
          Let’s talk about <br className="hidden sm:block" />
          <span className="text-blue-600">what’s holding your brand back.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4 text-[14px] sm:text-[15.5px] text-neutral-600 font-medium leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          <p>
            Already selling? Spending ₹3 lakh or more each month on ads? Looking for a team that works closely with you across performance, creative and business problems?
          </p>
          <p className="text-neutral-900 font-bold text-base sm:text-lg tracking-tight bg-neutral-50 border border-neutral-200 px-4 py-2 rounded-lg inline-block my-2 shadow-sm">
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
            className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-[15px] sm:text-[16px] transition-all shadow-sm active:scale-95"
          >
            Book a Founder Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="mt-8 flex justify-center">
            <p className="inline-block font-mono text-[9px] sm:text-[11px] text-neutral-500 font-semibold tracking-widest uppercase">
              Tell us about your brand. Choose a time. Meet the people who would work with you.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
