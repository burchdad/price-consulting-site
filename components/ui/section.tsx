import { cn } from "@/components/ui/cn";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16", className)}>
      {children}
    </section>
  );
}
