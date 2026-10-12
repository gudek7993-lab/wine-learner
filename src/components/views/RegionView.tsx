"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { getRegion, getRegionChildren, getRegionBreadcrumbs, getGrape, getGrapeProfile } from "@/lib/data-loader";
import { styleById } from "@/lib/wine-styles";
import PageHeader from "@/components/ui/PageHeader";
import Tabs from "@/components/ui/Tabs";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ExamTipBox from "@/components/detail/ExamTipBox";
import CountryRegionMap from "@/components/map/CountryRegionMap";
import type { Region } from "@/data/types";

const roleLabel = { primary: "주요 품종", secondary: "보조 품종", permitted: "허용 품종" } as const;

function grapeDot(grapeId: string) {
  const profile = getGrapeProfile(grapeId);
  return profile ? styleById[profile.style].color : "var(--line-strong)";
}

function Overview({ region }: { region: Region }) {
  if (region.keyFacts.length === 0 && region.examTips.length === 0) {
    return <p className="text-ink-3">하위 산지와 다른 탭에 내용이 정리되어 있습니다.</p>;
  }
  return (
    <div className="space-y-8">
      {region.keyFacts.length > 0 && (
        <section>
          <h3 className="font-bold">핵심 정리</h3>
          <ol className="mt-4 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {region.keyFacts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                <span className="mt-0.5 w-4 shrink-0 text-xs font-semibold tabular-nums text-accent">{i + 1}</span>
                {fact}
              </li>
            ))}
          </ol>
        </section>
      )}
      {region.examTips.length > 0 && (
        <div className="space-y-3">
          {region.examTips.map((tip, i) => (
            <ExamTipBox key={i} text={tip} />
          ))}
        </div>
      )}
    </div>
  );
}

