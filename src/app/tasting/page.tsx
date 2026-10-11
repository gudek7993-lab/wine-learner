"use client";

import { Eye, Wind, Drop, Scales } from "@phosphor-icons/react";
import PageHeader from "@/components/ui/PageHeader";

const satFramework = {
  appearance: {
    title: "외관 (Appearance)",
    items: [
      { label: "투명도", options: ["맑음 (clear)", "탁함 (hazy, 결함)"] },
      { label: "강도", options: ["옅음 (pale)", "중간 (medium)", "진함 (deep)"] },
      { label: "색상 (화이트)", options: ["레몬 그린", "레몬", "골드", "앰버", "브라운"] },
      { label: "색상 (로제)", options: ["핑크", "살몬", "오렌지"] },
      { label: "색상 (레드)", options: ["퍼플", "루비", "가넷", "토니", "브라운"] },
      { label: "기타 관찰", options: ["레그/티어", "침전물", "페티앙스", "기포"] },
    ],
  },
  nose: {
    title: "향 (Nose)",
    items: [
      { label: "상태", options: ["깨끗함 (clean)", "깨끗하지 않음 (결함)"] },
      { label: "강도", options: ["약함 (light)", "중간(-)", "중간", "중간(+)", "뚜렷함 (pronounced)"] },
      {
        label: "1차 아로마 (포도, 알코올 발효)",
        options: ["꽃", "그린 과일", "시트러스", "핵과", "열대 과일", "붉은 과일", "검은 과일", "말린 과일", "풀/채소", "허브", "향신료"],
      },
      {
        label: "2차 아로마 (발효 후 양조)",
        options: ["효모/자가분해 (빵, 비스킷)", "젖산 발효 (버터, 크림)", "오크 (바닐라, 토스트, 삼나무, 정향)"],
      },
      {
        label: "3차 아로마 (숙성)",
        options: ["산화 숙성 (견과, 캐러멜, 토피)", "과일 숙성 (말린 과일, 조린 과일)", "병 숙성 (꿀, 버섯, 가죽, 흙, 숲 바닥)"],
      },
      { label: "발달 정도", options: ["어림 (youthful)", "발달 중 (developing)", "완전히 발달 (fully developed)", "지남 (tired/past its best)"] },
    ],
  },
  palate: {
    title: "맛 (Palate)",
    items: [
      { label: "당도", options: ["드라이", "오프 드라이", "미디엄 드라이", "미디엄 스위트", "스위트", "루셔스"] },
      { label: "산도", options: ["낮음", "중간(-)", "중간", "중간(+)", "높음"] },
      { label: "타닌 (레드)", options: ["낮음", "중간(-)", "중간", "중간(+)", "높음"] },
      { label: "알코올", options: ["낮음 (11% 미만)", "중간 (11-13.9%)", "높음 (14% 이상)"] },
      { label: "바디", options: ["라이트", "중간(-)", "중간", "중간(+)", "풀"] },
      { label: "무스 (스파클링)", options: ["섬세함 (delicate)", "크리미 (creamy)", "거침 (aggressive)"] },
      { label: "풍미 강도", options: ["약함", "중간(-)", "중간", "중간(+)", "뚜렷함"] },
      { label: "피니시", options: ["짧음", "중간(-)", "중간", "중간(+)", "긺"] },
    ],
  },
  conclusions: {
    title: "결론 (Conclusions)",
    items: [
      {
        label: "품질 수준",
        options: ["결함 (faulty)", "낮음 (poor)", "허용 (acceptable)", "좋음 (good)", "매우 좋음 (very good)", "뛰어남 (outstanding)"],
      },
      { label: "품질 근거 (BLIC)", options: ["균형 (balance)", "길이 (length)", "강도 (intensity)", "복합성 (complexity)"] },
      {
        label: "음용 적기와 숙성 잠재력",
        options: ["너무 어림", "지금 마실 수 있으나 숙성 잠재력 있음", "지금 마실 것, 숙성에 적합하지 않음", "너무 늙음"],
      },
    ],
  },
};

const tastingTips = [
  "품질 판단이 점수의 핵심입니다. 단순히 '좋다/나쁘다'가 아니라, 왜 그 품질 등급인지를 구조적 요소로 뒷받침해야 합니다.",
  "예시: 'Outstanding 품질. 높은 농축도(pronounced intensity), 1차·2차·3차 아로마의 복합성, 높은 산도와 미세한 타닌의 우수한 균형, 매우 긴 피니시가 뛰어난 품질을 나타냅니다.'",
  "Level 3 SAT 결론은 품질 수준과 음용 적기만 평가합니다. 품종이나 산지를 맞혀도 점수가 없으니, 그 시간을 품질 근거(균형, 길이, 강도, 복합성)를 쓰는 데 쓰세요.",
  "테이스팅 답안지에 모든 항목을 빠짐없이 작성하세요. 빈 항목은 0점입니다.",
];

const sectionIcons = { appearance: Eye, nose: Wind, palate: Drop, conclusions: Scales } as const;

export default function TastingPage() {
  const sections = Object.entries(satFramework) as [keyof typeof sectionIcons, (typeof satFramework)["nose"]][];

  return (
    <div className="space-y-12">
      <PageHeader
        title="SAT 테이스팅"
        subtitle="WSET Level 3 Systematic Approach to Tasting"
        lead="외관, 향, 맛, 결론 순서로 관찰하고 모든 관찰을 품질 판단으로 연결합니다. 아래 용어는 답안지에 그대로 쓰는 표현입니다."
      />

      <section className="rounded-xl bg-accent-soft p-5 md:p-6">
        <h2 className="font-bold text-ink">고득점 원칙</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-2">
          {tastingTips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
              <span className="w-4 shrink-0 font-bold tabular-nums text-accent">{i + 1}</span>
              {tip}
            </li>
          ))}
        </ol>
      </section>

      {sections.map(([key, section], idx) => {
        const Icon = sectionIcons[key];
        return (
          <section key={key}>
            <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sunken text-sm font-bold tabular-nums text-ink-2">
                {idx + 1}
              </span>
              {section.title}
              <Icon size={20} className="text-ink-3" aria-hidden />
            </h2>
            <dl className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {section.items.map((item) => (
                <div key={item.label} className="grid gap-2 p-4 md:grid-cols-[10rem_1fr] md:gap-6">
                  <dt className="text-sm font-semibold text-ink">{item.label}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {item.options.map((opt) => (
                      <span key={opt} className="rounded-full bg-sunken px-2.5 py-1 text-xs text-ink-2">
                        {opt}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      <p className="max-w-[70ch] border-t border-line pt-8 leading-relaxed text-ink-2">
        WSET Level 3 테이스팅의 핵심은 품종 맞히기가 아니라 <strong className="text-ink">구조 분석과 품질 판단</strong>입니다.
        각 요소의 강도, 특성, 복합성을 순서대로 평가하고, 결론의 품질 등급을 그 관찰로 뒷받침하세요.
      </p>
    </div>
  );
}
