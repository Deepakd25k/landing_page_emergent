import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PMHero } from "../components/pm/PMHero";
import { PMManifesto } from "../components/pm/PMManifesto";
import { PMProof } from "../components/pm/PMProof";
import { PMMechanism } from "../components/pm/PMMechanism";
import { PMExecution } from "../components/pm/PMExecution";
import { PMAdvantage } from "../components/pm/PMAdvantage";
import { PMAbout } from "../components/pm/PMAbout";
import { PMForm } from "../components/pm/PMForm";

export const PerformanceMarketing = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    // Dynamic page title
    document.title = "D2C Growth Partners | Not An Agency";
  }, [location]);

  return (
    <div className="bg-ink min-h-screen text-white font-sans selection:bg-blue selection:text-white pb-24 relative">
      <PMHero />
      <PMManifesto />
      <PMProof />
      <PMMechanism />
      <PMExecution />
      <PMAdvantage />
      <PMAbout />
      <PMForm />

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 sm:px-6 sm:py-5 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <div className="max-w-4xl mx-auto flex flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-0.5">Free 15-minute growth call</h4>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Your gap, mapped honestly.</p>
          </div>
          <a
            href="#apply"
            className="px-5 sm:px-6 py-2.5 bg-[#5D5FEF] hover:bg-[#4d4fdf] text-white rounded-xl font-semibold text-sm sm:text-base transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            Book My Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
