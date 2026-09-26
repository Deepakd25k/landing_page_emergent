import { motion } from "framer-motion";

export const PMManifesto = () => {
  return (
    <section className="py-8 sm:py-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 text-sm font-medium text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              What this isn't
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Why do so many marketers fail you? <br className="hidden sm:block" />
            Because of how <span className="text-blue-600">they are built.</span>
          </motion.h2>
        </div>

        {/* Outer Gray Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAFAFA] border border-slate-100 rounded-[2rem] p-4 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)]"
        >
          
          <div className="flex flex-col gap-4 mb-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-row gap-4 sm:gap-5 shadow-sm border border-slate-50 items-start">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">You own the ad accounts.</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
                  Meta, {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">in your name, on your login.</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>{" "}
                  We work inside your accounts, not ours.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-row gap-4 sm:gap-5 shadow-sm border border-slate-50 items-start">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">You own the pages, funnel & data.</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
                  Every landing page, every lead, every automation flow. {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">Exportable, and always yours.</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-row gap-4 sm:gap-5 shadow-sm border border-slate-50 items-start">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">You stay the expert.</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base">
                  You focus on your sessions and your clients. We build the system around it {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">together, not instead of you.</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Footer list */}
          <div className="pt-5 border-t border-slate-200 flex flex-row flex-nowrap justify-between sm:justify-center items-center gap-1 sm:gap-12 w-full px-1">
            <div className="flex items-center gap-1 sm:gap-2 text-slate-500 font-bold text-[9px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              7 Days Action
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-slate-500 font-bold text-[9px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              Integrated PM Teams
            </div>
            <div className="flex items-center gap-1 sm:gap-2 text-slate-500 font-bold text-[9px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              Direct Slack Channel
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
