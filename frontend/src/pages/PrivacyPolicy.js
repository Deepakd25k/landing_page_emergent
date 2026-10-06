import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet title="Privacy Policy - Incremental Value" description="Privacy Policy for Incremental Value" />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-32 font-sans">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg text-slate-600">
          <p className="mb-4">Last updated: October 2026</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you use our website, book a diagnostic call, or sign up for our services. This may include your name, email address, phone number, company details, and advertising account data.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to process your requests, and to communicate with you about your account and our services. We also use data to audit ad accounts and provide performance marketing insights.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Sharing and Third Parties</h2>
          <p className="mb-4">We do not sell your personal information. We may share your data with trusted third-party service providers (such as Meta, Google, and payment processors) strictly for the purpose of operating our business and providing you with our services. Our systems (like CAPI and n8n automations) process hashed customer data securely.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. You retain ownership of your ad accounts and customer data; we only require admin/analyst access to perform our services.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Your Rights</h2>
          <p className="mb-4">You have the right to access, correct, or delete your personal information. You can also revoke our access to your ad platforms and data pipelines at any time.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at hello@incrementalvalue.in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
