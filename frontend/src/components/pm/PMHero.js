import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 overflow-hidden flex flex-col items-center bg-white min-h-[85vh]">
      
      {/* Premium Squared Grid Background with fade mask */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-10">
        
        {/* Light mode minimalist badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Not An Agency
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-[10px] sm:text-xs font-bold text-blue tracking-[0.2em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse"></span>
            Your D2C Growth Partners
          </div>
        </motion.div>

        {/* Ultra-premium Light Mode typography with Half-Highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[6rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-8"
        >
          Stop paying retainers <br className="hidden sm:block" />
          for {" "}
          <span className="relative inline-block text-blue">
            <span className="relative z-10">interns to learn</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-blue/20 -z-10 rounded-sm"></span>
          </span>
          <br className="hidden sm:block" />
          on your budget.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          You don't need another dashboard painted green. You need a specialized growth unit that fixes the math and scales your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <a
            href="#apply"
            className="w-full sm:w-auto px-8 py-4 bg-blue hover:bg-blue-hover text-white rounded-xl font-black tracking-tight text-lg transition-all shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_60px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            Apply For Partnership
          </a>
        </motion.div>
      </div>
    </section>
  );
};
