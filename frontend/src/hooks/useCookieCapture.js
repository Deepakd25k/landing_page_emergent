import { useMemo } from "react";
import { buildFbc, getCookie, setCookie } from "@/lib/cookies";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const STORAGE_KEY = "d2c_attribution";

function detectDevice() {
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return "mobile";
  if (/Tablet|iPad/i.test(ua)) return "tablet";
  return "desktop";
}

export function useCookieCapture() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");

    const fbclid = params.get("fbclid") || stored.fbclid || null;
    if (params.get("fbclid") && !getCookie("_fbc")) {
      setCookie("_fbc", buildFbc(params.get("fbclid")));
    }

    const utms = {};
    UTM_KEYS.forEach((key) => {
      utms[key] = params.get(key) || stored[key] || null;
    });

    const attribution = {
      fbclid,
      fbc: getCookie("_fbc"),
      fbp: getCookie("_fbp"),
      ...utms,
      referrer: stored.referrer ?? (document.referrer || null),
      landing_url: stored.landing_url || window.location.href,
      device: {
        user_agent: navigator.userAgent,
        screen: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        device_type: detectDevice(),
      },
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...utms, fbclid, referrer: attribution.referrer, landing_url: attribution.landing_url }));
    return attribution;
  }, []);
}
