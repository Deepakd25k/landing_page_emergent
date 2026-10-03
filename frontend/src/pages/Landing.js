import { useEffect } from "react";
import Lenis from "lenis";
import { TrackingProvider } from "@/context/TrackingContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { FestiveTimeline } from "@/components/FestiveTimeline";
import { PainPoints } from "@/components/PainPoints";
import { PnlReveal } from "@/components/PnlReveal";
import { AttributionWar } from "@/components/AttributionWar";
import { FunnelChain } from "@/components/FunnelChain";
import { ResultsShowcase } from "@/components/ResultsShowcase";
import { AuditComparison } from "@/components/AuditComparison";
import { AdvisoryPillars } from "@/components/AdvisoryPillars";
import { WhatYouGet } from "@/components/WhatYouGet";
import { BonusAutomations } from "@/components/BonusAutomations";
import { WhyNow } from "@/components/WhyNow";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { CalEmbed } from "@/components/CalEmbed";
import { Footer } from "@/components/Footer";
import { MobileStickyButton } from "@/components/MobileStickyButton";

import { SEOHelmet } from "@/components/SEOHelmet";

const diagnosticSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "D2C Profitability Diagnostic",
  "provider": {
    "@type": "Organization",
    "name": "Incremental Value"
  },
  "description": "Book a 60-minute live diagnostic to find hidden RTO leakage, P&L gaps, and exact unit economics metrics.",
  "offers": {
    "@type": "Offer",
    "price": "1999",
    "priceCurrency": "INR"
  }
};

const diagnosticFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What does Incremental Value do?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We audit D2C brands to find profit leaks, RTO issues, and fix unit economics to enable profitable scaling."
    }
  }]
};

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.95 });
    window.__lenis = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <TrackingProvider>
      <SEOHelmet 
        title="Incremental Value | D2C Profitability Diagnostic"
        description="Book a 60-minute live diagnostic to find hidden RTO leakage, P&L gaps, and exact unit economics metrics."
        url="https://incrementalvalue.in/"
        schemas={[diagnosticSchema, diagnosticFaq]}
      />
      <div className="min-h-screen bg-white text-ink" data-testid="landing-page">
        <Navbar />
        <main>
          <HeroSection />
          <Marquee />
          <FestiveTimeline />
          <PainPoints />
          <FunnelChain />
          <PnlReveal />
          <AttributionWar />
          <ResultsShowcase />
          <AuditComparison />
          <AdvisoryPillars />
          <WhatYouGet />
          <BonusAutomations />
          <WhyNow />
          <HowItWorks />
          <FinalCTA />
          <CalEmbed />
        </main>
        <Footer />
        <MobileStickyButton />
      </div>
    </TrackingProvider>
  );
}
