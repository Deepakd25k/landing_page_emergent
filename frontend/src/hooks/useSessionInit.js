import { useEffect, useState } from "react";
import { initSession } from "@/lib/tracking";

const SESSION_KEY = "d2c_session_id";

export function useSessionInit(attribution) {
  const [sessionId, setSessionId] = useState(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const existing = sessionStorage.getItem(SESSION_KEY);
    initSession({ existing_session_id: existing, ...attribution })
      .then((data) => {
        if (cancelled) return;
        sessionStorage.setItem(SESSION_KEY, data.session_id);
        setSessionId(data.session_id);
        setIsNew(data.is_new);
      })
      .catch((err) => console.warn("[session]", err.message));
    return () => {
      cancelled = true;
    };
  }, [attribution]);

  return { sessionId, isNew };
}
