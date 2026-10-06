"use client";

import { useState, useRef, useEffect, useId } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchResult {
  type: "region" | "grape" | "technique";
  id: string;
  nameKo: string;
  nameEn: string;
  href: string;
}

interface SearchBarProps {
  onSearch: (query: string) => SearchResult[];
  onSelect: (result: SearchResult) => void;
}

const typeLabel: Record<string, string> = { region: "산지", grape: "품종", technique: "기법" };

export default function SearchBar({ onSearch, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const listId = useId();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    setHighlight(0);
    const q = value.trim();
    if (q.length >= 1) {
      setResults(onSearch(q));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const choose = (r: SearchResult) => {
    onSelect(r);
    setQuery("");
    setIsOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") return setIsOpen(false);
    if (!isOpen || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[highlight]);
    }
  };

  return (
    <div ref={ref} className="relative w-full max-w-lg">
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-ink-2">
        산지나 품종 검색
      </label>
      <div className="relative">
        <MagnifyingGlass
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-3"
          aria-hidden
        />
        <input
          id={inputId}
          type="search"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listId}
          autoComplete="off"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="예: 바롤로, Riesling"
          className="w-full rounded-full border border-line-strong bg-surface py-3 pl-11 pr-4 text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
        />
      </div>
      {isOpen && (
        <div id={listId} className="absolute top-full z-30 mt-2 w-full overflow-hidden rounded-xl border border-line bg-surface shadow-soft">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-3">&lsquo;{query}&rsquo;에 해당하는 산지나 품종이 없습니다.</p>
          ) : (
            <ul role="listbox" className="max-h-72 overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={`${r.type}-${r.id}`} role="option" aria-selected={i === highlight}>
                  <button
                    onClick={() => choose(r)}
                    onMouseEnter={() => setHighlight(i)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm ${i === highlight ? "bg-sunken" : ""}`}
                  >
                    <span className="w-8 shrink-0 text-xs text-ink-3">{typeLabel[r.type]}</span>
                    <span className="font-medium text-ink">{r.nameKo}</span>
                    <span className="truncate text-xs text-ink-3">{r.nameEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
