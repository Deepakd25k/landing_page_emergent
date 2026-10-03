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

import { SEOHelmet } from "@/components/SEOHelmet";

const pmSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "D2C Growth Partnership",
  "provider": {
    "@type": "Organization",
    "name": "Incremental Value"
  },
  "description": "We don't run silos. Incremental Value acts as your in-house D2C Growth Partner, handling tracking, creatives, and unit economics."
};

const pmFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you a traditional performance marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Incremental Value is not a traditional agency. We operate as an in-house D2C Growth Partner focusing on end-to-end execution including tracking, creatives, and unit economics."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manage Meta Ads and Google Ads for D2C brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we handle advanced Meta Ads, Google Ads (including Performance Max), and full-funnel media buying. But we execute this as a Growth Partner tied to your actual business profit, not just platform ROAS."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help D2C brands scale on Q-commerce platforms like Blinkit and Zepto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. End-to-end D2C growth today requires omnichannel presence. We align your Meta/Google top-of-funnel traffic with Q-commerce velocity to dominate market share."
      }
    },
    {
      "@type": "Question",
      "name": "Why do founders fire their performance marketing agencies and hire you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Founders switch to us because traditional agencies ignore high CAC and fake ROAS. We fix the data, integrate server-side tracking, and scale budgets only when the unit economics are profitable."
      }
    }
  ]
};

const PMContent = () => {
  const location = useLocation();
  const { track } = useTracking();

  useEffect(() => {
    window.trackEvent = track;
    window.scrollTo(0, 0);
  }, [location, track]);

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
      <SEOHelmet 
        title="D2C Growth Partners | Not An Agency | Incremental Value"
        description="We don't run silos. Incremental Value acts as your in-house D2C Growth Partner, handling tracking, creatives, and unit economics in 7 days."
        url="https://incrementalvalue.in/pm"
        schemas={[pmSchema, pmFaq]}
      />
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
