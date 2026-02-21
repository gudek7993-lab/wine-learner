"use client";

import { useParams, useRouter } from "next/navigation";
import { getGrape, getRegion } from "@/lib/data-loader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ExamTipBox from "@/components/detail/ExamTipBox";
import Link from "next/link";

export default function GrapeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const grapeId = params.grapeId as string;
  const grape = getGrape(grapeId);

  if (!grape) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-burgundy-700">품종을 찾을 수 없습니다</h1>
        <Link href="/grapes" className="text-burgundy-500 hover:underline mt-4 inline-block">
          품종 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const c = grape.characteristics;

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1 text-sm text-burgundy-400">
        <Link href="/" className="hover:text-burgundy-700">홈</Link>
        <span>/</span>
        <Link href="/grapes" className="hover:text-burgundy-700">포도 품종</Link>
        <span>/</span>
        <span className="text-burgundy-700 font-medium">{grape.nameKo}</span>
      </nav>

      {/* Header */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${
            grape.color === "red" ? "bg-burgundy-700" : "bg-gold-400"
          }`}
        >
          {grape.color === "red" ? "적" : "백"}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">
            {grape.nameKo}
          </h1>
          <p className="text-burgundy-400">{grape.nameEn}</p>
        </div>
      </div>

      {/* Characteristics */}
      <Card className="p-5">
        <h2 className="text-lg font-bold mb-4">특성</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-xs font-semibold text-burgundy-400 mb-1">바디</div>
            <div className="text-sm font-medium">{c.body}</div>
          </div>
          {c.tannin && (
            <div>
              <div className="text-xs font-semibold text-burgundy-400 mb-1">타닌</div>
              <div className="text-sm font-medium">{c.tannin}</div>
            </div>
          )}
          {c.acidity && (
            <div>
              <div className="text-xs font-semibold text-burgundy-400 mb-1">산도</div>
              <div className="text-sm font-medium">{c.acidity}</div>
            </div>
          )}
          {c.alcohol && (
            <div>
              <div className="text-xs font-semibold text-burgundy-400 mb-1">알코올</div>
              <div className="text-sm font-medium">{c.alcohol}</div>
            </div>
          )}
          {c.agingPotential && (
            <div>
              <div className="text-xs font-semibold text-burgundy-400 mb-1">숙성 잠재력</div>
              <div className="text-sm font-medium">{c.agingPotential}</div>
            </div>
          )}
        </div>

        {/* Aromas */}
        <div className="mt-4">
          <div className="text-xs font-semibold text-burgundy-400 mb-2">주요 아로마</div>
          <div className="flex flex-wrap gap-2">
            {c.aromas.map((a) => (
              <Badge key={a} variant={grape.color === "red" ? "grape-red" : "grape-white"}>
                {a}
              </Badge>
            ))}
          </div>
        </div>

        {c.otherNotes && (
          <p className="text-sm text-burgundy-600 mt-3">{c.otherNotes}</p>
        )}
      </Card>

      {/* Regions */}
      <section>
        <h2 className="text-lg font-bold mb-3">주요 산지</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {grape.regions.map((r) => {
            const region = getRegion(r.regionId);
            return (
              <Card
                key={r.regionId}
                hover
                onClick={() => router.push(`/regions/${r.regionId}`)}
                className="p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-burgundy-700">
                    {region?.nameKo || r.regionId}
                  </span>
                  <span className="text-xs text-burgundy-400">
                    {region?.nameEn}
                  </span>
                </div>
                {r.localName && (
                  <div className="text-xs text-gold-600 mb-1">
                    현지명: {r.localName}
                  </div>
                )}
                <p className="text-xs text-burgundy-600">{r.significance}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Winemaking */}
      {grape.winemaking.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">양조 특징</h2>
          <ul className="space-y-2">
            {grape.winemaking.map((note, i) => (
              <li key={i} className="text-sm text-burgundy-700 flex items-start gap-2">
                <span className="text-gold-500 shrink-0">•</span>
                {note}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Exam Tips */}
      {grape.examTips.map((tip, i) => (
        <ExamTipBox key={i} text={tip} />
      ))}
    </div>
  );
}
