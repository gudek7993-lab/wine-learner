"use client";

import { useState } from "react";
import { allGrapes, getGrapeProfile } from "@/lib/data-loader";
import { wineStyles } from "@/lib/wine-styles";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import TasteProfile from "@/components/grape/TasteProfile";

type Filter = "all" | "red" | "white";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "white", label: "화이트" },
  { id: "red", label: "레드" },
];

export default function GrapesPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const counts: Record<Filter, number> = {
    all: allGrapes.length,
    red: allGrapes.filter((g) => g.color === "red").length,
    white: allGrapes.filter((g) => g.color === "white").length,
  };

  const groups = wineStyles
    .map((style) => ({
      style,
      grapes: allGrapes.filter(
        (g) => getGrapeProfile(g.id)?.style === style.id && (filter === "all" || g.color === filter),
      ),
    }))
    .filter((group) => group.grapes.length > 0);

  return (
    <div className="space-y-12">
      <PageHeader
        title="포도 품종"
        lead={`WSET Level 3 핵심 품종 ${allGrapes.length}가지를 와인 스타일별로 묶었습니다. 막대는 바디, 타닌, 산도를 5단계로 나타냅니다.`}
        aside={
          <div role="radiogroup" aria-label="색상 필터" className="flex gap-1 rounded-full bg-sunken p-1">
            {filters.map((f) => (
              <button
                key={f.id}
                role="radio"
                aria-checked={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  filter === f.id ? "bg-surface font-semibold text-ink shadow-soft" : "text-ink-3 hover:text-ink"
                }`}
              >
                {f.label}
                <span className="ml-1.5 tabular-nums text-ink-3">{counts[f.id]}</span>
              </button>
            ))}
          </div>
        }
      />

      {groups.map(({ style, grapes }) => (
        <section key={style.id}>
          <div className="flex items-baseline gap-3">
            <span aria-hidden className="h-3 w-3 shrink-0 translate-y-px rounded-full" style={{ backgroundColor: style.color }} />
            <h2 className="text-lg font-bold tracking-tight">{style.label}</h2>
            <span className="text-sm text-ink-3">{style.hint}</span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {grapes.map((grape) => {
              const profile = getGrapeProfile(grape.id)!;
              return (
                <Card key={grape.id} href={`/grapes/${grape.id}`} className="flex flex-col">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-bold text-ink">{grape.nameKo}</h3>
                    <span className="truncate text-xs text-ink-3">{grape.nameEn}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">{profile.summary}</p>
                  <div className="mt-auto pt-4">
                    <TasteProfile taste={profile.taste} color={style.color} compact />
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
