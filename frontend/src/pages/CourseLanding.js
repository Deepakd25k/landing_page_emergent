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
import { CourseForWho } from "@/components/course/CourseForWho";
import { CourseTools } from "@/components/course/CourseTools";
import { CourseCurriculum } from "@/components/course/CourseCurriculum";
import { CourseSystem } from "@/components/course/CourseSystem";
import { CourseResults } from "@/components/course/CourseResults";
import { CourseTestimonials } from "@/components/course/CourseTestimonials";
import { CourseTransformation } from "@/components/course/CourseTransformation";
import { CourseFaq } from "@/components/course/CourseFaq";
import { CourseInstructor } from "@/components/course/CourseInstructor";
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

  useEffect(() => {
    // Update Meta Tags dynamically for ads crawler
    document.title = "D2C Growth Cohort V3 | Learn Live — ₹2,999";
    
    const updateMeta = (name, property, content) => {
      let tag = document.querySelector(`meta[${name ? `name="${name}"` : `property="${property}"`}]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement('meta');
        if (name) tag.setAttribute("name", name);
        if (property) tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    };

    updateMeta("description", null, "1-Month Live Weekend Cohort. No outdated recordings, no fake demo accounts. Learn on live ₹3L/day accounts.");
    updateMeta(null, "og:title", "D2C Growth Cohort V3 | Learn Live — ₹2,999");
    updateMeta(null, "og:description", "1-Month Live Weekend Cohort. No outdated recordings, no fake demo accounts. Learn on live ₹3L/day accounts.");
    updateMeta(null, "og:type", "website");
  }, []);

  return (
    <TrackingProvider>
      <div className="min-h-screen bg-white text-ink" data-testid="course-landing-page">
        <Navbar isCourse={true} />
        <main>
          <CourseHero />
          <CourseReality />
          <CourseWhyCohort />
          <CourseForWho />
          <CourseTools />
          <CourseSystem />
          <CourseCurriculum />
          <CourseInstructor />
          <CourseResults />
          <CourseTestimonials />
          <CourseTransformation />
          <CourseFaq />
          <RazorpayButton onOpenModal={() => setIsModalOpen(true)} />
        </main>
        <Footer isCourse={true} />
        <MobileStickyButton isCourse={true} onOpenModal={() => setIsModalOpen(true)} />
        <CourseLeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </TrackingProvider>
  );
}
