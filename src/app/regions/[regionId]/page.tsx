"use client";

import { useParams, useRouter } from "next/navigation";
import { getRegion, getRegionChildren, getRegionBreadcrumbs, getGrape } from "@/lib/data-loader";
import Tabs from "@/components/ui/Tabs";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ExamTipBox from "@/components/detail/ExamTipBox";
import EntityTag from "@/components/explorer/EntityTag";
import ComparisonTable from "@/components/explorer/ComparisonTable";
import Link from "next/link";

export default function RegionPage() {
  const params = useParams();
  const router = useRouter();
  const regionId = params.regionId as string;
  const region = getRegion(regionId);

  if (!region) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-burgundy-700">산지를 찾을 수 없습니다</h1>
        <Link href="/" className="text-burgundy-500 hover:underline mt-4 inline-block">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const breadcrumbs = getRegionBreadcrumbs(regionId);
  const children = getRegionChildren(regionId);

  const tabs = [
    {
      label: "개요",
      content: (
        <div className="space-y-6">
          {/* Climate */}
          <section>
            <h3 className="text-lg font-bold mb-2">기후</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {region.climate.type.map((t) => (
                <Badge key={t} variant="climate">{t}</Badge>
              ))}
            </div>
            <p className="text-sm text-burgundy-700 leading-relaxed">{region.climate.description}</p>
            {region.climate.influencingFactors.length > 0 && (
              <div className="mt-2">
                <span className="text-xs font-semibold text-burgundy-500">영향 요인: </span>
                {region.climate.influencingFactors.map((f) => (
                  <Badge key={f} variant="default">{f}</Badge>
                ))}
              </div>
            )}
          </section>

          {/* Soils */}
          {region.soils.length > 0 && (
            <section>
              <h3 className="text-lg font-bold mb-2">토양</h3>
              <div className="space-y-2">
                {region.soils.map((soil, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex flex-wrap gap-1">
                      {soil.type.map((t) => (
                        <Badge key={t} variant="soil">{t}</Badge>
                      ))}
                    </div>
                    <span className="text-sm text-burgundy-700">{soil.description}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Facts */}
          {region.keyFacts.length > 0 && (
            <section>
              <h3 className="text-lg font-bold mb-2">핵심 정리</h3>
              <ul className="space-y-1">
                {region.keyFacts.map((fact, i) => (
                  <li key={i} className="text-sm text-burgundy-700 flex items-start gap-2">
                    <span className="text-gold-500 shrink-0">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Exam Tips */}
          {region.examTips.map((tip, i) => (
            <ExamTipBox key={i} text={tip} />
          ))}
        </div>
      ),
    },
    {
      label: "포도 품종",
      content: (
        <div className="space-y-4">
          {(["primary", "secondary", "permitted"] as const).map((role) => {
            const grapes = region.grapes.filter((g) => g.role === role);
            if (grapes.length === 0) return null;
            const roleLabel = { primary: "주요 품종", secondary: "보조 품종", permitted: "허용 품종" }[role];
            return (
              <section key={role}>
                <h4 className="text-sm font-bold text-burgundy-500 mb-2">{roleLabel}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {grapes.map((g) => {
                    const grape = getGrape(g.grapeId);
                    return (
                      <Card
                        key={g.grapeId}
                        hover
                        onClick={() => router.push(`/grapes/${g.grapeId}`)}
                        className="p-3"
                      >
                        <div className="flex items-center gap-2">
                          <Badge variant={grape?.color === "red" ? "grape-red" : "grape-white"}>
                            {grape?.color === "red" ? "적" : "백"}
                          </Badge>
                          <span className="font-semibold text-sm">
                            {grape?.nameKo || g.grapeId}
                          </span>
                          <span className="text-xs text-burgundy-400">
                            {grape?.nameEn}
                          </span>
                        </div>
                        {g.notes && (
                          <p className="text-xs text-burgundy-500 mt-1 ml-8">{g.notes}</p>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ),
    },
    {
      label: "와인 스타일",
      content: (
        <div className="space-y-3">
          {region.wineStyles.map((style, i) => (
            <Card key={i} className="p-4">
              <h4 className="font-semibold text-burgundy-700 mb-1">{style.name}</h4>
              <p className="text-sm text-burgundy-600">{style.description}</p>
            </Card>
          ))}
          {region.wineStyles.length === 0 && (
            <p className="text-sm text-burgundy-400">하위 산지에서 와인 스타일 정보를 확인하세요.</p>
          )}
        </div>
      ),
    },
  ];

  // Add classifications tab if present
  if (region.classifications && region.classifications.length > 0) {
    tabs.push({
      label: "등급 체계",
      content: (
        <div className="space-y-4">
          {region.classifications.map((cls, i) => (
            <Card key={i} className="p-4">
              <h4 className="font-semibold text-burgundy-700 mb-2">{cls.name}</h4>
              <p className="text-sm text-burgundy-600 mb-3">{cls.description}</p>
              {cls.levels && (
                <div className="space-y-1">
                  {cls.levels.map((level, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          backgroundColor: `hsl(${350 - j * 20}, 50%, ${35 + j * 8}%)`,
                        }}
                      >
                        {j + 1}
                      </span>
                      <div>
                        <span className="font-medium">{level.name}</span>
                        <span className="text-burgundy-500 ml-2">{level.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      ),
    });
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-sm text-burgundy-400 overflow-x-auto">
        <Link href="/" className="hover:text-burgundy-700">홈</Link>
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.id} className="flex items-center gap-1">
            <span>/</span>
            {i === breadcrumbs.length - 1 ? (
              <span className="text-burgundy-700 font-medium">{crumb.nameKo}</span>
            ) : (
              <Link
                href={`/regions/${crumb.id}`}
                className="hover:text-burgundy-700"
              >
                {crumb.nameKo}
              </Link>
            )}
          </span>
        ))}
      </nav>

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">
          {region.nameKo}
        </h1>
        <p className="text-burgundy-400 text-sm">{region.nameEn}</p>
      </div>

      {/* Tabs */}
      <Tabs tabs={tabs} />

      {/* Sub-regions */}
      {children.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">하위 산지</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {children.map((child) => (
              <Card
                key={child.id}
                hover
                onClick={() => router.push(`/regions/${child.id}`)}
                className="p-4"
              >
                <div className="font-semibold text-burgundy-700">{child.nameKo}</div>
                <div className="text-xs text-burgundy-400 mb-2">{child.nameEn}</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {child.climate.type.map((t) => (
                    <Badge key={t} variant="climate">{t}</Badge>
                  ))}
                </div>
                <p className="text-xs text-burgundy-600 line-clamp-2">
                  {child.keyFacts[0] || child.climate.description}
                </p>
                {child.grapes.slice(0, 3).map((g) => {
                  const grape = getGrape(g.grapeId);
                  return grape ? (
                    <Badge
                      key={g.grapeId}
                      variant={grape.color === "red" ? "grape-red" : "grape-white"}
                    >
                      {grape.nameKo}
                    </Badge>
                  ) : null;
                })}
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
