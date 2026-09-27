import { motion } from "framer-motion";

export const PMAbout = () => {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Label */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-widest uppercase">
            How We Partner
          </div>
        </div>

        {/* Core Message */}
        <div className="space-y-10 sm:space-y-14">
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            In 2026, <span className="text-red-500">"growth at all costs"</span> will not work in D2C.
          </h2>

          <div className="space-y-8 sm:space-y-10 text-lg sm:text-2xl font-medium text-slate-500 leading-relaxed">
            
            <p>
              We work directly with D2C brands and founders because we know exactly how they think. To a founder, dashboard ROAS is not a profitable metric. They go much deeper downstream to see if <strong className="text-slate-900 bg-emerald-100 px-1.5 py-0.5 rounded">topline revenue is actually increasing</strong>.
            </p>

            <p>
              That’s why we do the complete D2C math on a <strong className="text-slate-900">per-product level</strong> to calculate the real CAC. We don't just run ads—we sit with founders to <span className="text-blue-600 font-bold">negotiate pricing with vendors</span>, whether it's logistics, delivery, or packaging.
            </p>

            <div className="bg-slate-50 border-l-4 border-slate-900 p-6 sm:p-10 rounded-r-3xl shadow-sm">
              <p className="text-xl sm:text-3xl text-slate-900 font-black tracking-tight mb-4">
                We don't believe in middle-person reporting.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We refuse to work in a tiered system where we report to an employee, who reports to a manager, who reports to the founder—while losing focus on what actually matters. <strong className="text-slate-900">We work directly with the founder</strong> to understand the real bottlenecks and fix them end-to-end.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
