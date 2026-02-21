"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { allGrapes } from "@/lib/data-loader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function GrapesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "red" | "white">("all");

  const filtered = allGrapes.filter(
    (g) => filter === "all" || g.color === filter
  );

  const reds = filtered.filter((g) => g.color === "red");
  const whites = filtered.filter((g) => g.color === "white");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">포도 품종</h1>
        <p className="text-burgundy-500 text-sm mt-1">
          WSET Level 3 주요 포도 품종 {allGrapes.length}가지
        </p>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {(["all", "red", "white"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-burgundy-700 text-white"
                : "bg-cream-100 text-burgundy-600 hover:bg-cream-200"
            }`}
          >
            {{ all: "전체", red: "적포도", white: "백포도" }[f]} (
            {{ all: allGrapes.length, red: allGrapes.filter((g) => g.color === "red").length, white: allGrapes.filter((g) => g.color === "white").length }[f]})
          </button>
        ))}
      </div>

      {/* Red Grapes */}
      {reds.length > 0 && (
        <section>
          {filter === "all" && (
            <h2 className="text-lg font-bold text-burgundy-700 mb-3">적포도 품종</h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reds.map((grape) => (
              <Card
                key={grape.id}
                hover
                onClick={() => router.push(`/grapes/${grape.id}`)}
                className="p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-burgundy-700" />
                  <span className="font-bold text-burgundy-800">{grape.nameKo}</span>
                  <span className="text-xs text-burgundy-400">{grape.nameEn}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {grape.characteristics.aromas.slice(0, 4).map((a) => (
                    <Badge key={a} variant="default">{a}</Badge>
                  ))}
                </div>
                <div className="text-xs text-burgundy-500">
                  {grape.characteristics.body}
                  {grape.characteristics.tannin && ` · ${grape.characteristics.tannin}`}
                </div>
                <div className="text-xs text-burgundy-400 mt-1">
                  {grape.regions.length}개 산지
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* White Grapes */}
      {whites.length > 0 && (
        <section>
          {filter === "all" && (
            <h2 className="text-lg font-bold text-gold-600 mb-3 mt-6">백포도 품종</h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whites.map((grape) => (
              <Card
                key={grape.id}
                hover
                onClick={() => router.push(`/grapes/${grape.id}`)}
                className="p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gold-400" />
                  <span className="font-bold text-burgundy-800">{grape.nameKo}</span>
                  <span className="text-xs text-burgundy-400">{grape.nameEn}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {grape.characteristics.aromas.slice(0, 4).map((a) => (
                    <Badge key={a} variant="default">{a}</Badge>
                  ))}
                </div>
                <div className="text-xs text-burgundy-500">
                  {grape.characteristics.body}
                  {grape.characteristics.acidity && ` · ${grape.characteristics.acidity}`}
                </div>
                <div className="text-xs text-burgundy-400 mt-1">
                  {grape.regions.length}개 산지
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
