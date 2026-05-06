/**
 * Seed-level case study data.
 * Neutral demo records used by prisma/seed.ts.
 * Replace with real client case studies before deploying.
 */

export const caseStudiesSeed = [
  {
    title: "Reducing Acquisition Cycle Time on a Large-Scale IT IDIQ",
    slug: "idiq-acquisition-cycle-reduction",
    summary:
      "Restructured acquisition strategy and SOW documentation for a multi-hundred-million-dollar enterprise IT IDIQ, cutting the procurement timeline and improving competitive positioning.",
    iconUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    highlights: [
      "38% reduction in acquisition cycle time",
      "SOW deficiency rate dropped to zero",
      "Award decision supported within a single evaluation period",
    ],
    challenge:
      "A civilian agency faced a bloated acquisition timeline driven by unclear requirements, an unenforceable SOW, and misalignment between Section L/M and the technical evaluation criteria.",
    solution:
      "Price Consulting restructured the acquisition strategy, rewrote the SOW and PWS using clear, testable performance standards, and aligned evaluation criteria to meaningful differentiators. A compliance matrix was developed to ensure offeror responses mapped directly to evaluation factors.",
    results:
      "The procurement concluded 38% faster than the agency's prior IDIQ awards. Evaluation teams reported higher-quality proposals with fewer clarification requests, and the selected vendor entered performance with well-defined acceptance criteria.",
    metrics: [
      "38% faster acquisition cycle",
      "Zero SOW deficiencies identified post-award",
      "2 fewer evaluation rounds required",
    ],
    isFeatured: true,
    isPublished: true,
    displayOrder: 1,
  },
  {
    title: "Proposal Win Strategy for a DoD Cybersecurity Vehicle",
    slug: "dod-cyber-proposal-win-strategy",
    summary:
      "Developed a comprehensive win strategy and compliance framework for a prime contractor pursuing a DoD cybersecurity IDIQ, resulting in award on the first submission.",
    iconUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    imageUrl: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    highlights: [
      "First-submission award on a $90M ceiling IDIQ",
      "Compliance matrix covered 100% of evaluation criteria",
      "Price volume positioned within competitive range with no adjustments",
    ],
    challenge:
      "A mid-tier prime contractor had lost two prior bids on similar vehicles due to evaluation-criteria misalignment and a price volume that did not reflect evaluated cost realism expectations.",
    solution:
      "Price Consulting built a full win strategy from RFP release through final proposal revision. This included a compliance matrix, technical volume review, price-to-win analysis, and risk narrative development aligned to the agency's evaluation priorities and past award patterns.",
    results:
      "The contractor was awarded a position on the IDIQ vehicle on first submission. The price volume was accepted without adjustment, and the technical volume received above-acceptable ratings across all factors.",
    metrics: [
      "100% of evaluation factors addressed",
      "Award on first submission",
      "$90M ceiling IDIQ vehicle",
    ],
    isFeatured: true,
    isPublished: true,
    displayOrder: 2,
  },
  {
    title: "CMMC Level 2 Readiness for a Defense Subcontractor",
    slug: "cmmc-level-2-readiness",
    summary:
      "Guided a defense subcontractor through a full CMMC Level 2 gap assessment and remediation roadmap, achieving assessor-ready posture within six months.",
    iconUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
    imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
    highlights: [
      "CMMC Level 2 assessor-ready in 6 months",
      "Gap count reduced from 47 to 0 open findings",
      "System Security Plan fully documented and reviewed",
    ],
    challenge:
      "A small defense subcontractor needed to achieve CMMC Level 2 certification to retain a prime contract flowing down CUI requirements. Their existing security posture was undocumented, and they had no prior NIST 800-171 assessment on record.",
    solution:
      "Price Consulting conducted a NIST 800-171 gap assessment, developed a Plan of Action & Milestones (POA&M), and worked alongside the client's IT team to close each finding. Security documentation — including the SSP, network diagrams, and access control policies — was developed from scratch to assessor standards.",
    results:
      "The subcontractor achieved an assessor-ready CMMC Level 2 posture within six months, retained their prime contract relationship, and established a repeatable security governance model for ongoing compliance.",
    metrics: [
      "47 NIST 800-171 gaps remediated",
      "CMMC Level 2 ready in 6 months",
      "Prime contract retention secured",
    ],
    isFeatured: true,
    isPublished: true,
    displayOrder: 3,
  },
  {
    title: "Contract Administration Recovery for a Troubled IT Program",
    slug: "contract-administration-recovery",
    summary:
      "Stabilized a troubled federal IT delivery program by implementing contract administration controls, resolving a pending dispute, and restoring SLA performance within 90 days.",
    iconUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    highlights: [
      "Contract dispute resolved without litigation",
      "SLA compliance restored to 98% within 90 days",
      "Modification backlog cleared within 60 days",
    ],
    challenge:
      "A federal agency's IT support contract was in dispute due to ambiguous SOW language, a growing modification backlog, and a contractor claiming constructive changes. Relationship and performance had both deteriorated significantly.",
    solution:
      "Price Consulting was engaged to conduct a contract administration review, identify ambiguous SOW provisions driving the dispute, and develop a structured resolution framework. A modification strategy was developed to formalize scope, close outstanding changes, and restore defined SLA obligations.",
    results:
      "The dispute was resolved through a negotiated bilateral modification within 45 days, avoiding a formal claim. SLA performance recovered to 98% within 90 days of modification execution. The contract entered its option period with a stable performance baseline.",
    metrics: [
      "Dispute resolved in 45 days without formal claim",
      "SLA performance: 98% within 90 days",
      "Modification backlog: cleared in 60 days",
    ],
    isFeatured: false,
    isPublished: true,
    displayOrder: 4,
  },
];
