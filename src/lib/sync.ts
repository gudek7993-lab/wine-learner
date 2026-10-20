import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase-config";
import { KEYS, read, write, onStoreChange } from "@/lib/store";
import { mergeDecks, type Deck } from "@/lib/srs";
import type { MockAttempt, MockResult } from "@/lib/exam";

/** null until the Supabase project is configured; the app then stays device-only. */
export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { flowType: "pkce" } }) : null;

type Blob = {
  mockHistory?: MockResult[];
  mockCurrent?: MockAttempt | null;
  written?: Record<string, unknown>;
  srs?: Deck;
  settings?: Record<string, unknown>;
};

const localBlob = (): Blob => ({
  mockHistory: read(KEYS.mockHistory, []),
  mockCurrent: read(KEYS.mockCurrent, null),
  written: read(KEYS.written, {}),
  srs: read(KEYS.srs, {}),
  settings: read(KEYS.settings, {}),
});

/** Union of two devices' records; never drops a result or a newer answer. */
export function merge(local: Blob, remote: Blob): Blob {
  const history = new Map<string, MockResult>();
  for (const r of [...(remote.mockHistory ?? []), ...(local.mockHistory ?? [])]) history.set(r.id, r);
  const mockHistory = [...history.values()].sort((a, b) => a.date - b.date);
  // A finished attempt is in history; don't let the other device's copy of it come back.
  const current = local.mockCurrent ?? remote.mockCurrent ?? null;
  return {
    mockHistory,
    mockCurrent: current && !history.has(current.id) ? current : null,
    written: { ...remote.written, ...local.written },
    srs: mergeDecks(remote.srs ?? {}, local.srs ?? {}),
    settings: { ...remote.settings, ...local.settings },
  };
}

function applyLocal(b: Blob) {
  write(KEYS.mockHistory, b.mockHistory ?? [], { silent: true });
  write(KEYS.mockCurrent, b.mockCurrent ?? null, { silent: true });
  write(KEYS.written, b.written ?? {}, { silent: true });
  write(KEYS.srs, b.srs ?? {}, { silent: true });
  write(KEYS.settings, b.settings ?? {}, { silent: true });
}

/** Pull, merge, push. Returns true when the local records changed. */
export async function syncNow(): Promise<boolean> {
  if (!supabase) return false;
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return false;
  const { data, error } = await supabase.from("user_state").select("data").eq("user_id", auth.user.id).maybeSingle();
  if (error) throw error;
  const before = JSON.stringify(localBlob());
  const merged = merge(JSON.parse(before), (data?.data as Blob) ?? {});
  const changed = JSON.stringify(merged) !== before;
  if (changed) applyLocal(merged);
  const { error: upErr } = await supabase.from("user_state").upsert({ user_id: auth.user.id, data: merged, updated_at: new Date().toISOString() });
  if (upErr) throw upErr;
  return changed;
}

let timer: ReturnType<typeof setTimeout> | undefined;
/** Start background sync: upload a few seconds after any change, and when the page is hidden. */
export function startSync(onError: (e: unknown) => void) {
  if (!supabase) return () => {};
  const run = () => syncNow().catch(onError);
  const off = onStoreChange(() => {
    clearTimeout(timer);
    timer = setTimeout(run, 3000);
  });
  const flush = () => {
    if (document.visibilityState === "hidden" && timer) {
      clearTimeout(timer);
      timer = undefined;
      run();
    }
  };
  document.addEventListener("visibilitychange", flush);
  return () => {
    off();
    document.removeEventListener("visibilitychange", flush);
  };
}
