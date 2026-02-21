"use client";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const satFramework = {
  appearance: {
    title: "외관 (Appearance)",
    items: [
      { label: "투명도", options: ["맑음", "탁함", "흐림"] },
      { label: "강도", options: ["연한", "중간", "진한"] },
      { label: "색상 (적)", options: ["자주색", "루비", "가넷", "황갈색"] },
      { label: "색상 (백)", options: ["레몬", "골드", "호박색", "갈색"] },
    ],
  },
  nose: {
    title: "코 (Nose)",
    items: [
      { label: "청결도", options: ["깨끗함", "결함 있음"] },
      { label: "강도", options: ["약함", "중간", "뚜렷함"] },
      {
        label: "1차 아로마",
        options: [
          "꽃향 (rose, violet, elderflower)",
          "과일 (citrus, stone fruit, tropical, red fruit, black fruit)",
          "허브 (green pepper, eucalyptus, mint)",
          "향신료 (black pepper, licorice)",
        ],
      },
      {
        label: "2차 아로마 (발효)",
        options: ["효모 (bread, biscuit, lees)", "유산발효 (butter, cream)", "오크 (vanilla, coconut, cedar, smoke)"],
      },
      {
        label: "3차 아로마 (숙성)",
        options: ["견과류 (almond, hazelnut)", "캐러멜, 토피", "가죽, 흙", "버섯, 삼림", "건과일"],
      },
    ],
  },
  palate: {
    title: "맛 (Palate)",
    items: [
      { label: "단맛", options: ["드라이", "오프 드라이", "미디엄 스위트", "스위트", "루시어스"] },
      { label: "산도", options: ["낮음", "중간", "중간+", "높음"] },
      { label: "타닌 (적)", options: ["낮음", "중간", "중간+", "높음"] },
      { label: "타닌 질감", options: ["미세함", "거칠음", "벨벳 같음", "떫음"] },
      { label: "알코올", options: ["낮음 (<11%)", "중간 (11-13.9%)", "높음 (14%+)"] },
      { label: "바디", options: ["라이트", "미디엄", "미디엄+", "풀"] },
      { label: "풍미 강도", options: ["약함", "중간", "뚜렷함"] },
      { label: "피니시", options: ["짧음", "중간", "긺"] },
    ],
  },
  conclusions: {
    title: "결론 (Conclusions)",
    items: [
      {
        label: "품질 평가",
        options: [
          "Faulty - 결함",
          "Poor - 불균형, 단순",
          "Acceptable - 정확하지만 단순",
          "Good - 균형 잡힌, 일부 복합성",
          "Very Good - 뚜렷한 특성, 좋은 복합성과 길이",
          "Outstanding - 강렬한 특성, 뛰어난 복합성·균형·길이",
        ],
      },
      { label: "음용 적기", options: ["지금", "숙성 가능 (5년+)", "장기 숙성 (10년+)"] },
    ],
  },
};

const tastingTips = [
  "품질 판단이 점수의 핵심입니다. 단순히 '좋다/나쁘다'가 아니라, 왜 그 품질 등급인지를 구조적 요소로 뒷받침해야 합니다.",
  "예시: 'Outstanding 품질. 높은 농축도(pronounced intensity), 1차·2차·3차 아로마의 복합성, 높은 산도와 미세한 타닌의 우수한 균형, 매우 긴 피니시가 뛰어난 품질을 나타냅니다.'",
  "테이스팅 시 절대 품종 이름을 먼저 떠올리지 마세요. SAT 순서대로 분석한 후, 결론에서 해당 특성에 맞는 품종/산지를 추론하세요.",
  "테이스팅 답안지에 모든 항목을 빠짐없이 작성하세요. 빈 항목은 0점입니다.",
];

export default function TastingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">
          SAT 테이스팅 가이드
        </h1>
        <p className="text-burgundy-500 text-sm mt-1">
          WSET Level 3 Systematic Approach to Tasting
        </p>
      </div>

      <Card className="p-5 bg-cream-50">
        <h3 className="font-bold text-burgundy-700 mb-2">🎯 테이스팅 팁</h3>
        <ul className="space-y-2">
          {tastingTips.map((tip, i) => (
            <li key={i} className="text-sm text-burgundy-700 flex items-start gap-2">
              <span className="text-gold-500 shrink-0">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </Card>

      {/* Framework Sections */}
      {Object.entries(satFramework).map(([key, section]) => (
        <section key={key}>
          <h2 className="text-xl font-bold text-burgundy-700 mb-4">{section.title}</h2>
          <div className="space-y-3">
            {section.items.map((item) => (
              <Card key={item.label} className="p-4">
                <h4 className="font-semibold text-burgundy-700 mb-2 text-sm">{item.label}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.options.map((opt) => (
                    <Badge key={opt} variant="default">
                      {opt}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <Card className="p-5 bg-burgundy-50">
        <h3 className="font-bold text-burgundy-700 mb-2">📝 체계적 접근의 중요성</h3>
        <p className="text-sm text-burgundy-600">
          WSET Level 3 테이스팅은 품종 맞히기가 아닌 <strong>구조적 분석과 품질 판단</strong>이 핵심입니다.
          외관부터 결론까지 순서대로 분석하면서 각 요소의 강도, 특성, 복합성을 평가하세요.
          모든 관찰을 결론의 품질 평가와 연결시키는 것이 고득점의 비결입니다.
        </p>
      </Card>
    </div>
  );
}
