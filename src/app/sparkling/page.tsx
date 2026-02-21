"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ComparisonTable from "@/components/explorer/ComparisonTable";
import ExamTipBox from "@/components/detail/ExamTipBox";

const methods = [
  {
    name: "전통 방식 (Traditional Method)",
    nameEn: "Méthode Traditionnelle",
    steps: "베이스 와인 → 리쾨르 드 티라주 추가 → 병 내 2차 발효 → 앙금 숙성 → 리들링 → 데고르주망 → 리쾨르 데크스페디시옹",
    characteristics: "가장 복합적. 빵, 비스킷, 브리오슈 풍미(자가분해). 미세한 기포",
    wines: ["샴페인", "카바", "크레망", "프란치아코르타"],
  },
  {
    name: "탱크 방식 (Tank/Charmat Method)",
    nameEn: "Metodo Martinotti",
    steps: "베이스 와인 → 대형 가압 탱크에서 2차 발효 → 여과 → 병입",
    characteristics: "과일 풍미 보존. 신선하고 꽃향. 비용 효율적. 짧은 숙성",
    wines: ["프로세코", "아스티", "젝트(일부)"],
  },
  {
    name: "트랜스퍼 방식 (Transfer Method)",
    steps: "병 내 2차 발효 후 → 가압 탱크로 옮겨 여과 → 새 병에 병입",
    characteristics: "전통 방식과 유사하나 리들링 생략. 비용 절감",
    wines: ["일부 호주, 뉴질랜드 스파클링"],
  },
  {
    name: "아스티 방식 (Asti Method)",
    steps: "포도즙에서 1회 발효만 (가압 탱크) → 원하는 알코올·당도에서 중단",
    characteristics: "매우 아로마틱, 달콤, 낮은 알코올(5.5~6.5%). 무스카 포도",
    wines: ["아스티 DOCG", "모스카토 다스티"],
  },
];

const champagneStyles = [
  { name: "Non-Vintage (NV)", desc: "여러 빈티지 블렌딩. 하우스 스타일 일관성. 최소 15개월 앙금 숙성" },
  { name: "Vintage", desc: "단일 빈티지. 우수한 해에만 생산. 최소 36개월 앙금 숙성" },
  { name: "Blanc de Blancs", desc: "샤르도네 100%. 우아하고 시트러스 풍미. 섬세한 스타일" },
  { name: "Blanc de Noirs", desc: "피노 누아 and/or 피노 뮈니에 100%. 풍부하고 구조감" },
  { name: "Rosé", desc: "블렌딩 방식(적포도주 소량 혼합) 또는 세니에 방식" },
  { name: "Prestige Cuvée", desc: "최고급 블렌딩. Dom Pérignon, Krug, Cristal 등" },
];

const dosageTable = [
  { style: "Brut Nature", sugar: "0~3 g/L" },
  { style: "Extra Brut", sugar: "0~6 g/L" },
  { style: "Brut", sugar: "0~12 g/L" },
  { style: "Extra Dry", sugar: "12~17 g/L" },
  { style: "Dry/Sec", sugar: "17~32 g/L" },
  { style: "Demi-Sec", sugar: "32~50 g/L" },
  { style: "Doux", sugar: "50 g/L+" },
];

export default function SparklingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">스파클링 와인</h1>
        <p className="text-burgundy-500 text-sm mt-1">양조 방법에 따른 스타일 차이와 주요 스파클링 와인</p>
      </div>

      {/* Methods */}
      <section>
        <h2 className="text-xl font-bold text-burgundy-700 mb-4">양조 방법 비교</h2>
        <div className="space-y-4">
          {methods.map((m) => (
            <Card key={m.name} className="p-5">
              <h3 className="font-bold text-burgundy-700">{m.name}</h3>
              {m.nameEn && <p className="text-xs text-burgundy-400 mb-2">{m.nameEn}</p>}
              <div className="bg-cream-100 p-3 rounded-lg text-xs font-mono text-burgundy-600 mb-3">
                {m.steps}
              </div>
              <p className="text-sm text-burgundy-600 mb-2">{m.characteristics}</p>
              <div className="flex flex-wrap gap-1">
                {m.wines.map((w) => (
                  <Badge key={w} variant="default">{w}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Champagne */}
      <section>
        <h2 className="text-xl font-bold text-burgundy-700 mb-4">샴페인 (Champagne)</h2>
        <Card className="p-5 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">허용 품종</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="grape-red">피노 누아 - 구조, 적과일</Badge>
              <Badge variant="grape-white">샤르도네 - 우아함, 시트러스</Badge>
              <Badge variant="grape-red">피노 뮈니에 - 과일, 유연성</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">스타일</h3>
            <div className="space-y-2">
              {champagneStyles.map((s) => (
                <div key={s.name} className="flex items-start gap-2 text-sm">
                  <Badge variant="technique">{s.name}</Badge>
                  <span className="text-burgundy-600">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">당도 표기 (Dosage)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {dosageTable.map((d) => (
                <div key={d.style} className="bg-cream-50 p-2 rounded text-center">
                  <div className="text-xs font-semibold text-burgundy-700">{d.style}</div>
                  <div className="text-xs text-burgundy-500">{d.sugar}</div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <ExamTipBox text="전통 방식의 각 단계(2차 발효 → 앙금 숙성 → 리들링 → 데고르주망)가 와인에 미치는 영향을 설명할 수 있어야 합니다." />
      </section>

      {/* Other Sparkling */}
      <section>
        <h2 className="text-xl font-bold text-burgundy-700 mb-4">기타 스파클링 와인</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-4">
            <h3 className="font-bold text-burgundy-700">카바 (Cava)</h3>
            <p className="text-xs text-burgundy-400 mb-2">스페인 · 전통 방식</p>
            <p className="text-sm text-burgundy-600">마카베오, 사렐로, 파렐라다. 최소 9개월 앙금 숙성. 가성비 우수.</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold text-burgundy-700">크레망 (Crémant)</h3>
            <p className="text-xs text-burgundy-400 mb-2">프랑스 (샹파뉴 외) · 전통 방식</p>
            <p className="text-sm text-burgundy-600">알자스, 루아르, 부르고뉴, 보르도. 지역 품종 사용.</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold text-burgundy-700">프란치아코르타 (Franciacorta)</h3>
            <p className="text-xs text-burgundy-400 mb-2">이탈리아 롬바르디아 · 전통 방식</p>
            <p className="text-sm text-burgundy-600">샤르도네, 피노 누아, 피노 비앙코. 이탈리아 최고급 스파클링.</p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold text-burgundy-700">프로세코 (Prosecco)</h3>
            <p className="text-xs text-burgundy-400 mb-2">이탈리아 베네토 · 탱크 방식</p>
            <p className="text-sm text-burgundy-600">글레라 품종. 가볍고 과일향, 꽃향. Conegliano Valdobbiadene DOCG가 최고.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
