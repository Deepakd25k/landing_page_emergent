import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";
import { scrollToBooking } from "@/components/shared";

const profiles = [
  {
    icon: "work_outline",
    color: "blue",
    bgColor: "bg-blue/10",
    textColor: "text-blue",
    borderColor: "border-blue/20",
    tag: "Working Professional",
    title: "You have 1-3 years in marketing but feel stuck",
    points: [
      "You run Meta Ads but interviews always go deeper than ABO vs CBO",
      "D2C brands are paying ₹8-15 LPA for people who get the full picture",
      "You want to level up without quitting your job. Weekends work perfectly.",
    ],
    cta: "This is built for you",
  },
  {
    icon: "school",
    color: "violet",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    tag: "Fresh Graduate",
    title: "You know the basics but want to stand out from Day 1",
    points: [
      "You have done internships and know the platforms but lack a real portfolio",
      "Everyone says get experience but nobody tells you how to land the first one",
      "You want to walk into any D2C interview as the most prepared person in the room",
    ],
    cta: "Skip the queue",
  },
];

const NotForYou = () => (
  <Reveal delay={0.2}>
    <div className="mt-16 max-w-2xl mx-auto bg-white border border-line rounded-3xl p-7 sm:p-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="material-icons-round text-rose-500 text-xl">cancel</span>
        <h3 className="text-lg font-black text-ink">This is NOT for you if...</h3>
      </div>
      <ul className="space-y-3">
        {[
          "You are looking for a certificate without actually learning the skills",
          "You want to watch videos at 2x speed and call it done",
          "You expect a job guarantee. We build your skills. Brands will come to you.",
          "You are not willing to show up live on weekends for 4 weeks",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="material-icons-round text-rose-400 text-[16px] mt-0.5 shrink-0">remove_circle_outline</span>
            <span className="text-sm text-ink-2 font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

export const CourseForWho = () => {
  return (
    <section className="py-20 sm:py-32 bg-white border-t border-line relative overflow-hidden">
      <div className="absolute -right-[10%] top-[20%] w-[40%] h-[50%] bg-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/10 px-3 py-1.5 rounded-full inline-block mb-4">
              IS THIS FOR ME?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Who Gets The Most Out Of This
            </h2>
            <p className="text-base sm:text-lg text-ink-2 max-w-xl mx-auto">
              This cohort has worked for very different people. They all had one thing in common: they were serious about D2C.
            </p>
          </div>
        </Reveal>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {profiles.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`h-full bg-white border ${p.borderColor} rounded-3xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm`}
              >
                {/* Icon + Tag */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 shrink-0 ${p.bgColor} rounded-2xl flex items-center justify-center`}>
                    <span className={`material-icons-round ${p.textColor} text-xl`}>{p.icon}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${p.textColor} ${p.bgColor} px-2.5 py-1 rounded-full border ${p.borderColor}`}>
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-black text-ink leading-snug">
                  {p.title}
                </h3>

                {/* Points */}
                <ul className="flex-1 space-y-3">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className={`material-icons-round text-[16px] ${p.textColor} shrink-0 mt-0.5`}>check_circle</span>
                      <span className="text-sm text-ink-2 font-medium leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className={`mt-2 text-sm font-bold ${p.textColor} flex items-center gap-1 hover:gap-2 transition-all`}
                >
                  {p.cta}
                  <span className="material-icons-round text-[16px]">arrow_forward</span>
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Not For You */}
        <NotForYou />
      </div>
    </section>
  );
};
