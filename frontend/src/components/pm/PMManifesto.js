import { motion } from "framer-motion";

export const PMManifesto = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight">
            Why do so many performance marketers fail you? <br />
            <span className="text-red-500">Because of how they are built.</span>
          </h2>
          <p className="text-white/60 text-lg font-medium">
            The typical Indian model operates in silos. They treat your brand as an experiment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The 3-Month Waiting Game",
              desc: "They rely on taking 2-3 months just to 'read data'. They need quarters to understand what we map in days.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "The Silo Trap",
              desc: "Strategy sits in one room, creative in another. The people making your ads don't look at the raw conversion data.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              )
            },
            {
              title: "The Excuse Machine",
              desc: "If it works, they take the credit. If it drops, they blame high CPMs or algorithm updates instead of fixing the math.",
              icon: (
                <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
              className="bg-ink border border-white/5 p-8 rounded-[2rem] hover:border-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-white mb-4">{item.title}</h3>
              <p className="text-white/60 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
