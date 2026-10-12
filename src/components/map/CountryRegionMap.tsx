"use client";

import { useState } from "react";
import Link from "next/link";
import { countryMaps, type MapFrame } from "./country-maps";
import { getRegion } from "@/lib/data-loader";

const nameOf = (p: { id: string; nameKo?: string }) => p.nameKo ?? getRegion(p.id)?.nameKo ?? p.id;
const hrefOf = (p: { id: string; href?: string }) => p.href ?? `/regions/${p.id}`;

/** One map (main or inset): real outline, numbered pins. */
function Frame({
  frame,
  active,
  setActive,
  label,
  boxes = [],
}: {
  frame: MapFrame;
  active: string | null;
  setActive: (id: string | null) => void;
  label: string;
  boxes?: [number, number, number, number][];
}) {
  return (
    <svg viewBox={frame.viewBox} className="block h-auto max-h-[640px] w-full" role="img" aria-label={label}>
      <path d={frame.neighbours} fill="var(--paper)" stroke="var(--line)" strokeWidth="0.8" />
      <path d={frame.outline} fill="var(--sunken)" stroke="var(--line-strong)" strokeWidth="1" />
      {boxes.map(([x, y, w, h], i) => (
        <rect key={i} x={x - 3} y={y - 3} width={w + 6} height={h + 6} fill="none" stroke="var(--ink-3)" strokeWidth="1.2" strokeDasharray="4 3" rx="3" />
      ))}
      {frame.pins.map((p) => {
        const on = active === p.id;
        return (
          <Link key={p.id} href={hrefOf(p)} tabIndex={-1} aria-label={nameOf(p)} onMouseEnter={() => setActive(p.id)} onMouseLeave={() => setActive(null)}>
            <circle cx={p.x} cy={p.y} r={on ? 13 : 10} fill={on ? "var(--accent)" : "var(--style-medium-red)"} stroke="var(--surface)" strokeWidth="2" className="transition-all duration-200" />
            <text x={p.x} y={p.y} dy="0.35em" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--on-accent)" pointerEvents="none">
              {p.n}
            </text>
          </Link>
        );
      })}
    </svg>
  );
}

/** Country map with numbered pins; clustered regions get zoomed insets (marked by dashed boxes). */
export default function CountryRegionMap({ countryId }: { countryId: string }) {
  const [active, setActive] = useState<string | null>(null);
  const map = countryMaps[countryId];
  if (!map) return null;

  const all = [...map.pins, ...map.insets.flatMap((i) => i.pins)].sort((a, b) => a.n - b.n);
  const hover = (id: string | null) => () => setActive(id);

  return (
    <div className="grid overflow-hidden rounded-xl border border-line bg-surface md:grid-cols-[1.3fr_1fr]">
      <div>
        <Frame frame={map} active={active} setActive={setActive} label="주요 와인 산지 지도" boxes={map.insets.map((i) => i.box)} />
        {map.insets.length > 0 && (
          <div className="grid gap-3 border-t border-line p-3 sm:grid-cols-2">
            {map.insets.map((ins) => (
              <figure key={ins.title} className="overflow-hidden rounded-lg border border-dashed border-line-strong">
                <Frame frame={ins} active={active} setActive={setActive} label={`${ins.title} 확대 지도`} />
                <figcaption className="border-t border-line px-3 py-1.5 text-xs text-ink-3">{ins.title} 확대</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
      <ol className="space-y-0.5 self-center border-t border-line p-4 md:border-l md:border-t-0 md:p-6">
        {all.map((p) => (
          <li key={p.id}>
            <Link
              href={hrefOf(p)}
              onMouseEnter={hover(p.id)}
              onMouseLeave={hover(null)}
              onFocus={hover(p.id)}
              onBlur={hover(null)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                active === p.id ? "bg-accent-soft font-semibold text-accent" : "text-ink-2 hover:bg-sunken"
              }`}
            >
              <span className="w-5 shrink-0 text-right text-xs font-bold tabular-nums text-ink-3">{p.n}</span>
              {nameOf(p)}
              {p.href === "/sparkling" && <span className="ml-auto text-xs text-ink-3">스파클링 페이지</span>}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
