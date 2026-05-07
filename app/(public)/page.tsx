import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/public/animated-counter";
import { Reveal } from "@/components/public/reveal";
import { HomepageCinematicScene } from "@/components/public/homepage-cinematic-scene";
import { OperationalGraph } from "@/components/public/operational-graph";
import { TimelineScroller } from "@/components/public/timeline-scroller";
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

        {/* Intelligence Rail – sits on the viewport left edge, outside the content container */}
        <div
          aria-hidden
          className="intelligence-rail-shell pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-12 xl:block"
        >
          <div className="intelligence-rail-line" />
          <div className="intelligence-rail-track flex h-full flex-col">
            {[
              "Technical",
              "Alignment",
              "Delivery",
              "Outcomes",
              "Technical",
              "Alignment",
              "Delivery",
              "Outcomes",
            ].map((phrase, i) => (
              <div key={i} className="intelligence-rail-slot">
                <span className="intelligence-rail-item whitespace-nowrap text-[10px] font-medium uppercase">
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>

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

      {/* ── METRICS BAND – full-bleed, no card containers ──────────────────── */}
      <section className="full-bleed-band stats-band relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,rgba(255,43,43,0.07),transparent_65%)]" />
        </div>
        {/* top accent line */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

        <Reveal staggerChildren>
          <div className="relative grid grid-cols-2 divide-x divide-white/[0.07] sm:grid-cols-3 xl:grid-cols-6">
            {metrics.map((item, index) => (
              <Reveal key={item.label} delay={0.05 + index * 0.04}>
                <div className="group flex flex-col items-center px-4 py-12 text-center">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-5xl font-black tracking-tight text-white transition duration-300 group-hover:text-red-300 lg:text-6xl">
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    {item.meta}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* bottom divider line */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ── GLOBAL IMPACT – full-bleed dark panel ─────────────────────────── */}
      <section className="full-bleed-band relative overflow-hidden py-20 lg:py-28" id="global-impact">
        {/* Layered backgrounds */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950/90 to-red-950/20" />
          {/* subtle dot grid, fades out toward bottom */}
          <div className="impact-dot-grid absolute inset-0 opacity-[0.35]" />
          {/* red atmospheric glow on graph side */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_75%_50%,rgba(255,43,43,0.14),transparent_60%)]" />
          {/* bottom dissolve into next section */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-screen-xl gap-12 px-6 lg:grid-cols-2 lg:items-center xl:gap-20 xl:px-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-red-400">
              {siteConfig.globalImpact.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight lg:text-5xl">
              {siteConfig.globalImpact.headline}
            </h2>
            <p className="mt-4 max-w-xl text-zinc-300">
              {siteConfig.globalImpact.body}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {siteConfig.globalImpact.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/10 bg-black/50 p-4"
                >
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="min-h-[420px]">
            <OperationalGraph />
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE – full-bleed ──────────────────────────────────── */}
      <section className="full-bleed-band who-we-are-band relative overflow-hidden py-20 lg:py-28" id="who-we-are">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* top fade from black – matches global-impact bottom dissolve */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
          {/* large ghost wordmark */}
          <span className="absolute -bottom-6 right-4 select-none text-[11rem] font-black uppercase leading-none tracking-tighter text-white/[0.025] lg:text-[18rem]">
            TRUST
          </span>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_50%,rgba(255,43,43,0.07),transparent_70%)]" />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-6 xl:px-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-red-400">
              {siteConfig.whoWeAre.eyebrow}
            </p>
            <h2 className="mt-3 max-w-5xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {siteConfig.whoWeAre.headline}
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-zinc-300">
              {siteConfig.whoWeAre.body}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-red-300 hover:text-red-200"
            >
              {siteConfig.whoWeAre.linkLabel} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── TIMELINE – full-bleed animated scroller ─────────────────── */}
      <section className="full-bleed-band timeline-band relative overflow-hidden py-20 lg:py-28" id="timeline">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-black/80 to-zinc-950/60" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-6 xl:px-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-red-400">Company History</p>
            <h2 className="mt-2 text-4xl font-black uppercase lg:text-5xl">Growth Timeline</h2>
          </Reveal>
          <div className="mt-12">
            <TimelineScroller items={timeline} />
          </div>
        </div>
      </section>

      <Section className="mb-10 py-12 pb-24 lg:mb-14 lg:py-14 lg:pb-32" id="leadership">
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
