import { Activity, BadgeCheck } from "lucide-react";
import { footer, siteConfig } from "@/data/content";
import { scrollToHash } from "@/components/shared";

export const Footer = () => (
  <footer className="bg-night text-white/70 py-14" data-testid="footer">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
      <div>
        <div className="flex items-center">
          <span className="tracking-tight text-lg sm:text-xl">
            <span className="font-normal text-white/50">incremental</span><span className="font-extrabold text-white">value</span><span className="font-extrabold text-blue">.in</span>
          </span>
        </div>
        <p className="mt-4 text-sm max-w-sm leading-relaxed">{footer.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {footer.badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15 text-white/80">
              <BadgeCheck className="w-3.5 h-3.5 text-success" /> {b}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Navigate</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          {footer.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); scrollToHash(l.href); }} className="hover:text-white transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Operator</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          <li><span className="font-mono text-xs text-white/40">3-layer tracking: Pixel + CAPI + Mongo</span></li>
        </ul>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 text-xs text-white/40">{footer.legal}</div>
  </footer>
);
