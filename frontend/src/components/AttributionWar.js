import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Reveal } from "@/components/shared";
import { CTAButton } from "@/components/CTAButton";

// Simple Meta Logo SVG
const MetaLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 fill-blue" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0C22.4 0 0 22.4 0 50c0 24.9 18.2 45.5 42.2 49.2V64.4h-12.7v-14.4h12.7v-11c0-12.5 7.7-19.4 18.9-19.4 5.3 0 10.9 0.9 10.9 0.9v12h-6.1c-6 0-7.9 3.7-7.9 7.6v9.9h13.5l-2.2 14.4h-11.3v34.8C81.8 95.5 100 74.9 100 50 100 22.4 77.6 0 50 0z" />
  </svg>
);

// Simple Google G Logo SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M98.6 51.1c0-3.5-.3-6.9-.9-10.2H50v19.4h27.2c-1.2 6.3-4.8 11.6-9.9 15.1v12.5h16c9.4-8.7 15.3-21.6 15.3-36.8z" />
    <path fill="#34A853" d="M50 100c13.7 0 25.1-4.5 33.5-12.2l-16-12.5c-4.5 3-10.3 4.8-17.5 4.8-13.4 0-24.8-9.1-28.9-21.3H4.6v12.9C13.2 88.6 30.2 100 50 100z" />
    <path fill="#FBBC05" d="M21.1 58.8c-1.1-3.2-1.7-6.7-1.7-10.2s.6-7 1.7-10.2V25.5H4.6C1.7 31.4 0 38 0 45s1.7 13.6 4.6 19.5l16.5-5.7z" />
    <path fill="#EA4335" d="M50 19.9c7.4 0 14.1 2.6 19.4 7.6l14.6-14.6C75 4.5 63.6 0 50 0 30.2 0 13.2 11.4 4.6 28.5l16.5 12.9c4.1-12.3 15.5-21.5 28.9-21.5z" />
  </svg>
);

export const AttributionWar = () => {
  return (
    <section id="attribution" className="bg-white py-12 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Reveal>
          <div className="relative bg-[#f8f9fb] rounded-[2rem] border border-line p-6 sm:p-16 text-center overflow-hidden shadow-sm">
            
            {/* Subtle dot grid background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Pill */}
              <div className="inline-flex items-center gap-2 bg-white border border-line rounded-full px-3 py-1 mb-6 sm:mb-8 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-danger" />
                <span className="text-[10px] sm:text-xs font-bold text-ink-2 uppercase tracking-wide">04 — The Big Data Lie</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.1] mb-12">
                The Attribution War.
              </h2>

              {/* Diamond Flowchart */}
              <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative">
                
                {/* 1. TOP NODE: Customer Discovers */}
                <div className="bg-white border border-line rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-sm z-10 w-[90%] sm:w-[60%] flex items-center justify-center gap-3">
                  <span className="text-2xl sm:text-3xl">🧑</span>
                  <div className="text-left">
                    <p className="font-bold text-ink text-xs sm:text-base leading-tight">1 Customer discovers your brand</p>
                    <p className="text-[10px] sm:text-xs text-ink-3 mt-0.5">And buys a product for ₹2,000</p>
                  </div>
                </div>

                {/* Split Lines (Y-Shape Top) */}
                <div className="w-[2px] h-6 sm:h-8 bg-line" />
                <div className="w-[75%] sm:w-[65%] h-[2px] bg-line relative">
                  <div className="absolute top-0 left-0 w-[2px] h-6 sm:h-8 bg-line" />
                  <div className="absolute top-0 right-0 w-[2px] h-6 sm:h-8 bg-line" />
                </div>

                {/* 2. MIDDLE NODES: The Platforms */}
                <div className="flex justify-between w-[85%] sm:w-[75%] mt-6 sm:mt-8 z-10">
                  
                  {/* Meta Node */}
                  <div className="w-[46%] bg-white border-2 border-blue/20 rounded-xl p-3 sm:p-5 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue" />
                    <MetaLogo />
                    <p className="font-bold text-ink text-[11px] sm:text-sm mt-3 leading-tight">Meta claims <br className="hidden sm:block" />1 Purchase</p>
                    <p className="text-[9px] sm:text-xs text-ink-3 mt-1.5">(View/Click tracked)</p>
                  </div>

                  {/* Google Node */}
                  <div className="w-[46%] bg-white border-2 border-[#fbbc05]/30 rounded-xl p-3 sm:p-5 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#fbbc05]" />
                    <GoogleLogo />
                    <p className="font-bold text-ink text-[11px] sm:text-sm mt-3 leading-tight">Google claims <br className="hidden sm:block" />1 Purchase</p>
                    <p className="text-[9px] sm:text-xs text-ink-3 mt-1.5">(Search tracked)</p>
                  </div>

                </div>

                {/* Merge Lines (Y-Shape Bottom) */}
                <div className="w-[75%] sm:w-[65%] h-[2px] bg-line relative mt-6 sm:mt-8">
                  <div className="absolute bottom-0 left-0 w-[2px] h-6 sm:h-8 bg-line" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-6 sm:h-8 bg-line" />
                </div>
                <div className="w-[2px] h-6 sm:h-8 bg-line" />

                {/* 3. BOTTOM NODE: The Reality */}
                <div className="bg-[#22c55e]/10 border-2 border-[#22c55e]/30 rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-sm z-10 w-[90%] sm:w-[60%] flex items-center justify-center gap-3">
                  <span className="text-2xl sm:text-3xl">🛒</span>
                  <div className="text-left">
                    <p className="font-bold text-[#22c55e] text-xs sm:text-base leading-tight">Reality: Only 1 Purchase</p>
                    <p className="text-[10px] sm:text-xs text-[#22c55e]/80 mt-0.5">Your bank receives ₹2,000.</p>
                  </div>
                </div>

              </div>

              {/* The Takeaway */}
              <div className="mt-12 bg-ink text-white rounded-2xl p-6 sm:p-8 w-full max-w-2xl shadow-lg">
                <h4 className="text-danger font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3">The Discovery Trap</h4>
                <p className="text-sm sm:text-lg font-medium leading-relaxed">
                  Both platforms take 100% credit for the same sale. Your agency dashboards report <span className="line-through text-ink-3">2 sales (₹4,000)</span>, but you only made <span className="text-[#22c55e] font-bold">1 sale (₹2,000)</span>.<br />
                  <span className="text-white mt-4 block font-bold text-base sm:text-xl border-t border-white/10 pt-4">You need to know the true discovery source, otherwise you scale on fake data.</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-10 w-full flex justify-center">
                <CTAButton label="Find Your True Discovery Source — ₹1,999" location="attribution" className="w-full max-w-md shadow-[0_8px_20px_-4px_rgba(13,110,253,0.4)] hover:shadow-[0_12px_24px_-4px_rgba(13,110,253,0.5)]" />
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
