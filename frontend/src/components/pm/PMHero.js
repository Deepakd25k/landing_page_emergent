import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative pt-40 pb-20 sm:pt-56 sm:pb-32 overflow-hidden flex flex-col justify-center items-center min-h-screen">
      {/* Background ambient glow - Linear/Vercel style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* YC-style stark minimalist badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-white/50 tracking-[0.2em] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Not An Agency
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-[10px] sm:text-xs font-bold text-blue tracking-[0.2em] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse"></span>
            Your D2C Growth Partners
          </div>
        </motion.div>

        {/* Ultra-premium typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-[6rem] font-black text-white tracking-tighter leading-[1.05] mb-8"
        >
          Stop paying retainers <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
            for interns to learn on your budget.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
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
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-white/90 text-black rounded-xl font-black tracking-tight text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:-translate-y-1"
          >
            Apply For Partnership
          </a>
        </motion.div>
      </div>
    </section>
  );
};
