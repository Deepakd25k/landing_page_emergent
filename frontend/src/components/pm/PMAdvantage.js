import { motion } from "framer-motion";

export const PMAdvantage = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-tight max-w-4xl mx-auto">
          Speed + Deep Tracking is the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-blue-light to-white">
            only way to scale post-2024.
          </span>
        </h2>
        
        <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto mb-16">
          We map audience touchpoints that standard pixels miss entirely. Our infrastructure gives your brand an unfair advantage.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ink border border-white/5 p-10 rounded-[2rem] hover:border-white/10 transition-colors"
          >
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-2xl font-black tracking-tighter text-white mb-4">Custom IPs & ISPs</h3>
            <p className="text-white/60 font-medium leading-relaxed">
              We define Custom IPs and ISPs for your brand to accurately capture organic search spillover. We know exactly which ads are driving hidden organic traffic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ink border border-white/5 p-10 rounded-[2rem] hover:border-white/10 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black tracking-tighter text-white mb-4">D2C Specialization</h3>
            <p className="text-white/60 font-medium leading-relaxed">
              We strictly specialize in the D2C space. We don't do B2B. We don't do SaaS. We map exact e-commerce touchpoints with laser focus.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
