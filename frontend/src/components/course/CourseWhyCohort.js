import { motion } from "framer-motion";
import { courseWhyCohort } from "@/data/courseContent";
import { SectionHeader, Reveal } from "@/components/shared";

export const CourseWhyCohort = () => {
  return (
    <section className="py-20 md:py-32 bg-alt relative overflow-hidden" id="why-cohort">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
      <div className="absolute -left-[20%] top-[10%] w-[50%] h-[50%] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title={courseWhyCohort.title} 
          subtitle={courseWhyCohort.subtitle}
          centered
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-10">
          {courseWhyCohort.points.map((point, i) => (
            <Reveal key={i} delay={i * 0.1} y={30}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl border border-line shadow-soft h-full flex flex-col"
              >
                <div className="w-14 h-14 bg-blue-tint rounded-2xl flex items-center justify-center text-blue mb-6 shadow-sm border border-blue/10">
                  <span className="material-icons-round text-2xl">{point.icon}</span>
                </div>
                <h3 className="text-xl font-black text-ink mb-3 leading-tight">{point.title}</h3>
                <p className="text-ink-3 leading-relaxed text-sm flex-1">{point.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
