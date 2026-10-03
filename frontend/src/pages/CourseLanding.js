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

import { SEOHelmet } from "@/components/SEOHelmet";

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "D2C Growth Cohort | End-to-End Performance Marketing Live",
  "description": "Learn the complete D2C tech stack—Live Ad Accounts, CAPI, n8n Automations, and Unit Economics. Become the Growth Partner founders need.",
  "provider": {
    "@type": "Organization",
    "name": "Incremental Value",
    "sameAs": "https://incrementalvalue.in"
  },
  "offers": {
    "@type": "Offer",
    "price": "2999",
    "priceCurrency": "INR",
    "category": "Paid"
  }
};

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
      <SEOHelmet 
        title="D2C Growth Cohort | End-to-End Performance Marketing Live"
        description="Stop just running ads. Learn the complete D2C tech stack—Live Ad Accounts, CAPI, n8n Automations, and Unit Economics. Next cohort filling fast."
        url="https://incrementalvalue.in/course"
        schemas={[courseSchema]}
      />
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
