import { useEffect, useState } from "react";
import Lenis from "lenis";
import { TrackingProvider } from "@/context/TrackingContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RazorpayButton } from "@/components/course/RazorpayButton";
import { MobileStickyButton } from "@/components/MobileStickyButton";

import { CourseHero } from "@/components/course/CourseHero";
import { CourseReality } from "@/components/course/CourseReality";
import { CourseWhyCohort } from "@/components/course/CourseWhyCohort";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { CourseSystem } from "@/components/course/CourseSystem";
import { CourseResults } from "@/components/course/CourseResults";
import { CourseTransformation } from "@/components/course/CourseTransformation";
import { CourseFaq } from "@/components/course/CourseFaq";
import { CourseLeadModal } from "@/components/course/CourseLeadModal";

export default function CourseLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <CourseWhyCohort />
          <CourseSystem />
          <CourseCurriculum />
          <CourseResults />
          <CourseTransformation />
          <CourseFaq />
          <RazorpayButton onOpenModal={() => setIsModalOpen(true)} />
        </main>
        <Footer />
        <MobileStickyButton onOpenModal={() => setIsModalOpen(true)} />
        <CourseLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </TrackingProvider>
  );
}
