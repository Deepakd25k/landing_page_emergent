import { motion } from "framer-motion";
import { Reveal } from "@/components/shared";

const results = [
  {
    platform: "Meta Ads",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    placeholderColor: "bg-blue-50",
  },
  {
    platform: "Google Ads",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    placeholderColor: "bg-red-50",
  },
  {
    platform: "Amazon",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    placeholderColor: "bg-orange-50",
  },
  {
    platform: "Q-Commerce",
    icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png", // Generic shopping bag icon for Q-Com
    placeholderColor: "bg-purple-50",
  },
  {
    platform: "WhatsApp",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    placeholderColor: "bg-green-50",
  },
  // Duplicate for infinite scroll effect
  {
    platform: "Meta Ads",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    placeholderColor: "bg-blue-50",
  },
  {
    platform: "Google Ads",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    placeholderColor: "bg-red-50",
  },
];

export const CourseResults = () => {
  return (
    <section className="relative bg-white py-20 sm:py-32 overflow-hidden border-t border-line">
      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.3]" 
        style={{
          backgroundImage: "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Reveal>
          <div className="text-center">
            <span className="inline-block px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              Live Dashboards
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Real Data. Real Scale.
            </h2>
            <p className="text-lg text-ink-2 max-w-2xl mx-auto font-medium">
              We don't teach theory. You'll see actual performance data across the entire D2C ecosystem.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative z-10 w-full overflow-hidden flex group">
        <motion.div 
          className="flex gap-6 px-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20, // Adjust speed here
          }}
        >
          {results.map((res, i) => (
            <div 
              key={i} 
              className="w-[300px] sm:w-[400px] shrink-0 bg-white border border-line rounded-3xl overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 flex flex-col group-hover:scale-[0.98] hover:!scale-100"
            >
              {/* Image Placeholder (User will replace this) */}
              <div className={`w-full aspect-[4/3] ${res.placeholderColor} relative flex items-center justify-center p-6 border-b border-line`}>
                <div className="text-ink-3/50 text-center font-semibold text-sm border-2 border-dashed border-ink-3/30 rounded-xl w-full h-full flex items-center justify-center">
                  [Upload {res.platform} Image Here]
                </div>
              </div>
              
              {/* Platform Icon & Name */}
              <div className="p-5 flex items-center justify-between bg-[#FAFAFA]">
                <span className="font-bold text-ink text-lg">{res.platform}</span>
                <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-line flex items-center justify-center p-2">
                  <img src={res.icon} alt={res.platform} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Left/Right Fade Gradients for smooth infinite effect */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};
