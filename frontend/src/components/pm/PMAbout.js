import { motion } from "framer-motion";

export const PMAbout = () => {
  return (
    <section className="py-20 sm:py-32 bg-ink relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-20 h-20 bg-white/5 rounded-full mx-auto mb-8 flex items-center justify-center border border-white/10">
          <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-8 leading-tight">
          Who built this machine?
        </h2>
        
        <p className="text-white/70 text-lg sm:text-xl font-medium leading-relaxed mb-8">
          We aren't a traditional firm. We are a specialized unit of D2C veterans who got tired of the broken model.
        </p>

        <p className="text-white/70 text-lg sm:text-xl font-medium leading-relaxed mb-12">
          We've managed massive budgets and seen what actually scales a brand. We stripped away the account managers, the generic dashboards, and the interns. You only get seasoned growth partners handling your capital.
        </p>

        <div className="inline-block border-l-4 border-blue pl-6 py-2 text-left">
          <p className="text-white font-black tracking-tighter text-2xl">
            Because of this intense, hands-on approach, <br />
            we cannot work with everyone.
          </p>
        </div>

      </div>
    </section>
  );
};
