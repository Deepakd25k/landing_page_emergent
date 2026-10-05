import { motion } from "framer-motion";

export const PMAttributionMeasurement = () => {
  const steps = [
    {
      title: "Check the signals.",
      desc: "We audit purchase events, tracking coverage, duplicate events and conversion values before trusting the reports."
    },
    {
      title: "Connect the numbers.",
      desc: "We reconcile platform reporting with store orders, new customers, cancellations, returns and delivered revenue."
    },
    {
      title: "Understand the credit.",
      desc: "We review attribution windows, conversion delays and overlapping claims—before recommending what to scale or stop."
    },
    {
      title: "Test the impact.",
      desc: "Where data and scale allow, we use controlled tests to understand what advertising actually adds."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      
      {/* Subtle Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.5]" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading & Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-200 text-[11px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Attribution & Measurement
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900"
          >
            Meta took the credit.<br />
            Google took the credit.<br />
            <span className="text-slate-400">You received one order.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15px] sm:text-[18px] text-slate-600 font-medium space-y-4 max-w-2xl mx-auto"
          >
            <p>
              Your customer can discover you through an ad, search for your brand later and buy after a WhatsApp reminder.
            </p>
            <p>
              Every dashboard sees part of that journey. <span className="font-bold text-slate-900">Your budget decisions need a wider view.</span>
            </p>
            <p>
              “ROAS looks good” is where the conversation starts. <br className="hidden sm:block" />It shouldn’t be where it ends.
            </p>
          </motion.div>
        </div>

        {/* Visual Journey Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200 p-6 sm:p-10 mb-16 sm:mb-20 overflow-hidden"
        >
          {/* Journey Path */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 mb-8 relative">
            
            {/* Desktop connecting line */}
            <div className="hidden sm:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-slate-100 border-t-2 border-dashed border-slate-200 -z-10"></div>

            {/* Node 1 */}
            <div className="flex flex-col items-center bg-white z-10 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 mb-3 text-blue-600 shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-slate-700">Meta discovery</span>
            </div>

            {/* Arrow mobile */}
            <div className="sm:hidden text-slate-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>

            {/* Node 2 */}
            <div className="flex flex-col items-center bg-white z-10 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 flex items-center justify-center border border-red-100 mb-3 text-red-500 shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-slate-700">Google search</span>
            </div>

            {/* Arrow mobile */}
            <div className="sm:hidden text-slate-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>

            {/* Node 3 */}
            <div className="flex flex-col items-center bg-white z-10 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 mb-3 text-emerald-500 shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-slate-700">WhatsApp reminder</span>
            </div>

            {/* Arrow mobile */}
            <div className="sm:hidden text-slate-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>

            {/* Node 4 (Outcome) */}
            <div className="flex flex-col items-center bg-white z-10 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 mb-3 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-slate-900">One store order</span>
            </div>

          </div>

          <div className="text-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 sm:py-4 mx-auto max-w-2xl">
            <p className="text-[12px] sm:text-[14px] font-bold text-slate-600 leading-relaxed">
              “Multiple touchpoints. One purchase. <span className="text-slate-900">Platform-reported revenue should not simply be added together.</span>”
            </p>
          </div>
        </motion.div>

        {/* 4 Pillars of Measurement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col items-start"
            >
              <h3 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-[13px] sm:text-[14px] font-medium text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer Callout */}
        <div className="mt-12 sm:mt-16 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[17px] sm:text-[22px] font-black text-slate-900 leading-snug tracking-tight"
          >
            Know what the data supports.<br className="hidden sm:block" />
            Know what still needs testing.<br />
            <span className="text-slate-500 mt-2 block">Make your next budget decision with both in view.</span>
          </motion.h3>
        </div>

      </div>
    </section>
  );
};
