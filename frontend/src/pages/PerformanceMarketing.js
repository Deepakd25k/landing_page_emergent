import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PMHero } from "../components/pm/PMHero";
import { PMManifesto } from "../components/pm/PMManifesto";
import { PMProof } from "../components/pm/PMProof";
import { PMAttribution } from "../components/pm/PMAttribution";
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
    <div className="bg-ink min-h-screen text-white font-sans selection:bg-blue selection:text-white">
      <PMHero />
      <PMManifesto />
      <PMProof />
      <PMAttribution />
      <PMExecution />
      <PMAdvantage />
      <PMAbout />
      <PMForm />
    </div>
  );
};
