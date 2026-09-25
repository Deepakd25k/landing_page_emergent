import { motion } from "framer-motion";
import { ArrowRight, Facebook, Instagram, MessageCircle, Calendar, Zap, ShieldCheck, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/shared";
import { finalCta } from "@/data/content";
import { CTAButton } from "@/components/CTAButton";

const floatingIcons = [
  { icon: Facebook, color: "text-blue", delay: 0, x: -60, y: 10, rotate: -6 },
  { icon: Instagram, color: "text-pink-600", delay: 0.1, x: -20, y: -10, rotate: 8 },
  { icon: MessageCircle, color: "text-green-500", delay: 0.2, x: 20, y: 15, rotate: -4 },
  { icon: Calendar, color: "text-red-500", delay: 0.3, x: 60, y: -5, rotate: 12 },
  { icon: Zap, color: "text-yellow-500", delay: 0.4, x: 100, y: 20, rotate: -8 },
];

export const FinalCTA = () => (
  <section id="final" data-section="final-cta" className="bg-white py-12 sm:py-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">

      <Reveal>
        <div className="relative bg-[#f8f9fb] rounded-[2rem] border border-line p-8 sm:p-16 text-center overflow-hidden">
          
          {/* Subtle dot grid background */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 mb-6 sm:mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue" />
              <span className="text-[10px] sm:text-xs font-bold text-ink-2 uppercase tracking-wide">One last thing</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.1] mb-4 sm:mb-6">
              {finalCta.line1}
            </h2>

            {/* Text */}
            <p className="text-sm sm:text-lg text-ink-2 leading-relaxed max-w-xl mx-auto mb-4 font-semibold">
              {finalCta.line2}
            </p>
            <p className="text-sm sm:text-lg text-ink-2 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10 font-bold bg-blue/10 px-3 py-1.5 rounded text-blue">
              {finalCta.line3}
            </p>

            {/* CTA Button */}
            <div className="w-full max-w-md">
              <CTAButton label={finalCta.cta} location="final" className="w-full py-4 text-sm sm:text-base shadow-[0_8px_20px_-4px_rgba(13,110,253,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(13,110,253,0.5)]" />
              <div className="mt-4 flex flex-col items-center justify-center gap-2">
                <p className="flex items-center gap-1.5 text-xs text-ink-2 font-semibold bg-white border border-line px-3 py-1.5 rounded-full shadow-sm">
                  <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                  {finalCta.scarcity}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-ink-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                  Full refund. No questions.
                </p>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="mt-10 sm:mt-12 flex items-center justify-center h-12 relative w-full max-w-[280px]">
              {floatingIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: item.y }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: 0.2 + item.delay, type: "spring", stiffness: 200 }}
                    className="absolute bg-white rounded-2xl shadow-md p-3 sm:p-3.5 flex items-center justify-center border border-line"
                    style={{ left: `calc(50% + ${item.x - 24}px)`, rotate: item.rotate }}
                  >
                    {i === 3 ? (
                      // Custom calendar icon with SAT 11
                      <div className="flex flex-col items-center">
                        <div className="bg-danger text-white text-[6px] sm:text-[7px] font-black w-full text-center px-2 py-0.5 rounded-t -mt-1 mb-0.5">SAT</div>
                        <div className="text-ink text-sm sm:text-base font-black">11</div>
                      </div>
                    ) : (
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
