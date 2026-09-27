import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { hero } from "@/data/content";
import { useTracking } from "@/context/TrackingContext";

export const MobileStickyButton = ({ onOpenModal }) => {
  const [show, setShow] = useState(false);
  const { track } = useTracking();
  const isCourse = typeof window !== "undefined" && window.location.pathname.includes("/course");
  const label = hero.cta;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => {
    track("InitiateCheckout", { section: "mobile_sticky" });
    if (onOpenModal) onOpenModal();
  };

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
          <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-[0_-12px_40px_rgba(5,44,101,0.15)] border border-blue/10 flex flex-col gap-2">
            {/* Top Strip */}
            <div className="flex items-center justify-center gap-1.5 bg-blue/5 py-1.5 px-3 rounded-lg border border-blue/10">
              <span className="material-icons-round text-blue text-[14px]">bolt</span>
              <span className="text-xs font-bold text-blue-dark tracking-wide uppercase">Market Fit & Extreme Value</span>
            </div>
            
            {/* 2-Column Content */}
            <div className="flex items-center justify-between gap-3 px-1">
              <div className="flex flex-col">
                <span className="text-sm font-black text-ink leading-tight">Book The Cohort</span>
                <span className="text-[10px] font-bold text-green-600">Secure Your Spot</span>
              </div>
              <div className="shrink-0 w-[140px]">
                {isCourse ? (
                  <button 
                    onClick={handleOpen}
                    className="w-full bg-blue hover:bg-blue-dark text-white rounded-lg font-bold text-sm py-2.5 transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span className="material-icons-round text-[14px]">lock</span>
                    Pay Now
                  </button>
                ) : (
                  <CTAButton
                    label="Enroll V3"
                    location="mobile_sticky"
                    className="w-full text-sm py-2"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
