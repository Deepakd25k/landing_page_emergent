import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

export const CourseSystem = () => (
  <section className="relative bg-[#F8F9FA] py-20 sm:py-32 overflow-hidden border-t border-line">
    {/* Subtle Dot Grid Background */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.2]" 
      style={{
        backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: The Stat */}
        <Reveal>
          <div className="bg-white border border-line rounded-3xl p-8 sm:p-12 shadow-sm relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue/5 rounded-full blur-2xl"></div>
            
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                The 80% Failure Rate
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-ink leading-tight mb-4">
                Generic AI Won't Save Your ROAS.
              </h3>
              <p className="text-ink-2 text-lg font-medium leading-relaxed">
                "80% of AI projects fail to deliver intended business value because brands treat AI as a generic button-clicker rather than an integrated system."
              </p>
              <p className="mt-4 text-xs font-bold text-ink-3 uppercase tracking-wider">
                — Source: RAND Corporation (2024)
              </p>
            </div>

            <div className="h-px w-full bg-line my-6"></div>

            <p className="text-ink-2 text-sm leading-relaxed font-medium">
              Founders don't need a marketer who just types prompts into ChatGPT to write ad copy. They need a <strong>Growth Partner</strong> who understands the math, the tech stack, and the attribution loops that AI can't see.
            </p>
          </div>
        </Reveal>

        {/* Right Side: The System */}
        <Reveal delay={0.2}>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-8">
              Growth is not a secret. It's a <span className="text-blue">System</span>.
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-blue">
                  <span className="material-icons-round text-xl">account_tree</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">The 40-60% Attribution Gap</h4>
                  <p className="text-ink-2 text-sm leading-relaxed font-medium">No one talks about it, but fixing your Server-Side Tracking (CAPI) and attribution models unlocks 40% of hidden growth. We teach you how to plug these leaks.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-blue">
                  <span className="material-icons-round text-xl">chat_bubble</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">Founder Communication</h4>
                  <p className="text-ink-2 text-sm leading-relaxed font-medium">If you increase the budget, will the topline increase? If yes, where? Learn how to explain the exact mechanics of growth to founders so they trust you with infinite budgets.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-blue">
                  <span className="material-icons-round text-xl">inventory</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink mb-1">Unit Economics Mastery</h4>
                  <p className="text-ink-2 text-sm leading-relaxed font-medium">Stop optimizing for "Campaign ROAS" (which includes 30% fake orders). Learn to scale based on per-product contribution margins.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  </section>
);
