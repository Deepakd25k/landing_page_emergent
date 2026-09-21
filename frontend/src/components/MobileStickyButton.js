import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { hero } from "@/data/content";

export const MobileStickyButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-auto"
          data-testid="mobile-sticky-cta"
        >
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_12px_40px_rgba(5,44,101,0.25)] border border-blue/10 flex justify-center">
            <CTAButton
              label={hero.cta}
              location="mobile_sticky"
              className="w-full text-base py-3"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
