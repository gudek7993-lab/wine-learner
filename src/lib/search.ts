export type DocType =
  | "region" | "grape" | "technique" | "service" | "sparkling" | "fortified" | "tasting" | "quiz";

export interface SearchDoc {
  id: string;
  type: DocType;
  title: string;
  subtitle?: string;
  /** Raw searchable text (shown as snippet). */
  body: string;
  /** Extra match-only keywords (English names, synonyms, local names). */
  keywords?: string;
  /** App path, may include #anchor. Passed to the Next router, so basePath is handled. */
  href: string;
}

export interface Hit {
  doc: SearchDoc;
  score: number;
  snippet: string;
}

export const typeLabel: Record<DocType, string> = {
  region: "산지", grape: "품종", technique: "재배·양조", service: "서비스", sparkling: "스파클링",
  fortified: "강화 와인", tasting: "테이스팅", quiz: "문제",
};

const typeBoost: Record<DocType, number> = {
  region: 8, grape: 8, technique: 5, service: 5, sparkling: 5, fortified: 5, tasting: 5, quiz: 0,
};

/** Lowercase, NFC, drop spaces and punctuation so "pinot noir" matches "Pinot-Noir". */
export function norm(s: string): string {
  return s.normalize("NFC").toLowerCase().replace(/[\s\-_·.,()/'":;!?]+/g, "");
}

interface Prepared { doc: SearchDoc; t: string; k: string; b: string }
const cache = new WeakMap<SearchDoc[], Prepared[]>();

function prepare(docs: SearchDoc[]): Prepared[] {
  let p = cache.get(docs);
  if (!p) {
    p = docs.map((doc) => ({
      doc,
      t: norm(doc.title + " " + (doc.subtitle ?? "")),
      k: norm(doc.keywords ?? ""),
      b: norm(doc.body),
    }));
    cache.set(docs, p);
  }
  return p;
}

function snippetOf(body: string, tokens: string[]): string {
  const lower = body.toLowerCase();
  let at = -1;
  for (const t of tokens) {
    at = lower.indexOf(t);
    if (at >= 0) break;
  }
  if (at < 0) return body.slice(0, 90);
  const start = Math.max(0, at - 30);
  return (start > 0 ? "…" : "") + body.slice(start, start + 100) + (start + 100 < body.length ? "…" : "");
}

/** AND across whitespace-separated tokens; ranks title > keyword > body. */
export function searchDocs(docs: SearchDoc[], query: string, limit = 40): Hit[] {
  const raw = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const tokens = raw.map(norm).filter(Boolean);
  if (!tokens.length) return [];
  const hits: Hit[] = [];
  for (const p of prepare(docs)) {
    let score = 0;
    let ok = true;
    for (const tok of tokens) {
      if (p.t === tok) score += 100;
      else if (p.t.startsWith(tok)) score += 60;
      else if (p.t.includes(tok)) score += 40;
      else if (p.k.includes(tok)) score += 25;
      else if (p.b.includes(tok)) score += 10;
      else { ok = false; break; }
    }
    if (!ok) continue;
    hits.push({ doc: p.doc, score: score + typeBoost[p.doc.type], snippet: snippetOf(p.doc.body, raw) });
  }
  hits.sort((a, b) => b.score - a.score);
  return hits.slice(0, limit);
}
