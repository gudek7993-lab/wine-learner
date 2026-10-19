"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Wine } from "@phosphor-icons/react";

const navItems = [
  { href: "/", label: "산지 지도" },
  { href: "/grapes", label: "포도 품종" },
  { href: "/techniques", label: "재배와 양조" },
  { href: "/sparkling", label: "스파클링" },
  { href: "/fortified", label: "강화 와인" },
  { href: "/service", label: "서비스" },
  { href: "/tasting", label: "테이스팅" },
  { href: "/quiz", label: "연습 문제" },
  { href: "/mock", label: "모의고사" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/regions");
  return pathname.startsWith(href);
}

export default function Navigation() {
  const pathname = usePathname();
  const strip = useRef<HTMLElement>(null);

  // Keep the current page visible in the scrolling mobile menu. Sets scrollLeft directly:
  // scrollIntoView would also move the browser's Tab starting point past the skip link.
  useEffect(() => {
    const nav = strip.current;
    const el = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (nav && el) nav.scrollLeft = el.offsetLeft - (nav.clientWidth - el.offsetWidth) / 2;
  }, [pathname]);

  const links = navItems.map((item) => {
    const active = isActive(pathname, item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={`relative whitespace-nowrap py-1 text-sm transition-colors ${
          active ? "text-ink font-semibold" : "text-ink-3 hover:text-ink"
        }`}
      >
        {item.label}
        {active && <span aria-hidden className="absolute -bottom-[17px] left-0 right-0 h-0.5 rounded-full bg-accent" />}
      </Link>
    );
  });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-10 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-ink">
          <Wine size={22} weight="fill" className="text-accent" aria-hidden />
          와인 러너
          <span className="ml-1 rounded-full bg-sunken px-2 py-0.5 text-[11px] font-semibold text-ink-3">L3</span>
        </Link>
        <nav aria-label="주요 메뉴" className="hidden lg:flex items-center gap-5">{links}</nav>
        <div className="ml-auto flex gap-2 lg:hidden">
          <Link href="/quiz" className="flex min-h-11 items-center rounded-full bg-sunken px-4 text-sm font-semibold text-ink">
            연습
          </Link>
          <Link href="/mock" className="flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-semibold text-on-accent">
            모의고사
          </Link>
        </div>
      </div>
      <nav
        ref={strip}
        aria-label="주요 메뉴"
        className="lg:hidden flex gap-5 overflow-x-auto scrollbar-hide border-t border-line px-4 [mask-image:linear-gradient(to_right,black_85%,transparent)] [&_a]:py-3 [&_span[aria-hidden]]:hidden"
      >
        {links}
      </nav>
    </header>
  );
}
