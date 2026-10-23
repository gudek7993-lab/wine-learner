"use client";

import { useState } from "react";
import { Sparkle, CheckCircle } from "@phosphor-icons/react";
import { aiMark, type AiPart, type MarkPart } from "@/lib/ai-mark";

/**
 * "AI 채점" for one written question. Shows the AI score next to the self-score,
 * quotes for every credited point, and lets the user apply the AI checks.
 */
export default function AiMarkPanel({
  stem = "",
  parts,
  selfScore,
  onApply,
}: {
  stem?: string;
  parts: MarkPart[];
  selfScore: number;
  onApply: (checks: Record<string, number[]>) => void;
}) {
  const [state, setState] = useState<{ status: "idle" | "loading" | "done" | "error"; result?: AiPart[]; error?: string }>({ status: "idle" });
  const empty = parts.every((p) => !p.answer.trim());

  const run = async () => {
    setState({ status: "loading" });
    try {
      setState({ status: "done", result: await aiMark(stem, parts) });
    } catch (e) {
      setState({ status: "error", error: (e as Error).message });
    }
  };

  const total = state.result?.reduce((a, p) => a + p.score, 0) ?? 0;
  const max = parts.reduce((a, p) => a + p.marks, 0);

  return (
    <section className="mt-5 rounded-xl border border-line bg-paper p-4" aria-live="polite">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="flex items-center gap-1.5 font-semibold text-ink">
          <Sparkle size={18} weight="fill" className="text-accent" aria-hidden /> AI 채점
        </h4>
        {state.status !== "loading" && (
          <button
            onClick={run}
            disabled={empty}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper disabled:opacity-40 active:scale-[0.98]"
          >
            {state.status === "done" ? "다시 채점" : "AI 채점"}
          </button>
        )}
      </div>

      {empty && state.status === "idle" && <p className="mt-2 text-sm text-ink-3">답안을 쓰면 AI 채점을 받을 수 있습니다.</p>}
      {state.status === "loading" && <p className="mt-2 animate-pulse text-sm text-ink-2">AI가 채점 중입니다. 10초 정도 걸립니다.</p>}
      {state.status === "error" && <p className="mt-2 text-sm text-bad">{state.error}</p>}

      {state.status === "done" && state.result && (
        <div className="mt-3 space-y-4">
          <p className="text-sm text-ink-2">
            AI <span className="text-lg font-bold tabular-nums text-accent">{total}</span>
            <span className="tabular-nums text-ink-3"> / {max}</span>
            <span className="mx-2 text-line-strong">|</span>내 채점 <span className="font-semibold tabular-nums text-ink">{selfScore}</span>
          </p>
          {state.result.map((r, i) => (
            <div key={r.label}>
              {parts.length > 1 && (
                <p className="text-sm font-semibold text-ink">
                  ({r.label}) <span className="tabular-nums">{r.score} / {r.marks}</span>
                </p>
              )}
              <ul className="mt-1.5 space-y-1.5">
                {r.awarded.map((a) => (
                  <li key={a.index} className="flex gap-2 text-sm">
                    <CheckCircle size={16} weight="fill" className="mt-0.5 shrink-0 text-ok" aria-hidden />
                    <span>
                      <span className="text-ink">{parts[i].markingPoints[a.index]}</span>
                      <span className="mt-0.5 block text-xs text-ink-3">&ldquo;{a.evidence}&rdquo;</span>
                    </span>
                  </li>
                ))}
                {r.awarded.length === 0 && <li className="text-sm text-ink-3">인정된 포인트가 없습니다.</li>}
              </ul>
              {r.feedback && <p className="mt-2 rounded-lg bg-sunken p-3 text-sm leading-relaxed text-ink-2">{r.feedback}</p>}
            </div>
          ))}
          <button
            onClick={() => onApply(Object.fromEntries(state.result!.map((r) => [r.label, r.awarded.map((a) => a.index)])))}
            className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-medium text-ink-2 hover:border-ink hover:text-ink"
          >
            AI 결과를 내 채점에 적용
          </button>
        </div>
      )}
    </section>
  );
}
