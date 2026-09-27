import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseHero } from "@/data/courseContent";
import { useTracking } from "@/context/TrackingContext";

export const CourseHero = () => {
  const { track } = useTracking();
  
  return (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-ink">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue/10 border border-blue/30 text-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
          {courseHero.badge}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8">
          {courseHero.headline.split('No Brand').map((part, i) => (
            i === 0 ? <span key={i}>{part}<br className="hidden md:block"/>No Brand</span> : <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan-400">{part}</span>
          ))}
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
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
            className="w-full sm:w-auto px-8 py-4 bg-blue hover:bg-blue-hover text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            {courseHero.ctaText}
          </button>
        </div>
        <p className="mt-4 text-xs sm:text-sm text-white/40 font-medium">
          {courseHero.ctaSubtext}
        </p>
      </Reveal>
    </div>
  </section>
  );
};
