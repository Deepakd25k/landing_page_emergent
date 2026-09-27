import { useEffect, useRef } from "react";
import { Reveal } from "@/components/shared";

export const RazorpayButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Only mount the script if it hasn't been mounted yet
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_Th51bqNt2tJQRM");
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="book" className="py-20 sm:py-32 bg-[#F8F9FA] border-t border-line overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal>
          <div className="mb-10">
            <span className="inline-block px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue-dark text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              Limited to 50 Seats
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Secure Your Spot
            </h2>
            <p className="text-lg text-ink-2 font-medium">
              Join the 1-Month Weekend Cohort. Claim your seat before they fill up.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className="bg-white border-2 border-blue/20 rounded-[2rem] p-8 sm:p-12 shadow-xl inline-flex min-w-[300px] sm:min-w-[400px] items-center justify-center relative overflow-hidden group hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] transition-all duration-300">
            {/* Embedded Razorpay Form */}
            <form ref={formRef} className="w-full flex items-center justify-center"></form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
