"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { searchDocs, typeLabel, type DocType, type SearchDoc } from "@/lib/search";

const RECENT_KEY = "wine-search-recent";

function readRecent(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
    return Array.isArray(v) ? v.filter((s) => typeof s === "string").slice(0, 6) : [];
  } catch {
    return [];
  }
}
function saveRecent(q: string) {
  try {
    const next = [q, ...readRecent().filter((r) => r !== q)].slice(0, 6);
    localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: recent searches are a convenience only */
  }
}

const badgeTone: Record<DocType, string> = {
  region: "bg-accent-soft text-accent",
  grape: "bg-accent-soft text-accent",
  technique: "bg-sunken text-ink-2",
  service: "bg-sunken text-ink-2",
  sparkling: "bg-sunken text-ink-2",
  fortified: "bg-sunken text-ink-2",
  tasting: "bg-sunken text-ink-2",
  quiz: "bg-tip-soft text-tip",
};

/** Bold every occurrence of the query tokens inside `text`. */
function Highlight({ text, query }: { text: string; query: string }) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return <>{text}</>;
  const lower = text.toLowerCase();
  const marks: [number, number][] = [];
  for (const t of tokens) {
    let from = 0;
    for (;;) {
      const at = lower.indexOf(t, from);
      if (at < 0) break;
      marks.push([at, at + t.length]);
      from = at + t.length;
    }
  }
  if (!marks.length) return <>{text}</>;
  marks.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const m of marks) {
    const last = merged[merged.length - 1];
    if (last && m[0] <= last[1]) last[1] = Math.max(last[1], m[1]);
    else merged.push([...m]);
  }
  const out: React.ReactNode[] = [];
  let pos = 0;
  merged.forEach(([s, e], i) => {
    if (s > pos) out.push(text.slice(pos, s));
    out.push(
      <mark key={i} className="rounded-sm bg-accent-soft px-0.5 text-ink">
        {text.slice(s, e)}
      </mark>,
    );
    pos = e;
  });
  if (pos < text.length) out.push(text.slice(pos));
  return <>{out}</>;
}

export default function GlobalSearch({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const listId = useId();

  // Build the index only when search is first opened, so it stays out of the initial page load.
  useEffect(() => {
    if (!open || docs) return;
    let alive = true;
    import("@/lib/search-index").then((m) => alive && setDocs(m.buildIndex()));
    return () => {
      alive = false;
    };
  }, [open, docs]);

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    setRecent(readRecent());
    setQuery("");
    setHighlight(0);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      returnFocus.current?.focus?.();
    };
  }, [open]);

  const hits = useMemo(() => (docs ? searchDocs(docs, query) : []), [docs, query]);

  useEffect(() => {
    listRef.current?.children[highlight]?.scrollIntoView({ block: "nearest" });
  }, [highlight, hits]);

  if (!open) return null;

  const go = (i: number) => {
    const hit = hits[i];
    if (!hit) return;
    saveRecent(query.trim());
    onClose();
    router.push(hit.doc.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "Tab") {
      // Keep focus inside the dialog: only the input and the close button are tab stops.
      e.preventDefault();
      (document.activeElement === inputRef.current ? closeRef : inputRef).current?.focus();
    } else if (e.key === "ArrowDown" && hits.length) {
      e.preventDefault();
      setHighlight((h) => (h + 1) % hits.length);
    } else if (e.key === "ArrowUp" && hits.length) {
      e.preventDefault();
      setHighlight((h) => (h - 1 + hits.length) % hits.length);
    } else if (e.key === "Enter" && document.activeElement === inputRef.current) {
      e.preventDefault();
      go(highlight);
    }
  };

  const q = query.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-3 pt-[max(1rem,6vh)] sm:px-6" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="전체 검색"
        className="relative flex max-h-[min(40rem,88dvh)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
      >
        <div className="flex items-center gap-2 border-b border-line px-4">
          <MagnifyingGlass size={20} className="shrink-0 text-ink-3" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={hits.length > 0}
            aria-controls={listId}
            aria-activedescendant={hits.length ? `${listId}-${highlight}` : undefined}
            aria-label="산지, 품종, 용어, 문제 검색"
            autoComplete="off"
            enterKeyHint="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setHighlight(0);
            }}
            placeholder="산지, 품종, 용어, 문제 검색 (예: 플로르, MLF)"
            className="min-h-14 w-full bg-transparent py-3 text-base text-ink placeholder:text-ink-3 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="검색 닫기"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-ink-3 hover:bg-sunken hover:text-ink"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain" aria-live="polite">
          {!q ? (
            <div className="px-4 py-4 text-sm text-ink-3">
              {recent.length > 0 ? (
                <>
                  <p className="mb-2 font-semibold text-ink-2">최근 검색</p>
                  <div className="flex flex-wrap gap-2">
                    {recent.map((r) => (
                      <button
                        key={r}
                        type="button"
                        tabIndex={-1}
                        onClick={() => {
                          setQuery(r);
                          setHighlight(0);
                          inputRef.current?.focus();
                        }}
                        className="min-h-11 rounded-full border border-line-strong px-4 text-ink-2 hover:border-ink hover:text-ink"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p>산지, 품종, 재배·양조, 서비스, 스파클링, 강화 와인, 테이스팅, 연습 문제를 한 번에 찾습니다.</p>
              )}
            </div>
          ) : !docs ? (
            <p className="px-4 py-6 text-sm text-ink-3">검색 준비 중…</p>
          ) : hits.length === 0 ? (
            <p className="px-4 py-6 text-sm text-ink-3">&lsquo;{q}&rsquo;에 해당하는 내용이 없습니다. 다른 표현이나 영문 이름으로 찾아보세요.</p>
          ) : (
            <ul ref={listRef} id={listId} role="listbox" className="py-1">
              {hits.map((h, i) => (
                <li key={h.doc.id} id={`${listId}-${i}`} role="option" aria-selected={i === highlight}>
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => go(i)}
                    onMouseMove={() => i !== highlight && setHighlight(i)}
                    className={`flex w-full flex-col gap-1 px-4 py-3 text-left ${i === highlight ? "bg-sunken" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${badgeTone[h.doc.type]}`}>
                        {typeLabel[h.doc.type]}
                      </span>
                      <span className="truncate text-sm font-semibold text-ink">
                        <Highlight text={h.doc.title} query={q} />
                      </span>
                      {h.doc.subtitle && <span className="hidden truncate text-xs text-ink-3 sm:inline">{h.doc.subtitle}</span>}
                    </span>
                    <span className="line-clamp-2 text-xs leading-relaxed text-ink-3">
                      <Highlight text={h.snippet} query={q} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden border-t border-line px-4 py-2 text-xs text-ink-3 sm:block">
          ↑↓ 이동 · Enter 열기 · Esc 닫기
        </div>
      </div>
    </div>
  );
}
