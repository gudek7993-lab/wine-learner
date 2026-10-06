import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  lead?: string;
  crumbs?: Crumb[];
  aside?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, lead, crumbs, aside }: PageHeaderProps) {
  return (
    <header className="pb-8 border-b border-line">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="경로" className="flex flex-wrap items-center gap-1.5 text-sm text-ink-3 mb-5">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden className="text-line-strong">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-ink transition-colors">{c.label}</Link>
              ) : (
                <span className="text-ink-2">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink text-balance">{title}</h1>
          {subtitle && <p className="mt-1.5 text-ink-3">{subtitle}</p>}
          {lead && <p className="mt-4 text-ink-2 leading-relaxed max-w-[62ch]">{lead}</p>}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
    </header>
  );
}
