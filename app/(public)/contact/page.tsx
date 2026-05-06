import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/public/contact-form";
import { getGlobalSettings } from "@/lib/site-data";

export default async function ContactPage() {
  const settings = await getGlobalSettings();

  return (
    <main>
      <Section className="py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">Start the Conversation</p>
        <h1 className="mt-3 text-5xl font-black uppercase">Request a Consultation</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Whether you&apos;re navigating a specific procurement, preparing a proposal, or building a compliance posture — provide details below and we&apos;ll respond with a clear, focused recommendation on how to engage.
        </p>
      </Section>

      <Section className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-5xl font-black uppercase leading-none text-white">Focused Advisory. Real Federal Contracting Experience.</h2>
          <p className="mt-5 text-zinc-300">
            Price Consulting works with agencies, primes, and subcontractors across the federal acquisition lifecycle. Engagements are scoped to the specific challenge — not padded with deliverables you don&apos;t need.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-zinc-300">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><span className="text-zinc-500">Email: </span>{settings?.email}</div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><span className="text-zinc-500">Phone: </span>{settings?.phone}</div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4"><span className="text-zinc-500">Location: </span>{settings?.address}</div>
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-red-400">Typical Consultation Covers</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li className="before:mr-2 before:text-red-500 before:content-[\'—\']">
                Acquisition or proposal challenge scoping
              </li>
              <li className="before:mr-2 before:text-red-500 before:content-[\'—\']">
                Compliance gap identification (FAR, NIST, CMMC)
              </li>
              <li className="before:mr-2 before:text-red-500 before:content-[\'—\']">
                Engagement model recommendation
              </li>
              <li className="before:mr-2 before:text-red-500 before:content-[\'—\']">
                Initial timeline and scope alignment
              </li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </Section>
    </main>
  );
}
