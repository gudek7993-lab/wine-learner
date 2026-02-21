interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function Card({ children, className = "", onClick, hover = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-cream-200 shadow-sm p-5 ${
        hover ? "hover:shadow-md hover:border-burgundy-200 transition-shadow cursor-pointer" : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
