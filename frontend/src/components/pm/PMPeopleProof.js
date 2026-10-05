import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PMPeopleProof = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const founders = [
    {
      name: "Deepak Gupta",
      title: "Co-founder, Incremental Value",
      image: "/images/deepak_founder.png",
      linkedin: "#",
      highlights: [
        "Individual Contributor & Team Lead for D2C brands",
        "D2C Growth Specialist (Omnichannel & CRO-led)",
        "₹10Cr+ D2C Ad Spend Managed",
        "5+ yrs exp (Former Software Dev in Product Co.)",
        "Focus on CM3+ Optimization & Avg 4X ROAS",
        "n8n for D2C automation & End-to-end leak fixes"
      ]
    },
    {
      name: "Kushagra Jain",
      title: "Co-founder, Incremental Value",
      image: "/images/kushagra_founder.jpg",
      linkedin: "#",
      highlights: [
        "Working closely with D2C Founders",
        "₹35Cr+ Ad Spend Managed",
        "Growth Manager & D2C Expert",
        "Google Ads Ecosystem Expert",
        "5+ yrs exp & Avg 5X ROAS",
        "End-to-end D2C problem fixes"
      ]
    }
  ];

  const featuredCase = {
    category: "Fashion & Apparel • E-Commerce",
    problem: "Plagued by fake RTOs and low realized returns despite good top-line ROAS.",
    actions: [
      "Fixed logistics and PG routing end-to-end.",
      "Redesigned checkout flows to capture real intent."
    ],
    outcome: "Converted fake RTOs to successful deliveries. Stabilized AOV at ₹4000. Delivered 3× Attributed ROAS on successful post-return orders.",
    image: "/assets/shopify-proof.png"
  };

  const additionalCases = [
    {
      brand: "EdTech • Google + Meta",
      problem: "Capped at ₹15L/mo spend due to high ₹3L CAC. Unscalable economics.",
      work: "Systematically scaled the acquisition engine over 12 months.",
      result: "Spend grew 16.7× (to ₹2.5Cr/mo). CAC dropped by 50% (to ₹1.5L).",
      impact: "Revenue grew 25× to hit ₹7.5Cr/mo with highly profitable unit economics."
    },
    {
      brand: "D2C Fashion • Meta + Google",
      problem: "Stuck at ₹2L/mo spend with inefficient 1.5× ROAS. No room for error.",
      work: "Progressively increased advertising investment while improving return on every rupee.",
      result: "Spend scaled 11× (to ₹22L/mo). ROAS improved by 2.3× (to 3.5×).",
      impact: "Revenue exploded 25×+ to reach ₹75–80L/mo. Efficient at scale."
    },
    {
      brand: "D2C Brand • Persona Testing",
      problem: "Burning ₹16L/mo at stagnant 1× ROAS. No messaging was converting.",
      work: "Redefined ICPs and aggressively tested 10 ad creatives daily for 2 months.",
      result: "Found winning messaging that connected deeply with the actual target buyers.",
      impact: "Attributed ROAS doubled to 2× at the exact same ₹16L/mo ad spend."
    },
    {
      type: "image",
      platform: "amazon",
      brand: "Marketplace Sales • Amazon Dashboard",
      imageUrl: "/assets/amazon-proof.png",
      impact: "Omnichannel scaling. We capture demand wherever your customers buy."
    },
    {
      type: "image",
      platform: "google",
      brand: "Acquisition Engine • Google Ads",
      imageUrl: "/assets/google-ads-proof.png",
      impact: "Sustaining 4.2× ROAS at high budgets. Scale without sacrificing efficiency."
    }
  ];

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    }
  };

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Know who’s responsible for your growth.
          </h2>
          <div className="text-base sm:text-lg font-medium text-slate-600 space-y-4">
            <p>
              <strong className="text-slate-900">Deepak Gupta & Kushagra Jain</strong><br/>
              Co-founders, Incremental Value
            </p>
            <p>
              We’ve worked closely with founders, managed live accounts and helped solve problems across marketing and operations.
            </p>
            <p>
              At Incremental Value, we stay involved in your account, creative decisions and business reviews. Our in-house creative team works alongside us.
            </p>
            <p className="font-bold text-slate-900">Meet the people. See the work.</p>
          </div>
        </div>

        {/* Founder Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {founders.map((founder, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">{founder.name}</h3>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
                <p className="text-sm font-semibold text-blue-600 mb-4">{founder.title}</p>
                <ul className="space-y-2">
                  {founder.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] sm:text-sm text-slate-600 font-medium leading-snug">
                      <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mb-16 sm:mb-24 flex flex-col lg:flex-row">
          
          <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-600 uppercase tracking-widest mb-6 w-fit">
              {featuredCase.category}
            </div>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Problem</h4>
              <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
                {featuredCase.problem}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Actions</h4>
              <ul className="space-y-3">
                {featuredCase.actions.map((act, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14.5px] sm:text-base font-medium text-slate-600">
                    <span className="text-blue-500 shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    </span>
                    {act}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-2 p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">Outcome</h4>
              <p className="text-sm sm:text-base font-bold text-emerald-950 leading-relaxed">
                {featuredCase.outcome}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-slate-100 p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-200 relative">
            <div className="w-full h-48 sm:h-auto sm:aspect-video relative rounded-xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer group" onClick={() => setModalOpen(true)}>
              <img src={featuredCase.image} alt="Featured Evidence" className="w-full h-full object-cover sm:object-contain bg-white transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                  View Evidence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Cases Carousel */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">More verified outcomes</h3>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-400 mr-2">{currentSlide + 1} / {additionalCases.length}</span>
              <button onClick={() => scrollToIndex(Math.max(0, currentSlide - 1))} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-600 transition-colors disabled:opacity-50" disabled={currentSlide === 0}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button onClick={() => scrollToIndex(Math.min(additionalCases.length - 1, currentSlide + 1))} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-600 transition-colors disabled:opacity-50" disabled={currentSlide === additionalCases.length - 1}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {additionalCases.map((caseStudy, idx) => (
              <div key={idx} className="shrink-0 w-[85vw] sm:w-[400px] snap-center bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col h-[420px] sm:h-[400px]">
                
                <div className="bg-[#FAFAFA] border-b border-slate-200 px-6 py-4 shrink-0">
                  <span className="text-[13px] sm:text-sm font-bold text-slate-800 tracking-tight uppercase">
                    {caseStudy.brand}
                  </span>
                </div>

                {caseStudy.type === "image" ? (
                  <div className="flex-1 relative bg-slate-50 p-4 flex items-center justify-center">
                    <img src={caseStudy.imageUrl} alt="Verified Data" className="w-full h-full object-contain rounded-xl shadow-sm border border-slate-200" />
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-lg p-2 shadow-lg border border-slate-200 flex items-center gap-2">
                      {caseStudy.platform === "amazon" ? (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" alt="Amazon" className="w-4 h-4" />
                      ) : (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Ads" className="w-4 h-4" />
                      )}
                      <span className="text-[10px] font-black text-slate-800 tracking-tight">Verified</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Problem</h4>
                      <p className="text-[13px] font-semibold text-slate-800">{caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Our Work</h4>
                      <p className="text-[13px] font-medium text-slate-600">{caseStudy.work}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Result</h4>
                      <p className="text-[13px] font-medium text-slate-600">{caseStudy.result}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto bg-[#F0FDF4] border-t border-emerald-100 p-5 shrink-0 rounded-b-2xl">
                  <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest mb-1">Business Impact</h4>
                  <p className="text-[14px] font-bold text-emerald-950 leading-tight">
                    {caseStudy.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button
            data-cal-link="d2cdeepak-audit/d2c-growth-call"
            onClick={() => window.trackEvent?.("InitiateCheckout", { section: "pm-people-proof" })}
            className="px-8 py-4 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-xl font-bold text-base transition-all shadow-[0_4px_14px_0_rgb(93,95,239,0.39)] hover:shadow-[0_6px_20px_rgba(93,95,239,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            Book a Founder Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-100">
                <span className="font-bold text-slate-800">Verified Evidence</span>
                <button onClick={() => setModalOpen(false)} className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="p-4 overflow-auto flex-1 flex justify-center items-center bg-slate-50">
                <img src={featuredCase.image} alt="Full Evidence" className="w-full h-auto max-h-full object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};
