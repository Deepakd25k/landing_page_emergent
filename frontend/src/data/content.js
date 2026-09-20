// ─────────────────────────────────────────────────────────────
//  THE ONLY FILE YOU NEED TO EDIT FOR TEXT / NUMBERS / LINKS
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  brandName: "D2C Diagnostic",
  calLink: "yourusername/d2c-diagnostic",
  calOrigin: "https://cal.id",
  calEmbedJsUrl: "https://cal.id/embed/embed.js",
  price: "1,999",
  originalPrice: "4,999",
  totalValue: "23,000+",
  bonusTotalValue: "18,000",
  slotsPerMonth: 8,
  metaPixelId: "YOUR_PIXEL_ID",
  nav: [
    { label: "The Leak", href: "#pain" },
    { label: "What You Get", href: "#pricing" },
    { label: "Case Studies", href: "#cases" },
    { label: "How It Works", href: "#how" },
  ],
  marquee: [
    "RTO Leakage", "PG Fees", "Inflated ROAS", "Negative CM2", "iOS Signal Loss",
    "COD Returns", "Hidden Packaging Cost", "Fake Scaling", "Server-Side Tracking", "Per-Order P&L",
  ],
};

export const hero = {
  eyebrow: "60-Minute D2C Profitability Diagnostic",
  headline: "Your D2C Brand Is Losing Money On Every Order.",
  headlineAccent: "Your Agency Is Just Showing You ROAS.",
  subheadline:
    "A 60-minute diagnostic that opens your real numbers — unit economics, RTO leakage, PG charges, and hidden costs no agency ever shows.",
  cta: "Book Your Diagnostic — ₹1,999",
  ctaSub: "Full refund if you walk away with zero actionable insights.",
  trustBar: [
    { metric: "50+", label: "D2C Brands Diagnosed" },
    { metric: "₹2.3Cr+", label: "Hidden Leakages Found" },
    { metric: "18%", label: "Avg Margin Improvement" },
  ],
  pnlCard: {
    title: "Per-Order P&L — Fashion D2C",
    rows: [
      { label: "AOV", value: "₹1,499", tone: "neutral" },
      { label: "COGS", value: "−₹520", tone: "neg" },
      { label: "Blended CAC", value: "−₹640", tone: "neg" },
      { label: "Shipping + RTO (28%)", value: "−₹212", tone: "neg" },
      { label: "PG fee 2.4% + COD", value: "−₹86", tone: "neg" },
      { label: "Packaging + Ops", value: "−₹64", tone: "neg" },
    ],
    footerLabel: "Contribution Margin (CM2)",
    footerValue: "−₹23 / order",
    agencyLabel: "Agency dashboard says",
    agencyValue: "ROAS 4.1x",
  },
};

export const painPoints = {
  title: "This Is Happening To Your Brand Right Now.",
  cards: [
    { agencySays: '"ROAS is 4x sir!"', reality: "Platform ROAS is 20-40% inflated after iOS signal loss. Your real ROAS is 2.1-2.8x." },
    { agencySays: '"CPM is normal range."', reality: "Meta CPM is ₹90-₹320 in 2026. Up 40-60% since 2023. Rising every quarter." },
    { agencySays: '"CAC is ₹400, very good."', reality: "Add RTO, returns, PG fees, packaging. Real CAC is ₹650-₹900. Acquiring at a loss." },
    { agencySays: '"We are scaling well."', reality: "Your CM2 is negative. Scaling means losing faster. Every ₹1L extra = ₹15-25K extra loss." },
  ],
  closer: "If you don't have a per-order P&L — you're driving blind at full speed.",
};

export const comparison = {
  title: "Normal Ads Audit vs. Profitability Diagnostic",
  leftHeading: "Normal Ads Audit",
  rightHeading: "Profitability Diagnostic",
  rows: [
    { normal: "Looks at platform ROAS", ours: "Builds your per-order P&L with every hidden cost" },
    { normal: "Says change creatives", ours: "Gives you an AI Creative Testing Matrix — ready to run" },
    { normal: "Suggests audience tips", ours: "Audits your Server-Side Tracking + CAPI setup" },
    { normal: "Says increase budget", ours: "Calculates CM1 and CM2 — tells you when scaling is safe" },
    { normal: "Ignores RTO", ours: "Maps RTO by PIN code + COD-to-Prepaid shift plan" },
    { normal: "Ignores payment gateway", ours: "Optimizes PG fees — UPI routing, multi-gateway, saves ₹30-80/order" },
    { normal: "No clue about data infra", ours: "Plans GTM Server-Side + PIN code demographic mapping" },
  ],
  closer: "We are a marketer + developer. We see what pure marketers can't.",
};

export const deliverables = {
  title: "60 Minutes. One Call. Full Business X-Ray.",
  items: [
    { name: "Per-Order P&L Breakdown", desc: "Every cost: COGS, packaging, PG fees, COD charges, shipping, RTO, discounts.", value: "5,000" },
    { name: "Unit Economics Health Score", desc: "CM1, CM2, LTV:CAC ratio, Repeat Purchase Rate — benchmarked for your category.", value: "3,000" },
    { name: "RTO Leakage Report", desc: "Category RTO benchmarks. PIN code risk map. Prepaid shift strategy.", value: "3,000" },
    { name: "Meta Ads Reality Check", desc: "Blended MER vs Platform ROAS gap. 2026 CPM benchmarks. CAPI audit.", value: "4,000" },
    { name: "PG and Vendor Optimization", desc: "Multi-gateway routing. UPI incentive structure. Settlement reconciliation.", value: "3,000" },
    { name: "90-Day Profitability Roadmap", desc: "Prioritized actions: Week 1-4, 5-8, 9-12. What to fix first.", value: "5,000" },
  ],
  stackLabel: "Total value",
  payLabel: "You pay today",
  cta: "Book Your Diagnostic — ₹1,999",
};

