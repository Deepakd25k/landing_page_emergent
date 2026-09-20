import { useCallback, useEffect, useRef } from "react";

const STANDARD = new Set(["PageView", "ViewContent", "InitiateCheckout", "Purchase", "Schedule", "Lead", "Contact"]);

function loadPixel(pixelId) {
  if (window.fbq) return;
  const f = (window.fbq = function () {
    f.callMethod ? f.callMethod.apply(f, arguments) : f.queue.push(arguments);
  });
  if (!window._fbq) window._fbq = f;
  f.push = f;
  f.loaded = true;
  f.version = "2.0";
  f.queue = [];
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  window.fbq("init", pixelId);
}

export function isValidPixelId(id) {
  return /^\d{6,}$/.test(String(id || ""));
}

export function useMetaPixel(pixelId) {
  const enabled = useRef(isValidPixelId(pixelId));

  useEffect(() => {
    if (enabled.current) loadPixel(pixelId);
  }, [pixelId]);

  const fire = useCallback((eventName, params = {}, eventId) => {
    if (!enabled.current || !window.fbq) return false;
    const method = STANDARD.has(eventName) ? "track" : "trackCustom";
    window.fbq(method, eventName, params, { eventID: eventId });
    return true;
  }, []);

  return { fire, enabled: enabled.current };
}
