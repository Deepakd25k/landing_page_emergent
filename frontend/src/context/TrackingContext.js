import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { siteConfig } from "@/data/content";
import { useCookieCapture } from "@/hooks/useCookieCapture";
import { useSessionInit } from "@/hooks/useSessionInit";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { useScrollTracker } from "@/hooks/useScrollTracker";
import { getCookie } from "@/lib/cookies";
import { uuid } from "@/lib/hash";
import { sendTrack } from "@/lib/tracking";

const TrackingContext = createContext({ sessionId: null, track: () => {}, pixelEnabled: false });

const PRODUCT = { content_name: "D2C Profitability Diagnostic", content_category: "Consulting", value: 1999, currency: "INR" };

export function TrackingProvider({ children }) {
  const attribution = useCookieCapture();
  const { sessionId } = useSessionInit(attribution);
  const pixelId = process.env.REACT_APP_META_PIXEL_ID || siteConfig.metaPixelId;
  const pixel = useMetaPixel(pixelId);
  const firedOnce = useRef(new Set());
  const queue = useRef([]);
  const sessionRef = useRef(null);
  sessionRef.current = sessionId;

  const track = useCallback(
    (eventName, { once = false, section, customData = {}, sendCapi = true, eventId } = {}) => {
      if (once) {
        if (firedOnce.current.has(eventName)) return null;
        firedOnce.current.add(eventName);
      }
      const id = eventId || `${eventName.toLowerCase()}_${uuid()}`;
      const pixelParams = eventName === "PageView" ? {} : { ...PRODUCT, ...customData };
      pixel.fire(eventName, pixelParams, id);
      const payload = {
        event_name: eventName,
        event_id: id,
        section: section || null,
        custom_data: customData,
        source_url: window.location.href,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        send_capi: sendCapi,
      };
      if (!sessionRef.current) {
        queue.current.push(payload);
      } else {
        sendTrack({ session_id: sessionRef.current, ...payload });
      }
      return id;
    },
    [pixel]
  );

  useEffect(() => {
    if (!sessionId) return;
    track("PageView", { once: true });
    const pending = queue.current.splice(0);
    pending.forEach((p) => sendTrack({ session_id: sessionId, ...p }));
  }, [sessionId, track]);

  useScrollTracker({ sessionId, track });

  return (
    <TrackingContext.Provider value={{ sessionId, track, pixelEnabled: pixel.enabled }}>
      {children}
    </TrackingContext.Provider>
  );
}

export const useTracking = () => useContext(TrackingContext);
