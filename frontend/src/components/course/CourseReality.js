import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseReality } from "@/data/courseContent";

export const CourseReality = () => (
  <section className="relative bg-white pb-12 sm:pb-16 -mt-8 sm:-mt-12 relative z-20">
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <Reveal>
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-line relative overflow-hidden">
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-black text-ink tracking-tight mb-3">
              {courseReality.title}
            </h2>
            <p className="text-sm sm:text-base text-ink-2 max-w-2xl mx-auto font-medium leading-relaxed">
              The Indian D2C market is projected to hit <strong>$50 Billion by 2026</strong>. The era of the generalist "Platform Operator" is dead. Brands don't need button clickers anymore; they need Growth Partners who understand the entire ecosystem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            {courseReality.cards.map((card, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue/10 text-blue font-black text-lg">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink leading-tight mb-2">{card.agencySays}</h3>
                  <p className="text-ink-2 text-sm leading-relaxed font-medium">{card.reality}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center relative z-10">
            <p className="inline-block px-4 py-2 rounded-full bg-[#F8F9FA] border border-line text-sm font-semibold text-ink-2">
              {courseReality.closer}
            </p>
          </div>
        </div>
      </Reveal>

    </div>
  </section>
);
