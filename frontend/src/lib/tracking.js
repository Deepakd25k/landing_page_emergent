const API = process.env.REACT_APP_BACKEND_URL ? `${process.env.REACT_APP_BACKEND_URL}/api` : "/api";

async function post(path, body, { keepalive = false } = {}) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive,
  });
  if (!res.ok) throw new Error(`${path} failed: ${res.status}`);
  return res.json();
}

export function initSession(payload) {
  return post("/session/init", payload);
}

export function sendTrack(payload) {
  return post("/track", payload).catch((err) => console.warn("[track]", err.message));
}

export function updateSession(payload) {
  return post("/session/update", payload, { keepalive: true }).catch(() => {});
}
