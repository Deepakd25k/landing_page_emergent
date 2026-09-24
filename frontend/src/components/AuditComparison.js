import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "@/components/shared";

export const AuditComparison = () => {
  return (
    <section id="comparison" data-section="audit-comparison" className="bg-white py-16 sm:py-24 overflow-hidden">
      
      {/* Injecting handwriting font */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="mb-10 text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-3 py-1.5 rounded-full inline-block mb-4">
              03 — The Whiteboard Truth
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Most Setups vs <span className="text-blue">fox.ads</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* The Unified Whiteboard Card */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-ink">
            
            {/* Paper Texture Background */}
            <div className="absolute inset-0 bg-[#fdfbf7]" style={{ backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            
            <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col md:flex-row gap-12 md:gap-0">
              
              {/* LEFT SIDE: THE MESS */}
              <div className="flex-1 relative min-h-[350px] md:min-h-[450px]">
                <h3 className="font-handwriting text-3xl md:text-4xl text-danger font-bold text-center mb-8 rotate-[-2deg]">
                  "The Normal D2C Mess"
                </h3>
                
                <div className="relative w-full h-full max-w-[300px] mx-auto">
                  
                  {/* Web Dev */}
                  <div className="absolute top-0 left-0 bg-white border-2 border-ink-3 px-4 py-2 shadow-[4px_4px_0_0_#9ca3af] rotate-[-4deg] z-10">
                    <p className="font-mono text-sm font-bold text-ink">Freelance Dev</p>
                    <p className="font-handwriting text-lg text-ink-2 leading-tight mt-1">Built it. Left.</p>
                  </div>
                  
                  {/* Ad Agency */}
                  <div className="absolute top-12 right-0 bg-white border-2 border-ink-3 px-4 py-2 shadow-[4px_4px_0_0_#9ca3af] rotate-[3deg] z-10">
                    <p className="font-mono text-sm font-bold text-ink">Ad Agency</p>
                    <p className="font-handwriting text-lg text-ink-2 leading-tight mt-1">"ROAS is 4x!"</p>
                  </div>

                  {/* Spreadsheet */}
                  <div className="absolute bottom-16 left-4 bg-white border-2 border-ink-3 px-4 py-2 shadow-[4px_4px_0_0_#9ca3af] rotate-[6deg] z-10">
                    <p className="font-mono text-sm font-bold text-ink">Spreadsheets</p>
                    <p className="font-handwriting text-lg text-ink-2 leading-tight mt-1">Outdated data.</p>
                  </div>

                  {/* YOU (The Founder) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      <div className="bg-danger text-white font-bold font-mono px-5 py-3 rounded-full shadow-lg z-10 relative">
                        YOU
                      </div>
                      {/* Messy Red Circle Doodle */}
                      <svg className="absolute -inset-4 w-[120px] h-[80px] pointer-events-none -translate-x-3 -translate-y-2 stroke-danger" fill="none" viewBox="0 0 100 100">
                        <motion.path 
                          d="M10,50 Q20,10 50,15 T90,50 T50,90 T15,60" 
                          strokeWidth="3" strokeLinecap="round"
                          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                        />
                      </svg>
                      {/* Stress marks */}
                      <svg className="absolute -top-6 -right-4 w-8 h-8 stroke-danger" fill="none" viewBox="0 0 50 50">
                        <path d="M10,40 L40,10 M20,45 L45,20" strokeWidth="4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Messy Arrows connecting them all */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-ink-3/40" fill="none">
                    <path d="M 50,50 L 150,150 M 150,50 L 50,150 M 80,40 Q 150,100 200,80" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 200,200 Q 150,250 100,200" strokeWidth="2" />
                    <path d="M 50,250 L 120,150" strokeWidth="2" />
                  </svg>
                  
                </div>
              </div>

              {/* Squiggly Divider */}
              <div className="hidden md:flex flex-col items-center justify-center opacity-30">
                <svg viewBox="0 0 20 400" className="w-5 h-full stroke-ink-3" fill="none">
                  <path d="M10,0 Q0,20 10,40 T10,80 T10,120 T10,160 T10,200 T10,240 T10,280 T10,320 T10,360 T10,400" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="md:hidden w-full h-5 opacity-30 flex justify-center overflow-hidden">
                <svg viewBox="0 0 400 20" className="h-5 w-[200%] stroke-ink-3" fill="none">
                  <path d="M0,10 Q20,0 40,10 T80,10 T120,10 T160,10 T200,10 T240,10 T280,10 T320,10 T360,10 T400,10" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* RIGHT SIDE: THE FIX */}
              <div className="flex-1 relative min-h-[350px] md:min-h-[450px] flex flex-col items-center">
                <h3 className="font-handwriting text-3xl md:text-4xl text-blue font-bold text-center mb-10 rotate-[2deg]">
                  "With fox.ads"
                </h3>

                <div className="relative w-full max-w-[280px] flex flex-col items-center gap-12 mt-4">
                  
                  {/* fox.ads central block */}
                  <div className="relative bg-ink text-white font-black font-mono text-2xl px-8 py-4 shadow-[6px_6px_0_0_#3b82f6] z-20 hover:-translate-y-1 transition-transform cursor-default">
                    fox.ads
                    
                    {/* Glowing effect */}
                    <div className="absolute -inset-2 bg-blue-500/20 blur-xl -z-10 rounded-full" />
                  </div>

                  {/* Clean Arrows */}
                  <svg className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[240px] h-[120px] stroke-blue pointer-events-none" fill="none">
                    <motion.path 
                      d="M120,0 L120,40 M120,40 L20,40 L20,80 M120,40 L220,40 L220,80 M120,40 L120,80" 
                      strokeWidth="3" strokeLinejoin="round"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }}
                    />
                    {/* Arrowheads */}
                    <path d="M15,75 L20,80 L25,75 M115,75 L120,80 L125,75 M215,75 L220,80 L225,75" strokeWidth="3" strokeLinecap="round" />
                  </svg>

                  {/* The Pillars */}
                  <div className="flex w-full justify-between px-2 relative z-10">
                    <div className="bg-white border-2 border-blue px-3 py-2 text-center shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-xs font-bold">Ads</p>
                    </div>
                    <div className="bg-white border-2 border-blue px-3 py-2 text-center shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-xs font-bold">Dev</p>
                    </div>
                    <div className="bg-white border-2 border-blue px-3 py-2 text-center shadow-[3px_3px_0_0_#93c5fd]">
                      <p className="font-mono text-xs font-bold">CRO</p>
                    </div>
                  </div>

                  {/* Handwriting Note */}
                  <div className="mt-4 relative">
                    <p className="font-handwriting text-2xl text-ink font-bold text-center">
                      One Call. Everything Connected.
                    </p>
                    {/* Big Checkmark */}
                    <svg className="absolute -right-8 -top-4 w-12 h-12 stroke-[#22c55e]" fill="none" viewBox="0 0 50 50">
                      <motion.path 
                        d="M10,25 L20,35 L45,10" 
                        strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }}
                      />
                    </svg>
                    <svg className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-32 h-4 stroke-blue" fill="none">
                      <motion.path 
                        d="M0,10 Q50,0 100,10" 
                        strokeWidth="3" strokeLinecap="round"
                        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }}
                      />
                    </svg>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
