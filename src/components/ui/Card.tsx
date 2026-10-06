import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** When set, the whole card is a link (keyboard and screen-reader friendly). */
  href?: string;
}

const base = "block bg-surface rounded-xl border border-line p-5";
const interactive =
  "transition-[border-color,transform,box-shadow] duration-200 hover:border-line-strong hover:shadow-soft active:translate-y-px";

export default function Card({ children, className = "", href }: CardProps) {
  if (href) {
    return (
      <Link href={href} className={`${base} ${interactive} ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${base} ${className}`}>{children}</div>;
}
