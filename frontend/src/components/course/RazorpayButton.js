import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useTracking } from "@/context/TrackingContext";

export const RazorpayButton = () => {
  const { api } = useAuth();
  const { track, sessionId } = useTracking();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "job" });
  const [loading, setLoading] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);

  useEffect(() => {
    // Only mount the script once the lead is captured and formRef exists
    if (leadCaptured && formRef.current && formRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_TgaMXeEjEYnzcd");
      if (sessionId) {
        script.setAttribute("data-notes.session_id", sessionId);
      }
      script.setAttribute("data-prefill.email", formData.email);
      script.setAttribute("data-prefill.contact", formData.phone);
      script.async = true;
      formRef.current.appendChild(script);
    }
  }, [leadCaptured]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/session/lead", {
        session_id: sessionId || null,
        ...formData,
      });

      if (!res.data.ok) {
        throw new Error("Could not initialize your application.");
      }
      
      toast.success("Details saved! Please complete the payment.");
      setLeadCaptured(true);
      
    } catch (err) {
      toast.error(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-20 sm:py-32 bg-ink border-t border-line overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {leadCaptured ? "Complete Your Registration" : "Apply For The Cohort"}
          </h2>
          <p className="text-white/70">
            {leadCaptured 
              ? "Your details are saved. Complete the payment below to get instant access."
              : "Strictly limited to 50 seats. Enter your details to secure your spot."
            }
          </p>
        </div>
        
        {!leadCaptured ? (
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8 text-left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Full Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="Deepak Gupta" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="deepak@example.com" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">WhatsApp No.</label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue outline-none transition-colors" placeholder="+91 9876543210" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-white/50 uppercase tracking-widest mb-1.5">Current Role</label>
                <select value={formData.role} onChange={e => setFormData(f => ({ ...f, role: e.target.value }))} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-blue outline-none transition-colors appearance-none">
                  <option value="job" className="bg-ink text-white">Full-time Job</option>
                  <option value="freelancer" className="bg-ink text-white">Freelancer / Agency</option>
                  <option value="founder" className="bg-ink text-white">Founder</option>
                  <option value="student" className="bg-ink text-white">Student / Looking for job</option>
                </select>
              </div>

              <button disabled={loading} type="submit" className="mt-4 w-full bg-blue hover:bg-blue-hover text-white rounded-xl font-bold text-lg py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : "Submit Application"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 inline-block min-w-[300px]">
            <form ref={formRef}></form>
          </div>
        )}
      </div>
    </section>
  );
};
