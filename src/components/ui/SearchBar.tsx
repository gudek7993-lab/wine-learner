"use client";

import { useState, useRef, useEffect } from "react";

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

export default function SearchBar({ onSearch, onSelect }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    if (value.length >= 1) {
      setResults(onSearch(value));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const typeLabel: Record<string, string> = {
    region: "산지",
    grape: "품종",
    technique: "기법",
  };

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="산지, 품종, 기법 검색..."
        className="w-full px-4 py-2 rounded-lg border border-cream-300 bg-white text-burgundy-900 placeholder-burgundy-300 focus:outline-none focus:ring-2 focus:ring-burgundy-400 focus:border-transparent text-sm"
      />
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border border-cream-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {results.map((r) => (
            <button
              key={`${r.type}-${r.id}`}
              onClick={() => {
                onSelect(r);
                setQuery("");
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 hover:bg-cream-50 flex items-center gap-3 text-sm"
            >
              <span className="text-xs font-medium text-burgundy-400 bg-cream-100 px-1.5 py-0.5 rounded">
                {typeLabel[r.type]}
              </span>
              <span className="font-medium">{r.nameKo}</span>
              <span className="text-burgundy-400 text-xs">{r.nameEn}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
