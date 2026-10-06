import type { GrapeProfile, Level } from "@/data/types";

const rows: { key: keyof GrapeProfile["taste"]; label: string; low: string; high: string }[] = [
  { key: "sweetness", label: "당도", low: "드라이", high: "스위트" },
  { key: "body", label: "바디", low: "라이트", high: "풀" },
  { key: "tannin", label: "타닌", low: "낮음", high: "높음" },
  { key: "acidity", label: "산도", low: "낮음", high: "높음" },
  { key: "alcohol", label: "알코올", low: "낮음", high: "높음" },
];

function Pips({ value, color, size }: { value: Level; color: string; size: "sm" | "md" }) {
  const h = size === "sm" ? "h-1.5" : "h-2.5";
  return (
    <div className="grid grid-cols-5 gap-1" aria-hidden>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`${h} rounded-full`}
          style={n <= value ? { backgroundColor: color } : { boxShadow: "inset 0 0 0 1px var(--line-strong)" }}
        />
      ))}
    </div>
  );
}

interface TasteProfileProps {
  taste: GrapeProfile["taste"];
  color: string;
  /** compact = 3 key rows, tiny bars, for list cards */
  compact?: boolean;
}

export default function TasteProfile({ taste, color, compact = false }: TasteProfileProps) {
  const shown = compact ? rows.filter((r) => r.key !== "sweetness" && r.key !== "alcohol") : rows;
  return (
    <dl className={compact ? "space-y-1.5" : "space-y-4"}>
      {shown.map((r) => (
        <div
          key={r.key}
          className={
            compact
              ? "grid grid-cols-[2.5rem_1fr] items-center gap-3"
              : "grid grid-cols-[3.5rem_3rem_1fr_3rem] items-center gap-3"
          }
        >
          <dt className={compact ? "text-[11px] text-ink-3" : "text-sm font-medium text-ink"}>{r.label}</dt>
          {!compact && (
            <span className="text-right text-xs text-ink-3" aria-hidden>
              {r.low}
            </span>
          )}
          <dd>
            <span className="sr-only">{`${r.label} 5단계 중 ${taste[r.key]}`}</span>
            <Pips value={taste[r.key]} color={color} size={compact ? "sm" : "md"} />
          </dd>
          {!compact && (
            <span className="text-xs text-ink-3" aria-hidden>
              {r.high}
            </span>
          )}
        </div>
      ))}
    </dl>
  );
}
