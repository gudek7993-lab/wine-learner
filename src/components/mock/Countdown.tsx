"use client";

import { useEffect, useRef, useState } from "react";
import { Timer } from "@phosphor-icons/react";

/** Isolated so only the clock re-renders every second. Calls onExpire once at zero. */
export default function Countdown({ endsAt, onExpire }: { endsAt: number; onExpire: () => void }) {
  const [now, setNow] = useState(() => Date.now());
  const fired = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const left = Math.max(0, Math.round((endsAt - now) / 1000));
  useEffect(() => {
    if (left === 0 && !fired.current) {
      fired.current = true;
      onExpire();
    }
  }, [left, onExpire]);

  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  const urgent = left <= 10 * 60;

  return (
    <span
      role="timer"
      aria-label={`남은 시간 ${h}시간 ${m}분`}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold tabular-nums ${
        urgent ? "bg-bad-soft text-bad" : "bg-sunken text-ink"
      }`}
    >
      <Timer size={16} aria-hidden />
      {h}:{String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </span>
  );
}
