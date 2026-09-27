import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

export const CourseTransformation = () => {
  return (
    <section className="relative bg-[#FAFAFA] py-20 sm:py-32 overflow-hidden border-t border-line">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue-dark text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              The End Result
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Your 15-Hour Transformation
            </h2>
            <p className="text-lg text-ink-2 max-w-2xl mx-auto font-medium">
              You won't just learn new tricks. You will completely shift your identity in the job market and to founders.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
          
          {/* Left: Media Buyer */}
          <Reveal className="w-full lg:w-1/2">
            <div className="bg-white border border-red-100 rounded-[2rem] p-8 sm:p-10 shadow-sm relative overflow-hidden group hover:border-red-200 hover:shadow-card transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 blur-[50px] rounded-full pointer-events-none transition-all duration-300 group-hover:bg-red-100"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-black border border-red-100">
                  <span className="material-icons-round">person_off</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Replaceable Media Buyer</h3>
                  <p className="text-sm font-semibold text-red-500">How 99% of marketers operate</p>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Debates ABO vs CBO in interviews",
                  "Optimizes for platform ROAS (inflated data)",
                  "Has no idea where the funnel leaks",
                  "Writes copy manually (slow & generic)",
                  "Seen as a cost center by founders"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-round text-red-400 mt-0.5 text-[18px]">close</span>
                    <span className="text-ink-2 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Center Arrow */}
          <div className="hidden lg:flex w-16 h-16 shrink-0 bg-white border border-line rounded-full items-center justify-center shadow-md z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="material-icons-round text-blue text-3xl">arrow_forward</span>
          </div>
          <div className="lg:hidden flex justify-center w-full my-[-1rem] z-20 relative">
            <div className="w-12 h-12 bg-white border border-line rounded-full flex items-center justify-center shadow-sm">
              <span className="material-icons-round text-blue text-2xl">arrow_downward</span>
            </div>
          </div>

          {/* Right: Growth Partner */}
          <Reveal delay={0.2} className="w-full lg:w-1/2">
            <div className="bg-white border-2 border-blue/20 rounded-[2rem] p-8 sm:p-10 shadow-lg relative overflow-hidden group hover:border-blue/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] transition-all duration-300 transform lg:scale-105 z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue/10 blur-[60px] rounded-full pointer-events-none transition-all duration-300 group-hover:bg-blue/20"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center font-black shadow-md">
                  <span className="material-icons-round">workspace_premium</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">Irreplaceable Growth Partner</h3>
                  <p className="text-sm font-semibold text-blue">The top 1% that founders value</p>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Understands the full D2C tech stack & architecture",
                  "Optimizes for SKU-level profitability & margins",
                  "Maps the user journey and plugs attribution leaks",
                  "Deploys AI agents to scale winning angles 100x",
                  "Speaks unit economics & trusted with infinite budgets"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-round text-blue mt-0.5 text-[18px]">check_circle</span>
                    <span className="text-ink font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
