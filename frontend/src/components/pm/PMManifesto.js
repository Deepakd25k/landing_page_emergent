import { motion } from "framer-motion";

export const PMManifesto = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Why 90% of Indian Agencies <br />
            <span className="text-red-500">Fail D2C Brands</span>
          </h2>
          <p className="text-white/60 text-lg">
            Most agencies treat your business as an experiment. "If it works, fine. If not, we'll move to another brand."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Excel Justification",
              desc: "They hide behind complex dashboards painted green or yellow to justify their retainers. We hate dashboards built just to confuse founders. We calculate the math in week 1, and stick to it.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            },
            {
              title: "The Intern Trap",
              desc: "You pay premium retainers, but your ad account is handed over to a 1-2 year experienced marketer who doesn't understand deep attribution or numbers. When things break, they just blame CPMs or CTRs.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            },
            {
              title: "The 3-Month Waiting Game",
              desc: "They tell you it takes 2-3 months to 'read your data' and 'understand your business goals'. We have enough D2C experience to map your problems in 7 days or less, and we start scaling immediately.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-ink border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
