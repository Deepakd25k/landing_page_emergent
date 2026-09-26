import { useState, useRef } from "react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useTracking } from "@/context/TrackingContext";

export const PMForm = () => {
  const { api } = useAuth();
  const { sessionId } = useTracking();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", brand_url: "", ad_spend: "", bottleneck: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.brand_url || !formData.bottleneck) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/session/lead", {
        session_id: sessionId || null,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: `URL: ${formData.brand_url} | Spend: ${formData.ad_spend} | Problem: ${formData.bottleneck}`, 
      });

      if (!res.data.ok) {
        throw new Error("Could not submit your application.");
      }
      
      toast.success("Application received. We will contact you shortly.");
      setSubmitted(true);
      
    } catch (err) {
      toast.error(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="apply" className="py-20 sm:py-32 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-10">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white mb-4">
            Apply For Partnership
          </h2>
          <p className="text-white/70 font-medium">
            We are currently onboarding a strict maximum of 3-4 high-end D2C brands. Tell us your bottleneck and let's see if we're a fit.
          </p>
        </div>
        
        {!submitted ? (
          <div className="bg-[#111] border border-white/10 rounded-[2rem] p-6 sm:p-8 text-left shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Full Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="Deepak Gupta" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="founder@brand.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">WhatsApp No.</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="+91 9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Brand Website URL</label>
                <input type="url" required value={formData.brand_url} onChange={e => setFormData(f => ({ ...f, brand_url: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="https://yourbrand.com" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Monthly Ad Spend</label>
                <select required value={formData.ad_spend} onChange={e => setFormData(f => ({ ...f, ad_spend: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors appearance-none">
                  <option value="" disabled className="bg-ink text-white/50">Select your current monthly ad spend</option>
                  <option value="< 5L" className="bg-ink text-white">Under ₹5 Lakhs</option>
                  <option value="5L - 20L" className="bg-ink text-white">₹5 Lakhs - ₹20 Lakhs</option>
                  <option value="20L - 50L" className="bg-ink text-white">₹20 Lakhs - ₹50 Lakhs</option>
                  <option value="50L+" className="bg-ink text-white">₹50 Lakhs+</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">What is your biggest bottleneck?</label>
                <textarea required rows={3} value={formData.bottleneck} onChange={e => setFormData(f => ({ ...f, bottleneck: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue outline-none transition-colors resize-none" placeholder="e.g. CAC is too high, creatives fatigue too fast..."></textarea>
              </div>

              <button disabled={loading} type="submit" className="mt-4 w-full bg-blue hover:bg-blue-hover text-white rounded-xl font-black tracking-tight text-lg py-4 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : "Submit Application"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-12">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-black tracking-tighter text-white mb-2">Application Received</h3>
            <p className="text-white/60 font-medium">Thank you for your interest. We will review your bottleneck and get back to you.</p>
          </div>
        )}
      </div>
    </section>
  );
};
