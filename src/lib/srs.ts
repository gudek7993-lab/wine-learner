import { KEYS, read, write } from "@/lib/store";

/**
 * Leitner spaced repetition over the MCQ bank. A card is a question id.
 * Right answer: up one box (review after 1, 3, 7, 14, 30 days). Wrong: back to box 1 (tomorrow).
 */
export interface Card {
  box: number; // 1..5
  due: number; // epoch ms; reviewable once due <= end of today
  last: number; // epoch ms of the latest answer, used to merge devices
  first?: number; // epoch ms the card was first answered (caps new cards per day)
}
export type Deck = Record<string, Card>;

const DAY = 86_400_000;
export const INTERVAL_DAYS = [0, 1, 3, 7, 14, 30]; // index = box
export const NEW_PER_DAY = 10;
export const SESSION_MAX = 30;

const startOfDay = (t: number) => {
  const d = new Date(t);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

/** Pure: next card state after an answer. */
export function next(card: Card | undefined, correct: boolean, now: number): Card {
  const box = correct ? Math.min((card?.box ?? 0) + 1, 5) : 1;
  return { box, due: startOfDay(now) + INTERVAL_DAYS[box] * DAY, last: now, first: card?.first ?? now };
}

/** Pure: ids due for review today, most overdue first. */
export function dueIds(deck: Deck, now: number): string[] {
  const end = startOfDay(now) + DAY;
  return Object.entries(deck)
    .filter(([, c]) => c.due < end)
    .sort(([, a], [, b]) => a.due - b.due)
    .map(([id]) => id);
}

/** Pure: per card, keep whichever device answered last. */
export function mergeDecks(a: Deck, b: Deck): Deck {
  const out: Deck = { ...a };
  for (const [id, c] of Object.entries(b)) if (!out[id] || c.last > out[id].last) out[id] = c;
  return out;
}

export const loadDeck = () => read<Deck>(KEYS.srs, {});

/** Record an answer from any mode (review, practice, mock). */
export function recordAnswer(id: string, correct: boolean) {
  const deck = loadDeck();
  deck[id] = next(deck[id], correct, Date.now());
  write(KEYS.srs, deck);
}

/** Record many answers with one write (mock results). */
export function recordAnswers(results: [id: string, correct: boolean][]) {
  const deck = loadDeck();
  const now = Date.now();
  for (const [id, correct] of results) deck[id] = next(deck[id], correct, now);
  write(KEYS.srs, deck);
}

/** Today's session: due cards first, then up to NEW_PER_DAY unseen ones from `pool`. */
export function buildSession(pool: string[], now = Date.now()): string[] {
  const deck = loadDeck();
  const due = dueIds(deck, now);
  const fresh = pool.filter((id) => !deck[id]);
  // Cards first seen today (here, in practice or in a mock) use up today's new-card budget.
  const startedToday = Object.values(deck).filter((c) => (c.first ?? 0) >= startOfDay(now)).length;
  // Deterministic per day so a reload doesn't reshuffle today's new cards.
  const seed = startOfDay(now) / DAY;
  const picked = fresh
    .map((id, i) => [id, (i * 2654435761 + seed * 40503) % 4294967296] as const)
    .sort((x, y) => x[1] - y[1])
    .slice(0, Math.max(0, NEW_PER_DAY - startedToday))
    .map(([id]) => id);
  return [...due, ...picked].slice(0, SESSION_MAX);
}
