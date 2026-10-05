import { motion } from "framer-motion";

export const PMCreativePipeline = () => {
  const steps = [
    {
      step: "01",
      title: "Understand the customer.",
      desc: "What do they want? What makes them hesitate? What do reviews, comments and purchase behaviour tell us?"
    },
    {
      step: "02",
      title: "Build the test.",
      desc: "Choose the audience, insight, angle, offer and format. Define what we want to learn."
    },
    {
      step: "03",
      title: "Make the creative.",
      desc: "Turn the strategy into briefs, scripts and assets—with performance and creative working together."
    },
    {
      step: "04",
      title: "Feed the results back.",
      desc: "Review what worked, what failed and what deserves another iteration."
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-slate-100 text-[11px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Creative Strategy
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2rem] sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900"
          >
            Your next creative needs a reason.<br className="hidden sm:block" />
            <span className="text-slate-400">“Let’s try this” isn’t enough.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[14px] sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Our performance creative team works with customer insights, product economics and campaign results—<span className="font-bold text-slate-900">not just a folder of references.</span>
          </motion.p>
        </div>

        {/* Steps Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-24 relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-row items-start gap-4 sm:gap-5 relative bg-[#FAFAFA] p-5 sm:p-6 rounded-2xl border border-slate-100"
            >
              <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center text-blue-600 font-black text-sm">
                {step.step}
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-slate-900 mb-2 mt-1.5">
                  {step.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] font-medium text-slate-500 leading-relaxed pr-2">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mockup Testing Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Browser-like window wrapper */}
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden bg-white">
            
            {/* Window Header */}
            <div className="bg-[#FAFAFA] border-b border-slate-200 px-5 py-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              <div className="ml-4 px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 tracking-wider flex items-center gap-2">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                LIVE TESTING LOG
              </div>
            </div>

            {/* Sheet Content - Scrollable horizontally on mobile */}
            <div className="overflow-x-auto">
              <div className="min-w-[800px] w-full text-left text-[12px] sm:text-[13px]">
                
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-white border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider px-6 py-4">
                  <div className="col-span-1">Test ID</div>
                  <div className="col-span-3">Core Hypothesis</div>
                  <div className="col-span-2">Angle / Hook</div>
                  <div className="col-span-2">Format</div>
                  <div className="col-span-2">Spend (72h)</div>
                  <div className="col-span-2 text-right">Verdict</div>
                </div>

                {/* Rows */}
                <div className="grid grid-cols-12 px-6 py-5 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-1 font-mono text-slate-400">#114</div>
                  <div className="col-span-3 font-semibold text-slate-800 pr-4 truncate">Price objection vs Quality</div>
                  <div className="col-span-2 text-slate-600">"Cost per wear" math</div>
                  <div className="col-span-2 text-slate-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> UGC Video
                  </div>
                  <div className="col-span-2 font-mono text-slate-600">₹14,250</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] tracking-widest border border-emerald-200">SCALE</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 px-6 py-5 border-b border-slate-50 items-center hover:bg-slate-50 transition-colors bg-slate-50/50">
                  <div className="col-span-1 font-mono text-slate-400">#115</div>
                  <div className="col-span-3 font-semibold text-slate-800 pr-4 truncate">Ingredient transparency</div>
                  <div className="col-span-2 text-slate-600">Founder zooming on label</div>
                  <div className="col-span-2 text-slate-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Reel Ad
                  </div>
                  <div className="col-span-2 font-mono text-slate-600">₹12,800</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-bold text-[10px] tracking-widest border border-amber-200">ITERATE</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 px-6 py-5 items-center hover:bg-slate-50 transition-colors">
                  <div className="col-span-1 font-mono text-slate-400">#116</div>
                  <div className="col-span-3 font-semibold text-slate-800 pr-4 truncate">Social proof for skepticism</div>
                  <div className="col-span-2 text-slate-600">Trustpilot review mashup</div>
                  <div className="col-span-2 text-slate-500 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Static Carousel
                  </div>
                  <div className="col-span-2 font-mono text-slate-600">₹5,400</div>
                  <div className="col-span-2 flex justify-end">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[10px] tracking-widest border border-slate-200">KILL</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Sheet Footer */}
            <div className="bg-[#FAFAFA] border-t border-slate-100 px-6 py-4 flex items-center justify-between text-xs font-bold">
              <span className="text-slate-400">Updated: Today</span>
              <span className="text-blue-600 cursor-pointer hover:underline">View Full Pipeline &rarr;</span>
            </div>

          </div>
        </motion.div>

        {/* Punchline Footer */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-[16px] sm:text-[20px] font-black text-slate-900 tracking-tight">
            Every round should make the next round smarter.
          </p>
        </div>

      </div>
    </section>
  );
};
