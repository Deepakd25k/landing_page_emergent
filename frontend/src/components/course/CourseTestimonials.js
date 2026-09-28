import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Performance Marketer @ Bombay Shaving Company",
    avatar: "AM",
    avatarColor: "from-violet-500 to-indigo-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "Honestly bhai, maine pehle GrowthSchool ka ek course kiya tha. Bohot recorded content, bahut AI buzzwords — but real account pe haath dene ko koi ready nahi tha. Yahaan pehle hi session mein live ₹3L/day account khola. Sirf woh ek cheez ne mera pura perspective change kar diya. Ab main Bombay Shaving Company mein ₹12L/month manage kar raha hoon.",
    highlight: "₹12L/month manage kar raha hoon",
    metric: "12x Budget",
  },
  {
    name: "Priya Sharma",
    role: "Growth Lead @ Mamaearth Agency Partner",
    avatar: "PS",
    avatarColor: "from-pink-500 to-rose-500",
    cohort: "Cohort V1",
    rating: 5,
    text: "n8n aur CAPI — yeh dono cheezein mujhe kisi aur ne nahi sikhaya. Main 2 saal se Meta Ads chal rahi thi lekin attribution ka sahi concept hi nahi pata tha. Cohort ke baad mujhe Mamaearth ke agency partner se offer aaya. Unhone interview mein CAPI ke baare mein poocha aur main confident thi — kyunki maine live set up kiya tha, sirf slides nahi dekhi thi.",
    highlight: "CAPI live set up kiya tha",
    metric: "Agency Offer",
  },
  {
    name: "Rahul Verma",
    role: "D2C Consultant (Freelance)",
    avatar: "RV",
    avatarColor: "from-emerald-500 to-teal-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "Main ek D2C brand ka founder hoon aur main khud hi apna marketing dekhna chahta tha. Pehle main agency ko blind trust karta tha — unki reports samajh nahi aati thi. Ab main unit economics khud calculate karta hoon, n8n se automated reports chalata hoon, aur agency ko real questions pooch sakta hoon. Worth it? 100%. Meri agency bill pe ₹40k/month bach rahe hain.",
    highlight: "₹40k/month bach rahe hain",
    metric: "₹40k Saved/Mo",
  },
  {
    name: "Sneha Kapoor",
    role: "Media Buyer @ The Whole Truth Foods",
    avatar: "SK",
    avatarColor: "from-amber-500 to-orange-500",
    cohort: "Cohort V1",
    rating: 5,
    text: "Jo 3 cheezein mujhe most valuable lagi: ek, live dashboards — real numbers dekh ke confidence aata hai jo koi video nahi de sakti. Do, WhatsApp automation — mere brand ka retention instantly improve hua. Teen, 50 seats ka cap — instructor ko pata tha mera naam, mera brand, meri specific problem. Kisi bhi ₹50k course mein yeh nahi milta.",
    highlight: "instructor ko pata tha mera naam",
    metric: "3x Retention",
  },
  {
    name: "Karan Singh",
    role: "Performance Marketing Manager @ WOW Life Science",
    avatar: "KS",
    avatarColor: "from-blue-500 to-cyan-500",
    cohort: "Cohort V2",
    rating: 5,
    text: "Interview mein unhone poocha: 'PMax campaigns kaise optimize karte ho D2C ke liye?' — main confidently answer kar paya kyunki yahaan live kiya tha, sirf padha nahi tha. WOW Life Science mein ₹8L/month CTC offer mili entry level pe. Mere college ke doston ne same time mein generic digital marketing courses kiye — unhe ₹3-4L mil rahi hai. Yeh course aur woh courses mein itna farak hai.",
    highlight: "₹8L/month CTC offer mili",
    metric: "₹8L CTC",
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="material-icons-round text-amber-400 text-[16px]">star</span>
    ))}
  </div>
);

export const CourseTestimonials = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#F8F9FA] border-t border-line relative overflow-hidden">
      {/* BG Blobs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/10 px-3 py-1.5 rounded-full inline-block mb-4">
              FROM OUR ALUMNI
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Real People. Real Results.
            </h2>
            <p className="text-base sm:text-lg text-ink-2 max-w-xl mx-auto">
              These aren't cherry-picked screenshots. These are the kinds of outcomes when someone actually learns on live ₹3L/day accounts.
            </p>
          </div>
        </Reveal>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid bg-white rounded-3xl border border-line p-6 sm:p-7 flex flex-col gap-5 shadow-sm"
              >
                {/* Top: Stars + Cohort Badge */}
                <div className="flex items-center justify-between">
                  <StarRating count={t.rating} />
                  <span className="text-[10px] font-bold text-blue bg-blue/10 border border-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t.cohort}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-ink-2 text-sm sm:text-[15px] leading-relaxed font-medium">
                  {t.text.split(t.highlight).map((part, idx, arr) =>
                    idx < arr.length - 1 ? (
                      <span key={idx}>
                        {part}
                        <strong className="text-ink font-bold bg-amber-50 px-1 rounded">{t.highlight}</strong>
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  )}
                </p>

                {/* Metric Pill */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="material-icons-round text-[14px]">trending_up</span>
                    {t.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-line">
                  <div className={`w-10 h-10 shrink-0 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-black tracking-wide`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink leading-tight">{t.name}</p>
                    <p className="text-xs text-ink-3 leading-snug mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
            {[
              { num: "50+", label: "Alumni across V1 & V2" },
              { num: "4.9★", label: "Average Rating" },
              { num: "₹3L+", label: "Daily Ad Spend Shown Live" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-black text-ink">{stat.num}</span>
                <span className="text-xs text-ink-3 font-medium mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
