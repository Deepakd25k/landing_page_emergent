import { useEffect, useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/content";
import { CTAButton } from "@/components/CTAButton";
import { scrollToHash } from "@/components/shared";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-line shadow-soft" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" onClick={go("#top")} className="flex items-center gap-2.5 group" data-testid="nav-logo">
          <span className="w-9 h-9 rounded-xl bg-blue text-white grid place-items-center shadow-[0_8px_20px_rgba(13,110,253,0.35)] group-hover:rotate-6 transition-transform duration-300">
            <Activity className="w-5 h-5" />
          </span>
          <span className="font-extrabold tracking-tight text-lg text-ink">{siteConfig.brandName}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              data-testid={`nav-link-${item.href.replace("#", "")}`}
              className="text-sm font-medium text-ink-2 hover:text-blue transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CTAButton label={`Book — ₹${siteConfig.price}`} location="navbar" size="sm" testId="nav-cta-button" />
        </div>

        <button className="md:hidden p-2 rounded-lg text-ink" onClick={() => setOpen(!open)} data-testid="nav-mobile-toggle" aria-label="Menu" aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-line px-4 pb-6 pt-2 flex flex-col gap-4"
            data-testid="nav-mobile-menu"
            id="mobile-navigation"
          >
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={go(item.href)} className="text-base font-semibold text-ink py-1" data-testid={`nav-mobile-link-${item.href.replace("#", "")}`}>
                {item.label}
              </a>
            ))}
            <CTAButton label={`Book — ₹${siteConfig.price}`} location="navbar-mobile" size="sm" className="w-full" testId="nav-mobile-cta-button" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
