import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseReality } from "@/data/courseContent";

export const CourseReality = () => (
  <section className="relative bg-white py-12 sm:py-16">
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Reveal>
        <div className="bg-ink rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside the card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              {courseReality.title}
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-medium">
              The era of the "Platform Operator" is dead. Brands don't need button clickers anymore.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 relative z-10">
            {courseReality.cards.map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-blue/20 text-blue-300 text-[10px] font-bold uppercase rounded tracking-wider mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">{card.agencySays}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">{card.reality}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center relative z-10">
            <p className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/90">
              {courseReality.closer}
            </p>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
