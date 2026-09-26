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
            <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-50">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The 3-Month Waiting Game.</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  The typical Indian model relies on taking {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">2-3 months to "read data".</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>{" "}
                  They need quarters to understand what we map in days.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-50">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Silo Trap.</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  They operate in silos. Strategy sits in one room, creative in another. {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">The people making your ads</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>
                  {" "}don't look at the raw conversion data.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-50">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">The Excuse Machine.</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  They treat your brand as an experiment. If it works, great. If it drops, {" "}
                  <span className="relative inline-block text-slate-900 px-1 font-semibold">
                    <span className="relative z-10">they blame CPMs</span>
                    <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
                  </span>
                  {" "}instead of fixing the core math.
                </p>
              </div>
            </div>

          </div>

          {/* Footer list */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-x-8 gap-y-4 px-4">
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              7-Day Action
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Integrated Teams
            </div>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Full Accountability
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
