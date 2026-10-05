import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMAttributionMeasurement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-100 overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 sm:gap-16 items-start">
          
          {/* Left Column - The Core Problem */}
          <div className="flex flex-col justify-center pt-2">
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-slate-900 mb-8 leading-[1.2] tracking-tight">
              <span className="block text-slate-400 font-semibold text-lg sm:text-xl mb-2">Can I trust these numbers?</span>
              Meta reports a sale.<br />
              Google reports a sale.<br />
              <span className="text-blue-600 bg-blue-50 px-2 rounded-md inline-block mt-1">
                Your store received 1 order.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl font-bold text-slate-800 mb-4 leading-snug">
              Which number should guide your next budget decision?
            </p>
            
            <p className="text-[15px] sm:text-base font-medium text-slate-500 leading-relaxed max-w-md">
              We check your tracking, fix missing or duplicate events, and compare ad reports with actual store orders.
            </p>
          </div>

          {/* Right Column - The Three Rows */}
          <div className="flex flex-col gap-6 sm:gap-8">
            
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex items-start gap-4 group">
                <div className="w-7 h-7 shrink-0 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-xs border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  1
                </div>
                <div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1 tracking-tight">
                    Pixel, CAPI and analytics.
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-medium text-slate-500 leading-relaxed">
                    Are the right events and values being sent correctly?
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-4 group">
                <div className="w-7 h-7 shrink-0 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-xs border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  2
                </div>
                <div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1 tracking-tight">
                    Attribution.
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-medium text-slate-500 leading-relaxed">
                    Are multiple channels claiming the same order? Are conversion delays changing the picture?
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-start gap-4 group">
                <div className="w-7 h-7 shrink-0 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-black text-xs border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  3
                </div>
                <div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-900 mb-1 tracking-tight">
                    Business results.
                  </h4>
                  <p className="text-[14px] sm:text-[15px] font-medium text-slate-500 leading-relaxed">
                    How many orders were cancelled, returned or delivered—and what margin remained?
                  </p>
                </div>
              </div>
            </div>

            {/* Optional Technical Checklist Accordion */}
            <div className="mt-2 border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-slate-700 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  See what we check (Technical)
                </span>
                <svg 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
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
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-white">
                      <ul className="text-[13px] text-slate-500 font-medium space-y-2.5 list-disc pl-4 marker:text-slate-300">
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
            <div className="p-5 sm:p-6 bg-[#F8FAFC] border border-slate-200 rounded-xl mt-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
              <p className="text-[14px] sm:text-[15px] font-bold text-slate-800 leading-relaxed">
                We connect the available data, explain the gaps and use it to guide what to scale, fix or test.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
