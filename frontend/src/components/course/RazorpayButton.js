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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="bg-white border-2 border-blue/20 rounded-[2rem] p-8 sm:p-12 shadow-xl relative overflow-hidden group hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              
              {/* Left Column: Value Prop */}
              <div className="text-left">
                <span className="inline-block px-3 py-1.5 rounded-full bg-blue/10 border border-blue/20 text-blue-dark text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                  Limited to 50 Seats
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-4">
                  Book The Cohort
                </h2>
                <p className="text-lg text-ink-2 font-medium mb-6">
                  Get exactly what the $50B D2C market is begging for right now. Complete the payment to secure your spot instantly.
                </p>
                <ul className="space-y-3">
                  {[
                    "1-Month Weekend LIVE Cohort",
                    "1-Month Dedicated Post-Cohort Support",
                    "Live Ad Account Execution (₹3L+/Day)",
                    "n8n & CAPI Automation Workflows"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-icons-round text-blue mt-0.5 text-[18px]">check_circle</span>
                      <span className="text-ink font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Razorpay Script */}
              <div className="flex items-center justify-center bg-[#F8F9FA] rounded-2xl p-8 border border-line h-full min-h-[200px]">
                <form ref={formRef} className="w-full flex items-center justify-center"></form>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
