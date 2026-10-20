// Self-checks for study-data logic (run: npm test). Fails loudly if the rules break.
import assert from "node:assert/strict";
import { next, dueIds, mergeDecks, INTERVAL_DAYS } from "../src/lib/srs";
import { merge } from "../src/lib/sync";

const DAY = 86_400_000;
const now = new Date(2026, 9, 20, 15, 0).getTime();
const today = new Date(2026, 9, 20).getTime();

// Spaced repetition
let c = next(undefined, true, now);
assert.equal(c.box, 1);
assert.equal(c.due, today + DAY, "first correct answer -> tomorrow");
c = next(c, true, now);
assert.equal(c.due, today + 3 * DAY);
for (let i = 0; i < 10; i++) c = next(c, true, now);
assert.equal(c.box, 5, "box caps at 5");
assert.equal(c.due, today + INTERVAL_DAYS[5] * DAY);
c = next(c, false, now);
assert.deepEqual([c.box, c.due], [1, today + DAY], "wrong answer resets to box 1, due tomorrow");
assert.deepEqual(
  dueIds({ a: { box: 1, due: today - DAY, last: 1 }, b: { box: 2, due: today + 2 * DAY, last: 1 }, c: { box: 1, due: today + 3600e3, last: 1 } }, now),
  ["a", "c"],
);
const decks = mergeDecks({ x: { box: 3, due: 0, last: 5 } }, { x: { box: 1, due: 0, last: 9 }, y: { box: 2, due: 0, last: 1 } });
assert.equal(decks.x.box, 1, "latest answer wins");
assert.ok(decks.y);

// First-seen date survives later answers (it caps new cards per day)
assert.equal(next(next(undefined, true, now), false, now + DAY).first, now);

// Device merge: nothing is lost, finished attempts don't come back
const r = (id: string, date: number) => ({ id, date }) as never;
const m = merge(
  { mockHistory: [r("a", 1), r("c", 3)], mockCurrent: null, written: { q1: "local" } as never, srs: {}, settings: { examDate: "2027-02-01" } },
  { mockHistory: [r("a", 1), r("b", 2)], mockCurrent: { id: "c" } as never, written: { q1: "remote", q2: "remote" } as never, srs: {}, settings: { examDate: "2027-01-15" } },
);
assert.deepEqual(m.mockHistory!.map((x) => x.id), ["a", "b", "c"], "history is a union in date order");
assert.equal(m.mockCurrent, null, "a finished attempt is not resurrected from the other device");
assert.deepEqual(m.written, { q1: "local", q2: "remote" });
assert.equal((m.settings as { examDate: string }).examDate, "2027-02-01", "this device's settings win");

console.log("checks passed");
