"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckSquare, Square, ArrowRight, ClockCounterClockwise } from "@phosphor-icons/react";
import Countdown from "./Countdown";
import ExamTipBox from "@/components/detail/ExamTipBox";
import {
  buildMock,
  getMcq,
  getSwa,
  loOf,
  loLabel,
  partKey,
  scoreAttempt,
  theoryGrade,
  loadCurrent,
  saveCurrent,
  loadHistory,
  saveHistory,
  MCQ_WEIGHTS,
  type MockAttempt,
  type MockResult,
} from "@/lib/exam";
import type { LearningOutcome } from "@/data/quiz/exam-types";

const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);
const fmtDate = (t: number) => new Date(t).toLocaleDateString("ko-KR", { month: "long", day: "numeric" });

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition-colors hover:bg-accent-hover active:scale-[0.98]";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink active:scale-[0.98]";

// ---------------- intro ----------------
function Intro({ history, onStart }: { history: MockResult[]; onStart: () => void }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <section className="space-y-6 lg:col-span-7">
        <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
          {[
            ["시간", "2시간, 시간이 끝나면 자동 제출"],
            ["1부 객관식", "50문항, 1문항 1점"],
            ["2부 서술형", "4문항, 문항당 25점"],
          ].map(([k, v]) => (
            <div key={k} className="bg-surface p-4">
              <dt className="text-xs text-ink-3">{k}</dt>
              <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="space-y-2 text-sm leading-relaxed text-ink-2">
          <p>
            객관식은 사양서 비중대로 냅니다: 재배와 양조 {MCQ_WEIGHTS[1]}, 스틸 와인 {MCQ_WEIGHTS[2]}, 스파클링 {MCQ_WEIGHTS[3]}, 강화 와인{" "}
            {MCQ_WEIGHTS[4]}, 서비스와 페어링 {MCQ_WEIGHTS[5]}문항.
          </p>
          <p>서술형은 제출 후 채점 포인트를 보며 스스로 채점합니다. 이전 모의고사에 나온 문제는 되도록 피합니다.</p>
          <p>
            합격은 파트별 55%, Distinction은 전체 80% 이상이면서 어느 시험도 65% 미만이 없어야 합니다. 이 결과는 이론만 본
            추정치입니다.
          </p>
        </div>
        <button onClick={onStart} className={btnPrimary}>
          모의고사 시작 <ArrowRight size={18} aria-hidden />
        </button>
      </section>

      <aside className="lg:col-span-5">
        <h2 className="flex items-center gap-2 font-bold text-ink">
          <ClockCounterClockwise size={18} aria-hidden /> 지난 결과
        </h2>
        {history.length === 0 ? (
          <p className="mt-3 rounded-xl border border-dashed border-line-strong p-5 text-sm text-ink-3">
            아직 응시 기록이 없습니다. 첫 모의고사로 약한 영역을 확인하세요.
          </p>
        ) : (
          <ol className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
            {[...history].reverse().map((h) => {
              const g = theoryGrade(pct(h.mcqScore, h.mcqTotal), pct(h.swaScore, h.swaTotal));
              return (
                <li key={h.id} className="grid grid-cols-[1fr_auto] gap-2 p-4 text-sm">
                  <span className="text-ink-2">{fmtDate(h.date)}</span>
                  <span className="font-semibold text-ink">{g.label}</span>
                  <span className="col-span-2 tabular-nums text-ink-3">
                    객관식 {pct(h.mcqScore, h.mcqTotal)}%, 서술형 {pct(h.swaScore, h.swaTotal)}%
                  </span>
                </li>
              );
            })}
          </ol>
        )}
      </aside>
    </div>
  );
}

// ---------------- exam ----------------
function Exam({
  attempt,
  setAttempt,
  onSubmit,
}: {
  attempt: MockAttempt;
  setAttempt: (fn: (a: MockAttempt) => MockAttempt) => void;
  onSubmit: () => void;
}) {
  const [part, setPart] = useState<1 | 2>(1);
  const answered = Object.keys(attempt.mcqAnswers).length;

  const submit = () => {
    const unanswered = attempt.mcqIds.length - answered;
    const msg = unanswered > 0 ? `객관식 ${unanswered}문항이 비어 있습니다. 제출할까요?` : "제출하면 수정할 수 없습니다. 제출할까요?";
    if (window.confirm(msg)) onSubmit();
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-[6.85rem] z-10 -mx-4 flex flex-wrap items-center gap-2 border-b border-line bg-paper/90 px-4 py-3 backdrop-blur-md lg:top-16">
        <Countdown endsAt={attempt.endsAt} onExpire={onSubmit} />
        <div role="tablist" aria-label="시험 파트" className="flex gap-1 rounded-full bg-sunken p-1">
          {([1, 2] as const).map((p) => (
            <button
              key={p}
              role="tab"
              aria-selected={part === p}
              onClick={() => {
                setPart(p);
                window.scrollTo({ top: 0 });
              }}
              className={`rounded-full min-h-10 px-3 text-sm ${part === p ? "bg-surface font-semibold text-ink shadow-soft" : "text-ink-3"}`}
            >
              {p === 1 ? `객관식 ${answered}/${attempt.mcqIds.length}` : "서술형"}
            </button>
          ))}
        </div>
        <button onClick={submit} className="ml-auto min-h-11 rounded-full bg-ink px-4 text-sm font-semibold text-paper active:scale-[0.98]">
          제출
        </button>
      </div>

      {part === 1 ? (
        <ol className="space-y-4">
          {attempt.mcqIds.map((id, i) => {
            const q = getMcq(id);
            if (!q) return null;
            return (
              <li key={id} className="rounded-xl border border-line bg-surface p-5">
                <p className="text-xs font-bold tabular-nums text-ink-3">{i + 1}</p>
                <p className="mt-1 font-semibold leading-snug text-ink">{q.question}</p>
                <div className="mt-3 grid gap-1.5 sm:grid-cols-2" role="radiogroup" aria-label={`${i + 1}번 보기`}>
                  {q.options.map((opt, oi) => {
                    const on = attempt.mcqAnswers[id] === oi;
                    return (
                      <button
                        key={oi}
                        role="radio"
                        aria-checked={on}
                        onClick={() => setAttempt((a) => ({ ...a, mcqAnswers: { ...a.mcqAnswers, [id]: oi } }))}
                        className={`flex gap-2.5 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                          on ? "border-accent bg-accent-soft font-medium text-ink" : "border-line text-ink-2 hover:bg-sunken"
                        }`}
                      >
                        <span className="w-4 shrink-0 font-semibold text-ink-3">{String.fromCharCode(65 + oi)}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="space-y-6">
          {attempt.swaIds.length === 0 && (
            <p className="rounded-xl border border-dashed border-line-strong p-5 text-sm text-ink-3">서술형 문제를 준비 중입니다.</p>
          )}
          {attempt.swaIds.map((id, qi) => {
            const q = getSwa(id);
            if (!q) return null;
            return (
              <article key={id} className="rounded-xl border border-line bg-surface p-5 md:p-6">
                <p className="text-xs font-bold text-ink-3">문제 {qi + 1} (25점)</p>
                <p className="mt-2 leading-relaxed text-ink">{q.stem}</p>
                <div className="mt-5 space-y-5">
                  {q.parts.map((p) => {
                    const key = partKey(id, p.label);
                    return (
                      <div key={key}>
                        <label htmlFor={key} className="block font-semibold leading-snug text-ink">
                          ({p.label}) {p.prompt} <span className="font-normal text-ink-3">({p.marks}점)</span>
                        </label>
                        <textarea
                          id={key}
                          rows={Math.max(4, Math.ceil(p.marks / 2) + 2)}
                          value={attempt.swaAnswers[key] ?? ""}
                          onChange={(e) => setAttempt((a) => ({ ...a, swaAnswers: { ...a.swaAnswers, [key]: e.target.value } }))}
                          className="mt-2 w-full resize-y rounded-xl border border-line-strong bg-paper p-3 leading-relaxed text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
                        />
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------------- self-marking ----------------
function Marking({
  attempt,
  setAttempt,
  onDone,
}: {
  attempt: MockAttempt;
  setAttempt: (fn: (a: MockAttempt) => MockAttempt) => void;
  onDone: () => void;
}) {
  const toggle = (key: string, i: number) =>
    setAttempt((a) => {
      const cur = a.swaChecks[key] ?? [];
      return { ...a, swaChecks: { ...a.swaChecks, [key]: cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i] } };
    });

  return (
    <div className="space-y-6">
      <p className="max-w-[62ch] text-ink-2">
        서술형을 채점하세요. 내 답안에 들어 있는 포인트만 체크합니다. 포인트 1개가 1점이고, 파트별 배점을 넘을 수 없습니다.
      </p>
      {attempt.swaIds.map((id, qi) => {
        const q = getSwa(id);
        if (!q) return null;
        return (
          <article key={id} className="rounded-xl border border-line bg-surface p-5 md:p-6">
            <p className="text-xs font-bold text-ink-3">문제 {qi + 1}</p>
            <p className="mt-2 leading-relaxed text-ink">{q.stem}</p>
            {q.parts.map((p) => {
              const key = partKey(id, p.label);
              const checked = attempt.swaChecks[key] ?? [];
              return (
                <section key={key} className="mt-6 border-t border-line pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-ink">
                      ({p.label}) {p.prompt}
                    </h3>
                    <span className="shrink-0 text-sm tabular-nums text-ink-2">
                      <span className="font-bold text-accent">{Math.min(checked.length, p.marks)}</span> / {p.marks}
                    </span>
                  </div>
                  <div className="mt-3 whitespace-pre-wrap rounded-lg bg-sunken p-3 text-sm leading-relaxed text-ink-2">
                    {attempt.swaAnswers[key]?.trim() || "작성한 답안이 없습니다."}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {p.markingPoints.map((pt, i) => {
                      const on = checked.includes(i);
                      return (
                        <li key={i}>
                          <button
                            onClick={() => toggle(key, i)}
                            aria-pressed={on}
                            className={`flex w-full items-start gap-2.5 rounded-lg border px-3 py-2 text-left text-sm ${
                              on ? "border-ok bg-ok-soft text-ink" : "border-line text-ink-2 hover:bg-sunken"
                            }`}
                          >
                            {on ? (
                              <CheckSquare size={18} weight="fill" className="mt-px shrink-0 text-ok" aria-hidden />
                            ) : (
                              <Square size={18} className="mt-px shrink-0 text-ink-3" aria-hidden />
                            )}
                            {pt}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
            {q.examinerTip && (
              <div className="mt-5">
                <ExamTipBox text={q.examinerTip} />
              </div>
            )}
          </article>
        );
      })}
      <button onClick={onDone} className={btnPrimary}>
        채점 완료, 결과 보기
      </button>
    </div>
  );
}

// ---------------- results ----------------
function Results({ result, onRestart }: { result: MockResult; onRestart: () => void }) {
  const mp = pct(result.mcqScore, result.mcqTotal);
  const sp = pct(result.swaScore, result.swaTotal);
  const g = theoryGrade(mp, sp);
  const los = [1, 2, 3, 4, 5] as LearningOutcome[];
  const weakest = [...los]
    .filter((lo) => result.perLO[lo].total > 0)
    .sort((a, b) => pct(result.perLO[a].correct, result.perLO[a].total) - pct(result.perLO[b].correct, result.perLO[b].total))[0];

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-line bg-surface p-6 md:p-8">
        <p className="text-sm text-ink-3">이론 결과 추정</p>
        <p className="mt-1 text-3xl font-bold tracking-tight text-accent">{g.label}</p>
        <p className="mt-1 text-ink-2">{g.note}</p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["1부 객관식", result.mcqScore, result.mcqTotal, mp],
            ["2부 서술형 (자가 채점)", result.swaScore, result.swaTotal, sp],
          ].map(([label, s, t, p]) => (
            <div key={label as string} className="rounded-xl bg-sunken p-4">
              <dt className="text-sm text-ink-3">{label}</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums text-ink">
                {p}% <span className="text-base font-normal text-ink-3">({s}/{t})</span>
              </dd>
              <dd className={`mt-1 text-xs ${(p as number) >= 65 ? "text-ok" : (p as number) >= 55 ? "text-tip" : "text-bad"}`}>
                {(p as number) >= 80 ? "80% 이상" : (p as number) >= 65 ? "65% 이상" : (p as number) >= 55 ? "합격선 55% 이상" : "합격선 55% 미만"}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">영역별 객관식</h2>
        {weakest && <p className="mt-1 text-sm text-ink-3">가장 약한 영역: {loLabel[weakest]}</p>}
        <dl className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
          {los.map((lo) => {
            const { correct, total } = result.perLO[lo];
            const p = pct(correct, total);
            return (
              <div key={lo} className="grid grid-cols-[1fr_auto] items-center gap-3 p-4">
                <dt className="text-sm font-medium text-ink">{loLabel[lo]}</dt>
                <dd className="text-sm tabular-nums text-ink-2">
                  <span className={`font-bold ${p >= 80 ? "text-ok" : p >= 55 ? "text-ink" : "text-bad"}`}>{p}%</span> ({correct}/{total})
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      {result.wrongIds.length > 0 && (
        <section>
          <h2 className="text-xl font-bold tracking-tight">틀린 객관식 {result.wrongIds.length}문항</h2>
          <ul className="mt-4 space-y-3">
            {result.wrongIds.map((id) => {
              const q = getMcq(id);
              if (!q) return null;
              return (
                <li key={id} className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs text-ink-3">{loLabel[loOf(q)]} / {q.category}</p>
                  <p className="mt-1 font-semibold text-ink">{q.question}</p>
                  <p className="mt-2 text-sm text-ok">정답: {q.options[q.correct]}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{q.explanation}</p>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <button onClick={onRestart} className={btnGhost}>
        모의고사 처음으로
      </button>
    </div>
  );
}

// ---------------- controller ----------------
type Stage = "loading" | "intro" | "exam" | "marking" | "result";

export default function MockExam() {
  const [stage, setStage] = useState<Stage>("loading");
  const [attempt, setAttemptState] = useState<MockAttempt | null>(null);
  const [history, setHistory] = useState<MockResult[]>([]);
  const [result, setResult] = useState<MockResult | null>(null);

  // Restore an in-progress attempt (refresh-safe) after mount.
  useEffect(() => {
    const h = loadHistory();
    setHistory(h);
    const cur = loadCurrent();
    if (cur && !cur.submittedAt) {
      setAttemptState(cur);
      setStage(Date.now() >= cur.endsAt ? "marking" : "exam");
    } else if (cur && cur.submittedAt && !cur.marked) {
      setAttemptState(cur);
      setStage("marking");
    } else setStage("intro");
  }, []);

  const setAttempt = useCallback((fn: (a: MockAttempt) => MockAttempt) => {
    setAttemptState((prev) => {
      if (!prev) return prev;
      const next = fn(prev);
      saveCurrent(next);
      return next;
    });
  }, []);

  const start = () => {
    const a = buildMock(history);
    saveCurrent(a);
    setAttemptState(a);
    setStage("exam");
    window.scrollTo({ top: 0 });
  };

  const submit = useCallback(() => {
    setAttempt((a) => (a.submittedAt ? a : { ...a, submittedAt: Date.now() }));
    setStage("marking");
    window.scrollTo({ top: 0 });
  }, [setAttempt]);

  const finishMarking = () => {
    if (!attempt) return;
    const marked = { ...attempt, marked: true };
    const r = scoreAttempt(marked);
    const h = [...history, r];
    saveHistory(h);
    saveCurrent(null);
    setHistory(h);
    setResult(r);
    setStage("result");
    window.scrollTo({ top: 0 });
  };

  if (stage === "loading") return <div className="h-64 animate-pulse rounded-xl border border-line bg-surface" aria-busy />;
  if (stage === "intro") return <Intro history={history} onStart={start} />;
  if (stage === "exam" && attempt) return <Exam attempt={attempt} setAttempt={setAttempt} onSubmit={submit} />;
  if (stage === "marking" && attempt) return <Marking attempt={attempt} setAttempt={setAttempt} onDone={finishMarking} />;
  if (stage === "result" && result) return <Results result={result} onRestart={() => setStage("intro")} />;
  return null;
}
