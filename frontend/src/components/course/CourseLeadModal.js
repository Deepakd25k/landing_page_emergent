import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { useTracking } from "@/context/TrackingContext";

export const CourseLeadModal = ({ isOpen, onClose }) => {
  const { api } = useAuth();
  const { track, sessionId } = useTracking();
  
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      track("OpenedModal", { once: true });
    }
  }, [isOpen, track]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      // 1. Save Lead to Backend
      const res = await api.post("/session/lead", {
        session_id: sessionId || null,
        ...formData,
      });

      if (!res.data.ok) {
        throw new Error("Could not initialize your application.");
      }
      
      // 2. Fire CAPI Events exactly as requested
      track("d2c_cohort_lead", { customData: { email: formData.email, phone: formData.phone } });
      track("d2c_cohort_payment", { customData: { email: formData.email, phone: formData.phone } });
      
      // 3. Immediate Redirect to Razorpay Payment Link
      window.location.href = "https://rzp.io/rzp/DAFsbLGS";
      
    } catch (err) {
      toast.error(err.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-blue/5 border-b border-blue/10 px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-ink tracking-tight">Secure Your Spot</h3>
                  <p className="text-xs text-ink-2 font-medium">Limited to 50 Seats</p>
                </div>
                <button onClick={onClose} className="w-8 h-8 rounded-full bg-white border border-line flex items-center justify-center text-ink-3 hover:text-ink hover:bg-slate-50 transition-colors">
                  <span className="material-icons-round text-sm">close</span>
                </button>
              </div>

              {/* Form */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-ink-3 uppercase tracking-widest mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} 
                      className="w-full bg-[#F8F9FA] border border-line rounded-lg px-4 py-3 text-ink focus:border-blue focus:bg-white outline-none transition-colors" 
                      placeholder="Deepak Gupta" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-ink-3 uppercase tracking-widest mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} 
                      className="w-full bg-[#F8F9FA] border border-line rounded-lg px-4 py-3 text-ink focus:border-blue focus:bg-white outline-none transition-colors" 
                      placeholder="deepak@example.com" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[11px] font-bold text-ink-3 uppercase tracking-widest mb-1.5">WhatsApp No.</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone} 
                      onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} 
                      className="w-full bg-[#F8F9FA] border border-line rounded-lg px-4 py-3 text-ink focus:border-blue focus:bg-white outline-none transition-colors" 
                      placeholder="+91 9876543210" 
                    />
                  </div>

                  <button 
                    disabled={loading} 
                    type="submit" 
                    className="mt-4 w-full bg-blue hover:bg-blue-dark text-white rounded-xl font-bold text-lg py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span className="material-icons-round text-base">lock</span>
                        Continue To Payment
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-ink-3 font-semibold mt-1 flex items-center justify-center gap-1">
                    <span className="material-icons-round text-[12px] text-green-500">verified</span>
                    Secured by Razorpay 256-bit Encryption
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
