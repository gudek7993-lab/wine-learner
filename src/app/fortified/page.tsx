"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ExamTipBox from "@/components/detail/ExamTipBox";

const fortifiedWines = {
  sherry: {
    title: "셰리 (Sherry)",
    region: "스페인 안달루시아, 헤레스(Jerez)",
    intro: "알바리사(Albariza, 백악질) 토양. 팔로미노(드라이), 페드로 히메네스(스위트).",
    concepts: [
      {
        name: "플로르 (Flor)",
        desc: "와인 표면에 형성되는 효모 막. 산소 접촉을 차단하고 독특한 풍미(아세트알데히드, 효모 풍미)를 부여. 알코올 15~15.5%에서 생존.",
      },
      {
        name: "솔레라 시스템 (Solera System)",
        desc: "여러 빈티지를 점진적으로 블렌딩하는 숙성 방식. 가장 오래된 배럴(솔레라)에서 일부를 병입하고, 위층(크리아데라)에서 보충. 일관성과 복합성을 동시에 확보.",
      },
    ],
    styles: [
      { name: "피노 (Fino)", desc: "플로르 아래 생물학적 숙성. 15~15.5%. 드라이, 섬세, 아몬드·효모 풍미. 연한 색상." },
      { name: "만사니야 (Manzanilla)", desc: "산루카르 데 바라메다에서만 생산되는 피노. 더 섬세하고 짭짤한 풍미." },
      { name: "아몬티야도 (Amontillado)", desc: "플로르 소멸 후 산화 숙성. 생물학적+산화 숙성 모두 경험. 호두, 캐러멜, 앰버 색." },
      { name: "올로로소 (Oloroso)", desc: "처음부터 17~18%로 강화하여 플로르 차단. 순수 산화 숙성. 호두, 가죽, 다크 과일. 풀바디." },
      { name: "팔로 코르타도 (Palo Cortado)", desc: "아몬티야도의 섬세함 + 올로로소의 바디. 매우 희귀." },
      { name: "페드로 히메네스 (PX)", desc: "건조된 PX 포도. 매우 달콤. 무화과, 건포도, 초콜릿, 커피. 시럽 같은 농축." },
      { name: "크림 셰리 (Cream)", desc: "올로로소 + PX 블렌딩. 달콤하고 풍부." },
    ],
    tips: [
      "플로르의 역할과 솔레라 시스템의 원리를 설명하는 문제가 빈출됩니다.",
      "피노/아몬티야도/올로로소의 차이를 숙성 방식과 알코올 도수 측면에서 구분하세요.",
    ],
  },
  port: {
    title: "포트 (Port)",
    region: "포르투갈 도우루 밸리",
    intro: "발효 도중 그레이프 스피릿(77%)을 첨가하여 발효를 멈추고 잔당을 남김. 투리가 나시오날, 틴타 로리즈, 투리가 프란카 등. 편암 토양, 가파른 계단식 포도밭.",
    concepts: [],
    styles: [
      { name: "루비 포트 (Ruby)", desc: "큰 용기에서 단기 숙성. 밝은 적색, 신선한 과일. 젊은 스타일." },
      { name: "리저브 루비 (Reserve Ruby)", desc: "루비보다 품질 높은 블렌딩. 더 복합적." },
      { name: "LBV (Late Bottled Vintage)", desc: "단일 빈티지, 4~6년 배럴 숙성 후 병입. 빈티지 포트보다 접근성 높음." },
      { name: "빈티지 포트 (Vintage Port)", desc: "최고의 해에만 선언. 2년 배럴 숙성 후 병입. 병 내 장기 숙성(20~50년+). 디캔팅 필수." },
      { name: "토니 포트 (Tawny)", desc: "작은 배럴에서 산화 숙성. 호두, 캐러멜, 건과일. 황갈색으로 변화." },
      { name: "10/20/30/40년 토니", desc: "표기된 연수는 평균 숙성 기간. 연수↑ = 복합성↑, 색 연해짐." },
      { name: "콜레이타 (Colheita)", desc: "단일 빈티지 토니. 최소 7년 배럴 숙성." },
      { name: "화이트 포트", desc: "백포도로 양조. 드라이~스위트. 토닉과 섞어 아페리티프로 인기." },
    ],
    tips: [
      "루비 스타일(환원적 숙성)과 토니 스타일(산화적 숙성)의 차이를 명확히 구분하세요.",
      "빈티지 포트 선언(Declaration)의 의미와 기준을 이해하세요.",
    ],
  },
  madeira: {
    title: "마데이라 (Madeira)",
    region: "포르투갈 마데이라 섬",
    intro: "가열(Estufagem 또는 Canteiro) 과정이 독특. 캐러멜, 견과류, 산화 풍미. 거의 파괴 불가능 — 개봉 후에도 오래 보관, 100년+ 숙성 가능.",
    concepts: [
      { name: "에스투파젬 (Estufagem)", desc: "탱크를 45~50°C로 최소 3개월 가열. 기본~중급 마데이라." },
      { name: "칸테이루 (Canteiro)", desc: "자연 열로 서서히 숙성(따뜻한 다락). 프리미엄 마데이라." },
    ],
    styles: [
      { name: "세르시알 (Sercial)", desc: "가장 드라이. 높은 산도. 시트러스, 아몬드. 아페리티프." },
      { name: "베르델류 (Verdelho)", desc: "미디엄 드라이. 꿀, 견과류, 스모키." },
      { name: "부알 (Bual)", desc: "미디엄 스위트. 캐러멜, 건과일, 풍부한 질감." },
      { name: "말바지아 (Malmsey)", desc: "가장 스위트. 농축, 풍부, 커피·초콜릿·캐러멜." },
    ],
    tips: [
      "마데이라 품종별 당도 순서: 세르시알(드라이) → 베르델류 → 부알 → 말바지아(스위트)를 반드시 암기하세요.",
    ],
  },
};

