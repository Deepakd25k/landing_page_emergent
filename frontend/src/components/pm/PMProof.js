import { motion } from "framer-motion";

export const PMProof = () => {
  const platforms = [
  const platforms = [
    { 
      name: "Meta", 
      tabText: "Meta Ads • Live",
      headline: "₹2.63 Cr Ad Spend",
      subhead: "Scaled profitably in just 7 months.",
      customRender: (
        <div className="w-[180px] sm:w-[220px] bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col text-slate-800 font-sans text-sm sm:text-base h-full max-h-[300px]">
           <div className="border-b-2 border-blue-600 p-2 sm:p-3 text-[#1866C0] font-bold text-sm flex justify-between items-center">
              <span>Amount spent</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
           </div>
           <div className="flex-1 overflow-hidden flex flex-col font-medium tracking-tight text-[13px] sm:text-[15px]">
             <div className="py-1.5 px-3 border-b border-slate-100 text-right">₹2,660,981.21</div>
             <div className="py-1.5 px-3 border-b border-slate-100 bg-[#F5F5F5] text-right">₹1,545,494.43</div>
             <div className="py-1.5 px-3 border-b border-slate-100 text-right text-[#1866C0] flex justify-end gap-1.5 items-center">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <span className="border-b border-dotted border-[#1866C0]">₹1,103,203.89</span>
             </div>
             <div className="py-1.5 px-3 border-b border-slate-100 bg-[#F5F5F5] text-right">₹1,062,005.31</div>
             <div className="py-1.5 px-3 border-b border-slate-100 text-right">₹817,565.92</div>
             <div className="py-1.5 px-3 border-b border-slate-100 bg-[#F5F5F5] text-right">₹727,820.76</div>
             <div className="py-1.5 px-3 border-b border-slate-100 text-right">₹697,167.24</div>
           </div>
           <div className="p-2 sm:p-3 bg-white border-t-2 border-slate-200 text-right shrink-0">
              <div className="font-bold text-[15px] sm:text-[17px]">₹26,328,807.54</div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">Total spent</div>
           </div>
        </div>
      ),
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
    },
    { 
      name: "Google", 
      tabText: "Google Search • Live",
      headline: "Dominating Search",
      subhead: "Captured high-intent bottom funnel.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", // Temp placeholder
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
    },
    { 
      name: "Amazon", 
      tabText: "Amazon Ads • Scaling",
      headline: "Marketplace Scaling",
      subhead: "Outbidding competitors efficiently.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600", // Temp placeholder
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" 
    },
    { 
      name: "WhatsApp", 
      tabText: "Retention • Active",
      headline: "WhatsApp Funnels",
      subhead: "Recovered 24% of abandoned carts.",
      img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=600", // Temp placeholder
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
    },
    { 
      name: "CRO", 
      tabText: "Store CRO • Active",
      headline: "Conversion Boost",
      subhead: "Optimized landing pages for CVR.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", // Temp placeholder
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    },
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
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-10 px-6 sm:px-12 pb-12 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .flex::-webkit-scrollbar { display: none; }
            `}</style>
            
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="snap-center shrink-0 w-[85vw] sm:w-[450px] relative flex flex-col group transition-transform hover:-translate-y-1 drop-shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              >
                {/* Folder Tab */}
                <div className="bg-white h-10 w-48 rounded-t-2xl flex items-center px-5 relative z-10 border-b-0">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                     <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">{platform.tabText}</span>
                   </div>
                </div>
                
                {/* Main Folder Body */}
                <div className="w-full bg-white rounded-b-[2rem] rounded-tr-[2rem] rounded-tl-none relative z-20 overflow-hidden flex flex-col" style={{ minHeight: '400px' }}>
                  
                  {/* Content Header */}
                  <div className="px-6 py-5 border-b border-slate-100 bg-white">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{platform.headline}</h3>
                    <p className="text-sm font-bold text-slate-500 mt-1">{platform.subhead}</p>
                  </div>

                  {/* Image Container */}
                  <div className="w-full flex-1 bg-slate-50/50 flex items-center justify-center p-4 relative">
                    {platform.customRender ? (
                      platform.customRender
                    ) : (
                      <>
                        <img 
                          src={platform.img} 
                          alt={`${platform.name} Proof`} 
                          className="w-full max-h-[300px] object-contain rounded-xl shadow-sm border border-slate-200/50 bg-white"
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
                          Upload {platform.img?.split('/').pop() || 'image'}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Attached Floating Platform Icon */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-50 flex items-center justify-center z-30">
                  <img 
                    src={platform.icon} 
                    alt={platform.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
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
