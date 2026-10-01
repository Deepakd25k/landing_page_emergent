import { Reveal } from "@/components/shared";

export const CourseInstructor = () => (
  <section className="bg-white py-20 sm:py-32 border-t border-line" id="instructor">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="bg-[#FAFAFA] border border-line rounded-[2.5rem] p-8 sm:p-12 shadow-sm overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
            {/* Image */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 shrink-0 rounded-full border-4 border-white shadow-xl overflow-hidden relative bg-white">
              <img 
                src="/images/deepak_founder.png" 
                alt="Deepak Gupta" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex-col items-center justify-center text-ink-3 font-medium text-sm hidden bg-slate-100">
                <span className="material-icons-round text-3xl mb-1 opacity-50">person</span>
                Deepak
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue/10 text-blue-dark text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="material-icons-round text-[14px]">school</span>
                The Instructor
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-black text-ink tracking-tight mb-2">
                Deepak Gupta
              </h2>
              <p className="text-sm font-bold text-ink-2 mb-6 uppercase tracking-wider">
                Founder, Incremental Value
              </p>

              <div className="space-y-4 text-ink-2 font-medium leading-relaxed mb-8">
                <p>
                  Most cohorts are taught by people who haven't run a live ad account in years. 
                  I am actively managing <strong className="text-ink">₹3 Lakh+ per day</strong> in ad spend across Meta, Google, and Amazon for top Indian D2C brands.
                </p>
                <p>
                  I am not going to teach you theory or give you a ₹100 dummy account. 
                  We will log into my active dashboards. You will see what breaks, how we fix it, and how we actually scale unit economics in 2026.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href="https://linkedin.com/in/deepakgupta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-line rounded-lg text-sm font-bold text-ink hover:border-blue hover:text-blue transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
