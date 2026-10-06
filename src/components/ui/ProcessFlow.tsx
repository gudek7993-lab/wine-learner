/** Renders a "A → B → C" process string as an ordered step flow. */
export default function ProcessFlow({ steps }: { steps: string }) {
  const parts = steps.split("→").map((s) => s.trim()).filter(Boolean);
  return (
    <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm">
      {parts.map((p, i) => (
        <li key={`${p}-${i}`} className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sunken px-3 py-1 text-ink-2">
            <span className="text-[11px] font-semibold tabular-nums text-ink-3">{i + 1}</span>
            {p}
          </span>
          {i < parts.length - 1 && <span aria-hidden className="text-line-strong">›</span>}
        </li>
      ))}
    </ol>
  );
}
