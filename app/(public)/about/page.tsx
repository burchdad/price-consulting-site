import { Section } from "@/components/ui/section";
import { getPublishedData } from "@/lib/site-data";
import { siteConfig } from "@/lib/config/site";
import { engagementModels } from "@/lib/data/engagementModels";

export default async function AboutPage() {
  const { settings, leadership } = await getPublishedData();

  return (
    <main>
      <Section className="py-16 lg:py-20">
        <h1 className="mt-3 text-5xl font-black uppercase">
          {settings?.companyName ?? siteConfig.companyName}: Federal Contracting Advisory
        </h1>
        <div className="mt-8 space-y-4 text-zinc-300 max-w-3xl">
          {siteConfig.about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-3xl font-black uppercase">Mission</h2>
          <p className="mt-3 text-zinc-300">{siteConfig.about.missionStatement}</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-3xl font-black uppercase">Vision</h2>
          <p className="mt-3 text-zinc-300">{siteConfig.about.visionStatement}</p>
        </article>
      </Section>

      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">Why Work With Us</p>
        <h2 className="mt-3 text-4xl font-black uppercase">Built on Real Federal Contracting Experience</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {siteConfig.about.whyWorkWithUs.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">How We Engage</p>
        <h2 className="mt-3 text-4xl font-black uppercase">Engagement Models</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">Every engagement is structured to fit the client's specific procurement environment, timeline, and risk profile.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {engagementModels.map((model) => (
            <article key={model.id} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-black uppercase text-white">{model.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{model.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-red-400">Ideal For</p>
              <p className="mt-1 text-sm text-zinc-400">{model.idealFor}</p>
              <ul className="mt-3 space-y-1">
                {model.examples.map((ex) => (
                  <li key={ex} className="text-xs text-zinc-500 before:mr-2 before:text-red-500 before:content-[\'—\']">{ex}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-black uppercase">Core Competencies</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {siteConfig.about.values.map((value) => (
            <div key={value} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center font-bold">
              {value}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-black uppercase">The Advisor</h2>
        <div className="mt-8 space-y-6">
          {leadership.map((leader) => (
            <article key={leader.id} className="grid gap-5 rounded-xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-[220px_1fr]">
              <div className="h-56 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${leader.photoUrl || "https://images.unsplash.com/photo-1521119989659-a83eee488004"})` }} />
              <div>
                <h3 className="text-2xl font-black uppercase">{leader.name}</h3>
                <p className="text-sm text-red-300">{leader.title}</p>
                <div className="mt-4 space-y-3 text-zinc-300">
                  {leader.fullBio.split("\n").filter(Boolean).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
