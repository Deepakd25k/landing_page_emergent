import { motion } from "framer-motion";

export const PMExecution = () => {
  return (
    <section className="py-20 sm:py-32 bg-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-6 leading-tight">
              We don't say <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-purple-400">
                "We are figuring it out."
              </span>
            </h2>
            <p className="text-white/70 text-lg font-medium mb-8 leading-relaxed">
              We have seen enough D2C data to know exactly what breaks and how to fix it. We don't just stare at high CPMs and blame the algorithm. We fix the math.
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: "7-Day Onboarding",
                  desc: "We lock in your core math in 7 days or less. We stabilize the account, and begin scaling immediately."
                },
                {
                  title: "No Creative Silos",
                  desc: "Your creatives are built by performance marketers who see real data daily, not just artists who want things to 'look good'."
                },
                {
                  title: "Real Impact in 48 Hrs",
                  desc: "When numbers drop, we diagnose the exact bottleneck and deploy fixes that show impact in 2-3 days."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-black tracking-tight text-xl mb-1">{item.title}</h4>
                    <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12 aspect-square flex flex-col items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-purple-500/20 blur-3xl" />
              <div className="relative z-10 text-center w-full">
                <div className="text-7xl sm:text-8xl font-black tracking-tighter text-white mb-2">7</div>
                <div className="text-blue font-black uppercase tracking-widest text-sm mb-12">Days To Scale</div>
                
                <div className="h-px w-full bg-white/10 mb-12"></div>
                
                <div className="text-7xl sm:text-8xl font-black tracking-tighter text-white mb-2">48</div>
                <div className="text-blue font-black uppercase tracking-widest text-sm">Hrs To Fix Bottlenecks</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
