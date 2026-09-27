import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { hero } from "@/data/content";

export const MobileStickyButton = () => {
  const [show, setShow] = useState(false);
  const isCourse = typeof window !== "undefined" && window.location.pathname.includes("/course");
  const label = hero.cta;
  const formRef = useRef(null);

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // If it's the course page, and the sticky button is showing, embed the razorpay script
    if (isCourse && show && formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_Th51bqNt2tJQRM");
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, [isCourse, show]);

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
          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-[0_12px_40px_rgba(5,44,101,0.25)] border border-blue/10 flex justify-center items-center">
            {isCourse ? (
              <form ref={formRef} className="w-full flex items-center justify-center m-0 p-0 [&>button]:w-full [&>button]:py-3"></form>
            ) : (
              <CTAButton
                label={label}
                location="mobile_sticky"
                className="w-full text-base py-3"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
