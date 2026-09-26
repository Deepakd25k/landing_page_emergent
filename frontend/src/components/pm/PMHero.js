import { motion } from "framer-motion";

export const PMHero = () => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 flex flex-col items-center min-h-screen bg-white">
      
      {/* Outer Card Container */}
      <div className="relative w-full max-w-[95%] sm:max-w-4xl mx-auto bg-[#FAFAFA] border border-slate-100 rounded-[2.5rem] p-8 sm:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
        
        {/* Dotted Background inside the card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50" 
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="relative z-10 text-center flex flex-col items-center">
          
          {/* Minimalist White Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 text-sm font-medium text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Not an agency. Your D2C growth partners.
            </div>
          </motion.div>

          {/* Typography - Black, Gray, Blue layout */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-[4rem] font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-slate-900 block mb-1">Stop paying retainers.</span>
            <span className="text-slate-400 block mb-1">for interns to learn on</span>
            <span className="text-blue-600 block">your budget.</span>
          </motion.h1>

          {/* Paragraph with inline highlights */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-normal text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            You don't need another dashboard painted green. You need a specialized growth unit that{" "}
            <span className="relative inline-block font-semibold text-slate-900 px-1">
              <span className="relative z-10">fixes the math</span>
              <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
            </span>{" "}
            and{" "}
            <span className="relative inline-block font-semibold text-slate-900 px-1">
              <span className="relative z-10">scales your brand.</span>
              <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
            </span>
          </motion.p>

          {/* Big Purple/Blue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full sm:max-w-md mx-auto flex flex-col items-center"
          >
            <a
              href="#apply"
              className="w-full px-8 py-5 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-2xl font-semibold text-lg transition-all shadow-[0_10px_30px_rgba(93,95,239,0.3)] hover:shadow-[0_15px_40px_rgba(93,95,239,0.4)] flex items-center justify-center gap-2 mb-4"
            >
              Apply For Partnership
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <p className="text-sm text-slate-500">
              <span className="relative inline-block font-semibold text-slate-900 px-1">
                <span className="relative z-10">7 Days.</span>
                <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
              </span>{" "}
              No silos, no excuses. Just your math, fixed honestly.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
