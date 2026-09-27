import { motion } from "framer-motion";

export const PMAbout = () => {
  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-slate-100 px-4">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* The Master Card */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 sm:p-12 overflow-hidden relative">
          
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-900"></div>

          {/* Label */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-6 leading-snug">
            In 2026, <span className="text-red-500">"growth at all costs"</span> will not work in D2C.
          </h2>

          <div className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed space-y-5">
            <p>
              We work directly with founders because we know exactly how they think. To a founder, dashboard ROAS is not a profitable metric. They go much deeper downstream to see if <strong className="text-slate-900 bg-emerald-100 px-1 rounded">topline revenue is actually increasing</strong>.
            </p>
            <p>
              That’s why we do the complete D2C math on a <strong className="text-slate-900">per-product level</strong> to calculate the real CAC. We don't just run ads—we sit with founders to <span className="text-blue-600 font-bold">negotiate pricing with vendors</span>, whether it's logistics, delivery, or packaging.
            </p>
          </div>

          {/* Bottom Highlight Box inside the card */}
          <div className="mt-8 bg-slate-50 border-l-4 border-slate-900 p-5 sm:p-6 rounded-r-xl">
            <p className="text-lg sm:text-xl text-slate-900 font-bold tracking-tight">
              We don't believe in middle-person reporting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
