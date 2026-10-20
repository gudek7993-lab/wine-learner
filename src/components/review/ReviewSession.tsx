"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { QuestionCard } from "@/components/quiz/McqPractice";
import { allMcq, getMcq } from "@/lib/exam";
import { buildSession, dueIds, loadDeck, recordAnswer } from "@/lib/srs";

const pool = allMcq.filter((q) => !q.outOfScope).map((q) => q.id);

export default function ReviewSession() {
  const [ids, setIds] = useState<string[] | null>(null);
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState<number | undefined>();
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const nextBtn = useRef<HTMLButtonElement>(null);

  // The deck lives in localStorage: build the session after mount.
  useEffect(() => setIds(buildSession(pool)), []);
  useEffect(() => {
    if (answer !== undefined) nextBtn.current?.focus();
  }, [answer]);

  if (!ids) return <div className="h-64 animate-pulse rounded-xl border border-line bg-surface" aria-busy />;

  if (ids.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-line-strong p-6 text-ink-2">
        오늘 복습할 문제가 없습니다. 모의고사나 연습 문제를 풀면 틀린 문제가 여기에 쌓입니다.
      </p>
    );
  }

  if (i >= ids.length) {
    const tomorrow = dueIds(loadDeck(), Date.now() + 86_400_000).length;
    return (
      <section className="rise rounded-xl border border-line bg-surface p-6 md:p-8">
        <CheckCircle size={32} weight="fill" className="text-ok" aria-hidden />
        <h2 className="mt-3 text-2xl font-bold tracking-tight">오늘 복습 완료</h2>
        <p className="mt-2 text-ink-2">
          맞힘 <span className="font-semibold tabular-nums text-ok">{score.right}</span>, 틀림{" "}
          <span className="font-semibold tabular-nums text-bad">{score.wrong}</span>. 내일 복습할 문제는 {tomorrow}문항입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/quiz" className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium text-ink-2 hover:border-ink hover:text-ink">
            연습 문제 더 풀기
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-on-accent hover:bg-accent-hover">
            홈으로
          </Link>
        </div>
      </section>
    );
  }

  const q = getMcq(ids[i]);
  const goNext = () => {
    setI((n) => n + 1);
    setAnswer(undefined);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-ink-3">
        <span>
          <span className="font-semibold tabular-nums text-ink">{i + 1}</span> / {ids.length}
        </span>
        <span className="tabular-nums">
          맞힘 {score.right} / 틀림 {score.wrong}
        </span>
      </div>
      {q ? (
        <QuestionCard
          q={q}
          index={i}
          answer={answer}
          onAnswer={(opt) => {
            const correct = opt === q.correct;
            setAnswer(opt);
            setScore((s) => (correct ? { ...s, right: s.right + 1 } : { ...s, wrong: s.wrong + 1 }));
            recordAnswer(q.id, correct);
          }}
        />
      ) : null}
      {(answer !== undefined || !q) && (
        <button
          ref={nextBtn}
          onClick={goNext}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper active:scale-[0.98]"
        >
          {i + 1 < ids.length ? "다음 문제" : "결과 보기"} <ArrowRight size={16} aria-hidden />
        </button>
      )}
    </div>
  );
}
