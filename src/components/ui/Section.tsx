interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, description, children, className = "" }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="text-xl font-bold tracking-tight text-ink">{title}</h2>
      {description && <p className="mt-1 text-sm text-ink-3 max-w-[62ch]">{description}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
