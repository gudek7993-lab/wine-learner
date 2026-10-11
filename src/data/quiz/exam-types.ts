/**
 * WSET Level 3 learning outcomes (Specification Issue 2, 2022).
 * 1 = vineyard and winery, 2 = still wines, 3 = sparkling, 4 = fortified, 5 = advice to customers.
 * Exam MCQ weighting: LO1 8, LO2 28, LO3 5, LO4 5, LO5 4 (of 50).
 */
export type LearningOutcome = 1 | 2 | 3 | 4 | 5;

/**
 * Mock-exam slot, mirroring how the four 25-mark theory questions are built:
 * 1 and 2 = LO1 + LO2, 3 = LO1 + LO2 + LO5, 4 = LO1 + LO3/LO4 + LO5.
 */
export type ExamSlot = 1 | 2 | 3 | 4;

export interface ExamWrittenPart {
  /** 'a', 'b', 'c' ... */
  label: string;
  /** Korean task with a command word (설명하시오, 서술하시오 ...). */
  prompt: string;
  marks: number;
  /**
   * Creditable points. May list more points than `marks` (examiners credit any of them);
   * the score for the part is capped at `marks`.
   */
  markingPoints: string[];
}

/** A full 25-mark short written answer question in exam format. */
export interface ExamWrittenQuestion {
  id: string;
  slot: ExamSlot;
  los: LearningOutcome[];
  /** Short scenario or stem shared by all parts (Korean). */
  stem: string;
  /** Parts whose marks add up to exactly 25. */
  parts: ExamWrittenPart[];
  examinerTip?: string;
}
