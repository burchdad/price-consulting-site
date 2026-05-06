import { BriefcaseBusiness, CircuitBoard, Truck } from "lucide-react";
import { Reveal } from "@/components/public/reveal";
import { Section } from "@/components/ui/section";
import { prisma } from "@/lib/prisma";
import { fallbackServices } from "@/lib/data/services";

function categoryIcon(category: string) {
  const normalized = category.toLowerCase();
  if (normalized.includes("engineering") || normalized.includes("technology")) {
    return <CircuitBoard size={18} />;
  }
  if (normalized.includes("mission") || normalized.includes("logistics")) {
    return <Truck size={18} />;
  }
  return <BriefcaseBusiness size={18} />;
}

export default async function ServicesPage() {
  const services = await prisma.serviceItem.findMany({
    where: { isPublished: true },
    orderBy: { displayOrder: "asc" },
  });
  const servicesToRender = services.length ? services : fallbackServices;

  return (
    <main>
      <Section className="py-12 lg:py-14">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Federal Capabilities
          </p>
          <h1 className="mt-3 text-5xl font-black uppercase">Core Services</h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Acquisition, proposal, contract, and compliance advisory support for
            agencies, primes, and subcontractors operating in high-consequence
            federal IT environments.
          </p>
        </Reveal>
      </Section>

      <Section className="floating-panel pb-12 lg:pb-14">
        <Reveal>
          <div className="space-y-4">
            {servicesToRender.map((service, index) => (
              <Reveal key={service.id} delay={0.07 + index * 0.05}>
                <article className="service-module relative grid gap-7 border-t border-white/10 pt-7 lg:grid-cols-[360px_1fr]">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-zinc-200">
                      {categoryIcon(service.category)}
                      {service.category}
                    </div>
                    <h2 className="text-3xl font-black uppercase leading-tight lg:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-zinc-300">{service.description}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                      {(service.bulletItems as string[]).map((item) => (
                        <li
                          key={item}
                          className="service-capability rounded-md border border-white/10 bg-black/30 px-3 py-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>
    </main>
  );
}