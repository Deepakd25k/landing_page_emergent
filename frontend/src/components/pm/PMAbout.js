import { motion } from "framer-motion";

export const PMAbout = () => {
  return (
    <section className="py-4 sm:py-6 bg-white relative overflow-hidden border-b border-slate-100 px-4">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* The Philosophy Master Card */}
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

        {/* About the Founders Section */}
        <div className="mt-20 sm:mt-24">
          
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-5">
              No traditional pitch.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Yes, we are data-driven performance marketers. But first, <strong className="text-slate-900">we fix the data</strong>. Because fixing data gives more clarity than building complex funnels. There is only one real funnel, and we all know that.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
            
            {/* Founder 1 Image */}
            <div className="w-full max-w-md mx-auto bg-white border border-slate-200 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden">
               <img src="/images/deepak_founder.png" alt="Deepak Gupta - Founder Profile" className="w-full h-auto object-cover" />
            </div>

            {/* Placeholder for 2nd Founder */}
            <div className="w-full max-w-md mx-auto border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center opacity-60 min-h-[250px] bg-slate-50 p-6 text-center">
               <div className="w-12 h-12 rounded-full bg-slate-200 mb-4 flex items-center justify-center text-slate-400">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
               </div>
               <span className="text-sm font-bold text-slate-600">Second Founder</span>
               <span className="text-xs font-medium text-slate-400 mt-1">Profile coming soon</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
