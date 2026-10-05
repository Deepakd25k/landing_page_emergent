import { motion } from "framer-motion";

export const PMScope = () => {
  const scopes = [
    {
      title: "Acquisition",
      desc: "Media decisions informed by customer quality, acquisition cost and business priorities.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
      textColor: "text-blue-400"
    },
    {
      title: "Creative",
      desc: "Customer research, angles, offers and a production pipeline connected to performance.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
      textColor: "text-purple-400"
    },
    {
      title: "Conversion",
      desc: "Product pages, buying objections, checkout friction and reasons customers leave.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]",
      textColor: "text-emerald-400"
    },
    {
      title: "Retention",
      desc: "Repeat-purchase opportunities, customer segments and relevant follow-up journeys.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]",
      textColor: "text-orange-400"
    },
    {
      title: "Profitability",
      desc: "Product margins, discounts, returns, RTO and contribution after acquisition costs.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
      textColor: "text-yellow-400"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-[#050505] relative overflow-hidden">
      
      {/* Dark mode subtle grid background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-bold tracking-widest text-slate-300 uppercase shadow-lg shadow-black/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
              Our Scope
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-[1.1] text-white"
          >
            The ad account is one part of your business.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[16px] sm:text-[20px] text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            We work across the parts that affect growth.
          </motion.p>
        </div>

        {/* Scope Cards - Masonry/Centered layout */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-5xl mx-auto mb-16">
          {scopes.map((scope, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-[1.5rem] p-6 sm:p-8 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] transition-all duration-300 ${scope.glow}`}
            >
              <div className={`mb-5 ${scope.textColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                {scope.icon}
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-3 tracking-tight">
                {scope.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] font-medium text-slate-400 leading-relaxed">
                {scope.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent w-full">
            <div className="bg-white/5 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-6 rounded-2xl border border-white/5">
              <p className="text-[14px] sm:text-[16px] font-semibold text-slate-300 leading-relaxed">
                We execute within our scope and work with your internal teams and partners where the fix depends on them.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
