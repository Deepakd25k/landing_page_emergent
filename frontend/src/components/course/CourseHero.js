import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseHero } from "@/data/courseContent";
import { useTracking } from "@/context/TrackingContext";

export const CourseHero = () => {
  const { track } = useTracking();
  
  return (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
    {/* Subtle Dotted Background */}
    <div 
      className="absolute inset-0 pointer-events-none opacity-[0.15]" 
      style={{
        backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }}
    />
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/10 border border-blue/20 text-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
          {courseHero.badge}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-black text-ink tracking-tighter leading-[1.05] mb-8">
          {courseHero.headline.split('Learn').map((part, i) => (
            i === 0 ? <span key={i}>{part}<br className="hidden md:block"/>Learn</span> : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-blue-dark">{part}</span>
          ))}
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-base sm:text-xl md:text-2xl text-ink-2 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
          {courseHero.subheadline}
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => {
              track("InitiateCheckout", { section: "course_hero" });
              document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-10 py-5 bg-blue hover:bg-blue-dark text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            {courseHero.ctaText}
          </button>
        </div>
        <p className="mt-5 text-xs sm:text-sm text-ink-3 font-medium">
          {courseHero.ctaSubtext}
        </p>
      </Reveal>
    </div>
  </section>
  );
};
