/** Marks content that is not in the WSET Level 3 specification (Issue 2, 2022). */
export function OutOfScopeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      title="WSET Level 3 사양서(2022) 범위 밖. 모의고사에 나오지 않습니다."
      className={`inline-flex items-center whitespace-nowrap rounded-full border border-dashed border-line-strong px-2 py-0.5 text-[11px] font-medium text-ink-3 ${className}`}
    >
      시험 범위 밖
    </span>
  );
}

export function OutOfScopeNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-line-strong px-4 py-3 text-sm leading-relaxed text-ink-3">
      <span className="mr-2 font-semibold text-ink-2">시험 범위 밖</span>
      {children}
    </p>
  );
}
