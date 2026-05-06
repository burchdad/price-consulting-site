export type EngagementModel = {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  examples: string[];
};

export const engagementModels: EngagementModel[] = [
  {
    id: "advisory-retainer",
    title: "Advisory Retainer",
    description:
      "Ongoing advisory access for organizations navigating continuous federal contracting activity. Provides consistent, responsive guidance without the overhead of project-by-project scoping.",
    idealFor: "Primes and agencies with active acquisition pipelines or recurring compliance requirements.",
    examples: [
      "Monthly acquisition strategy reviews",
      "On-call proposal and compliance guidance",
      "Contract administration advisory",
      "Regulatory interpretation support",
    ],
  },
  {
    id: "project-based",
    title: "Project-Based Engagement",
    description:
      "Scoped advisory support for a defined procurement event, proposal submission, or contract challenge. Focused, time-bound, and outcome-oriented.",
    idealFor: "Organizations with a specific RFP response, acquisition action, or compliance deadline.",
    examples: [
      "SOW / PWS development for a specific procurement",
      "Proposal review and compliance matrix",
      "Contract dispute resolution advisory",
      "FedRAMP or CMMC readiness assessment",
    ],
  },
  {
    id: "workshop-training",
    title: "Workshop & Training",
    description:
      "Structured sessions for acquisition teams, proposal writers, contract officers, and program managers who need to sharpen federal contracting fundamentals or specific competencies.",
    idealFor: "Teams building internal capability or onboarding staff to federal acquisition processes.",
    examples: [
      "FAR/DFARS compliance essentials",
      "Proposal writing and evaluation alignment",
      "Contract administration fundamentals",
      "CMMC / NIST 800-171 overview for non-security professionals",
    ],
  },
  {
    id: "embedded-support",
    title: "Embedded Program Support",
    description:
      "Integrated advisory presence within a program team for high-complexity, high-stakes acquisitions or contract executions requiring sustained expert guidance.",
    idealFor: "Programs with significant compliance risk, complex contract structures, or high-consequence delivery requirements.",
    examples: [
      "Source selection support embedded with CO team",
      "Proposal team integration for major IDIQ pursuit",
      "Contract execution oversight for troubled programs",
      "Security authorization advisory for FedRAMP ATO pursuit",
    ],
  },
];
