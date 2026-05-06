import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";

export default async function CaseStudiesPage() {
  const studies = await prisma.caseStudy.findMany({
    where: { isPublished: true },
    orderBy: { displayOrder: "asc" },
  });

  return (
    <main>
      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">Documented Outcomes</p>
        <h1 className="mt-3 text-5xl font-black uppercase">Federal Contracting Results</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          Quantified outcomes across acquisition cycle reduction, proposal win improvement, compliance readiness, and contract performance stabilization.
        </p>
      </Section>

      <Section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {studies.map((study) => (
          <article key={study.id} className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-red-500/50 hover:bg-white/[0.04]">
            <p className="text-sm uppercase tracking-[0.2em] text-red-400">Case Brief</p>
            <h2 className="mt-2 text-2xl font-black uppercase">{study.title}</h2>
            <p className="mt-3 text-sm text-zinc-300">{study.summary}</p>
            {Array.isArray(study.highlights) && study.highlights.length > 0 && (
              <ul className="mt-3 space-y-1">
                {(study.highlights as string[]).slice(0, 2).map((h) => (
                  <li key={h} className="text-xs text-zinc-500 before:mr-2 before:text-red-500 before:content-[\'—\']">{h}</li>
                ))}
              </ul>
            )}
            <Link href={`/case-studies/${study.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-300">
              Read details <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </Link>
          </article>
        ))}
      </Section>
    </main>
  );
}
