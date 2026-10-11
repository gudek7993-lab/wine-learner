"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Shuffle, CheckSquare, Square } from "@phosphor-icons/react";
import ExamTipBox from "@/components/detail/ExamTipBox";
import { writtenQuestions as baseWritten, type WrittenQuestion } from "@/data/quiz/written-questions";
import { lo5WrittenDrills } from "@/data/quiz/lo5-questions";

const writtenQuestions: WrittenQuestion[] = [...baseWritten, ...lo5WrittenDrills];

const STORAGE_KEY = "wine-learner:written-answers";

type Saved = Record<string, { text: string; checked: number[] }>;

function load(): Saved {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Saved;
  } catch {
    return {};
  }
}

function save(data: Saved) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Private mode or storage full: answers simply aren't remembered.
  }
}

const categories = ["전체", ...Array.from(new Set(writtenQuestions.map((q) => q.category)))];

export default function WrittenPractice() {
  const [category, setCategory] = useState("전체");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [saved, setSaved] = useState<Saved>({});

  // localStorage is client-only; read after mount to avoid a hydration mismatch.
  useEffect(() => setSaved(load()), []);

  const list = useMemo<WrittenQuestion[]>(
    () => (category === "전체" ? writtenQuestions : writtenQuestions.filter((q) => q.category === category)),
    [category],
  );
  const q = list[Math.min(index, list.length - 1)];
  const entry = saved[q.id] ?? { text: "", checked: [] };
  const score = entry.checked.length;

  const update = (next: Partial<{ text: string; checked: number[] }>) => {
    setSaved((prev) => {
      const merged = { ...prev, [q.id]: { ...entry, ...next } };
      save(merged);
      return merged;
    });
  };

  const go = (i: number) => {
    setIndex((i + list.length) % list.length);
    setRevealed(false);
  };

  const toggle = (i: number) =>
    update({ checked: entry.checked.includes(i) ? entry.checked.filter((c) => c !== i) : [...entry.checked, i] });

  return (
    <div className="space-y-6">
      <p className="max-w-[62ch] text-ink-2">
        답안을 직접 써 본 뒤 채점 포인트를 펼쳐 스스로 채점하세요. 포인트 하나가 1점입니다. 작성한 답안은 이 기기에 저장됩니다.
      </p>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setIndex(0);
              setRevealed(false);
            }}
            aria-pressed={category === c}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              category === c ? "bg-ink font-semibold text-paper" : "bg-sunken text-ink-2 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <article className="rounded-xl border border-line bg-surface p-5 md:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-3">
          <span className="font-bold tabular-nums text-ink-2">
            {Math.min(index, list.length - 1) + 1} / {list.length}
          </span>
          <span aria-hidden>/</span>
          <span>{q.category}</span>
          <span className="ml-auto rounded-full bg-sunken px-2.5 py-0.5 font-medium text-ink-2">{q.marks}점</span>
        </div>
        <h2 className="mt-3 text-lg font-semibold leading-relaxed text-ink">{q.question}</h2>

        <label htmlFor={`answer-${q.id}`} className="mt-6 block text-sm font-medium text-ink-2">
          내 답안
        </label>
        <textarea
          id={`answer-${q.id}`}
          value={entry.text}
          onChange={(e) => update({ text: e.target.value })}
          rows={7}
          placeholder="원인과 결과를 연결해 포인트별로 쓰세요."
          className="mt-2 w-full resize-y rounded-xl border border-line-strong bg-paper p-4 leading-relaxed text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
        <p className="mt-1.5 text-xs text-ink-3">{entry.text.length}자</p>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover active:scale-[0.98]"
          >
            채점 포인트 보기
          </button>
        ) : (
          <section className="rise mt-6 border-t border-line pt-6" aria-live="polite">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-ink">채점 포인트</h3>
              <p className="text-sm text-ink-2">
                내 점수 <span className="text-lg font-bold tabular-nums text-accent">{score}</span>
                <span className="tabular-nums text-ink-3"> / {q.marks}</span>
              </p>
            </div>
            <p className="mt-1 text-sm text-ink-3">내 답안에 들어 있는 포인트를 체크하세요.</p>
            <ul className="mt-4 space-y-2">
              {q.markingPoints.map((point, i) => {
                const on = entry.checked.includes(i);
                return (
                  <li key={i}>
                    <button
                      onClick={() => toggle(i)}
                      aria-pressed={on}
                      className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm leading-relaxed transition-colors ${
                        on ? "border-ok bg-ok-soft text-ink" : "border-line text-ink-2 hover:bg-sunken"
                      }`}
                    >
                      {on ? (
                        <CheckSquare size={20} weight="fill" className="mt-px shrink-0 text-ok" aria-hidden />
                      ) : (
                        <Square size={20} className="mt-px shrink-0 text-ink-3" aria-hidden />
                      )}
                      {point}
                    </button>
                  </li>
                );
              })}
            </ul>
            {q.examinerTip && (
              <div className="mt-5">
                <ExamTipBox text={q.examinerTip} />
              </div>
            )}
          </section>
        )}
      </article>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => go(index - 1)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink active:scale-[0.98]"
        >
          <ArrowLeft size={16} aria-hidden /> 이전
        </button>
        <button
          onClick={() => go(Math.floor(Math.random() * list.length))}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-ink-3 transition-colors hover:text-ink"
        >
          <Shuffle size={16} aria-hidden /> 무작위
        </button>
        <button
          onClick={() => go(index + 1)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink active:scale-[0.98]"
        >
          다음 <ArrowRight size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}
