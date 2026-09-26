import { motion } from "framer-motion";

export const PMAttribution = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            The Attribution Problem <br />
            <span className="text-blue">They Don't Want You To Know</span>
          </h2>
          <p className="text-white/60 text-lg">
            Most marketers blindly kill creatives after 3-4 days if the CTR drops. Here is what we find every time we audit an account.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">The 48-Hour Reality</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                The ideal time to judge a creative is 36 to 48 hours. But because of massive attribution problems in the current ecosystem, <strong>40% to 60% of signals are lost</strong>. 
              </p>
              <p className="text-white/70 leading-relaxed">
                That "failing" creative you just paused? It might have been your biggest winner, suffering from signal loss. Most performance marketers don't understand this gap. We do.
              </p>
            </div>
            
            <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/5">
              <h4 className="text-lg font-bold text-white mb-4">Our Technical Edge</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-blue/20 flex items-center justify-center shrink-0 text-blue font-bold text-sm">1</div>
                  <p className="text-white/60 text-sm">We define Custom IPs and ISPs for your brand to accurately capture organic search spillover.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-blue/20 flex items-center justify-center shrink-0 text-blue font-bold text-sm">2</div>
                  <p className="text-white/60 text-sm">We strictly specialize in the D2C space. We know how to map the exact audience touchpoints that standard pixels miss.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-blue/20 flex items-center justify-center shrink-0 text-blue font-bold text-sm">3</div>
                  <p className="text-white/60 text-sm">We read the math beyond the dashboard. We know when to hold a creative and when to scale it.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
