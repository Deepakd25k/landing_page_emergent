import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet title="Terms of Service - Incremental Value" description="Terms of Service for Incremental Value" />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-32 font-sans">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">Terms & Conditions</h1>
        <div className="prose prose-slate prose-lg text-slate-600">
          <p className="mb-4">Last updated: October 2026</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. General Agreement</h2>
          <p className="mb-4">By accessing or using incrementalvalue.in, you agree to be bound by these Terms. Our services include Growth Partnerships, Ad Audits, and Educational Cohorts.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Growth Partnership & No Guarantee of Results</h2>
          <p className="mb-4">We apply industry best practices, deep research, and rigorous testing for your performance marketing. However, advertising relies on unpredictable market dynamics, third-party platform algorithms (like Meta and Google), and consumer behavior. <strong>We do not and cannot guarantee specific financial results, ROAS, CPA, or sales volume.</strong> You acknowledge that marketing spend carries inherent business risks.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Ad Audits & Consultations</h2>
          <p className="mb-4">For our audit and diagnostic services, we review your accounts and provide data-backed actionable points and recommendations. The successful implementation and subsequent results of these recommendations depend on your internal team and external factors. We are solely responsible for delivering the strategic insights as promised during the consultation.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Payment & Refund Policy</h2>
          <ul className="mb-4 list-disc pl-5 space-y-2">
            <li><strong>Live Cohort (Course):</strong> You are eligible for a 100% refund if you cancel your enrollment <em>before</em> the cohort officially begins. Once the cohort has started, no refunds will be issued under any circumstances.</li>
            <li><strong>Growth Retainers:</strong> Payments for marketing management are non-refundable once the service period has commenced.</li>
          </ul>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Ad Account & Platform Liability</h2>
          <p className="mb-4">You remain the sole owner of your ad accounts, assets, and websites. We are not liable for any ad account suspensions, platform bans, tracking glitches, or policy violations enforced by third-party platforms (e.g., Meta, Google, Shopify).</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p className="mb-4">The audit frameworks, custom automations, and training materials provided by us remain the intellectual property of Incremental Value. You may not distribute or resell these materials.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Contact</h2>
          <p className="mb-4">If you have any questions regarding these terms, please email us at hello@incrementalvalue.in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
