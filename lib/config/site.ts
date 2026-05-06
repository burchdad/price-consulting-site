/**
 * Global site configuration.
 *
 * This is the single source of truth for all static branding,
 * copy, and contact details used as fallbacks when the database
 * GlobalSetting record is not yet populated.
 *
 * HOW TO REBRAND FOR A NEW CLIENT
 * --------------------------------
 * 1. Update every field below with the client's real values.
 * 2. Run `npm run db:seed` to push the values into the database
 *    so the admin CMS reflects the new data immediately.
 * 3. Swap /public/images/logo.* with the client logo.
 * 4. Adjust the `primary` color token in globals.css if needed.
 */

export const siteConfig = {
  companyName: "Price Consulting",
  tagline: "Federal Contracting Advisory",

  hero: {
    eyebrow: "Federal Contracting Advisory",
    headline: "Clarity, Compliance, and Delivery Discipline",
    subtext:
      "Price Consulting advises agencies, primes, and subcontractors on federal IT acquisition, proposal strategy, and mission-critical program execution where compliance, clarity, and delivery discipline are non-negotiable.",
    supportingLine:
      "Over two decades of experience supporting enterprise IT procurements, proposal development, and contract execution across high-consequence federal environments.",
    trustBadge:
      "Trusted by agencies, primes, and subcontractors across the federal marketplace",
    ctaPrimary: "Request a Consultation",
    ctaSecondary: "Explore Capabilities",
  },

  about: {
    missionStatement:
      "Provide agencies, primes, and subcontractors with the acquisition expertise, proposal discipline, and contract execution rigor needed to win and perform in the federal marketplace.",
    visionStatement:
      "Be the trusted advisor federal contracting professionals rely on when the stakes are high and the margin for error is zero.",
    values: [
      "Compliance",
      "Clarity",
      "Accountability",
      "Precision",
      "Trust",
    ],
    paragraphs: [
      "Price Consulting brings over 20 years of hands-on federal IT contracting experience to every engagement — from acquisition strategy and proposal development to contract administration and security compliance.",
      "Our advisory work spans the full federal contracting lifecycle. We work with government agencies structuring procurements, with primes navigating complex IDIQs and GWACs, and with subcontractors building competitive bid strategies.",
      "Every recommendation is grounded in real-world execution. We don't offer theoretical frameworks — we provide practical guidance built on direct experience with FAR/DFARS compliance, source selection, SOW development, and program delivery.",
      "Whether you're preparing a proposal, untangling a contract dispute, or building a compliance posture for CMMC or FedRAMP, Price Consulting delivers focused, authoritative guidance that improves outcomes.",
    ],
    whyWorkWithUs: [
      {
        title: "20+ Years Federal IT Contracting Experience",
        detail:
          "Direct experience across acquisition planning, proposal development, contract administration, and security compliance in federal environments.",
      },
      {
        title: "Practical Compliance Approach",
        detail:
          "FAR/DFARS, NIST 800-53, CMMC, and FedRAMP guidance that is operationally grounded — not checkbox-driven.",
      },
      {
        title: "Results-Focused Execution",
        detail:
          "Every engagement is scoped to reduce procurement delays, strengthen awardability, and improve contract performance — not generate deliverables.",
      },
      {
        title: "Trusted Across the Federal Marketplace",
        detail:
          "Advisory experience spanning civilian agencies, DoD program offices, large prime contractors, and small business subcontractors.",
      },
    ],
  },

  contact: {
    email: "info@priceconsulting.com",
    phone: "+1-800-000-0000",
    address: "Washington, DC Metro Area",
  },

  social: {
    linkedin: "#",
  },

  footer: {
    statement: "Elite federal contracting advisory for high-stakes acquisition environments.",
    ctaHeadline:
      "Ready to strengthen your acquisition strategy, proposal, or compliance posture? Let's talk.",
    ctaButtonLabel: "Request a Consultation",
  },

  globalImpact: {
    eyebrow: "Experience & Reach",
    headline: "Deep Federal Contracting Expertise Across the Marketplace",
    body: "Two decades of advisory engagement spanning civilian agencies, DoD program offices, large primes, and small businesses — with measurable outcomes across every phase of the federal contracting lifecycle.",
    stats: [
      { label: "Years of Experience", value: "20+" },
      { label: "Agencies & Primes Advised", value: "30+" },
      { label: "Proposals Supported", value: "200+" },
    ],
  },

  whoWeAre: {
    eyebrow: "Why Price Consulting",
    headline: "A High-Trust Federal Contracting Advisor",
    body: "Price Consulting combines acquisition expertise, proposal discipline, and contract execution rigor into focused advisory engagements. Every recommendation is built on real federal contracting experience — not generic consulting frameworks.",
    linkLabel: "Learn More",
  },

  careers: {
    headline: "Work With Us",
    subtext:
      "Price Consulting occasionally partners with experienced federal contracting professionals for project-based engagements. If you bring deep govcon expertise and a results-first approach, we'd like to hear from you.",
    perks: [
      "Federal Contracting Focus",
      "Project-Based Flexibility",
      "High-Impact Work",
      "Expert Network Access",
    ],
  },

  meta: {
    title: "Price Consulting — Federal Contracting Advisory",
    description:
      "Price Consulting advises agencies, primes, and subcontractors on federal IT acquisition, proposal strategy, and mission-critical program execution.",
  },
};
