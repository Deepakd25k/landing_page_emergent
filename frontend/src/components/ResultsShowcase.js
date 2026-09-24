import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Search, ShoppingCart, MessageCircle, MousePointerClick } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const platforms = [
  { id: "meta", label: "Meta Ads", icon: BarChart3 },
  { id: "google", label: "Google Ads", icon: Search },
  { id: "amazon", label: "Amazon Ads", icon: ShoppingCart },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "cro", label: "CRO", icon: MousePointerClick },
];

const metaScreenshots = [
  "/images/meta1.png",
  "/images/meta2.png",
  "/images/meta3.png",
  "/images/meta4.png",
];

const metaStats = [
  { label: "Total Revenue", value: "₹1.49 Cr", highlight: true },
  { label: "Ad Spend", value: "₹22.7L", highlight: false },
  { label: "Avg. ROAS", value: "6.59x", highlight: true },
  { label: "Purchases", value: "9,031", highlight: false },
];

const googleStats = [
  { label: "Conversions", value: "393", highlight: false },
  { label: "Conv. Value", value: "₹5.46L", highlight: true },
  { label: "ROAS", value: "4.20x", highlight: true },
  { label: "Total Cost", value: "₹1.3L", highlight: false },
];

const croStats = [
  { label: "Our Top Conv. Rate", value: "16.67%", highlight: true },
  { label: "Industry Avg (India)", value: "1.5–2.5%", highlight: false, note: "Source: Cognito IT & PulseCRO 2026" },
  { label: "Mobile Drop-off", value: "–40%", highlight: false },
  { label: "Checkout Lift", value: "+3.2x", highlight: true },
];

export const ResultsShowcase = () => {
  const [activeTab, setActiveTab] = useState("meta");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const tabsRef = useRef(null);

  // Auto-slide for Meta screenshots
  useEffect(() => {
    if (activeTab !== "meta") return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % metaScreenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="py-12 sm:py-20 bg-ink-bg relative overflow-hidden" id="results">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — tighter on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue/10 text-blue border border-blue/20 mb-3">
            End-To-End Growth
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight max-w-4xl mx-auto">
            We Fix End-To-End In D2C:{" "}
            <span className="text-blue">Ads → Unit Economics → CRO</span>
          </h2>
          <p className="mt-3 text-ink-2 text-sm sm:text-base max-w-xl mx-auto">
            Raw dashboards. Real results. Zero vanity metrics.
          </p>
        </motion.div>

        {/* Tabs — horizontal scroll on mobile, no wrapping */}
        <div
          ref={tabsRef}
          className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {platforms.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex-shrink-0 snap-start flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue text-white shadow-lg shadow-blue/30 scale-105"
                    : "bg-white text-ink-2 hover:bg-ink-bg border border-line hover:border-line-dark hover:text-ink"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-ink-3"}`} />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(5,44,101,0.08)] border border-line">
          <AnimatePresence mode="wait">

            {/* META TAB */}
            {activeTab === "meta" && (
              <motion.div
                key="meta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image — fixed height so it never overflows screen */}
                <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-3 h-[220px] sm:h-[340px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={metaScreenshots[currentImageIndex]}
                      alt={`Meta Ads Dashboard ${currentImageIndex + 1}`}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {metaScreenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? "bg-blue w-5" : "bg-ink-3 w-1.5 hover:bg-ink"}`}
                      />
                    ))}
                  </div>
                </div>
                {/* Stats grid — 2x2 */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {metaStats.map((stat, i) => (
                    <div key={i} className={`p-3 sm:p-4 rounded-xl border ${stat.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                      <p className="text-[10px] sm:text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{stat.label}</p>
                      <p className={`text-xl sm:text-2xl font-bold ${stat.highlight ? "text-blue" : "text-ink"}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* GOOGLE TAB */}
            {activeTab === "google" && (
              <motion.div
                key="google"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-3 h-[220px] sm:h-[340px] flex items-center justify-center">
                  <img
                    src="/images/google1.png"
                    alt="Google Ads Dashboard"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {googleStats.map((stat, i) => (
                    <div key={i} className={`p-3 sm:p-4 rounded-xl border ${stat.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                      <p className="text-[10px] sm:text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{stat.label}</p>
                      <p className={`text-xl sm:text-2xl font-bold ${stat.highlight ? "text-blue" : "text-ink"}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CRO TAB */}
            {activeTab === "cro" && (
              <motion.div
                key="cro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-xl overflow-hidden border border-line bg-ink-bg mb-3 h-[220px] sm:h-[340px] flex items-center justify-center">
                  <img
                    src="/images/cro1.png"
                    alt="CRO Conversion Rates"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {croStats.map((stat, i) => (
                    <div key={i} className={`p-3 sm:p-4 rounded-xl border ${stat.highlight ? "bg-blue/5 border-blue/20" : "bg-ink-bg border-line"}`}>
                      <p className="text-[10px] sm:text-xs font-semibold text-ink-3 uppercase tracking-wide mb-1">{stat.label}</p>
                      <p className={`text-xl sm:text-2xl font-bold ${stat.highlight ? "text-blue" : "text-ink"}`}>{stat.value}</p>
                      {stat.note && <p className="text-[9px] sm:text-[10px] text-ink-3 mt-1 leading-tight">{stat.note}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PLACEHOLDERS */}
            {["amazon", "whatsapp"].includes(activeTab) && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-14 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ink-bg flex items-center justify-center mb-4">
                  {activeTab === "amazon" && <ShoppingCart className="w-7 h-7 text-ink-3" />}
                  {activeTab === "whatsapp" && <MessageCircle className="w-7 h-7 text-ink-3" />}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">Proof Uploading...</h3>
                <p className="text-ink-2 text-sm max-w-xs">
                  Save your {activeTab.toUpperCase()} dashboard screenshots in{" "}
                  <code className="font-mono text-ink">public/images</code> to display them.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
