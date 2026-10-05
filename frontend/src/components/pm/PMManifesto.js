import { motion } from "framer-motion";

export const PMManifesto = () => {
  return (
    <section className="py-12 sm:py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[11px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
              The Agency Pain
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto"
          >
            Your account has a manager.<br className="hidden sm:block" />
            <span className="text-slate-400">Does your growth have an owner?</span>
          </motion.h2>
        </div>

        {/* Outer Gray Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#FAFAFA] border border-slate-200 rounded-[2rem] p-4 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm border border-slate-100 items-start">
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0 text-rose-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight">“We’ll check with the performance team.”</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-[13px] sm:text-[15px]">
                  A simple question becomes three messages, two follow-ups and another meeting.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm border border-slate-100 items-start">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-orange-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight">“Please share creative references.”</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-[13px] sm:text-[15px]">
                  Your creative team should understand your customers—not need you to explain the brand with every brief.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm border border-slate-100 items-start">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight">“We’re testing new creatives.”</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-[13px] sm:text-[15px]">
                  Different colours. Different hooks. But no clear answer on which customer insight or buying objection is being tested.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm border border-slate-100 items-start">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 text-purple-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-tight">“Give us another three months.”</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-[13px] sm:text-[15px]">
                  Results take time. A clear diagnosis, testing plan and next action shouldn’t take a quarter.
                </p>
              </div>
            </div>

          </div>

          {/* Footer closing statement */}
          <div className="pt-6 border-t border-slate-200 flex flex-row justify-center items-center w-full px-2">
            <p className="text-slate-800 font-bold text-sm sm:text-base text-center">
              You deserve to know what’s happening, why it matters and who owns it.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
