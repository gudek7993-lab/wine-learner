import type { WineStyleFamily } from "@/data/types";

export interface StyleMeta {
  id: WineStyleFamily;
  label: string;
  hint: string;
  /** CSS color value (theme-aware variable). */
  color: string;
}

/** Ordered light white -> bold red, the classic Wine Folly style spectrum. */
export const wineStyles: StyleMeta[] = [
  { id: "light-white", label: "라이트 화이트", hint: "가볍고 상큼한 산미", color: "var(--style-light-white)" },
  { id: "aromatic-white", label: "아로마틱 화이트", hint: "꽃향과 과일향이 진함", color: "var(--style-aromatic-white)" },
  { id: "rich-white", label: "리치 화이트", hint: "풍부한 질감과 바디", color: "var(--style-rich-white)" },
  { id: "light-red", label: "라이트 레드", hint: "낮은 타닌, 붉은 과일", color: "var(--style-light-red)" },
  { id: "medium-red", label: "미디엄 레드", hint: "균형 잡힌 구조", color: "var(--style-medium-red)" },
  { id: "bold-red", label: "볼드 레드", hint: "높은 타닌, 진한 과일", color: "var(--style-bold-red)" },
];

export const styleById = Object.fromEntries(wineStyles.map((s) => [s.id, s])) as Record<WineStyleFamily, StyleMeta>;
