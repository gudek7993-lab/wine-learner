"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const viticultureTopics = [
  {
    title: "포도나무 생장 주기",
    content: "휴면기(겨울) → 눈틔움(봄) → 개화·결실 → 베레종(색변화) → 성숙 → 수확 → 낙엽",
    tip: "생장 주기의 각 단계에서 기후가 미치는 영향을 설명할 수 있어야 합니다.",
  },
  {
    title: "기후 유형",
    items: [
      { label: "서늘한 기후 (Cool)", desc: "샴페인, 부르고뉴, 모젤, 오레곤. 높은 산도, 섬세한 와인" },
      { label: "온화한 기후 (Moderate)", desc: "보르도, 리오하. 균형 잡힌 와인" },
      { label: "따뜻한 기후 (Warm)", desc: "바로사, 남부 론. 풍부하고 농축된 와인" },
      { label: "뜨거운 기후 (Hot)", desc: "내륙 호주, 센트럴 밸리. 매우 잘 익은 과일, 높은 알코올" },
    ],
  },
  {
    title: "기후 영향 요인",
    items: [
      { label: "위도 (Latitude)", desc: "적도에서 멀어질수록 기온 하강. 와인 벨트: 북위 30~50°, 남위 30~45°" },
      { label: "고도 (Altitude)", desc: "100m 상승 시 약 0.6~1°C 하강. 일교차 증가. 예: 멘도사 600~1,500m" },
      { label: "해류 (Ocean Currents)", desc: "한류는 냉각(훔볼트, 벵겔라), 난류는 가온(걸프 스트림)" },
      { label: "산맥 (Mountains)", desc: "비그림자 효과로 건조. 예: 알자스(보주 산맥), 워싱턴(캐스케이드)" },
      { label: "안개/해무 (Fog)", desc: "아침 안개로 냉각. 예: 소노마 카운티, 카사블랑카 밸리" },
    ],
  },
  {
    title: "토양",
    items: [
      { label: "자갈/모래 (Gravel/Sand)", desc: "배수 우수, 열 반사. 보르도 좌안, 그라브" },
      { label: "점토 (Clay)", desc: "보수력 높음, 서늘함 유지. 보르도 우안, 포므롤" },
      { label: "석회암 (Limestone)", desc: "배수 우수, 높은 pH. 부르고뉴, 샹파뉴" },
      { label: "편암 (Slate/Schist)", desc: "열 흡수·복사. 모젤, 도우루, 프리오라트" },
      { label: "화산토 (Volcanic)", desc: "미네랄 풍부, 배수 우수. 에트나, 소아베" },
    ],
    tip: "WSET Level 3에서는 토양이 '미네랄 풍미'를 준다고 단정짓지 않습니다. 물리적 특성에 집중하세요.",
  },
  {
    title: "포도밭 관리",
    items: [
      { label: "전정 (Pruning)", desc: "Cane pruning(갱 전정): 서늘한 기후. Spur pruning(짧은가지): 따뜻한 기후" },
      { label: "캐노피 관리", desc: "적엽(Leaf removal), 적과(Green harvesting), 줄기 유인(Shoot positioning)" },
      { label: "관개 (Irrigation)", desc: "EU는 제한/금지 多. 신세계는 Drip irrigation 널리 사용" },
      { label: "유기농/바이오다이나믹", desc: "유기농: 합성 농약·비료 금지. 바이오다이나믹: +천체 달력, 특수 조제물" },
    ],
  },
];

