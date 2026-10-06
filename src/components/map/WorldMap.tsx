"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "@phosphor-icons/react";
import { WORLD_VIEWBOX, worldLand, wineCountryShapes, wineBelts } from "./geo-paths";

interface WineCountry {
  id: string;
  nameKo: string;
  nameEn: string;
  summary: string;
}

const oldWorld: WineCountry[] = [
  { id: "france", nameKo: "프랑스", nameEn: "France", summary: "보르도, 부르고뉴, 론, 알자스, 루아르" },
  { id: "italy", nameKo: "이탈리아", nameEn: "Italy", summary: "피에몬테, 토스카나, 베네토, 남부" },
  { id: "spain", nameKo: "스페인", nameEn: "Spain", summary: "리오하, 리베라 델 두에로, 프리오라트" },
  { id: "portugal", nameKo: "포르투갈", nameEn: "Portugal", summary: "도우루, 비뉴 베르드, 알렌테주" },
  { id: "germany", nameKo: "독일", nameEn: "Germany", summary: "모젤, 라인가우, 팔츠" },
  { id: "austria", nameKo: "오스트리아", nameEn: "Austria", summary: "바하우, 캄프탈, 부르겐란트" },
];

const newWorld: WineCountry[] = [
  { id: "usa", nameKo: "미국", nameEn: "USA", summary: "나파, 소노마, 오리건, 워싱턴" },
  { id: "chile", nameKo: "칠레", nameEn: "Chile", summary: "마이포, 카사블랑카, 콜차과" },
  { id: "argentina", nameKo: "아르헨티나", nameEn: "Argentina", summary: "멘도사, 우코 밸리, 살타" },
  { id: "south-africa", nameKo: "남아프리카공화국", nameEn: "South Africa", summary: "스텔렌보스, 콘스탄티아, 스와트랜드" },
  { id: "australia", nameKo: "호주", nameEn: "Australia", summary: "바로사, 쿠나와라, 마거릿 리버" },
  { id: "new-zealand", nameKo: "뉴질랜드", nameEn: "New Zealand", summary: "말버러, 센트럴 오타고, 호크스베이" },
];

export default function WorldMap() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const countryList = (title: string, list: WineCountry[]) => (
    <div>
      <h3 className="text-xs font-semibold text-ink-3">{title}</h3>
      <ul className="mt-2 grid grid-cols-2 gap-1 sm:grid-cols-3">
        {list.map((c) => (
          <li key={c.id}>
            <Link
              href={`/regions/${c.id}`}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.id)}
              onBlur={() => setActive(null)}
              className={`group block rounded-lg px-3 py-2 transition-colors ${
                active === c.id ? "bg-accent-soft" : "hover:bg-sunken"
              }`}
            >
              <span className={`flex items-center gap-1 text-sm font-semibold ${active === c.id ? "text-accent" : "text-ink"}`}>
                {c.nameKo}
                <ArrowRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </span>
              <span className="mt-0.5 block truncate text-xs text-ink-3">{c.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <svg viewBox={WORLD_VIEWBOX} className="block h-auto w-full" role="img" aria-label="와인 생산국 세계 지도">
        {/* Wine belts: 30-50° N and 30-45° S (approximate projected bands) */}
        <g aria-hidden>
          {[wineBelts.north, wineBelts.south].map(([top, bottom], i) => (
            <g key={i}>
              <rect x="0" y={top} width="960" height={bottom - top} fill="var(--sunken)" />
              <text x="14" y={top + 15} fontSize="11" fill="var(--ink-3)">
                {i === 0 ? "북위 30-50° 와인 벨트" : "남위 30-45° 와인 벨트"}
              </text>
            </g>
          ))}
        </g>
        <path d={worldLand} fill="var(--line)" stroke="var(--surface)" strokeWidth="0.5" aria-hidden />
        {[...oldWorld, ...newWorld].map((c) => {
          const shape = wineCountryShapes[c.id];
          if (!shape) return null;
          const on = active === c.id;
          return (
            <g
              key={c.id}
              role="link"
              tabIndex={-1}
              aria-label={c.nameKo}
              className="cursor-pointer"
              onClick={() => router.push(`/regions/${c.id}`)}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
            >
              <path
                d={shape.d}
                fill={on ? "var(--accent)" : "var(--style-medium-red)"}
                fillOpacity={on ? 1 : 0.55}
                stroke="var(--surface)"
                strokeWidth="0.6"
                className="transition-[fill,fill-opacity] duration-200"
              />
              {on && (
                <g pointerEvents="none">
                  <circle cx={shape.cx} cy={shape.cy} r="3" fill="var(--ink)" />
                  <text
                    x={shape.cx}
                    y={shape.cy - 9}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="var(--ink)"
                    stroke="var(--surface)"
                    strokeWidth="4"
                    paintOrder="stroke"
                  >
                    {c.nameKo}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
      <div className="grid gap-6 border-t border-line p-4 sm:p-5 md:grid-cols-2">
        {countryList("구세계", oldWorld)}
        {countryList("신세계", newWorld)}
      </div>
    </div>
  );
}
