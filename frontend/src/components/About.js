import { Code2, Megaphone } from "lucide-react";
import { about } from "@/data/content";
import { Reveal, SectionHeader } from "@/components/shared";

export const About = () => (
  <section id="about" data-section="about" className="bg-white py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
      <div>
        <SectionHeader number="07" eyebrow="Who's On The Call" title={about.title} />
        <div className="space-y-6">
          {about.lines.map((line, i) => (
            <Reveal key={line.prefix} delay={i * 0.1}>
              <div className="border-l-2 border-line pl-5 hover:border-blue transition-colors duration-300" data-testid={`about-line-${i}`}>
                <p className="text-base sm:text-lg text-ink-3 strike-soft">{line.prefix}</p>
                <p className="text-lg sm:text-2xl font-bold text-ink tracking-tight mt-1">{line.suffix}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.35} className="mt-10">
          <p className="text-base sm:text-lg text-ink-2 leading-relaxed max-w-xl" data-testid="about-closer">{about.closer}</p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="lg:pt-24">
        {about.videoUrl ? (
          <div className="aspect-video rounded-2xl overflow-hidden border border-line shadow-card">
            <iframe src={about.videoUrl} title="About" className="w-full h-full" allow="autoplay; fullscreen" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4" data-testid="about-skills">
            <div className="rounded-2xl bg-blue-tint border border-blue/15 p-6 sm:p-8">
              <Megaphone className="w-7 h-7 text-blue" />
              <p className="font-mono text-4xl font-bold text-ink mt-6">4 yrs</p>
              <p className="text-sm text-ink-2 mt-1">Performance marketing for D2C brands</p>
            </div>
            <div className="rounded-2xl bg-ink text-white p-6 sm:p-8">
              <Code2 className="w-7 h-7 text-blue-300" />
              <p className="font-mono text-4xl font-bold mt-6">5 yrs</p>
              <p className="text-sm text-white/70 mt-1">Full-stack dev, tracking infra, automations</p>
            </div>
            <div className="col-span-2 rounded-2xl border border-dashed border-line p-6 text-sm text-ink-3">
              Drop a Loom / YouTube embed URL in <span className="font-mono text-ink">about.videoUrl</span> to replace this block with your video.
            </div>
          </div>
        )}
      </Reveal>
    </div>
  </section>
);
