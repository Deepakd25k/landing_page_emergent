import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Search, ShoppingCart, MessageCircle, MousePointerClick } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const metaScreenshots = [
  "/images/meta1.png",
  "/images/meta2.png",
  "/images/meta3.png",
  "/images/meta4.png",
];

const allMobileScreenshots = [
  ...metaScreenshots,
  "/images/google1.png",
  "/images/amazon-dashboard.png",
  "/images/whatsapp-dashboard.png",
  "/images/cro1.png"
];

// Mobile scorecard: 1 headline stat per platform
const mobileSummary = [
  { icon: BarChart3,        label: "Meta Ads",    metric: "6.59x ROAS",   sub: "₹1.49 Cr Revenue",  color: "text-blue" },
  { icon: Search,           label: "Google Ads",  metric: "4.20x ROAS",   sub: "₹5.46L Conv. Value", color: "text-blue" },
  { icon: ShoppingCart,     label: "Amazon Ads",  metric: "₹12.72L Rev",  sub: "1,824 Orders", color: "text-blue" },
  { icon: MessageCircle,    label: "WhatsApp",    metric: "₹2.59L Rev",   sub: "Via Journeys", color: "text-blue" },
  { icon: MousePointerClick,label: "CRO",         metric: "16.67%",       sub: "vs 1.5–2.5% avg",   color: "text-blue" },
];

// Desktop tabs
const platforms = [
  { id: "meta",     label: "Meta Ads",    icon: BarChart3 },
  { id: "google",   label: "Google Ads",  icon: Search },
  { id: "amazon",   label: "Amazon Ads",  icon: ShoppingCart },
  { id: "whatsapp", label: "WhatsApp",    icon: MessageCircle },
  { id: "cro",      label: "CRO",         icon: MousePointerClick },
];

const metaStats = [
  { label: "Total Revenue",  value: "₹1.49 Cr", highlight: true },
  { label: "Ad Spend",       value: "₹22.7L",   highlight: false },
  { label: "Avg. ROAS",      value: "6.59x",    highlight: true },
  { label: "Purchases",      value: "9,031",    highlight: false },
];

const googleStats = [
  { label: "Conversions",   value: "393",      highlight: false },
  { label: "Conv. Value",   value: "₹5.46L",   highlight: true },
  { label: "ROAS",          value: "4.20x",    highlight: true },
  { label: "Total Cost",    value: "₹1.3L",    highlight: false },
];

const croStats = [
  { label: "Our Top Conv. Rate",    value: "16.67%",    highlight: true },
  { label: "Industry Avg (India)",  value: "1.5–2.5%",  highlight: false, note: "Source: Cognito IT & PulseCRO 2026" },
  { label: "Mobile Drop-off",       value: "–40%",      highlight: false },
  { label: "Checkout Lift",         value: "+3.2x",     highlight: true },
];

const amazonStats = [
  { label: "Product Sales", value: "₹12.72L", highlight: true },
  { label: "Total Orders",  value: "1,824",   highlight: false },
  { label: "Units Ordered", value: "1,899",   highlight: false },
  { label: "Avg Sales/Order", value: "₹697",  highlight: true },
];

const whatsappStats = [
  { label: "Journey Revenue", value: "₹2.59L", highlight: true },
  { label: "Auto-Recovery",   value: "Active", highlight: false },
  { label: "Open Rate",       value: "60%+",   highlight: false },
  { label: "Drop-off Saved",  value: "High",   highlight: true },
];

