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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24 relative z-10">
        {courseCurriculum.modules.map((mod, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${i % 2 === 0 ? 'bg-white border-line hover:border-blue hover:shadow-card' : 'bg-[#F8F9FA] border-transparent hover:border-blue/30 hover:shadow-card'}`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-blue group-hover:scale-110 transition-transform duration-300">
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

      {/* Scarcity / What Happens After Section */}
      <Reveal delay={0.2}>
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
          <span className="material-icons-round text-blue-400 text-4xl mb-4 relative z-10">rocket_launch</span>
          <h3 className="text-2xl sm:text-4xl font-black text-white mb-4 tracking-tight relative z-10">
            {courseScarcity.title}
          </h3>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto font-medium relative z-10">
            {courseScarcity.desc}
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
