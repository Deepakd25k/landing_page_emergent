import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import { PMHero } from "../components/pm/PMHero";
import { PMManifesto } from "../components/pm/PMManifesto";
import { PMProof } from "../components/pm/PMProof";
import { PMMechanism } from "../components/pm/PMMechanism";
import { PMExecution } from "../components/pm/PMExecution";
import { PMCaseStudies } from "../components/pm/PMCaseStudies";
import { PMAbout } from "../components/pm/PMAbout";

export const PerformanceMarketing = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
    // Dynamic page title
    document.title = "D2C Growth Partners | Not An Agency";
  }, [location]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"default","embedLibUrl":"https://cal.id/embed-link/embed.js"});
      cal("floatingButton", {
        "calLink": "d2cdeepak-audit/d2c-growth-call",
        "calOrigin": "https://cal.id",
        "config": { "layout": "month_view" },
        "buttonText": "Book Free D2C Consultation",
        "hideButtonIcon": false,
        "buttonPosition": "bottom-right",
        "buttonColor": "#5D5FEF",
        "buttonTextColor": "#ffffff"
      });
      cal("ui", {
        "cssVarsPerTheme": { "light": { "cal-brand": "#5D5FEF" }, "dark": { "cal-brand": "#fafafa" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();

    // Cleanup floating button on unmount if possible, though Cal API might persist it.
    // In React Router, it might stay on other pages if not hidden, but let's just initialize it here.
    return () => {
      // Hiding the Cal floating button when leaving this page
      const calBtn = document.getElementById("cal-booking-place-holder"); // usually where Cal injects
      if (calBtn) calBtn.style.display = "none";
      const actualBtn = document.querySelector(".cal-floating-button"); // fallback selector
      if (actualBtn) actualBtn.style.display = "none";
    };
  }, []);

  return (
    <div className="bg-ink min-h-screen text-white font-sans selection:bg-blue selection:text-white pb-24 relative">
      <PMHero />
      <PMManifesto />
      <PMProof />
      <PMMechanism />
      <PMExecution />
      <PMCaseStudies />
      <PMAbout />
    </div>
  );
};
