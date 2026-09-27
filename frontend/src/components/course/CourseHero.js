import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseHero } from "@/data/courseContent";
import { useTracking } from "@/context/TrackingContext";

export const CourseHero = () => {
  const { track } = useTracking();
  
  return (
  <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden bg-white">
    {/* Subtle Dotted Background */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.15]" 
      style={{
        backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }}
    />
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="material-icons-round text-sm">trending_up</span>
            $50 Billion D2C Boom by 2026
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/5 border border-blue/10 text-blue-dark text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse"></span>
            {courseHero.badge}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black text-ink tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
          {courseHero.headline.split('Learn').map((part, i) => (
            i === 0 ? <span key={i}>{part}<br className="hidden md:block"/>Learn</span> : <span key={i} className="text-blue">{part}</span>
          ))}
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-base sm:text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
          {courseHero.subheadline}
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <button 
            onClick={() => {
              track("InitiateCheckout", { section: "course_hero" });
              document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-4 bg-blue hover:bg-blue-dark text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {courseHero.ctaText}
          </button>
        </div>
        <p className="mt-4 text-xs sm:text-sm text-ink-3 font-medium">
          {courseHero.ctaSubtext}
        </p>
      </Reveal>
    </div>
  </section>
  );
};
