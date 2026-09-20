import { siteConfig } from "@/data/content";

export const Marquee = () => {
  const items = [...siteConfig.marquee, ...siteConfig.marquee];
  return (
    <div className="relative bg-night text-white overflow-hidden py-5 border-y border-white/5" data-testid="marquee" aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 text-sm sm:text-base font-semibold uppercase tracking-[0.2em]">
            <span className={i % 3 === 1 ? "text-danger" : i % 3 === 2 ? "text-blue-300" : "text-white/80"}>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue" />
          </span>
        ))}
      </div>
    </div>
  );
};
