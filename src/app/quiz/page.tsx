"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

const questions = [
  {
    id: 1,
    question: "보르도 좌안의 주요 포도 품종은?",
    options: ["메를로", "카베르네 소비뇽", "카베르네 프랑", "말벡"],
    correct: 1,
    explanation: "좌안(메독 등)은 자갈 토양으로 카베르네 소비뇽에 적합합니다. 우안이 메를로 위주입니다.",
  },
  {
    id: 2,
    question: "바롤로 DOCG의 최소 총 숙성 기간은?",
    options: ["24개월", "38개월", "50개월", "62개월"],
    correct: 1,
    explanation: "38개월 (그 중 오크 18개월 이상). Riserva는 62개월입니다.",
  },
  {
    id: 3,
    question: "샴페인의 Non-Vintage 최소 앙금 숙성 기간은?",
    options: ["9개월", "12개월", "15개월", "36개월"],
    correct: 2,
    explanation: "15개월. Vintage 샴페인은 최소 36개월입니다.",
  },
  {
    id: 4,
    question: "플로르(Flor)가 사용되는 셰리 스타일은?",
    options: ["올로로소", "피노", "PX", "크림"],
    correct: 1,
    explanation: "피노는 플로르 아래에서 생물학적 숙성합니다. 올로로소는 산화 숙성만 합니다.",
  },
  {
    id: 5,
    question: "비그림자 효과(Rain Shadow)의 대표적 예시 산지는?",
    options: ["보르도", "부르고뉴", "알자스", "말보로"],
    correct: 2,
    explanation: "알자스는 보주 산맥이 비를 차단하여 프랑스에서 가장 건조한 산지 중 하나입니다.",
  },
  {
    id: 6,
    question: "아마로네 양조에서 사용되는 건조 기법의 이름은?",
    options: ["Passerillage", "Appassimento", "Mutage", "Estufagem"],
    correct: 1,
    explanation: "Appassimento: 수확 후 포도를 건조시켜 당분을 농축하는 이탈리아 전통 기법입니다.",
  },
  {
    id: 7,
    question: "마데이라에서 가장 드라이한 스타일의 품종은?",
    options: ["말바지아", "부알", "베르델류", "세르시알"],
    correct: 3,
    explanation: "세르시알이 가장 드라이합니다. 순서: 세르시알 > 베르델류 > 부알 > 말바지아(가장 스위트)",
  },
  {
    id: 8,
    question: "뉴질랜드에서 유일하게 대륙성 기후를 가진 산지는?",
    options: ["말보로", "센트럴 오타고", "호크스 베이", "마틴보로"],
    correct: 1,
    explanation: "센트럴 오타고는 내륙에 위치하여 뉴질랜드 유일의 대륙성 기후를 가집니다.",
  },
  {
    id: 9,
    question: "리오하의 Gran Reserva 적포도주 최소 총 숙성 기간은?",
    options: ["36개월", "48개월", "60개월", "72개월"],
    correct: 2,
    explanation: "60개월 (그 중 오크 18개월 이상)입니다.",
  },
  {
    id: 10,
    question: "다음 중 그르나슈가 주요 품종이 아닌 산지는?",
    options: ["샤토뇌프 뒤 파프", "프리오라트", "바로사 밸리", "코트 로티"],
    correct: 3,
    explanation: "코트 로티는 시라 단독입니다 (약간의 비오니에 블렌딩 허용). 나머지는 모두 그르나슈 중심입니다.",
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const score = questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-burgundy-800">연습 퀴즈</h1>
        <p className="text-burgundy-500 text-sm mt-1">
          WSET Level 3 시험 대비 객관식 문제
        </p>
      </div>

      {!showResults ? (
        <>
          <div className="space-y-5">
            {questions.map((q, index) => (
              <Card key={q.id} className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-burgundy-700 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-burgundy-800">{q.question}</h3>
                </div>
                <div className="space-y-2 ml-10">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(q.id, i)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors ${
                        answers[q.id] === i
                          ? "bg-burgundy-700 text-white font-medium"
                          : "bg-cream-50 text-burgundy-700 hover:bg-cream-100"
                      }`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
              className="px-6 py-3 bg-burgundy-700 text-white rounded-lg font-semibold hover:bg-burgundy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              채점하기
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-5">
          {/* Results Summary */}
          <Card className="p-6 text-center bg-gradient-to-br from-burgundy-50 to-cream-50">
            <div className="text-4xl font-bold text-burgundy-700 mb-2">
              {score} / {questions.length}
            </div>
            <div className="text-xl text-burgundy-600 mb-3">{percentage}%</div>
            <div className="text-sm text-burgundy-500">
              {percentage >= 80 && "🎉 Outstanding! Pass with Distinction 수준입니다!"}
              {percentage >= 65 && percentage < 80 && "✨ Very Good! Pass with Merit 수준입니다!"}
              {percentage >= 55 && percentage < 65 && "✓ Good! Pass 수준입니다!"}
              {percentage < 55 && "📚 조금 더 학습이 필요합니다. 다시 도전하세요!"}
            </div>
          </Card>

          {/* Detailed Results */}
          <div className="space-y-4">
            {questions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correct;
              return (
                <Card
                  key={q.id}
                  className={`p-5 border-l-4 ${
                    isCorrect ? "border-green-500 bg-green-50/30" : "border-red-500 bg-red-50/30"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </div>
                    <h3 className="font-semibold text-burgundy-800">{q.question}</h3>
                  </div>
                  <div className="ml-10 space-y-2">
                    <div className="text-sm">
                      <span className="text-burgundy-500">당신의 답: </span>
                      <Badge variant={isCorrect ? "default" : "grape-red"}>
                        {q.options[userAnswer]}
                      </Badge>
                    </div>
                    {!isCorrect && (
                      <div className="text-sm">
                        <span className="text-burgundy-500">정답: </span>
                        <Badge variant="default">{q.options[q.correct]}</Badge>
                      </div>
                    )}
                    <p className="text-sm text-burgundy-600 bg-white p-3 rounded-lg">
                      {q.explanation}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                setAnswers({});
                setShowResults(false);
              }}
              className="px-6 py-3 bg-burgundy-700 text-white rounded-lg font-semibold hover:bg-burgundy-800 transition-colors"
            >
              다시 풀기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