function ClimateSoil({ region }: { region: Region }) {
  return (
    <div className="max-w-3xl space-y-8">
        <section>
          <h3 className="text-sm font-semibold text-ink-3">기후</h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {region.climate.type.map((t) => (
              <Badge key={t} variant="climate">{t}</Badge>
            ))}
          </div>
          <p className="mt-3 max-w-[65ch] leading-relaxed text-ink-2">{region.climate.description}</p>
          {region.climate.influencingFactors.length > 0 && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {region.climate.influencingFactors.map((f) => (
                <li key={f} className="rounded-lg bg-sunken px-3 py-2 text-sm text-ink-2">{f}</li>
              ))}
            </ul>
          )}
        </section>

        {region.soils.length > 0 && (
          <section>
            <h3 className="text-sm font-semibold text-ink-3">토양</h3>
            <ul className="mt-3 space-y-3">
              {region.soils.map((soil, i) => (
                <li key={i} className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-3">
                  <span className="flex shrink-0 flex-wrap gap-1">
                    {soil.type.map((t) => (
                      <Badge key={t} variant="soil">{t}</Badge>
                    ))}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-2">{soil.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
    </div>
  );
}

function SubRegions({ region, subs }: { region: Region; subs: Region[] }) {
  return (
    <div className="space-y-5">
      <CountryRegionMap countryId={region.id} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {subs.map((child) => (
          <Card key={child.id} href={`/regions/${child.id}`} className="flex flex-col">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-bold text-ink">{child.nameKo}</h3>
              <span className="truncate text-xs text-ink-3">{child.nameEn}</span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">
              {child.summary ?? child.keyFacts[0] ?? child.climate.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-4">
              {child.grapes.slice(0, 3).map((g) => {
                const grape = getGrape(g.grapeId);
                return grape ? (
                  <span key={g.grapeId} className="inline-flex items-center gap-1.5 text-xs text-ink-3">
                    <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: grapeDot(g.grapeId) }} />
                    {grape.nameKo}
                  </span>
                ) : null;
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Grapes({ region }: { region: Region }) {
  return (
    <div className="space-y-8">
      {(["primary", "secondary", "permitted"] as const).map((role) => {
        const grapes = region.grapes.filter((g) => g.role === role);
        if (grapes.length === 0) return null;
        return (
          <section key={role}>
            <h3 className="text-sm font-semibold text-ink-3">{roleLabel[role]}</h3>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {grapes.map((g) => {
                const grape = getGrape(g.grapeId);
                return (
                  <Card key={g.grapeId} href={grape ? `/grapes/${g.grapeId}` : undefined} className="p-4">
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: grapeDot(g.grapeId) }} />
                      <span className="font-semibold text-ink">{grape?.nameKo ?? g.grapeId}</span>
                      <span className="truncate text-xs text-ink-3">{grape?.nameEn}</span>
                    </div>
                    {g.notes && <p className="mt-2 text-sm leading-relaxed text-ink-2">{g.notes}</p>}
                  </Card>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function Styles({ region }: { region: Region }) {
  if (region.wineStyles.length === 0) {
    return <p className="text-ink-3">와인 스타일은 하위 산지 페이지에 정리되어 있습니다.</p>;
  }
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {region.wineStyles.map((style, i) => (
        <div key={i} className="rounded-xl border border-line bg-surface p-5">
          <h3 className="font-bold text-ink">{style.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{style.description}</p>
        </div>
      ))}
    </div>
  );
}

function Classifications({ region }: { region: Region }) {
  return (
    <div className="space-y-8">
      {region.classifications!.map((cls, i) => (
        <section key={i}>
          <h3 className="font-bold text-ink">{cls.name}</h3>
          <p className="mt-1 max-w-[65ch] text-sm leading-relaxed text-ink-2">{cls.description}</p>
          {cls.levels && (
            <ol className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line">
              {cls.levels.map((level, j) => (
                <li key={j} className="grid grid-cols-[2.5rem_1fr] gap-3 bg-surface p-4">
                  <span className="text-sm font-bold tabular-nums text-accent">{j + 1}</span>
                  <div>
                    <div className="font-semibold text-ink">{level.name}</div>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-2">{level.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}
    </div>
  );
}

export default function RegionView({ regionId }: { regionId: string }) {
  const region = getRegion(regionId);

  if (!region) {
    return (
      <div className="py-24">
        <h1 className="text-2xl font-bold">산지를 찾을 수 없습니다</h1>
        <p className="mt-2 text-ink-3">주소가 바뀌었거나 아직 정리하지 않은 산지입니다.</p>
        <Link href="/" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
          지도에서 고르기 <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    );
  }

  const breadcrumbs = getRegionBreadcrumbs(regionId);
  const children = getRegionChildren(regionId);
  const primary = region.grapes.filter((g) => g.role === "primary");

  const tabs = [
    { label: "개요", content: <Overview region={region} /> },
    ...(children.length > 0 ? [{ label: `하위 산지 ${children.length}`, content: <SubRegions region={region} subs={children} /> }] : []),
    { label: "기후와 토양", content: <ClimateSoil region={region} /> },
    { label: "포도 품종", content: <Grapes region={region} /> },
    { label: "와인 스타일", content: <Styles region={region} /> },
    ...(region.classifications?.length ? [{ label: "등급 체계", content: <Classifications region={region} /> }] : []),
  ];

  return (
    <div className="space-y-12">
      <PageHeader
        crumbs={[
          { label: "산지 지도", href: "/" },
          ...breadcrumbs.map((c, i) => ({
            label: c.nameKo,
            href: i === breadcrumbs.length - 1 ? undefined : `/regions/${c.id}`,
          })),
        ]}
        title={region.nameKo}
        subtitle={region.nameEn}
        lead={region.summary}
      />

      {primary.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="text-ink-3">주요 품종</span>
          {primary.map((g) => {
            const grape = getGrape(g.grapeId);
            if (!grape) return null;
            return (
              <Link key={g.grapeId} href={`/grapes/${g.grapeId}`} className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-accent">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: grapeDot(g.grapeId) }} />
                {grape.nameKo}
              </Link>
            );
          })}
        </div>
      )}

      <Tabs tabs={tabs} />

    </div>
  );
}