export const ResultsShowcase = () => {
  const [activeTab, setActiveTab] = useState("meta");
  const [currentMetaIndex, setCurrentMetaIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  // Auto-slide Meta screenshots (Desktop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetaIndex((prev) => (prev + 1) % metaScreenshots.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide All screenshots (Mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % allMobileScreenshots.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 sm:py-20 bg-ink-bg relative overflow-hidden" id="results">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center mb-6 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue/10 text-blue border border-blue/20 mb-3">
            End-To-End Growth
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-tight">
            We Fix End-To-End In D2C:{" "}
            <span className="text-blue">Ads → Unit Economics → CRO</span>
          </h2>
        </motion.div>

        {/* ── MOBILE: All-in-one view ── */}
        <div className="sm:hidden space-y-3">

          {/* Auto-rotating All proof images */}
          <div className="relative rounded-xl overflow-hidden border border-line bg-white h-[200px] flex items-center justify-center shadow-soft p-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentMobileIndex}
                src={allMobileScreenshots[currentMobileIndex]}
                alt={`Proof screenshot ${currentMobileIndex + 1}`}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            {/* Auto badge */}
            <div className="absolute top-2 left-2 bg-blue text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
              AUTO-PLAY
            </div>
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-white/80 px-2 py-1 rounded-full">
              {allMobileScreenshots.map((_, i) => (
                <div key={i} className={`h-1 rounded-full transition-all ${i === currentMobileIndex ? "bg-blue w-4" : "bg-ink-3/50 w-1"}`} />
              ))}
            </div>
          </div>

          {/* Compact scorecard — all 5 platforms, no click needed */}
          <div className="bg-white rounded-xl border border-line shadow-soft overflow-hidden">
            <div className="px-3 py-2 border-b border-line bg-ink-bg">
              <p className="text-[10px] font-bold uppercase tracking-wider text-ink-3">Platform Results Snapshot</p>
            </div>
            {mobileSummary.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.label}
                  className={`flex items-center gap-3 px-3 py-2.5 ${i < mobileSummary.length - 1 ? "border-b border-line/60" : ""}`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-ink-2 truncate">{p.label}</p>
                    <p className="text-[10px] text-ink-3 truncate">{p.sub}</p>
                  </div>
                  <div className={`text-sm font-bold ${p.color} flex-shrink-0`}>{p.metric}</div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── DESKTOP: Full tab layout ── */}
        <div className="hidden sm:block">

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {platforms.map((p) => {
              const Icon = p.icon;
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-blue text-white shadow-lg shadow-blue/30 scale-105"
                      : "bg-white text-ink-2 border border-line hover:border-line-dark hover:text-ink"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-ink-3"}`} />
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(5,44,101,0.08)] border border-line">
            <AnimatePresence mode="wait">

              {activeTab === "meta" && (
                <motion.div key="meta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-4 h-[340px] flex items-center justify-center p-2">
                    <AnimatePresence mode="wait">
                      <motion.img key={currentMetaIndex} src={metaScreenshots[currentMetaIndex]} alt="Meta Ads" className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} />
                    </AnimatePresence>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-white/80 px-2 py-1 rounded-full">
                      {metaScreenshots.map((_, i) => (
                        <button key={i} onClick={() => setCurrentMetaIndex(i)} className={`h-1.5 rounded-full transition-all ${i === currentMetaIndex ? "bg-blue w-5" : "bg-ink-3/50 w-1.5"}`} />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {metaStats.map((s, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${s.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                        <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.highlight ? "text-blue" : "text-ink"}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "google" && (
                <motion.div key="google" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-4 h-[340px] flex items-center justify-center">
                    <img src="/images/google1.png" alt="Google Ads" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {googleStats.map((s, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${s.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                        <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.highlight ? "text-blue" : "text-ink"}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "cro" && (
                <motion.div key="cro" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-4 h-[340px] flex items-center justify-center">
                    <img src="/images/cro1.png" alt="CRO" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {croStats.map((s, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${s.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                        <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.highlight ? "text-blue" : "text-ink"}`}>{s.value}</p>
                        {s.note && <p className="text-[10px] text-ink-3 mt-1">{s.note}</p>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "amazon" && (
                <motion.div key="amazon" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-4 h-[340px] flex items-center justify-center p-2">
                    <img src="/images/amazon-dashboard.png" alt="Amazon Ads Sales Dashboard" className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-line" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {amazonStats.map((s, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${s.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                        <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.highlight ? "text-blue" : "text-ink"}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "whatsapp" && (
                <motion.div key="whatsapp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-4 h-[340px] flex items-center justify-center p-2">
                    <img src="/images/whatsapp-dashboard.png" alt="WhatsApp Journeys Dashboard" className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-line" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {whatsappStats.map((s, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${s.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                        <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.highlight ? "text-blue" : "text-ink"}`}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
