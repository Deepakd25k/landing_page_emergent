import { useEffect } from "react";
import Lenis from "lenis";
import { TrackingProvider } from "@/context/TrackingContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { PainPoints } from "@/components/PainPoints";
import { PnlReveal } from "@/components/PnlReveal";
import { ResultsShowcase } from "@/components/ResultsShowcase";
import { AuditComparison } from "@/components/AuditComparison";
import { WhatYouGet } from "@/components/WhatYouGet";
import { BonusAutomations } from "@/components/BonusAutomations";
import { WhyNow } from "@/components/WhyNow";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { AboutMe } from "@/components/AboutMe";
import { CalEmbed } from "@/components/CalEmbed";
import { Footer } from "@/components/Footer";
import { MobileStickyButton } from "@/components/MobileStickyButton";

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
      <div className="min-h-screen bg-white text-ink" data-testid="landing-page">
        <Navbar />
        <main>
          <HeroSection />
          <Marquee />
          <PainPoints />
          <PnlReveal />
          <ResultsShowcase />
          <AuditComparison />
          <WhatYouGet />
          <BonusAutomations />
          <WhyNow />
          <HowItWorks />
          <AboutMe />
          <FinalCTA />
          <CalEmbed />
        </main>
        <Footer />
        <MobileStickyButton />
      </div>
    </TrackingProvider>
  );
}
