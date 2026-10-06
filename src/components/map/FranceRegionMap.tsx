"use client";

import { useState } from "react";
import Link from "next/link";
import { FRANCE_VIEWBOX, franceOutline, franceRegionPins } from "./geo-paths";

export default function FranceRegionMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-[1.2fr_1fr]">
      <svg viewBox={FRANCE_VIEWBOX} className="block h-auto w-full max-w-[460px] justify-self-center" role="img" aria-label="프랑스 주요 와인 산지 지도">
        <path d={franceOutline} fill="var(--sunken)" stroke="var(--line-strong)" strokeWidth="1" />
        {franceRegionPins.map((p) => {
          const on = active === p.id;
          return (
            <Link
              key={p.id}
              href={p.href}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              aria-label={p.nameKo}
              tabIndex={-1}
            >
              <circle cx={p.x} cy={p.y} r={on ? 22 : 16} fill="var(--accent)" fillOpacity={on ? 0.22 : 0.12} className="transition-all duration-200" />
              <circle cx={p.x} cy={p.y} r="5" fill={on ? "var(--accent)" : "var(--style-medium-red)"} stroke="var(--surface)" strokeWidth="2" />
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fontSize="13"
                fontWeight={on ? 700 : 600}
                fill={on ? "var(--accent)" : "var(--ink)"}
                stroke="var(--sunken)"
                strokeWidth="4"
                paintOrder="stroke"
              >
                {p.nameKo}
              </text>
            </Link>
          );
        })}
      </svg>
      <ul className="border-t border-line p-4 md:border-l md:border-t-0 md:p-6 space-y-1 self-center">
        {franceRegionPins.map((p) => (
          <li key={p.id}>
            <Link
              href={p.href}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(p.id)}
              onBlur={() => setActive(null)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                active === p.id ? "bg-accent-soft text-accent font-semibold" : "text-ink-2 hover:bg-sunken"
              }`}
            >
              {p.nameKo}
              {p.href === "/sparkling" && <span className="text-xs text-ink-3">스파클링 페이지</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
