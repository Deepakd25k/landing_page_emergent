import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseReality } from "@/data/courseContent";

export const CourseReality = () => (
  <section className="relative bg-[#FAFAFA] py-20 sm:py-32 overflow-hidden border-t border-line">
    {/* Subtle Square Grid */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.25]" 
      style={{
        backgroundImage: "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}
    />

    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mb-4">
            {courseReality.title}
          </h2>
          <p className="text-lg text-ink-2 max-w-2xl mx-auto font-medium">
            The era of the "Platform Operator" is dead. Brands don't need button clickers anymore.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {courseReality.cards.map((card, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="h-full bg-[#f8f9fb] border border-line rounded-2xl p-6 flex flex-col hover:border-blue/30 hover:shadow-card transition-all duration-300">
              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase rounded tracking-wider mb-2">
                  Average Marketer Says
                </span>
                <p className="text-ink-2 font-medium italic">"{card.agencySays}"</p>
              </div>
              
              <div className="h-px w-full bg-line my-4"></div>
              
              <div className="mt-auto">
                <span className="inline-block px-2.5 py-1 bg-blue/10 text-blue text-[10px] font-bold uppercase rounded tracking-wider mb-2">
                  What Brands Actually Want
                </span>
                <p className="text-ink font-bold leading-snug">{card.reality}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="bg-ink text-white rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-blue/20 blur-3xl rounded-full"></div>
          <p className="relative z-10 text-lg sm:text-2xl font-bold leading-tight">
            {courseReality.closer}
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
