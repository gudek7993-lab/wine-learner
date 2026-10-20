"use client";

import { useEffect, useState } from "react";
import { CloudCheck, CloudSlash, GoogleLogo } from "@phosphor-icons/react";
import { supabase, startSync, syncNow } from "@/lib/sync";

type State = { email?: string; status: "idle" | "syncing" | "ok" | "error" };

/**
 * Sign-in and sync status. Rendered once in the layout so background sync runs on
 * every page. Renders nothing until Supabase is configured.
 */
export default function SyncBar() {
  const [s, setS] = useState<State>({ status: "idle" });

  useEffect(() => {
    if (!supabase) return;
    const fail = () => setS((p) => ({ ...p, status: "error" }));
    const pull = async () => {
      setS((p) => ({ ...p, status: "syncing" }));
      try {
        const changed = await syncNow();
        setS((p) => ({ ...p, status: "ok" }));
        // Records from the other device arrived: reload so every screen shows them.
        if (changed) window.location.reload();
      } catch {
        fail();
      }
    };
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      setS((p) => ({ ...p, email: session?.user.email }));
      if (session && (event === "INITIAL_SESSION" || event === "SIGNED_IN")) pull();
    });
    const stop = startSync(fail);
    return () => {
      data.subscription.unsubscribe();
      stop();
    };
  }, []);

  if (!supabase) return null;

  const signIn = () =>
    supabase!.auth.signInWithOAuth({ provider: "google", options: { redirectTo: window.location.href.split("?")[0] } });
  const signOut = async () => {
    await supabase!.auth.signOut();
    setS({ status: "idle" });
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-3">
      {s.email ? (
        <>
          {s.status === "error" ? (
            <CloudSlash size={16} className="text-bad" aria-hidden />
          ) : (
            <CloudCheck size={16} className="text-ok" aria-hidden />
          )}
          <span>
            {s.status === "error" ? "동기화 실패, 다음 변경 때 다시 시도합니다" : s.status === "syncing" ? "동기화 중" : "기기 간 동기화 켜짐"} ({s.email})
          </span>
          <button onClick={signOut} className="min-h-11 underline-offset-2 hover:text-ink hover:underline">
            로그아웃
          </button>
        </>
      ) : (
        <>
          <span>지금은 이 기기에만 저장됩니다.</span>
          <button
            onClick={signIn}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line-strong px-4 font-medium text-ink-2 hover:border-ink hover:text-ink"
          >
            <GoogleLogo size={16} aria-hidden /> Google로 로그인해 동기화
          </button>
        </>
      )}
    </div>
  );
}
