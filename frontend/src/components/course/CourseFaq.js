import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/shared";
import { courseFaq } from "@/data/courseContent";

const FaqItem = ({ q, a, isOpen, onClick }) => {
  return (
    <div className={`border-b border-line last:border-b-0 transition-colors duration-300 ${isOpen ? 'bg-[#FAFAFA]' : 'bg-white hover:bg-slate-50'}`}>
      <button 
        className="w-full py-6 px-4 sm:px-8 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-bold text-ink pr-8">{q}</span>
        <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue text-white border-blue rotate-180 shadow-md' : 'bg-white text-ink-3 border-line'}`}>
          <span className="material-icons-round text-xl">expand_more</span>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-8 pb-6 text-ink-2 font-medium leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CourseFaq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  return (
    <section className="bg-white py-20 sm:py-32 border-t border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
              Clear Your Doubts
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-ink-2">
              Everything you need to know before joining the cohort.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white border border-line rounded-3xl overflow-hidden shadow-sm">
            {courseFaq.map((faq, i) => (
              <FaqItem 
                key={i} 
                q={faq.q} 
                a={faq.a} 
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
