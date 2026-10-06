"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div role="tablist" className="flex gap-6 border-b border-line overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`relative -mb-px py-3 text-sm whitespace-nowrap transition-colors border-b-2 ${
              i === active
                ? "border-accent text-ink font-semibold"
                : "border-transparent text-ink-3 hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-6">{tabs[active]?.content}</div>
    </div>
  );
}
