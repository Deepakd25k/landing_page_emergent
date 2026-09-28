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
    text: "Maine pehle ek popular cohort join ki thi — bohot recorded content, AI buzzwords, but real account pe haath dene ko koi ready nahi tha. Yahaan pehle hi session mein live account khola. Uss ek cheez ne mera pura perspective badal diya.",
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
    text: "n8n aur CAPI — yeh dono cheezein mujhe kisi aur ne nahi sikhaya. 2 saal se Meta Ads chal rahi thi, attribution ka sahi concept nahi pata tha. Cohort ke baad interview mein CAPI ke baare mein poocha — main confident thi kyunki live set up kiya tha, sirf slides nahi dekhi thi.",
    metric: "Got Agency Offer",
    metricIcon: "verified",
  },
  {
    name: "Rahul Verma",
    role: "D2C Founder",
    avatar: "RV",
    avatarColor: "from-emerald-500 to-teal-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "Main khud apna marketing dekhna chahta tha. Pehle agency ko blind trust karta tha. Ab unit economics khud calculate karta hoon, n8n se automated reports chalata hoon. Agency bill pe ₹40k/month bach rahe hain.",
    metric: "₹40k/mo Saved",
    metricIcon: "savings",
  },
  {
    name: "Sneha Kapoor",
    role: "Media Buyer",
    avatar: "SK",
    avatarColor: "from-amber-500 to-orange-500",
    cohort: "Cohort V1",
    rating: 5,
    text: "Jo most valuable laga: live dashboards — real numbers se confidence aata hai. WhatsApp automation — retention instantly improve hua. 50 seat cap — instructor ko pata tha mera naam, mera brand, meri specific problem. Kisi ₹50k course mein yeh nahi milta.",
    metric: "3x Retention",
    metricIcon: "loop",
  },
  {
    name: "Karan Singh",
    role: "Performance Manager",
    avatar: "KS",
    avatarColor: "from-blue-500 to-cyan-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "Interview mein PMax campaigns ke baare mein poocha — main confidently answer kar paya kyunki live kiya tha. Mere college ke doston ne generic digital marketing courses kiye — unhe ₹3-4L mil rahi hai. Mujhe offer mili jo almost double thi. Yeh course aur woh courses mein itna farak hai.",
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
