import { questionBank, type QuizQuestion } from "@/data/quiz/question-bank";
import { lo5Questions } from "@/data/quiz/lo5-questions";
import { lo1Questions } from "@/data/quiz/lo1-questions";
import { lo2Questions } from "@/data/quiz/lo2-questions";
import { lo34Questions } from "@/data/quiz/lo34-questions";
import { examWrittenQuestions as written1 } from "@/data/quiz/exam-written";
import { examWrittenQuestions2 } from "@/data/quiz/exam-written-2";
import { KEYS, read, write } from "@/lib/store";
import type { ExamSlot, ExamWrittenQuestion, LearningOutcome } from "@/data/quiz/exam-types";

/** Every multiple-choice question in the app. */
export const allMcq: QuizQuestion[] = [...questionBank, ...lo1Questions, ...lo2Questions, ...lo34Questions, ...lo5Questions];
const examWrittenQuestions: ExamWrittenQuestion[] = [...written1, ...examWrittenQuestions2];

const categoryLO: Record<string, LearningOutcome> = {
  "재배학": 1,
  "양조학": 1,
  "스파클링 와인": 3,
  "강화 와인": 4,
  "서비스와 페어링": 5,
};

/** Region, grape and misc categories all belong to LO2 (still wines). */
export function loOf(q: QuizQuestion): LearningOutcome {
  return categoryLO[q.category] ?? 2;
}

export const loLabel: Record<LearningOutcome, string> = {
  1: "재배와 양조",
  2: "스틸 와인",
  3: "스파클링",
  4: "강화 와인",
  5: "서비스와 페어링",
};

/** Spec Issue 2: MCQ marks per learning outcome (total 50). */
export const MCQ_WEIGHTS: Record<LearningOutcome, number> = { 1: 8, 2: 28, 3: 5, 4: 5, 5: 4 };
export const EXAM_SECONDS = 2 * 60 * 60;

export interface MockAttempt {
  id: string;
  startedAt: number;
  endsAt: number;
  mcqIds: string[];
  swaIds: string[];
  mcqAnswers: Record<string, number>;
  /** key: `${questionId}:${partLabel}` */
  swaAnswers: Record<string, string>;
  submittedAt?: number;
  /** Self-marking: checked marking-point indexes per part key. */
  swaChecks: Record<string, number[]>;
  marked?: boolean;
}

export interface MockResult {
  id: string;
  date: number;
  mcqScore: number;
  mcqTotal: number;
  swaScore: number;
  swaTotal: number;
  perLO: Record<LearningOutcome, { correct: number; total: number }>;
  mcqIds: string[];
  swaIds: string[];
  wrongIds: string[];
}

function shuffle<T>(xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Prefer items not used in earlier mocks so repeated mocks stay honest. */
function pick<T extends { id: string }>(pool: T[], n: number, used: Set<string>): T[] {
  const fresh = shuffle(pool.filter((x) => !used.has(x.id)));
  const seen = shuffle(pool.filter((x) => used.has(x.id)));
  return [...fresh, ...seen].slice(0, n);
}

export function buildMock(history: MockResult[]): MockAttempt {
  const usedMcq = new Set(history.flatMap((h) => h.mcqIds));
  const usedSwa = new Set(history.flatMap((h) => h.swaIds));
  const inScope = allMcq.filter((q) => !q.outOfScope);

  const mcq: QuizQuestion[] = [];
  for (const lo of [1, 2, 3, 4, 5] as LearningOutcome[]) {
    mcq.push(...pick(inScope.filter((q) => loOf(q) === lo), MCQ_WEIGHTS[lo], usedMcq));
  }
  // If an LO pool is short, top up from still wines (the largest pool) to keep 50 questions.
  if (mcq.length < 50) {
    const chosen = new Set(mcq.map((q) => q.id));
    mcq.push(...pick(inScope.filter((q) => loOf(q) === 2 && !chosen.has(q.id)), 50 - mcq.length, usedMcq));
  }

  const swa = ([1, 2, 3, 4] as ExamSlot[])
    .map((slot) => pick(examWrittenQuestions.filter((q) => q.slot === slot), 1, usedSwa)[0])
    .filter((q): q is ExamWrittenQuestion => Boolean(q));

  const now = Date.now();
  return {
    id: `mock-${now}`,
    startedAt: now,
    endsAt: now + EXAM_SECONDS * 1000,
    mcqIds: mcq.map((q) => q.id),
    swaIds: swa.map((q) => q.id),
    mcqAnswers: {},
    swaAnswers: {},
    swaChecks: {},
  };
}

const mcqById = new Map(allMcq.map((q) => [q.id, q]));
const swaById = new Map(examWrittenQuestions.map((q) => [q.id, q]));
export const getMcq = (id: string) => mcqById.get(id);
export const getSwa = (id: string) => swaById.get(id);

export function partKey(qid: string, label: string) {
  return `${qid}:${label}`;
}

export function scoreAttempt(a: MockAttempt): MockResult {
  const perLO = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 }, 4: { correct: 0, total: 0 }, 5: { correct: 0, total: 0 } } as MockResult["perLO"];
  const wrongIds: string[] = [];
  let mcqScore = 0;
  for (const id of a.mcqIds) {
    const q = getMcq(id);
    if (!q) continue;
    const lo = loOf(q);
    perLO[lo].total++;
    if (a.mcqAnswers[id] === q.correct) {
      mcqScore++;
      perLO[lo].correct++;
    } else wrongIds.push(id);
  }
  let swaScore = 0;
  let swaTotal = 0;
  for (const id of a.swaIds) {
    const q = getSwa(id);
    if (!q) continue;
    for (const part of q.parts) {
      swaTotal += part.marks;
      swaScore += Math.min(a.swaChecks[partKey(id, part.label)]?.length ?? 0, part.marks);
    }
  }
  return {
    id: a.id,
    date: a.submittedAt ?? Date.now(),
    mcqScore,
    mcqTotal: a.mcqIds.length,
    swaScore,
    swaTotal,
    perLO,
    mcqIds: a.mcqIds,
    swaIds: a.swaIds,
    wrongIds,
  };
}

/**
 * Theory-only grade estimate. The real overall grade also includes the tasting paper:
 * Distinction = 80%+ aggregate with no paper under 65%; each part needs 55% to pass.
 */
export function theoryGrade(mcqPct: number, swaPct: number) {
  const low = Math.min(mcqPct, swaPct);
  const avg = (mcqPct + swaPct) / 2;
  if (low < 55) return { label: "불합격 위험", note: "한 파트라도 55% 미만이면 불합격입니다." };
  if (avg >= 80 && low >= 65) return { label: "Distinction 수준", note: "평균 80% 이상, 모든 파트 65% 이상입니다." };
  if (avg >= 65 && low >= 55) return { label: "Merit 수준", note: "Distinction까지: 평균 80%, 모든 파트 65% 이상." };
  return { label: "Pass 수준", note: "Merit까지: 평균 65% 이상." };
}

// ---------- storage ----------
export const loadCurrent = () => read<MockAttempt | null>(KEYS.mockCurrent, null);
export const saveCurrent = (a: MockAttempt | null) => write(KEYS.mockCurrent, a);
export const loadHistory = () => read<MockResult[]>(KEYS.mockHistory, []);
export const saveHistory = (h: MockResult[]) => write(KEYS.mockHistory, h);
