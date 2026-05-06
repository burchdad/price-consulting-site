import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/public/animated-counter";
import { Reveal } from "@/components/public/reveal";
import { HomepageCinematicScene } from "@/components/public/homepage-cinematic-scene";
import { OperationalGraph } from "@/components/public/operational-graph";
import { getPublishedData } from "@/lib/site-data";
import { siteConfig } from "@/lib/config/site";
import { timeline } from "@/lib/data/timeline";
import { metrics } from "@/lib/data/metrics";

export default async function HomePage() {
  const { settings, leadership } = await getPublishedData();

  return (
    <HomepageCinematicScene>
      <section className="relative isolate border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/48 via-black/70 to-black/32" />
        <Section className="relative z-10 py-20 lg:py-24">
          <Reveal>
            <div className="hero-parallax-group max-w-5xl">
              <div className="hero-hud-grid" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-red-400">
                {siteConfig.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                {settings?.heroHeadline ?? siteConfig.hero.headline}
              </h1>
              <p className="mt-5 max-w-3xl text-base text-zinc-200 sm:text-lg">
                {settings?.heroSubheadline ?? siteConfig.hero.subtext}
              </p>
              <p className="mt-3 max-w-3xl text-sm text-zinc-400">
                {siteConfig.hero.supportingLine}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="premium-button rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                  {siteConfig.hero.ctaPrimary}
                </Link>
                <Link
                  href="/services"
                  className="premium-button rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-red-500/70 hover:text-red-300"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs text-zinc-200">
                <BadgeCheck size={14} className="text-red-400" />
                {siteConfig.hero.trustBadge}
              </div>

              <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <ChevronDown size={14} className="scroll-indicator text-red-400" />
                Scroll to explore
              </div>
            </div>
          </Reveal>
        </Section>
      </section>

      <Section className="py-10 lg:py-12">
        <Reveal staggerChildren>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {metrics.map((item, index) => (
              <Reveal key={item.label} delay={0.05 + index * 0.04}>
                <article className="kpi-card group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-4 transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-red-500/40 hover:shadow-[0_0_24px_rgba(255,43,43,0.12)]">
                  <span className="kpi-sweep" />
                  <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-400">
                    {item.label}
                  </p>
                  <p className="mt-3 text-4xl font-black tracking-tight text-white">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {item.meta}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="floating-panel grid gap-8 py-12 lg:grid-cols-2 lg:py-14">
        <Reveal className="h-full">
          <p className="text-xs uppercase tracking-[0.2em] text-red-400">
            {siteConfig.globalImpact.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-tight">
            {siteConfig.globalImpact.headline}
          </h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            {siteConfig.globalImpact.body}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {siteConfig.globalImpact.stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-black/40 p-3"
              >
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="h-full">
          <OperationalGraph />
        </Reveal>
      </Section>

      <Section className="relative py-12 lg:py-14">
        <div className="absolute inset-0 rounded-2xl border border-white/5 bg-[linear-gradient(120deg,rgba(255,43,43,0.08),transparent_35%)]" />
        <Reveal>
          <p className="relative text-xs uppercase tracking-[0.25em] text-red-400">
            {siteConfig.whoWeAre.eyebrow}
          </p>
          <h2 className="relative mt-3 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-5xl">
            {siteConfig.whoWeAre.headline}
          </h2>
          <p className="relative mt-5 max-w-4xl text-zinc-300">
            {siteConfig.whoWeAre.body}
          </p>
          <Link
            href="/about"
            className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-red-300 hover:text-red-200"
          >
            {siteConfig.whoWeAre.linkLabel} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Section>

      <Section className="section-divider py-12 lg:py-14">
        <Reveal>
          <h2 className="text-4xl font-black uppercase">Company Growth Timeline</h2>
          <div className="timeline-rail relative mt-8 hidden grid-cols-5 gap-4 lg:grid">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={0.08 + index * 0.07}>
                <article className="timeline-card group relative rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="timeline-marker" />
                  <p className="text-sm font-bold tracking-[0.08em] text-red-400">{item.year}</p>
                  <h3 className="mt-2 text-xl font-bold uppercase">{item.title}</h3>
                  <p className="mt-3 text-sm text-zinc-300">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 space-y-3 lg:hidden">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={0.04 + index * 0.05}>
                <article className="timeline-card rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-bold text-red-400">{item.year}</p>
                  <h3 className="mt-1 text-lg font-bold uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 lg:py-14">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-4xl font-black uppercase">Leadership Preview</h2>
            <Link
              href="/about"
              className="text-sm font-semibold text-red-300 hover:text-red-200"
            >
              Meet Leadership
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.slice(0, 4).map((leader, index) => (
              <Reveal key={leader.id} delay={0.06 + index * 0.05}>
                <article className="leadership-card group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-red-500/50">
                  <div
                    className="h-64 bg-cover bg-center grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    style={{
                      backgroundImage: `url(${leader.photoUrl || "https://images.unsplash.com/photo-1521119989659-a83eee488004"})`,
                    }}
                  />
                  <div className="leadership-panel p-4">
                    <p className="text-xl font-bold uppercase text-white">
                      {leader.name}
                    </p>
                    <p className="text-sm text-zinc-400">{leader.title}</p>
                    <p className="mt-2 text-sm text-zinc-300 transition group-hover:text-white">
                      {leader.shortBio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

    </HomepageCinematicScene>
  );
}
