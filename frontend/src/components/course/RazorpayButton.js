import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useTracking } from "@/context/TrackingContext";

const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const RazorpayButton = () => {
  const { api, session } = useAuth();
  const { track } = useTracking();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", role: "job" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      // 1. Create Lead & Order
      const res = await api.post("/session/lead", {
        session_id: session?.session_id,
        ...formData,
      });

      if (!res.data.ok || !res.data.order_id) {
        throw new Error("Could not initialize payment");
      }

      // 2. Load Razorpay
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        throw new Error("Failed to load Razorpay SDK. Please check your connection.");
      }

      // 3. Open Razorpay Checkout
      const options = {
        key: res.data.key,
        amount: 199900,
        currency: "INR",
        name: "Emergent Marketing",
        description: "D2C Performance Marketing Cohort",
        order_id: res.data.order_id,
        notes: {
          session_id: session?.session_id,
          name: formData.name
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#2563EB" },
        handler: function (response) {
          toast.success("Payment Successful! You are in.");
          track("cohort_booked", { source: "razorpay_modal" });
          setTimeout(() => {
            window.location.href = "/success";
          }, 1500);
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        toast.error("Payment failed. Please try again.");
      });
      rzp.open();

    } catch (err) {
      toast.error(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-20 sm:py-32 bg-ink border-t border-line overflow-hidden">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Apply For The Cohort
          </h2>
          <p className="text-white/70">
            Strictly limited to 50 seats. Enter your details to secure your spot.
          </p>
        </div>
        
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sm:p-8">
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
              {loading ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : "Pay ₹1,999 To Book The Cohort"}
            </button>
            <p className="text-center text-[10px] text-white/40 mt-2">By clicking, you agree to our Terms. Secure encrypted payment.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
