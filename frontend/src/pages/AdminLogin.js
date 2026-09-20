import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Lock, Mail, ArrowRight } from "lucide-react";
import { useAuth, formatApiErrorDetail } from "@/context/AuthContext";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/admin" replace />;

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(formatApiErrorDetail(err.response?.data?.detail) || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-night text-white grid lg:grid-cols-2 relative overflow-hidden noise">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue/25 blur-[140px]" />
      <div className="hidden lg:flex flex-col justify-between p-14 relative">
        <Link to="/" className="flex items-center gap-2.5" data-testid="login-logo-link">
          <span className="w-9 h-9 rounded-xl bg-blue grid place-items-center"><Activity className="w-5 h-5" /></span>
          <span className="font-extrabold tracking-tight text-lg">D2C Diagnostic · Ops</span>
        </Link>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">Command center</p>
          <h1 className="mt-4 text-4xl xl:text-5xl font-extrabold tracking-tight leading-[1.05]">Every visitor. Every event. Every rupee.</h1>
          <p className="mt-5 text-white/60 max-w-md leading-relaxed">Live funnel, bookings, CAPI delivery status and full user-journey replay — straight from your MongoDB audit trail.</p>
        </div>
        <p className="text-xs text-white/30 font-mono">Pixel → CAPI → MongoDB</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10 relative">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md bg-white text-ink rounded-3xl p-8 sm:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
          data-testid="admin-login-form"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">Admin login</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Welcome back.</h2>

          <label className="block mt-8 text-sm font-semibold text-ink-2">Email</label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-line px-3.5 focus-within:border-blue focus-within:ring-4 focus-within:ring-blue/10 transition">
            <Mail className="w-4 h-4 text-ink-3" />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full py-3 outline-none bg-transparent text-sm" placeholder="admin@…" data-testid="login-email-input" />
          </div>

          <label className="block mt-5 text-sm font-semibold text-ink-2">Password</label>
          <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-line px-3.5 focus-within:border-blue focus-within:ring-4 focus-within:ring-blue/10 transition">
            <Lock className="w-4 h-4 text-ink-3" />
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full py-3 outline-none bg-transparent text-sm" placeholder="••••••••" data-testid="login-password-input" />
          </div>

          {error && <p className="mt-4 text-sm text-danger bg-danger-bg rounded-lg px-3 py-2" data-testid="login-error">{error}</p>}

          <button type="submit" disabled={loading} className="cta-shine mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue hover:bg-blue-dark text-white font-semibold py-3.5 transition-colors disabled:opacity-60" data-testid="login-submit-button">
            {loading ? "Signing in…" : "Sign in"} <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-5 text-xs text-ink-3 text-center">Credentials live in <span className="font-mono">backend/.env</span> (ADMIN_EMAIL / ADMIN_PASSWORD).</p>
        </motion.form>
      </div>
    </div>
  );
}
