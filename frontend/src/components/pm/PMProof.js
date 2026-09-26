import { motion } from "framer-motion";

export const PMProof = () => {
  const platforms = [
    { name: "Meta", img: "/images/proof-meta.png" },
    { name: "Google", img: "/images/proof-google.png" },
    { name: "Amazon", img: "/images/proof-amazon.png" },
    { name: "WhatsApp", img: "/images/proof-whatsapp.png" },
    { name: "CRO", img: "/images/proof-cro.png" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Subtle Dotted Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.3]" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-6 px-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4 leading-snug text-slate-900">
            Don't take our word for it. Look at {" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">the math.</span>
              <span className="absolute bottom-[10%] left-0 w-full h-[45%] bg-[#E0E7FF] -z-10 rounded"></span>
            </span>
          </h2>
        </div>

        {/* Horizontal Swipe Carousel */}
        <div className="w-full overflow-hidden">
          {/* Hiding scrollbar using standard tailwind utilities if available, or inline style fallback */}
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 px-6 sm:px-12 pb-4 pt-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .flex::-webkit-scrollbar { display: none; }
            `}</style>
            
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="snap-center shrink-0 w-[85vw] sm:w-[450px] bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden relative flex flex-col group transition-transform hover:-translate-y-1"
              >
                {/* Image Container - fits the uploaded screenshots perfectly */}
                <div className="w-full aspect-[4/5] sm:aspect-square bg-slate-50 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={platform.img} 
                    alt={`${platform.name} Proof`} 
                    className="w-full h-full object-contain sm:object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image not uploaded yet */}
                  <div className="absolute inset-0 flex-col items-center justify-center text-slate-400 font-medium text-sm hidden">
                    <svg className="w-8 h-8 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Upload {platform.img.split('/').pop()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Indicators */}
        <div className="flex flex-col items-center justify-center mt-2">
          <div className="flex gap-2 mb-2">
            <div className="w-5 h-1.5 rounded-full bg-[#5D5FEF]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
          </div>
          <p className="text-slate-400 text-xs font-medium tracking-wide">
            Swipe to see the whole system
          </p>
        </div>

        {/* Backed By Footer */}
        <div className="mt-10 px-4">
          <div className="flex flex-row flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-2 text-xs sm:text-sm font-bold text-slate-800">
            <div className="flex items-center text-slate-400 tracking-widest text-[9px] sm:text-[10px] uppercase mr-1">
              Backed By
            </div>
            
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded bg-[#FF6600] flex items-center justify-center text-white font-bold text-[9px] leading-none">
                Y
              </div>
              <span>Y Combinator</span>
            </div>
            
            <div className="text-slate-300">•</div>
            <div>Lightspeed</div>
            
            <div className="text-slate-300">•</div>
            <div>Chiratae</div>
            
            <div className="text-slate-300">•</div>
            <div>Kunal Shah</div>
          </div>
          
          <div className="text-center mt-3 text-slate-500 font-medium text-[11px] sm:text-xs">
            1,00,000+ creators & experts supported
          </div>
        </div>

      </div>
    </section>
  );
};
