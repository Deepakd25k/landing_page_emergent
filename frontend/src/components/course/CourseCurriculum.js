import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseCurriculum, courseScarcity } from "@/data/courseContent";

export const CourseCurriculum = () => (
  <section className="bg-white py-20 sm:py-32 border-t border-line">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <Reveal>
        <div className="mb-16 md:text-center">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/10 px-3 py-1.5 rounded-full inline-block mb-4">
            THE SYLLABUS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
            {courseCurriculum.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-2 max-w-2xl mx-auto">
            {courseCurriculum.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
        {courseCurriculum.modules.map((mod, i) => (
          <Reveal key={i} delay={i * 0.1} className={i === 4 ? "md:col-span-2 md:max-w-2xl md:mx-auto w-full" : ""}>
            <div className="group relative p-6 sm:p-8 bg-[#f8f9fb] rounded-2xl border border-line hover:border-blue hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white shadow-soft flex items-center justify-center text-blue group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-round text-2xl">{mod.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-blue tracking-wider">MODULE {mod.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-2 leading-tight">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Scarcity Section */}
      <Reveal delay={0.2}>
        <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <span className="material-icons-round text-orange-500 text-4xl mb-4">groups</span>
          <h3 className="text-2xl sm:text-4xl font-black text-orange-900 mb-4 tracking-tight">
            {courseScarcity.title}
          </h3>
          <p className="text-base sm:text-lg text-orange-800/80 leading-relaxed max-w-3xl mx-auto font-medium">
            {courseScarcity.desc}
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
