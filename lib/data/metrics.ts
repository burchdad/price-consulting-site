export type MetricItem = {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  meta: string;
};

export const metrics: MetricItem[] = [
  { label: "Years of Federal IT Experience", value: 20, suffix: "+", meta: "Acquisition to Closeout" },
  { label: "Proposals Supported", value: 200, suffix: "+", meta: "Across Agencies & Primes" },
  { label: "Agencies & Primes Advised", value: 30, suffix: "+", meta: "Civilian, DoD & IC" },
  { label: "Client Win Rate Improvement", value: 35, suffix: "%", meta: "Avg. Across Advisory Engagements" },
  { label: "Compliance Readiness Rate", value: 100, suffix: "%", meta: "FedRAMP / CMMC Engagements" },
  { label: "Advisory Engagements", value: 150, suffix: "+", meta: "Project & Retainer-Based" },
];
