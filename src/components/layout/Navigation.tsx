"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "지도 탐색", icon: "🗺" },
  { href: "/grapes", label: "포도 품종", icon: "🍇" },
  { href: "/techniques", label: "양조 기법", icon: "🏺" },
  { href: "/sparkling", label: "스파클링", icon: "✨" },
  { href: "/fortified", label: "강화 와인", icon: "🥃" },
  { href: "/tasting", label: "테이스팅", icon: "👃" },
  { href: "/quiz", label: "퀴즈", icon: "✏" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-burgundy-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
            <span className="text-gold-400">🍷</span>
            <span className="hidden sm:inline">와인 러너</span>
          </Link>

          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-white/20 font-semibold"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="hidden lg:inline">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
