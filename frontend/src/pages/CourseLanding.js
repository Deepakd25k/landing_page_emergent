import { useEffect } from "react";
import Lenis from "lenis";
import { TrackingProvider } from "@/context/TrackingContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CalEmbed } from "@/components/CalEmbed";
import { MobileStickyButton } from "@/components/MobileStickyButton";

import { CourseHero } from "@/components/course/CourseHero";
import { CourseReality } from "@/components/course/CourseReality";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { PnlReveal } from "@/components/PnlReveal";

export default function CourseLanding() {
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
      <div className="min-h-screen bg-white text-ink" data-testid="course-landing-page">
        <Navbar />
        <main>
          <CourseHero />
          <CourseReality />
          <CourseCurriculum />
          {/* Reusing the highly effective PnL reveal to demonstrate what they will learn */}
          <PnlReveal />
          <CalEmbed />
        </main>
        <Footer />
        <MobileStickyButton />
      </div>
    </TrackingProvider>
  );
}
