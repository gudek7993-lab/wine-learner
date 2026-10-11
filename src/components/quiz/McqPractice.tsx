"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, ArrowClockwise } from "@phosphor-icons/react";
import Badge from "@/components/ui/Badge";
import { OutOfScopeBadge } from "@/components/ui/OutOfScope";
import type { QuizQuestion } from "@/data/quiz/question-bank";
import { allMcq } from "@/lib/exam";

function getRandomQuestions(n: number): QuizQuestion[] {
  const a = [...allMcq];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

const QUESTIONS_PER_QUIZ = 10;
const difficultyLabel = { easy: "쉬움", medium: "보통", hard: "어려움" } as const;

/** WSET Level 3 theory grade bands. */
function gradeFor(pct: number) {
  if (pct >= 80) return { label: "Distinction", note: "Pass with Distinction 수준입니다." };
  if (pct >= 65) return { label: "Merit", note: "Pass with Merit 수준입니다." };
  if (pct >= 55) return { label: "Pass", note: "합격선(55%)을 넘었습니다." };
  return { label: "재도전", note: "합격선은 55%입니다. 틀린 문제의 해설을 다시 읽어 보세요." };
}

function QuestionCard({
  q,
  index,
  answer,
  onAnswer,
}: {
  q: QuizQuestion;
  index: number;
  answer: number | undefined;
  onAnswer: (i: number) => void;
}) {
  const answered = answer !== undefined;
  const isCorrect = answer === q.correct;

  return (
    <article className="rounded-xl border border-line bg-surface p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-3">
        <span className="font-bold tabular-nums text-ink-2">문제 {index + 1}</span>
        <span aria-hidden>/</span>
        <span>{q.category}</span>
        {q.outOfScope && <OutOfScopeBadge className="ml-auto" />}
        <Badge className={q.outOfScope ? "" : "ml-auto"}>{difficultyLabel[q.difficulty]}</Badge>
      </div>
      <h2 className="mt-3 text-lg font-semibold leading-snug text-ink">{q.question}</h2>

      <div className="mt-5 grid gap-2" role="radiogroup" aria-label={`문제 ${index + 1} 보기`}>
        {q.options.map((opt, i) => {
          const chosen = answer === i;
          const right = answered && i === q.correct;
          const wrong = answered && chosen && !right;
          return (
            <button
              key={i}
              role="radio"
              aria-checked={chosen}
              disabled={answered}
              onClick={() => onAnswer(i)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors active:scale-[0.99] ${
                right
                  ? "border-ok bg-ok-soft text-ink"
                  : wrong
                    ? "border-bad bg-bad-soft text-ink"
                    : answered
                      ? "border-line text-ink-3"
                      : "border-line text-ink-2 hover:border-line-strong hover:bg-sunken"
              }`}
            >
              <span className="w-4 shrink-0 font-semibold text-ink-3">{String.fromCharCode(65 + i)}</span>
              <span className="flex-1">{opt}</span>
              {right && <CheckCircle size={20} weight="fill" className="shrink-0 text-ok" aria-label="정답" />}
              {wrong && <XCircle size={20} weight="fill" className="shrink-0 text-bad" aria-label="오답" />}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="rise mt-4 rounded-xl bg-sunken p-4 text-sm leading-relaxed text-ink-2" aria-live="polite">
          <span className={`mr-2 font-semibold ${isCorrect ? "text-ok" : "text-bad"}`}>{isCorrect ? "정답" : "오답"}</span>
          {q.explanation}
        </div>
      )}
    </article>
  );
}

export default function McqPractice() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const loadNewQuiz = () => {
    setQuestions(getRandomQuestions(QUESTIONS_PER_QUIZ));
    setAnswers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Random selection must happen on the client to avoid a hydration mismatch.
  useEffect(() => {
    setQuestions(getRandomQuestions(QUESTIONS_PER_QUIZ));
  }, []);

  const answeredCount = Object.keys(answers).length;
  const score = questions.reduce((acc, q) => acc + (answers[q.id] === q.correct ? 1 : 0), 0);
  const done = questions.length > 0 && answeredCount === questions.length;
  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;
  const grade = gradeFor(pct);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-[60ch] text-ink-2">
          문제 은행 {allMcq.length}문항에서 매번 {QUESTIONS_PER_QUIZ}문항을 무작위로 냅니다. 보기를 고르면 바로 해설이 나옵니다.
        </p>
        <button
          onClick={loadNewQuiz}
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink active:scale-[0.98]"
        >
          <ArrowClockwise size={16} aria-hidden />
          새 문제
        </button>
      </div>

      {/* Progress */}
      <div className="sticky top-[7.25rem] z-10 -mx-4 bg-paper/90 px-4 py-3 backdrop-blur-md lg:top-16">
        <div className="flex items-center justify-between text-sm">
          <span className="text-ink-2">
            <span className="font-semibold tabular-nums text-ink">{answeredCount}</span> / {questions.length || QUESTIONS_PER_QUIZ} 풀이
          </span>
          <span className="tabular-nums text-ink-3">정답 {score}</span>
        </div>
        <div className="mt-2 grid gap-1" style={{ gridTemplateColumns: `repeat(${questions.length || QUESTIONS_PER_QUIZ}, minmax(0, 1fr))` }} aria-hidden>
          {(questions.length ? questions : Array.from({ length: QUESTIONS_PER_QUIZ })).map((q, i) => {
            const qq = q as QuizQuestion | undefined;
            const a = qq ? answers[qq.id] : undefined;
            const cls = a === undefined ? "bg-line" : a === qq!.correct ? "bg-ok" : "bg-bad";
            return <span key={i} className={`h-1.5 rounded-full ${cls}`} />;
          })}
        </div>
      </div>

      {questions.length === 0 ? (
        <div className="space-y-4" aria-busy>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-xl border border-line bg-surface" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {questions.map((q, i) => (
            <QuestionCard key={q.id} q={q} index={i} answer={answers[q.id]} onAnswer={(opt) => setAnswers((prev) => ({ ...prev, [q.id]: opt }))} />
          ))}
        </div>
      )}

      {done && (
        <section className="rise rounded-xl border border-line bg-surface p-6 md:p-8" aria-live="polite">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-ink-3">결과</p>
              <p className="mt-1 text-4xl font-bold tabular-nums tracking-tight text-ink">
                {score} <span className="text-2xl text-ink-3">/ {questions.length}</span>
              </p>
              <p className="mt-2 text-ink-2">
                <span className="font-semibold text-accent">{grade.label}</span> {pct}%. {grade.note}
              </p>
            </div>
            <button
              onClick={loadNewQuiz}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition-colors hover:bg-accent-hover active:scale-[0.98]"
            >
              <ArrowClockwise size={18} aria-hidden />
              새 문제
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
