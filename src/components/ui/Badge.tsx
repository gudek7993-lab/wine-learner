type BadgeVariant = "grape-red" | "grape-white" | "region" | "technique" | "climate" | "soil" | "accent" | "default";

const variantStyles: Record<BadgeVariant, string> = {
  "grape-red": "bg-accent-soft text-grape-red",
  "grape-white": "bg-tip-soft text-tip",
  region: "bg-sunken text-ink-2",
  technique: "bg-sunken text-ink-2",
  climate: "bg-sunken text-ink-2 ring-1 ring-inset ring-line",
  soil: "bg-transparent text-ink-2 ring-1 ring-inset ring-line-strong",
  accent: "bg-accent-soft text-accent",
  default: "bg-sunken text-ink-2",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
