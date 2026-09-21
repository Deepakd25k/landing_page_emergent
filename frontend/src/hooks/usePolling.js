import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export function usePolling(path, { interval = 10000, enabled = true, params } = {}) {
  const { api } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const paramsRef = useRef(params);
  paramsRef.current = params;

  const refresh = useCallback(async () => {
    try {
      const res = await api.get(path, { params: paramsRef.current });
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    } finally {
      setLoading(false);
    }
  }, [api, path]);

  const paramsStr = JSON.stringify(params);

  useEffect(() => {
    if (!enabled) return;
    refresh();
    const id = setInterval(refresh, interval);
    return () => clearInterval(id);
  }, [refresh, interval, enabled, paramsStr]);

  return { data, error, loading, refresh };
}

export const fmtINR = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;
export const fmtTime = (iso) => (iso ? new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "—");
export const shortId = (id) => (id ? `${String(id).slice(0, 8)}…` : "—");
