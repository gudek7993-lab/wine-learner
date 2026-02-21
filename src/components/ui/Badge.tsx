type BadgeVariant = "grape-red" | "grape-white" | "region" | "technique" | "climate" | "soil" | "default";

const variantStyles: Record<BadgeVariant, string> = {
  "grape-red": "bg-burgundy-100 text-burgundy-700",
  "grape-white": "bg-cream-200 text-gold-600",
  region: "bg-gold-300/20 text-gold-600",
  technique: "bg-burgundy-50 text-burgundy-600",
  climate: "bg-blue-50 text-blue-700",
  soil: "bg-amber-50 text-amber-700",
  default: "bg-cream-100 text-burgundy-700",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  onClick?: () => void;
}

export default function Badge({ children, variant = "default", onClick }: BadgeProps) {
  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
        variantStyles[variant]
      } ${onClick ? "cursor-pointer hover:opacity-80" : ""}`}
    >
      {children}
    </span>
  );
}
