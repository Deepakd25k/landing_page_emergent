import { motion } from "framer-motion";

export const PMProof = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#FFD500] relative text-[#0A192F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            Don't take our word for it.<br />
            Look at the math.
          </h2>
          <p className="text-[#0A192F]/70 text-xl font-bold tracking-tight">
            We stripped away the bloated model. And the numbers speak for themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              brand: "D2C Skincare",
              metric: "3x",
              desc: "Scaled ad spend in 45 days while maintaining a strict blended ROAS target.",
            },
            {
              brand: "Premium Apparel",
              metric: "-42%",
              desc: "Drop in blended CAC after deploying custom tracking and fixing attribution loss.",
            },
            {
              brand: "Health Supplements",
              metric: "2.8x",
              desc: "Increase in bottom-funnel conversion rate within 14 days of onboarding.",
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0A192F] text-white p-8 sm:p-10 rounded-[2rem] hover:-translate-y-2 transition-transform shadow-2xl shadow-black/10"
            >
              <div className="text-[#FFD500] font-black tracking-tighter text-sm uppercase mb-8">
                {item.brand}
              </div>
              <div className="text-6xl sm:text-7xl font-black tracking-tighter mb-4 leading-none">
                {item.metric}
              </div>
              <p className="text-white/70 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-black tracking-tighter">
            How did we achieve this when traditional marketers failed? <br className="hidden sm:block" />
            Because we know something they don't.
          </p>
        </div>

      </div>
    </section>
  );
};