type FortifiedKey = keyof typeof fortifiedWines;

export default function FortifiedPage() {
  const [activeTab, setActiveTab] = useState<FortifiedKey>("sherry");
  const wine = fortifiedWines[activeTab];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">강화 와인</h1>
        <p className="text-burgundy-500 text-sm mt-1">
          양조 과정 중 증류주를 첨가하여 알코올을 높인 와인. 첨가 시점이 스타일을 결정합니다.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {(Object.keys(fortifiedWines) as FortifiedKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === key
                ? "bg-burgundy-700 text-white"
                : "bg-cream-100 text-burgundy-600 hover:bg-cream-200"
            }`}
          >
            {fortifiedWines[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-5">
        <Card className="p-5">
          <h2 className="text-xl font-bold text-burgundy-700 mb-1">{wine.title}</h2>
          <p className="text-xs text-burgundy-400 mb-3">{wine.region}</p>
          <p className="text-sm text-burgundy-600">{wine.intro}</p>
        </Card>

        {/* Key Concepts */}
        {wine.concepts.length > 0 && (
          <section>
            <h3 className="text-lg font-bold text-burgundy-700 mb-3">핵심 개념</h3>
            <div className="space-y-3">
              {wine.concepts.map((c) => (
                <Card key={c.name} className="p-4 border-l-4 border-gold-400">
                  <h4 className="font-semibold text-burgundy-700">{c.name}</h4>
                  <p className="text-sm text-burgundy-600 mt-1">{c.desc}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Styles */}
        <section>
          <h3 className="text-lg font-bold text-burgundy-700 mb-3">스타일</h3>
          <div className="space-y-2">
            {wine.styles.map((s) => (
              <Card key={s.name} className="p-4">
                <div className="flex items-start gap-3">
                  <Badge variant="technique">{s.name}</Badge>
                  <p className="text-sm text-burgundy-600">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips */}
        {wine.tips.map((tip, i) => (
          <ExamTipBox key={i} text={tip} />
        ))}
      </div>
    </div>
  );
}
