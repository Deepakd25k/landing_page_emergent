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
    <section id="book" data-section="booking" data-track-event="CalendarOpen" className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="09" eyebrow={booking.eyebrow} title={booking.title} align="center">
          <p className="mt-4 text-base sm:text-lg text-ink-2">{booking.subtitle}</p>
        </SectionHeader>

        {isPlaceholder && (
          <Reveal className="mb-6">
            <div className="flex items-start gap-3 rounded-xl bg-danger-bg/60 border border-danger/30 text-danger px-5 py-4 text-sm" data-testid="cal-placeholder-notice">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" /> {booking.placeholderNotice}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
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
