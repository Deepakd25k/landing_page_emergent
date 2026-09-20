export function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=").slice(1).join("=")) : null;
}

export function setCookie(name, value, days = 90) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const host = window.location.hostname;
  const parts = host.split(".");
  const domain = parts.length > 2 ? `.${parts.slice(-2).join(".")}` : host;
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=${domain}; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
  if (!getCookie(name)) {
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  }
}

export function buildFbc(fbclid) {
  return `fb.1.${Date.now()}.${fbclid}`;
}
