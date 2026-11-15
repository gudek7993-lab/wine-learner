interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <h2 className="text-xl font-bold tracking-tight text-ink">{title}</h2>
      {description && <p className="mt-1 text-sm text-ink-3 max-w-[62ch]">{description}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
