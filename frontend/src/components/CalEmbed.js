import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarCheck, AlertCircle } from "lucide-react";
import { booking, siteConfig } from "@/data/content";
import { useTracking } from "@/context/TrackingContext";
import { Reveal, SectionHeader } from "@/components/shared";

const NAMESPACE = "d2c";
const isPlaceholder = /yourusername/i.test(siteConfig.calLink);

export const CalEmbed = () => {
  const { sessionId, track } = useTracking();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2500);
    if (sessionId) setReady(true);
    return () => clearTimeout(timer);
  }, [sessionId]);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE, embedJsUrl: siteConfig.calEmbedJsUrl });
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#0D6EFD" }, dark: { "cal-brand": "#0D6EFD" } },
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });
      cal("on", { action: "linkReady", callback: () => track("CalendarOpen", { once: true, section: "booking", customData: { trigger: "linkReady" } }) });
      cal("on", { action: "eventTypeSelected", callback: () => track("AddPaymentInfo", { once: true, section: "booking_calendar", customData: { source: "time_selected" } }) });
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (e) => {
          const data = e?.detail?.data || {};
          const uid = data.uid || data.booking?.uid;
          track("Schedule", { eventId: uid ? `schedule_${uid}` : undefined, section: "booking", sendCapi: false, customData: { booking_uid: uid, start_time: data.startTime, source: "embed_callback" } });
        },
      });
    })();
  }, [track]);

  return (
    <section id="book" data-section="booking" data-track-event="CalendarOpen" className="bg-white py-10 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact header */}
        <Reveal>
          <div className="text-center mb-6 sm:mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue border border-blue/30 bg-blue/8 px-2.5 py-1 rounded-full">
              09 — {booking.eyebrow}
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-ink tracking-tight">{booking.title}</h2>
            <p className="mt-2 text-sm sm:text-base text-ink-2 max-w-md mx-auto">{booking.subtitle}</p>
          </div>
        </Reveal>

        {isPlaceholder && (
          <Reveal className="mb-4">
            <div className="flex items-start gap-3 rounded-xl bg-danger-bg/60 border border-danger/30 text-danger px-4 py-3 text-xs" data-testid="cal-placeholder-notice">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> {booking.placeholderNotice}
            </div>
          </Reveal>
        )}

        {/* MOBILE: premium compact booking card — no giant calendar */}
        <Reveal delay={0.1} className="sm:hidden">
          <div className="bg-ink text-white rounded-2xl p-6 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(5,44,101,0.25)]">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-blue/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-4">
                <CalendarCheck className="w-3.5 h-3.5 text-blue-300" />
                Only 8 slots/month
              </div>
              <p className="text-3xl font-bold font-mono mb-1">₹1,999</p>
              <p className="text-white/60 text-xs mb-5 line-through">₹4,999</p>
              <ul className="text-sm text-white/80 space-y-1.5 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> 60-min live P&L deep dive
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> 6 deliverables on call
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> 4 AI automations — free
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-300">✓</span> Zero insights? Full refund.
                </li>
              </ul>
              <a
                href={`https://${siteConfig.calOrigin.replace("https://", "")}/${siteConfig.calLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl text-base transition-colors duration-200 shadow-[0_8px_20px_rgba(13,110,253,0.4)]"
                onClick={() => track("CalendarOpen", { section: "booking-mobile", sendCapi: false })}
              >
                Book Your Slot — ₹1,999 →
              </a>
              <p className="text-white/40 text-[10px] mt-3">Secure payment via Razorpay</p>
            </div>
          </div>
        </Reveal>

        {/* DESKTOP: full cal embed */}
        <Reveal delay={0.1} className="hidden sm:block">
          <div className="cal-embed-wrap rounded-3xl border border-line bg-alt shadow-card overflow-hidden min-h-[640px]" data-testid="cal-embed" data-lenis-prevent>
            <div className="flex items-center gap-2 px-5 py-3 bg-white border-b border-line text-xs font-semibold text-ink-3">
              <CalendarCheck className="w-4 h-4 text-blue" /> Secure booking · Razorpay · {siteConfig.calOrigin.replace("https://", "")}
            </div>
            {ready && (
              <Cal
                namespace={NAMESPACE}
                calLink={siteConfig.calLink}
                calOrigin={siteConfig.calOrigin}
                embedJsUrl={siteConfig.calEmbedJsUrl}
                style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "auto" }}
                config={{ layout: "month_view", theme: "light", ...(sessionId ? { "metadata[session_id]": sessionId } : {}) }}
              />
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
};
