import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden flex flex-col justify-center items-center min-h-[90vh]">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-white/70 mb-8 backdrop-blur-md uppercase tracking-widest"
        >
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
          Not An Agency. Your D2C Growth Partners.
        </motion.div>

        {/* Using font-black tracking-tighter to match the attached heavy font style */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8"
        >
          Stop paying retainers for <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue via-blue-light to-white">
            interns to learn on your budget.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          You don't need another dashboard painted green to justify a retainer. You need a specialized growth unit that knows exactly what to do when the math breaks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <a
            href="#apply"
            className="w-full sm:w-auto px-8 py-4 bg-blue hover:bg-blue-hover text-white rounded-xl font-black tracking-tight text-lg transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] hover:-translate-y-1"
          >
            Apply For Partnership
          </a>
        </motion.div>
      </div>
    </section>
  );
};
