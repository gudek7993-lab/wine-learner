"use client";

import { Plant, Flask } from "@phosphor-icons/react";
import PageHeader from "@/components/ui/PageHeader";
import TopicBlock from "@/components/ui/TopicBlock";
import type { StudyTopic } from "@/data/types";

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
      { label: "고도 (Altitude)", desc: "100m 상승할 때마다 약 0.6°C 하강. 일교차 증가. 예: 멘도사 600~1,500m" },
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
      { label: "화산토 (Volcanic)", desc: "배수가 좋고 척박해 수확량이 낮음. 에트나, 소아베" },
    ],
    tip: "WSET Level 3에서는 토양이 '미네랄 풍미'를 준다고 단정짓지 않습니다. 물리적 특성에 집중하세요.",
  },
  {
    title: "포도밭 관리",
    items: [
      { label: "전정 (Pruning)", desc: "케인 전정(Cane): 긴 가지를 남겨 유인, 서늘한 지역에 흔한 편. 스퍼 전정(Spur): 코르동 위 짧은 가지를 남김, 기계화에 유리해 따뜻한 지역에 흔한 편" },
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
      { label: "발효 온도", desc: "약 20~32°C. 높을수록 색과 타닌 추출이 늘지만, 너무 높으면(35°C 이상) 효모가 죽어 발효가 멈출 위험" },
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
  const groups = [
    { id: "viticulture", title: "포도 재배", en: "Viticulture", icon: Plant, topics: viticultureTopics as StudyTopic[] },
    { id: "vinification", title: "양조", en: "Vinification", icon: Flask, topics: vinificationTopics as StudyTopic[] },
  ];

  return (
    <div className="space-y-14">
      <PageHeader
        title="재배와 양조"
        lead="포도밭과 양조장에서의 선택이 와인 스타일로 어떻게 이어지는지 정리했습니다. 시험에서는 원인과 결과를 함께 설명해야 합니다."
        aside={
          <nav aria-label="섹션" className="flex gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {g.title}
              </a>
            ))}
          </nav>
        }
      />
      {groups.map(({ id, title, en, icon: Icon, topics }) => (
        <section key={id} id={id} className="scroll-mt-24">
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Icon size={26} weight="duotone" className="text-accent" aria-hidden />
            {title}
            <span className="text-base font-normal text-ink-3">{en}</span>
          </h2>
          <div className="mt-6 space-y-4">
            {topics.map((topic) => (
              <TopicBlock key={topic.title} topic={topic} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
