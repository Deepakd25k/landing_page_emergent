import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

export const AuditComparison = () => {
  return (
    <section id="comparison" data-section="audit-comparison" className="bg-white py-12 sm:py-24 overflow-hidden">
      
      {/* Injecting handwriting font */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
      `}} />

      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="mb-6 sm:mb-10 text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-3 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
              05 — The Whiteboard Truth
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Most Setups vs <span className="text-blue">incrementalvalue.in</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* The Unified Whiteboard Card */}
          <div className="relative w-full max-w-5xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-ink">
            
            {/* Paper Texture Background */}
            <div className="absolute inset-0 bg-[#fdfbf7]" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            
            <div className="relative z-10 flex flex-row h-auto min-h-[350px] sm:min-h-[500px]">
              
              {/* LEFT SIDE: THE MESS */}
              <div className="flex-1 flex flex-col relative p-2 sm:p-8 border-r-2 border-dashed border-ink-3/30">
                <h3 className="font-handwriting text-lg sm:text-4xl text-danger font-bold text-center mb-6 sm:mb-10 rotate-[-2deg]">
                  "Normal Mess"
                </h3>
                
                <div className="flex-1 flex flex-col items-center justify-center gap-4 sm:gap-8 w-full relative z-10 pb-4 sm:pb-8">
                  
                  {/* Top row: Agency & Dev */}
                  <div className="flex w-full justify-around items-center px-1 sm:px-4">
                    <div className="bg-white border sm:border-2 border-ink-3 px-1.5 py-1 sm:px-4 sm:py-2 shadow-[2px_2px_0_0_#9ca3af] sm:shadow-[4px_4px_0_0_#9ca3af] rotate-[-4deg] max-w-[48%]">
                      <p className="font-mono text-[8px] sm:text-sm font-bold text-ink leading-tight">Ad Agency</p>
                      <p className="font-handwriting text-[10px] sm:text-lg text-ink-2 leading-none sm:leading-tight mt-0.5 sm:mt-1">ROAS only.</p>
                    </div>
                    
                    <div className="bg-white border sm:border-2 border-ink-3 px-1.5 py-1 sm:px-4 sm:py-2 shadow-[2px_2px_0_0_#9ca3af] sm:shadow-[4px_4px_0_0_#9ca3af] rotate-[3deg] max-w-[48%]">
                      <p className="font-mono text-[8px] sm:text-sm font-bold text-ink leading-tight">Dev</p>
                      <p className="font-handwriting text-[10px] sm:text-lg text-ink-2 leading-none sm:leading-tight mt-0.5 sm:mt-1">No sales XP.</p>
                    </div>
                  </div>

                  {/* Center: YOU */}
                  <div className="relative my-2 sm:my-4">
                    <div className="bg-danger text-white font-bold font-mono text-[10px] sm:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg relative z-10">
                      YOU
                    </div>
                    {/* Messy Red Circle Doodle */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[50px] sm:w-[140px] sm:h-[100px] pointer-events-none stroke-danger" fill="none" viewBox="0 0 100 100">
                      <motion.path 
                        d="M10,50 Q20,10 50,15 T90,50 T50,90 T15,60" 
                        strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                      />
                    </svg>
                  </div>

                  {/* Bottom: Spreadsheet */}
                  <div className="bg-white border sm:border-2 border-ink-3 px-1.5 py-1 sm:px-4 sm:py-2 shadow-[2px_2px_0_0_#9ca3af] sm:shadow-[4px_4px_0_0_#9ca3af] rotate-[-2deg]">
                    <p className="font-mono text-[8px] sm:text-sm font-bold text-ink leading-tight">Spreadsheets</p>
                    <p className="font-handwriting text-[10px] sm:text-lg text-ink-2 leading-none sm:leading-tight mt-0.5 sm:mt-1">Broken data.</p>
                  </div>
                  
                  {/* Messy Arrows Background */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-ink-3/40 -z-10" fill="none" preserveAspectRatio="none">
                    <path d="M 20%,30% L 50%,50% M 80%,30% L 50%,50% M 50%,70% L 50%,50%" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Handwritten Pain Points */}
                <div className="mt-2 sm:mt-4 px-1 sm:px-4 flex-1">
                  <ul className="font-handwriting text-[11px] sm:text-xl text-ink-2 leading-tight sm:leading-snug space-y-1 sm:space-y-2">
                    <li className="flex items-start gap-1">
                      <span className="text-danger font-bold">×</span> Inflated ROAS (ignores returns)
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-danger font-bold">×</span> No creative mapping (UTMs, GTM)
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-danger font-bold">×</span> Can't map full D2C data
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-danger font-bold">×</span> No SKU-level CAC or Conv. Rate
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-danger font-bold">×</span> Don't know where the leak is
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE: THE FIX */}
              <div className="flex-1 flex flex-col relative p-2 sm:p-8">
                <h3 className="font-handwriting text-lg sm:text-4xl text-blue font-bold text-center mb-6 sm:mb-10 rotate-[2deg]">
                  "With incrementalvalue.in"
                </h3>

                <div className="flex flex-col items-center justify-center w-full relative z-10 pb-4 sm:pb-8">
                  
                  {/* incrementalvalue.in central block */}
                  <div className="relative bg-ink text-white font-black font-mono text-sm sm:text-2xl px-4 py-2 sm:px-8 sm:py-4 shadow-[4px_4px_0_0_#3b82f6] sm:shadow-[6px_6px_0_0_#3b82f6] z-20 hover:-translate-y-1 transition-transform">
                    incrementalvalue.in
                    <div className="absolute -inset-2 bg-blue-500/20 blur-lg sm:blur-xl -z-10 rounded-full" />
                  </div>

                  {/* Clean Flowchart Structure */}
                  <div className="w-[2px] h-6 sm:h-10 bg-blue z-10"></div>
                  <div className="w-[70%] sm:w-[60%] h-[2px] bg-blue z-10"></div>
                  <div className="flex w-[70%] sm:w-[60%] justify-between relative h-6 sm:h-10 z-10">
                     <div className="w-[2px] h-full bg-blue absolute left-0"></div>
                     <div className="w-[2px] h-full bg-blue absolute left-1/2 -translate-x-1/2"></div>
                     <div className="w-[2px] h-full bg-blue absolute right-0"></div>
                  </div>

                  {/* The Pillars */}
                  <div className="flex w-[85%] sm:w-[75%] justify-between z-20 mt-[-2px]">
                    <div className="bg-white border sm:border-2 border-blue px-2 py-1 sm:px-4 sm:py-2 text-center shadow-[2px_2px_0_0_#93c5fd] sm:shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-[8px] sm:text-sm font-bold">Ads</p>
                    </div>
                    <div className="bg-white border sm:border-2 border-blue px-2 py-1 sm:px-4 sm:py-2 text-center shadow-[2px_2px_0_0_#93c5fd] sm:shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-[8px] sm:text-sm font-bold">Dev</p>
                    </div>
                    <div className="bg-white border sm:border-2 border-blue px-2 py-1 sm:px-4 sm:py-2 text-center shadow-[2px_2px_0_0_#93c5fd] sm:shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-[8px] sm:text-sm font-bold">CRO</p>
                    </div>
                  </div>
                  {/* Handwriting Note (Moved above the pointers) */}
                  <div className="mt-8 sm:mt-12 relative w-full text-center">
                    <p className="font-handwriting text-sm sm:text-2xl text-ink font-bold">
                      One System. Connected.
                    </p>
                    {/* Big Checkmark */}
                    <svg className="absolute right-0 sm:right-4 -top-2 sm:-top-4 w-6 h-6 sm:w-12 sm:h-12 stroke-[#22c55e]" fill="none" viewBox="0 0 50 50">
                      <motion.path 
                        d="M10,25 L20,35 L45,10" 
                        strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                      />
                    </svg>
                    {/* Blue Underline */}
                    <svg className="absolute left-1/2 -bottom-1 sm:-bottom-2 -translate-x-1/2 w-24 sm:w-48 h-3 sm:h-4 stroke-blue" fill="none">
                      <motion.path 
                        d="M0,10 Q50,0 100,10" 
                        strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Handwritten Fixes (Bottom of right side) */}
                <div className="mt-2 sm:mt-4 px-1 sm:px-4 flex-1">
                  <ul className="font-handwriting text-[11px] sm:text-xl text-ink font-bold leading-tight sm:leading-snug space-y-1 sm:space-y-2">
                    <li className="flex items-start gap-1">
                      <span className="text-[#22c55e] font-black">✓</span> True CM2 tracking (factors RTO)
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#22c55e] font-black">✓</span> Full Server/API creative mapping
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#22c55e] font-black">✓</span> Unified D2C data architecture
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#22c55e] font-black">✓</span> SKU-level unit economics
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-[#22c55e] font-black">✓</span> Surgical leak detection & fixes
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
