import { useEffect, useRef } from "react";

export const RazorpayButton = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Only mount the script once
    if (formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_TgaMXeEjEYnzcd");
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="book" className="py-20 sm:py-32 bg-ink border-t border-line overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
          Secure Your Spot in the Next Cohort
        </h2>
        <p className="text-lg text-white/70 mb-12">
          Strictly limited to 50 seats. Complete your payment below to get instant access to the community and schedule.
        </p>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 inline-block min-w-[300px]">
          <form ref={formRef}></form>
        </div>
      </div>
    </section>
  );
};
