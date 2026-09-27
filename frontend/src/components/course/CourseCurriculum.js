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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-24 relative z-10">
        {courseCurriculum.modules.map((mod, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative p-6 sm:p-8 bg-white rounded-2xl border border-line shadow-sm hover:border-blue/30 hover:shadow-card transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-blue/5 border border-blue/10 flex items-center justify-center text-blue group-hover:scale-110 group-hover:bg-blue group-hover:text-white transition-all duration-300">
                  <span className="material-icons-round text-2xl">{mod.icon}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-blue uppercase tracking-widest bg-blue/10 px-2 py-0.5 rounded">Module {mod.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ink leading-tight">
                    {mod.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-ink-2 leading-relaxed font-medium mt-auto">
                {mod.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* What Happens After Section - Light Theme */}
      <Reveal delay={0.2}>
        <div className="bg-[#F8F9FA] border border-line rounded-[2rem] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm border border-line text-blue text-3xl mb-6 relative z-10">
            <span className="material-icons-round">rocket_launch</span>
          </span>
          <h3 className="text-2xl sm:text-4xl font-black text-ink mb-4 tracking-tight relative z-10">
            {courseScarcity.title}
          </h3>
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl mx-auto font-medium relative z-10">
            {courseScarcity.desc}
          </p>
        </div>
      </Reveal>

    </div>
  </section>
);
