import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTracking } from "@/context/TrackingContext";
import { scrollToBooking } from "@/components/shared";

export const CTAButton = ({ label, location, variant = "primary", size = "lg", className = "", testId }) => {
  const { track } = useTracking();
  const onClick = () => {
    track("InitiateCheckout", { section: location, customData: { cta_location: location } });
    scrollToBooking();
  };
  const base = "cta-shine group inline-flex items-center justify-center gap-2.5 font-semibold rounded-full transition-[transform,background-color,box-shadow] duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0";
  const sizes = size === "lg" ? "px-7 sm:px-9 py-4 text-base sm:text-lg" : "px-5 py-2.5 text-sm";
  const variants = {
    primary: "bg-blue text-white hover:bg-blue-dark shadow-[0_12px_30px_rgba(13,110,253,0.35)] hover:shadow-[0_18px_40px_rgba(13,110,253,0.45)]",
    white: "bg-white text-blue hover:bg-blue-tint shadow-[0_12px_30px_rgba(0,0,0,0.15)]",
    dark: "bg-ink text-white hover:bg-black",
  };
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      data-testid={testId || `cta-${location}`}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  );
};
