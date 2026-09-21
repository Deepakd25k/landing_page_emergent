import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BarChart3, Search, ShoppingCart, MessageCircle, MousePointerClick } from "lucide-react";

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
  { label: "Ad Spend", value: "₹22.7 Lakhs", highlight: false },
  { label: "Avg. ROAS", value: "6.59x", highlight: true },
  { label: "Total Purchases", value: "9,031", highlight: false },
];

export const ResultsShowcase = () => {
  const [activeTab, setActiveTab] = useState("meta");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide for Meta screenshots
  useEffect(() => {
    if (activeTab !== "meta") return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % metaScreenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % metaScreenshots.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + metaScreenshots.length) % metaScreenshots.length);

  return (
    <section className="py-24 bg-ink-bg relative overflow-hidden" id="results">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue/10 text-blue border border-blue/20 mb-6">
            End-To-End Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-tight max-w-4xl mx-auto">
            We Fix End-To-End In D2C: <br />
            <span className="text-blue">Ads &rarr; Unit Economics &rarr; CRO</span>
          </h2>
          <p className="mt-5 text-ink-2 text-lg max-w-2xl mx-auto">
            We don't just audit. We scale. See the raw dashboards of how we drive profitable growth across every channel.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? "bg-blue text-white shadow-lg shadow-blue/30 scale-105" 
                    : "bg-white text-ink-2 hover:bg-ink-bg border border-line hover:border-line-dark hover:text-ink"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-ink-3"}`} />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(5,44,101,0.08)] border border-line">
          <AnimatePresence mode="wait">
            {activeTab === "meta" ? (
              <motion.div
                key="meta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-5 gap-10 items-center"
              >
                {/* Image Carousel (Left 3 cols) */}
                <div className="lg:col-span-3 relative group rounded-xl overflow-hidden border border-line shadow-inner bg-ink-bg">
                  <div className="aspect-[16/9] relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={metaScreenshots[currentImageIndex]}
                        alt={`Meta Ads Dashboard ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover absolute inset-0"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                  </div>
                  
                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={prevImage} className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white hover:scale-110 transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextImage} className="w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white hover:scale-110 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {metaScreenshots.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? "bg-blue w-6" : "bg-white/60 hover:bg-white"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Stats (Right 2 cols) */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-ink mb-2">Meta Ads Performance</h3>
                  <p className="text-ink-2 mb-8">Snapshot from our portfolio showing massive scale with highly optimized ROAS.</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {metaStats.map((stat, i) => (
                      <div key={i} className={`p-4 rounded-xl border ${stat.highlight ? 'bg-blue/5 border-blue/20' : 'bg-ink-bg border-line'}`}>
                        <p className="text-xs sm:text-sm font-semibold text-ink-3 uppercase tracking-wide mb-1">{stat.label}</p>
                        <p className={`text-2xl sm:text-3xl font-bold ${stat.highlight ? 'text-blue' : 'text-ink'}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Coming Soon / Placeholder State for other tabs */
              <motion.div
                key="placeholder"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-ink-bg flex items-center justify-center mb-6">
                  {activeTab === "google" && <Search className="w-8 h-8 text-ink-3" />}
                  {activeTab === "amazon" && <ShoppingCart className="w-8 h-8 text-ink-3" />}
                  {activeTab === "whatsapp" && <MessageCircle className="w-8 h-8 text-ink-3" />}
                  {activeTab === "cro" && <MousePointerClick className="w-8 h-8 text-ink-3" />}
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Proof Uploading...</h3>
                <p className="text-ink-2 max-w-sm">
                  We are gathering the best {activeTab.toUpperCase()} case studies to show here. Save your dashboard screenshots in the <code>public/images</code> folder to display them.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