export const bonuses = {
  title: "4 AI-Powered Automations. Ready To Use. Free.",
  subtitle: "Built in n8n. Handed over on the call. Yours forever.",
  items: [
    { name: "Creative Testing Matrix Generator", desc: "Drop product URL. AI builds persona, angles, QA. Output: ready-to-test XLSX.", value: "5,000" },
    { name: "Competitor Price & Launch Monitor", desc: "Daily competitor tracking. New launch detection. AI pricing alerts.", value: "4,000" },
    { name: "Daily D2C Ops Intelligence Report", desc: "Shopify + ad data. AI executive brief. Anomaly detection. Morning delivery.", value: "4,000" },
    { name: "RTO Risk Scorer + Auto-Verification", desc: "PIN code + history check. High-risk auto WhatsApp OTP. 35-50% RTO cut.", value: "5,000" },
  ],
  totalValue: "18,000",
};

export const caseStudies = {
  title: "Real Brands. Real Numbers. No Fluff.",
  metricLabels: { cac: "Blended CAC", rto: "RTO Rate", cm2: "CM2", profit: "Monthly Profit" },
  studies: [
    {
      category: "Fashion D2C",
      problem: "Scaling ads but profit dropping every month",
      metrics: {
        before: { cac: "₹920", rto: "32%", cm2: "-8%", profit: "₹1.2L" },
        after: { cac: "₹540", rto: "14%", cm2: "+11%", profit: "₹4.8L" },
      },
      actions: [
        "Shifted 40% COD to prepaid via WhatsApp OTP flow",
        "Implemented server-side tracking, recovered 28% lost conversions",
        "Renegotiated PG rates from 2.4% to 1.6%, saving ₹47K/month",
      ],
    },
    {
      category: "Beauty & Skincare",
      problem: "ROAS looked great but bank balance said otherwise",
      metrics: {
        before: { cac: "₹780", rto: "24%", cm2: "-5%", profit: "₹2.1L" },
        after: { cac: "₹410", rto: "11%", cm2: "+14%", profit: "₹6.3L" },
      },
      actions: [
        "Built per-order P&L — found ₹180/order hidden cost leak",
        "PIN code level RTO blocking reduced returns by 54%",
        "Creative Testing Matrix increased winning ad ratio from 1/12 to 1/4",
      ],
    },
  ],
};

export const whyNow = {
  title: "Meta Gets Expensive Every Year. Your Margin Gets Thinner.",
  stats: [
    { stat: "40-60%", label: "Meta CPM increase since 2023" },
    { stat: "20-40%", label: "Platform ROAS inflation — your profit is a lie" },
    { stat: "35-58%", label: "COD return rate during festive peaks" },
    { stat: "₹50Cr+", label: "D2C brands still unprofitable at scale" },
    { stat: "22-34%", label: "Better match rates with first-party data" },
  ],
  closer: "Brands that don't fix unit economics now won't survive 2027. Not a prediction. Math.",
};

export const about = {
  title: "4 Years Performance Marketing × 5 Years Dev = A Rare Combination.",
  lines: [
    { prefix: "I don't give you an Excel audit.", suffix: "I build your per-order P&L." },
    { prefix: "I don't say change creatives.", suffix: "I give you an automation that tests them." },
    { prefix: "I don't show ROAS 4x.", suffix: "I set up server-side tracking for real conversions." },
  ],
  closer: "Most marketers can't code. Most developers don't get marketing. I do both.",
  videoUrl: "",
};

export const howItWorks = {
  title: "3 Simple Steps.",
  steps: [
    { number: "01", title: "Book & Pay", desc: "Pick your slot. Pay ₹1,999 via UPI, card, or net banking." },
    { number: "02", title: "Pre-Diagnostic Form", desc: "10-minute form. Ad accounts, revenue, costs. So we don't waste call time." },
    { number: "03", title: "60-Min Deep Dive", desc: "Live P&L breakdown. 90-day roadmap. 4 bonus automations. All yours." },
  ],
};

export const finalCta = {
  line1: "You're losing ₹15,000-₹50,000 every month silently.",
  line2: "RTO. PG fees. Wrong scaling. Bad data.",
  line3: "₹1,999 for one call. Zero actionable insights? Full refund. No questions.",
  cta: "Book Your Profitability Diagnostic — ₹1,999",
  scarcity: "Only 8 slots/month. Each diagnostic takes 3-4 hours of real work.",
};

export const booking = {
  eyebrow: "Step 1 of 3",
  title: "Pick Your Slot. Pay ₹1,999. Done.",
  subtitle: "UPI, cards and net banking via Razorpay. You'll get a calendar invite + the pre-diagnostic form instantly.",
  placeholderNotice: "Cal.id link not configured yet — set siteConfig.calLink in src/data/content.js.",
};

export const footer = {
  tagline: "Per-order P&L clarity for Indian D2C brands.",
  badges: ["Razorpay Secured", "Meta CAPI Tracked", "MongoDB Audit Trail"],
  links: [
    { label: "Book a Diagnostic", href: "#book" },
    { label: "Case Studies", href: "#cases" },
    { label: "How It Works", href: "#how" },
  ],
  legal: "© 2026 D2C Diagnostic. All numbers illustrative until you fill content.js with your real data.",
};
