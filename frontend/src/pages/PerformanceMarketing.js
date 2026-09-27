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

import { TrackingProvider, useTracking } from "@/context/TrackingContext";

const PMContent = () => {
  const location = useLocation();
  const { track } = useTracking();

  useEffect(() => {
    window.scrollTo(0, 0);
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

      // Track Cal.com events
      cal("on", {
        action: "*",
        callback: (e) => {
          if (e.detail.type === "linkReady") {
            track("CalendarOpen", { section: "floating-cal-button", customData: { source: "pm_page" } });
          } else if (e.detail.type === "timeSelected") {
            track("CalendarTimeSelected", { section: "floating-cal-button" });
          } else if (e.detail.type === "bookingSuccessful") {
            track("d2c_session_booked", { section: "floating-cal-button", send_capi: true });
          }
        }
      });
    })();

    return () => {
      const calBtn = document.getElementById("cal-booking-place-holder");
      if (calBtn) calBtn.style.display = "none";
      const actualBtn = document.querySelector(".cal-floating-button");
      if (actualBtn) actualBtn.style.display = "none";
    };
  }, [track]);

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

export const PerformanceMarketing = () => (
  <TrackingProvider>
    <PMContent />
  </TrackingProvider>
);
