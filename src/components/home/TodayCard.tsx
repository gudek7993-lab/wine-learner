"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { allMcq, loadHistory, loLabel, theoryGrade, type MockResult } from "@/lib/exam";
import { buildSession } from "@/lib/srs";
import { loadSettings, saveSettings, type Settings } from "@/lib/store";
import type { LearningOutcome } from "@/data/quiz/exam-types";

const DAY = 86_400_000;
const PLAN_WEEKS = 12;
const MOCK_WEEKS = [1, 5, 9, 11];
const loPage: Record<LearningOutcome, string> = { 1: "/techniques", 2: "/grapes", 3: "/sparkling", 4: "/fortified", 5: "/service" };
const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);
const midnight = (t: number) => new Date(new Date(t).toDateString()).getTime();

function weakest(r: MockResult): LearningOutcome {
  return ([1, 2, 3, 4, 5] as LearningOutcome[])
    .filter((lo) => r.perLO[lo].total > 0)
    .sort((a, b) => pct(r.perLO[a].correct, r.perLO[a].total) - pct(r.perLO[b].correct, r.perLO[b].total))[0];
}

interface View {
  settings: Settings;
  due: number;
  last?: MockResult;
}

/** Daily study summary: everything here comes from this device's (or the synced) records. */
export default function TodayCard() {
  const [v, setV] = useState<View | null>(null);

  useEffect(() => {
    const pool = allMcq.filter((q) => !q.outOfScope).map((q) => q.id);
    setV({ settings: loadSettings(), due: buildSession(pool).length, last: loadHistory().at(-1) });
  }, []);

  if (!v) return <div className="h-40 animate-pulse rounded-xl border border-line bg-surface" aria-busy />;

  const today = midnight(Date.now());
  const exam = new Date(v.settings.examDate + "T00:00:00").getTime();
  const dday = Math.round((exam - today) / DAY);
  const week = Math.min(PLAN_WEEKS, Math.max(1, PLAN_WEEKS - Math.ceil(dday / 7) + 1));
  const mockedThisWeek = v.last && today - midnight(v.last.date) < 7 * DAY;
  const mockWeek = MOCK_WEEKS.includes(week) && !mockedThisWeek;
  const focus = v.last ? weakest(v.last) : undefined;
  const grade = v.last ? theoryGrade(pct(v.last.mcqScore, v.last.mcqTotal), pct(v.last.swaScore, v.last.swaTotal)) : undefined;

  const tile = "bg-surface p-4 md:p-5";
  return (
    <section aria-label="오늘의 학습" className="grid overflow-hidden rounded-xl border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-4">
      <div className={tile}>
        <p className="text-xs text-ink-3">시험까지</p>
        <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-ink">{dday > 0 ? `D-${dday}` : dday === 0 ? "D-day" : "시험 종료"}</p>
        <label className="mt-2 flex items-center gap-2 text-xs text-ink-3">
          시험일
          <input
            type="date"
            value={v.settings.examDate}
            onChange={(e) => {
              if (!e.target.value) return;
              const settings = { ...v.settings, examDate: e.target.value };
              saveSettings(settings);
              setV({ ...v, settings });
            }}
            className="rounded-md border border-line-strong bg-paper px-2 py-1 text-ink"
          />
        </label>
      </div>

      <div className={tile}>
        <p className="text-xs text-ink-3">오늘 복습</p>
        <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-ink">{v.due}문항</p>
        <Link href="/review" className="mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-semibold text-on-accent hover:bg-accent-hover">
          복습 시작 <ArrowRight size={14} aria-hidden />
        </Link>
      </div>

      <div className={tile}>
        <p className="text-xs text-ink-3">최근 모의고사</p>
        {v.last && grade ? (
          <>
            <p className="mt-1 text-lg font-bold text-ink">{grade.label}</p>
            <p className="mt-1 text-sm tabular-nums text-ink-3">
              객관식 {pct(v.last.mcqScore, v.last.mcqTotal)}%, 서술형 {pct(v.last.swaScore, v.last.swaTotal)}%
            </p>
          </>
        ) : (
          <p className="mt-1 text-sm text-ink-2">아직 없습니다. 첫 모의고사로 약한 영역을 찾으세요.</p>
        )}
      </div>

      <div className={tile}>
        <p className="text-xs text-ink-3">
          {dday > PLAN_WEEKS * 7 ? "12주 계획 시작 전" : `12주 계획 ${week}주차${MOCK_WEEKS.includes(week) ? ", 모의고사 주간" : ""}`}
        </p>
        {mockWeek || !focus ? (
          <Link href="/mock" className="mt-1 inline-flex items-center gap-1 text-lg font-bold text-ink hover:text-accent">
            모의고사 보기 <ArrowRight size={16} aria-hidden />
          </Link>
        ) : (
          <Link href={loPage[focus]} className="mt-1 inline-flex items-center gap-1 text-lg font-bold text-ink hover:text-accent">
            {loLabel[focus]} 집중 <ArrowRight size={16} aria-hidden />
          </Link>
        )}
        <p className="mt-1 text-sm text-ink-3">{mockWeek || !focus ? "실전 형식으로 실력을 점검할 때입니다." : "최근 모의고사에서 가장 약했던 영역입니다."}</p>
      </div>
    </section>
  );
}
