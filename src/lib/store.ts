/**
 * The one place study data touches localStorage. Every key is listed here so sync
 * (lib/sync.ts) can push and merge the whole set.
 */
export const KEYS = {
  mockCurrent: "wine-learner:mock-current",
  mockHistory: "wine-learner:mock-history",
  written: "wine-learner:written-answers",
  srs: "wine-learner:srs",
  settings: "wine-learner:settings",
} as const;

export type StoreKey = (typeof KEYS)[keyof typeof KEYS];

let warned = false;
/** Tell the user once when nothing can be saved (private mode, full storage). */
export function warnStorageFailed() {
  if (warned) return;
  warned = true;
  window.alert("이 브라우저에 기록을 저장할 수 없습니다(사생활 보호 모드이거나 저장 공간 부족). 창을 닫으면 답안과 결과가 사라집니다.");
}

const listeners = new Set<() => void>();
/** Called after any write; sync uses it to schedule an upload. */
export function onStoreChange(fn: () => void) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function read<T>(key: StoreKey, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function write(key: StoreKey, value: unknown, { silent = false } = {}) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    warnStorageFailed(); // the session still works in memory
    return;
  }
  if (!silent) listeners.forEach((fn) => fn());
}

export interface Settings {
  /** ISO date, e.g. "2027-01-15". */
  examDate: string;
}
export const DEFAULT_SETTINGS: Settings = { examDate: "2027-01-15" };
export const loadSettings = () => ({ ...DEFAULT_SETTINGS, ...read<Partial<Settings>>(KEYS.settings, {}) });
export const saveSettings = (s: Settings) => write(KEYS.settings, s);