const vinificationTopics = [
  {
    title: "백포도주 양조",
    content: "수확 → 제경·파쇄(또는 전포도 압착) → 압착 → 정치 → 발효 → 숙성 → 청징·여과 → 병입",
    items: [
      { label: "발효 온도", desc: "서늘한 온도(12~16°C)에서 과일 아로마 보존" },
      { label: "발효 용기", desc: "스테인리스: 과일 풍미 보존. 오크 배럴: 크리미한 질감, 복합성" },
      { label: "유산발효 (MLF)", desc: "사과산→젖산. 산도 낮추고 부드러운 질감. 샤르도네에 흔함, 리슬링엔 차단" },
      { label: "스킨 컨택트", desc: "발효 전 과피 접촉으로 아로마·질감 추출. 아로마틱 품종에서 사용" },
    ],
  },
  {
    title: "적포도주 양조",
    content: "수확 → 제경·파쇄 → 발효(과피 침용) → 압착 → 숙성 → 청징·여과 → 병입",
    items: [
      { label: "침용 (Maceration)", desc: "과피에서 색소(안토시아닌), 타닌, 풍미 추출. 핵심 공정" },
      { label: "발효 온도", desc: "25~30°C. 너무 높으면(35°C+) 효모 사멸 위험" },
      { label: "전포도 발효", desc: "줄기 포함 발효. 향신료 풍미, 구조감. 부르고뉴, 론에서 사용" },
      { label: "탄산침용", desc: "CO₂ 환경에서 세포 내 발효. 밝은 과일, 낮은 타닌. 보졸레 누보 대표적" },
    ],
  },
  {
    title: "오크 숙성",
    items: [
      { label: "프랑스산 오크", desc: "섬세한 풍미, 미세한 결. 바닐라, 삼나무, 정향" },
      { label: "미국산 오크", desc: "코코넛, 딜(dill) 풍미가 강하고 결이 굵음" },
      { label: "새 오크 vs 오래된 오크", desc: "새 오크: 강한 풍미·타닌 부여. 오래된 오크: 산소 접촉만, 풍미 미미" },
      { label: "오크 대안", desc: "오크 칩, 스태브, 가루. 비용 절감. 복합성은 낮지만 효율적" },
    ],
  },
  {
    title: "기타 양조 선택",
    items: [
      { label: "효모 선택", desc: "자연 효모: 복합성↑ 예측 불가↑. 배양 효모: 안정적, 특정 프로파일" },
      { label: "앙금 숙성 (Lees)", desc: "크리미한 질감, 빵/비스킷 풍미. 뮈스카데 Sur lie, 샴페인" },
      { label: "블렌딩", desc: "품종, 빈티지, 산지 블렌딩으로 복합성·균형·일관성 추구" },
      { label: "청징/여과", desc: "안정성·투명도↑. 일부는 Unfined/Unfiltered로 질감 보존" },
    ],
  },
];

export default function TechniquesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">양조 기법</h1>
        <p className="text-burgundy-500 text-sm mt-1">
          포도 재배학(Viticulture)과 양조학(Vinification)의 핵심 개념
        </p>
      </div>

      {/* Viticulture */}
      <section>
        <h2 className="text-xl font-bold text-burgundy-700 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-sm">🌱</span>
          포도 재배학 (Viticulture)
        </h2>
        <div className="space-y-4">
          {viticultureTopics.map((topic) => (
            <Card key={topic.title} className="p-5">
              <h3 className="font-bold text-burgundy-700 mb-2">{topic.title}</h3>
              {topic.content && (
                <p className="text-sm text-burgundy-600 mb-3 bg-cream-100 p-3 rounded-lg">
                  {topic.content}
                </p>
              )}
              {topic.items && (
                <div className="space-y-2">
                  {topic.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-2 text-sm">
                      <Badge variant="technique">{item.label}</Badge>
                      <span className="text-burgundy-600">{item.desc}</span>
                    </div>
                  ))}
                </div>
              )}
              {topic.tip && (
                <div className="exam-tip mt-3">
                  <span className="text-gold-500 font-bold text-sm">EXAM TIP</span>
                  <span className="text-sm text-burgundy-800 ml-2">{topic.tip}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Vinification */}
      <section>
        <h2 className="text-xl font-bold text-burgundy-700 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-burgundy-100 flex items-center justify-center text-sm">🏺</span>
          양조학 (Vinification)
        </h2>
        <div className="space-y-4">
          {vinificationTopics.map((topic) => (
            <Card key={topic.title} className="p-5">
              <h3 className="font-bold text-burgundy-700 mb-2">{topic.title}</h3>
              {topic.content && (
                <p className="text-sm text-burgundy-600 mb-3 bg-cream-100 p-3 rounded-lg font-mono text-xs">
                  {topic.content}
                </p>
              )}
              {topic.items && (
                <div className="space-y-2">
                  {topic.items.map((item) => (
                    <div key={item.label} className="flex items-start gap-2 text-sm">
                      <Badge variant="technique">{item.label}</Badge>
                      <span className="text-burgundy-600">{item.desc}</span>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
