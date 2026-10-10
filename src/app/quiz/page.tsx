"use client";

import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import McqPractice from "@/components/quiz/McqPractice";
import WrittenPractice from "@/components/quiz/WrittenPractice";

type Mode = "mcq" | "written";

const modes: { id: Mode; label: string }[] = [
  { id: "mcq", label: "객관식" },
  { id: "written", label: "서술형" },
];

export default function QuizPage() {
  const [mode, setMode] = useState<Mode>("mcq");

  return (
    <div className="space-y-10">
      <PageHeader
        title="연습 문제"
        subtitle="실제 시험은 객관식 50문항과 서술형 4문항으로 구성됩니다."
        aside={
          <div role="tablist" aria-label="문제 유형" className="flex gap-1 rounded-full bg-sunken p-1">
            {modes.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={mode === m.id}
                onClick={() => setMode(m.id)}
                className={`rounded-full px-5 py-1.5 text-sm transition-colors ${
                  mode === m.id ? "bg-surface font-semibold text-ink shadow-soft" : "text-ink-3 hover:text-ink"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        }
      />
      {mode === "mcq" ? <McqPractice /> : <WrittenPractice />}
    </div>
  );
}
