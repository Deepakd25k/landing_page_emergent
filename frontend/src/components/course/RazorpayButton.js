import { useEffect, useRef } from "react";
import { Reveal } from "@/components/shared";
import { useTracking } from "@/context/TrackingContext";

export const RazorpayButton = ({ onOpenModal }) => {
  const { track } = useTracking();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          track("ScrolledToCTA", { once: true });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [track]);

  const handleOpen = () => {
    track("InitiateCheckout", { section: "bottom_checkout" });
    onOpenModal();
  };

  return (
    <section ref={sectionRef} id="book" className="py-20 sm:py-32 bg-[#F8F9FA] border-t border-line overflow-hidden relative">
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

              {/* Right Column: CTA Button */}
              <div className="flex flex-col items-center justify-center bg-[#F8F9FA] rounded-2xl p-8 border border-line h-full min-h-[200px]">
                <div className="text-center mb-6">
                  <p className="text-sm font-semibold text-ink-2 mb-1">One-Time Payment</p>
                  <p className="text-4xl font-black text-ink">₹2,999 <span className="text-lg text-ink-3 line-through ml-2">₹19,999</span></p>
                </div>
                
                <button 
                  onClick={handleOpen}
                  className="w-full max-w-[280px] bg-blue hover:bg-blue-dark text-white rounded-xl font-bold text-lg py-4 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="material-icons-round text-[20px]">lock</span>
                  Pay Now & Enroll
                </button>
                <p className="text-[10px] text-ink-3 font-semibold mt-3 flex items-center gap-1">
                  <span className="material-icons-round text-[12px] text-green-500">verified</span>
                  Secured by Razorpay
                </p>
                <p className="text-[10px] text-ink-3 font-semibold mt-1">
                  GST invoice available for B2B buyers
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
