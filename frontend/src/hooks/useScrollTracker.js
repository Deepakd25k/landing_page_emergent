import { useEffect, useRef } from "react";
import { getCookie } from "@/lib/cookies";
import { updateSession } from "@/lib/tracking";

export function useScrollTracker({ sessionId, track }) {
  const maxDepth = useRef(0);
  const sections = useRef(new Set());
  const startedAt = useRef(Date.now());

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const depth = scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 100;
      if (depth > maxDepth.current) maxDepth.current = Math.min(depth, 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-section]");
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          sections.current.add(el.dataset.section);
          const eventName = el.dataset.trackEvent;
          if (eventName && track) track(eventName, { once: true, section: el.dataset.section });
        });
      },
      { threshold: 0.3 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [track]);

  useEffect(() => {
    if (!sessionId) return;
    const flush = () =>
      updateSession({
        session_id: sessionId,
        scroll_depth: maxDepth.current,
        sections_viewed: Array.from(sections.current),
        time_on_page: Math.round((Date.now() - startedAt.current) / 1000),
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
      });
    const interval = setInterval(flush, 15000);
    const onHide = () => document.visibilityState === "hidden" && flush();
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
    };
  }, [sessionId]);
}
