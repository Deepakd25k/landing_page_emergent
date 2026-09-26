import { motion } from "framer-motion";

export const PMExecution = () => {
  return (
    <section className="py-20 sm:py-32 bg-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              When things break, we don't say <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple-400">
                "We are figuring it out."
              </span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We have seen enough D2C data to know exactly what breaks and how to fix it. We don't just stare at high CPMs and blame the algorithm. We read the math, identify the bottleneck, and show you real impact in 2-3 days.
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: "1-Week Lock In",
                  desc: "We either hear the problem straight from the founder, or we diagnose it in less than 7 days. We lock in the math, stabilize the account, and begin scaling immediately."
                },
                {
                  title: "Speed is the New Edge",
                  desc: "2026 onwards is all about efficiency and speed with AI. We have an integrated team that creates, publishes, and tests fast. No silos between strategy and creative."
                },
                {
                  title: "Integrated Performance Creative",
                  desc: "Your creatives aren't built by artists. They are built by performance marketers who see data daily and know exactly what metric drives conversions."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-purple-500/20 blur-3xl" />
              <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-white mb-2">7 Days</div>
                <div className="text-blue font-bold uppercase tracking-widest text-sm mb-8">Maximum Onboarding Time</div>
                <div className="text-6xl font-black text-white mb-2">48 Hrs</div>
                <div className="text-blue font-bold uppercase tracking-widest text-sm">To Show Real Impact</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
