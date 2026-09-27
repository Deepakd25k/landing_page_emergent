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
            <div className="h-full bg-white border border-line rounded-2xl p-8 flex flex-col shadow-sm hover:border-blue/30 hover:shadow-card transition-all duration-300">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 font-black text-lg mb-4">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-ink mb-3 leading-tight">{card.agencySays}</h3>
              </div>
              <p className="text-ink-2 font-medium leading-relaxed">{card.reality}</p>
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
