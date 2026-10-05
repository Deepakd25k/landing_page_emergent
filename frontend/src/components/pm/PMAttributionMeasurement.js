import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Highlight = ({ children }) => (
  <span className="font-extrabold text-blue-700 bg-blue-100/50 px-1 rounded mx-0.5 shadow-sm inline-block leading-tight">
    {children}
  </span>
);

export const PMAttributionMeasurement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-neutral-200 overflow-hidden font-sans">
      
      {/* Tech Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]" 
        style={{
          backgroundImage: "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 sm:gap-16 items-start">
          
          {/* Left Column - The Core Problem */}
          <div className="flex flex-col justify-center pt-2">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-neutral-900 mb-8 leading-[1.2] tracking-tight">
              <span className="block font-mono text-neutral-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4">
                Can I trust these numbers?
              </span>
              Meta reports a sale.<br />
              Google reports a sale.<br />
              <span className="font-mono text-[22px] sm:text-[28px] text-white bg-neutral-900 px-3 py-1.5 rounded-md inline-block mt-3 shadow-lg border border-neutral-700">
                Your store received 1 order.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-neutral-800 mb-4 leading-snug">
              Which number should guide your next budget decision?
            </p>
            
            <p className="text-[15px] sm:text-base font-medium text-neutral-500 leading-relaxed max-w-md">
              We check your tracking, fix missing or duplicate events, and compare ad reports with <Highlight>actual store orders</Highlight>—not just dashboard metrics.
            </p>
          </div>

          {/* Right Column - The Three Rows */}
          <div className="flex flex-col gap-5 sm:gap-6">
            
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 shrink-0 rounded-md bg-neutral-100 text-neutral-500 flex items-center justify-center font-mono font-bold text-sm border border-neutral-200">
                  01
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1.5 tracking-tight">
                    Pixel, CAPI and analytics.
                  </h4>
                  <p className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-relaxed">
                    Most agencies stop at the pixel. We verify if the <Highlight>right events and values</Highlight> are being sent, and fix deductions.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 shrink-0 rounded-md bg-neutral-100 text-neutral-500 flex items-center justify-center font-mono font-bold text-sm border border-neutral-200">
                  02
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1.5 tracking-tight">
                    Attribution.
                  </h4>
                  <p className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-relaxed">
                    Are multiple channels <Highlight>claiming the same order</Highlight>? We map true delays and overlaps to find the real source of growth.
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 shrink-0 rounded-md bg-neutral-100 text-neutral-500 flex items-center justify-center font-mono font-bold text-sm border border-neutral-200">
                  03
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 mb-1.5 tracking-tight">
                    Business results.
                  </h4>
                  <p className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-relaxed">
                    We don't optimize for dashboard ROAS. We optimize for <Highlight>delivered orders and margin</Highlight> left after returns.
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Technical Checklist Accordion */}
            <div className="border border-neutral-200 rounded-xl bg-white overflow-hidden shadow-sm hover:border-neutral-300 transition-colors">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-neutral-700 bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
              >
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                  <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  See what we check (Technical)
                </span>
                <svg 
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 pt-2 border-t border-neutral-100 bg-white">
                      <ul className="text-[13px] text-neutral-500 font-medium space-y-2.5 list-disc pl-4 marker:text-neutral-300">
                        <li>Server-side API (CAPI) deduplication & event match quality</li>
                        <li>UTM parameter standardization across campaigns</li>
                        <li>GA4 e-commerce tracking & channel mapping accuracy</li>
                        <li>Drop-offs between Add-to-Cart, Initiate Checkout & Payment</li>
                        <li>Post-purchase tracking discrepancies</li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Closing Line */}
            <div className="flex justify-start mt-2">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-md bg-blue-50 border border-blue-200 shadow-sm">
                <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-[13px] sm:text-[14px] font-bold text-blue-900 leading-snug">
                  We connect the available data, explain the gaps and use it to guide what to scale, fix or test.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
