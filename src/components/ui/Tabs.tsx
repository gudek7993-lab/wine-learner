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
      <div className="flex border-b border-cream-200 gap-1 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors rounded-t-lg ${
              i === active
                ? "bg-burgundy-700 text-white"
                : "text-burgundy-700 hover:bg-burgundy-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-5">{tabs[active]?.content}</div>
    </div>
  );
}
