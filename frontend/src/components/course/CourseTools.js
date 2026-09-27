import { motion } from "framer-motion";
import { SectionHeader, Reveal } from "@/components/shared";

const tools = [
  { name: "Meta", icon: "meta", color: "#0668E1", rotate: -12, yOffset: 20 },
  { name: "Google", icon: "google", color: "#4285F4", rotate: 8, yOffset: -10 },
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366", rotate: -5, yOffset: 30 },
  { name: "n8n", icon: "n8n", color: "#EA4E43", rotate: 15, yOffset: -5 },
  { name: "ChatGPT", icon: "openai", color: "#10A37F", rotate: -15, yOffset: 15 },
  { name: "GA4", icon: "googleanalytics", color: "#E37400", rotate: 5, yOffset: -20 },
  { name: "GTM", icon: "googletagmanager", color: "#246FDB", rotate: -8, yOffset: 10 },
  { name: "+10 Others", text: "10+", color: "#0F172A", rotate: 12, yOffset: 0 },
];

export const CourseTools = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-line">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.3]" 
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="The Real D2C Tech Stack" 
          subtitle="We don't just talk theory. We get our hands dirty with the exact tools top D2C brands use to scale and automate."
          centered
        />

        <div className="mt-16 sm:mt-24 mb-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 relative min-h-[160px]">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.05} y={20}>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ 
                  rotate: tool.rotate, 
                  y: [tool.yOffset, tool.yOffset - 10, tool.yOffset],
                }}
                transition={{
                  y: {
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-line flex flex-col items-center justify-center relative group cursor-pointer"
                style={{ zIndex: 10 + (i % 5) }}
              >
                {tool.icon ? (
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color.replace('#', '')}`} 
                    alt={tool.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl font-black" style={{ color: tool.color }}>{tool.text}</span>
                )}
                
                {/* Tooltip */}
                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-white text-[10px] font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                  {tool.name}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
