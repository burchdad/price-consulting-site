/**
 * Fallback services shown when the database returns no published service items.
 * These mirror the ServiceItem Prisma model shape so they are drop-in compatible.
 */

export type FallbackService = {
  id: string;
  category: string;
  title: string;
  description: string;
  bulletItems: string[];
};

export const fallbackServices: FallbackService[] = [
  {
    id: "fallback-service-1",
    category: "Acquisition Advisory",
    title: "Acquisition Strategy & Planning",
    description:
      "End-to-end federal acquisition lifecycle planning that reduces procurement delays and sets programs up for compliant, competitive award.",
    bulletItems: [
      "Federal acquisition lifecycle planning",
      "Contract structure recommendations (IDIQ, BPA, FFP, CPFF)",
      "Market research and source selection strategy",
      "Procurement risk identification and mitigation",
    ],
  },
  {
    id: "fallback-service-2",
    category: "Requirements & Documentation",
    title: "Requirements, SOW & PWS Development",
    description:
      "Clear, testable requirements and performance-based documentation that strengthen awardability and reduce post-award disputes.",
    bulletItems: [
      "Clear, testable requirements definition",
      "Drafting and review of SOWs and PWSs",
      "Acceptance criteria and validation frameworks",
      "Section L/M alignment for competitive source selections",
    ],
  },
  {
    id: "fallback-service-3",
    category: "Proposal Advisory",
    title: "Proposal Development & Bid Support",
    description:
      "Win-strategy-driven proposal support that improves compliance, sharpens technical differentiation, and increases award probability.",
    bulletItems: [
      "Win strategy development and compliance matrices",
      "Price volume development and evaluation alignment",
      "Technical volume review and strengthening",
      "Post-award debrief analysis and improvement strategy",
    ],
  },
  {
    id: "fallback-service-4",
    category: "Contract Administration",
    title: "Contract Management & Administration",
    description:
      "Hands-on contract administration support that protects performance, manages risk, and keeps programs on track through the full contract lifecycle.",
    bulletItems: [
      "Performance monitoring and change control",
      "FAR / DFARS compliance support",
      "Contract modification and closeout strategy",
      "Dispute prevention and resolution advisory",
    ],
  },
  {
    id: "fallback-service-5",
    category: "Program Execution",
    title: "Program & Project Management Support",
    description:
      "Governance and execution support for complex federal programs — built around delivery accountability, risk visibility, and contract performance.",
    bulletItems: [
      "Governance frameworks and execution oversight",
      "Risk registers, reporting structures, and escalation protocols",
      "Integrated master planning and delivery tracking",
      "Program recovery and course correction advisory",
    ],
  },
  {
    id: "fallback-service-6",
    category: "Security & Compliance",
    title: "Technical & Security Advisory",
    description:
      "Practical compliance guidance that aligns IT architecture and security posture with federal requirements — without overpromising or underdelivering.",
    bulletItems: [
      "IT architecture and deployment risk assessment",
      "NIST 800-53 / 800-171 alignment and gap analysis",
      "FedRAMP and CMMC readiness support",
      "Security documentation and authorization advisory",
    ],
  },
];
