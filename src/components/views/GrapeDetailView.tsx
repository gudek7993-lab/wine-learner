
import Link from "next/link";
import { ForkKnife, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getGrape, getGrapeProfile, getRegion } from "@/lib/data-loader";
import { styleById } from "@/lib/wine-styles";
import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ExamTipBox from "@/components/detail/ExamTipBox";
import TasteProfile from "@/components/grape/TasteProfile";
import ServingGrid from "@/components/grape/ServingGrid";
import StyleSwatch from "@/components/grape/StyleSwatch";

export default function GrapeDetailView({ grapeId }: { grapeId: string }) {
  const grape = getGrape(grapeId);
  const profile = getGrapeProfile(grapeId);

  if (!grape) {
    return (
      <div className="py-24">
        <h1 className="text-2xl font-bold">품종을 찾을 수 없습니다</h1>
        <p className="mt-2 text-ink-3">주소가 바뀌었거나 아직 정리하지 않은 품종입니다.</p>
        <Link href="/grapes" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent hover:underline">
          품종 목록 보기 <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    );
  }

  const c = grape.characteristics;
  const color = profile ? styleById[profile.style].color : "var(--accent)";

  return (
    <div className="space-y-14">
      <PageHeader
        crumbs={[{ label: "포도 품종", href: "/grapes" }, { label: grape.nameKo }]}
        title={grape.nameKo}
        subtitle={[grape.nameEn, ...(profile?.synonyms ?? [])].join(" / ")}
        lead={profile?.summary}
        aside={profile && <StyleSwatch style={profile.style} />}
      />

      {/* Profile: taste + flavors | serving + pairing */}
      {profile && (
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-10 lg:col-span-7">
            <Section title="맛 프로필">
              <TasteProfile taste={profile.taste} color={color} />
            </Section>
            <Section title="대표 풍미">
              <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {profile.primaryFlavors.map((f, i) => (
                  <li key={f} className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-3 sm:flex-col sm:items-start">
                    <span className="text-xs font-semibold tabular-nums text-ink-3">{i + 1}</span>
                    <span className="text-sm font-semibold text-ink">{f}</span>
                  </li>
                ))}
              </ol>
            </Section>
          </div>
          <div className="space-y-10 lg:col-span-5">
            <Section title="서빙">
              <ServingGrid serving={profile.serving} />
            </Section>
            <Section title="음식 페어링">
              <ul className="flex flex-wrap gap-2">
                {profile.pairings.map((p) => (
                  <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-sunken px-3 py-1.5 text-sm text-ink-2">
                    <ForkKnife size={14} className="text-ink-3" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </Section>
            <p className="text-sm leading-relaxed text-ink-3">
              <span className="font-semibold text-ink-2">기원</span> {profile.origin}
            </p>
          </div>
        </div>
      )}

      {/* WSET detail */}
      <Section title="WSET 특성 정리" description="시험 답안에 쓰는 표현 기준입니다.">
        <dl className="flex flex-wrap gap-px overflow-hidden rounded-xl border border-line bg-line">
          {[
            ["바디", c.body],
            ["타닌", c.tannin],
            ["산도", c.acidity],
            ["알코올", c.alcohol],
            ["숙성 잠재력", c.agingPotential],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="grow basis-[9.5rem] bg-surface p-4">
                <dt className="text-xs text-ink-3">{k}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
              </div>
            ))}
        </dl>
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-ink-2">아로마</h3>
          <p className="mt-2 leading-relaxed text-ink">{c.aromas.join(", ")}</p>
        </div>
        {c.otherNotes && <p className="mt-4 max-w-[70ch] leading-relaxed text-ink-2">{c.otherNotes}</p>}
      </Section>

      <Section title="주요 산지">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {grape.regions.map((r, i) => {
            const region = getRegion(r.regionId);
            const body = (
              <>
                <h3 className="font-bold text-ink">{r.localName ?? region?.nameKo ?? r.regionId}</h3>
                {r.localName && region && (
                  <p className="mt-0.5 text-xs text-ink-3">
                    {region.nameKo} <span className="text-line-strong">/</span> {region.nameEn}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{r.significance}</p>
              </>
            );
            return region ? (
              <Card key={`${r.regionId}-${i}`} href={`/regions/${r.regionId}`}>{body}</Card>
            ) : (
              <Card key={`${r.regionId}-${i}`}>{body}</Card>
            );
          })}
        </div>
      </Section>

      {grape.winemaking.length > 0 && (
        <Section title="양조 포인트">
          <ul className="max-w-[70ch] space-y-3">
            {grape.winemaking.map((note, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-ink-2">
                <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                {note}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {grape.examTips.length > 0 && (
        <div className="space-y-3">
          {grape.examTips.map((tip, i) => (
            <ExamTipBox key={i} text={tip} />
          ))}
        </div>
      )}
    </div>
  );
}
