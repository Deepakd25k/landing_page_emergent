import { motion } from "framer-motion";

export const PMExecution = () => {
  const pillars = [
    {
      title: "Direct access to the operators.",
      desc: "Speak with the founders involved in your account’s diagnosis, priorities and execution.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Creative and performance, together.",
      desc: "The people making your ads understand the customer, the test and the results.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: "emerald"
    },
    {
      title: "Connected business numbers.",
      desc: "We review ad reporting alongside store revenue, delivered orders, returns and product margins.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "A visible plan.",
      desc: "Know what’s being worked on, who owns it and what decision comes next.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "AI that supports the work.",
      desc: "We use automation to reduce repetitive reporting and speed up research and creative preparation. Our team reviews the outputs and owns the decisions.",
      icon: (
        <img 
          src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" 
          alt="n8n"
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      ),
      color: "rose"
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: "bg-blue-50 text-blue-600 border-blue-100",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
      orange: "bg-orange-50 text-orange-600 border-orange-100",
      purple: "bg-purple-50 text-purple-600 border-purple-100",
      rose: "bg-rose-50 text-rose-600 border-rose-100",
    };
    return classes[color];
  };

  return (
    <section className="py-4 sm:py-6 bg-[#FAFAFA] relative overflow-hidden border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
          >
            The New Standard.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[15px] sm:text-[19px] text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Fewer handoffs. Clearer decisions. Work that moves.
          </motion.p>
        </div>

        {/* Pillars Vertical List */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[1.5rem] p-5 sm:p-6 lg:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-200 flex flex-row items-start gap-4 sm:gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border ${getColorClasses(pillar.color)}`}>
                {pillar.icon}
              </div>
              <div className="pt-1">
                <h3 className="text-[17px] sm:text-[19px] font-bold text-slate-900 mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
