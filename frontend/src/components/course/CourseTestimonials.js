import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Reveal } from "@/components/shared";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Performance Marketer",
    avatar: "AM",
    avatarColor: "from-violet-500 to-indigo-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "I had done another popular cohort before this. Lots of recorded videos, no real accounts. Here, the very first session opened a live account. That one thing changed everything for me.",
    highlight: "first session opened a live account",
    metric: "12x Budget Scale",
    metricIcon: "trending_up",
  },
  {
    name: "Priya Sharma",
    role: "Growth Marketer",
    avatar: "PS",
    avatarColor: "from-pink-500 to-rose-500",
    cohort: "Cohort V1",
    rating: 5,
    text: "I had been running Meta Ads for 2 years but had no real understanding of attribution. After this cohort, an interviewer asked about CAPI setup. I answered confidently because I had actually done it live, not just watched slides.",
    highlight: "I had actually done it live",
    metric: "Got Agency Offer",
    metricIcon: "verified",
  },
  {
    name: "Rahul Verma",
    role: "D2C Marketer",
    avatar: "RV",
    avatarColor: "from-emerald-500 to-teal-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "I always struggled to explain unit economics clearly. This cohort fixed that. I also built my first n8n automation and now use it every week to run my reporting. Saves me hours every month.",
    highlight: "built my first n8n automation",
    metric: "Full Automation Setup",
    metricIcon: "smart_toy",
  },
  {
    name: "Sneha Kapoor",
    role: "Media Buyer",
    avatar: "SK",
    avatarColor: "from-amber-500 to-orange-500",
    cohort: "Cohort V1",
    rating: 5,
    text: "The 50 seat cap is real. The instructor knew my name, my brand, and my specific problem. I have been in courses with 500 students and you are just a number there. This felt completely different.",
    highlight: "instructor knew my name",
    metric: "3x Retention Lift",
    metricIcon: "loop",
  },
  {
    name: "Karan Singh",
    role: "Performance Manager",
    avatar: "KS",
    avatarColor: "from-blue-500 to-cyan-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "In my interview they asked about Performance Max for D2C. I answered well because we had actually run it live during sessions. My peers who did generic courses got stuck on that exact question.",
    highlight: "we had actually run it live",
    metric: "2x Salary Offer",
    metricIcon: "rocket_launch",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <span key={i} className="material-icons-round text-amber-400 text-[15px]">star</span>
    ))}
  </div>
);

const AUTOPLAY_DELAY = 4000;

export const CourseTestimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((idx, dir = 1) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(t);
  }, [paused, next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 sm:py-28 bg-[#F8F9FA] border-t border-line relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[35%] h-[60%] bg-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/10 px-3 py-1.5 rounded-full inline-block mb-4">
              FROM OUR ALUMNI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-3">
              Real People. Real Results.
            </h2>
            <p className="text-sm sm:text-base text-ink-2 max-w-md mx-auto">
              No cherry-picked screenshots. Just what happens when you learn on live accounts.
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="relative overflow-hidden min-h-[280px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-white rounded-3xl border border-line shadow-sm p-7 sm:p-8 flex flex-col gap-5"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <StarRating />
                  <span className="text-[10px] font-bold text-blue bg-blue/10 border border-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.cohort}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-ink-2 text-sm sm:text-[15px] leading-relaxed font-medium">
                  "{t.text}"
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between pt-3 border-t border-line">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 shrink-0 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-black`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink leading-tight">{t.name}</p>
                      <p className="text-xs text-ink-3">{t.role}</p>
                    </div>
                  </div>

                  {/* Metric */}
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                    <span className="material-icons-round text-[13px]">{t.metricIcon}</span>
                    {t.metric}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 bg-white border border-line rounded-full shadow-sm flex items-center justify-center text-ink-2 hover:text-blue hover:border-blue/30 transition-all"
          >
            <span className="material-icons-round text-xl">chevron_left</span>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 bg-white border border-line rounded-full shadow-sm flex items-center justify-center text-ink-2 hover:text-blue hover:border-blue/30 transition-all"
          >
            <span className="material-icons-round text-xl">chevron_right</span>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-6 h-2 bg-blue" : "w-2 h-2 bg-line hover:bg-ink-3"
              }`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { num: "50+", label: "Alumni — V1 & V2" },
              { num: "4.9★", label: "Average Rating" },
              { num: "₹3L/day", label: "Shown Live in Sessions" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-ink">{s.num}</p>
                <p className="text-xs text-ink-3 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
