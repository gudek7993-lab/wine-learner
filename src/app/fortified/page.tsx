"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/ui/PageHeader";
import ExamTipBox from "@/components/detail/ExamTipBox";
import { OutOfScopeNote } from "@/components/ui/OutOfScope";
import { fortifiedWines, type FortifiedKey } from "@/data/topics/fortified";

export default function FortifiedPage() {
  const [activeTab, setActiveTab] = useState<FortifiedKey>("sherry");

  // Deep link from search: /fortified/#madeira opens that tab.
  useEffect(() => {
    const key = decodeURIComponent(window.location.hash.slice(1));
    if (key in fortifiedWines) setActiveTab(key as FortifiedKey);
  }, []);
  const wine = fortifiedWines[activeTab];

  return (
    <div className="space-y-10">
      <PageHeader
        title="강화 와인"
        lead="양조 중 증류주를 넣어 알코올을 높인 와인입니다. 언제 넣느냐가 당도와 스타일을 결정합니다."
        aside={
          <div role="tablist" aria-label="강화 와인 종류" className="flex gap-1 rounded-full bg-sunken p-1">
            {(Object.keys(fortifiedWines) as FortifiedKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`rounded-full min-h-11 px-4 text-sm transition-colors ${
                  activeTab === key ? "bg-surface font-semibold text-ink shadow-soft" : "text-ink-3 hover:text-ink"
                }`}
              >
                {fortifiedWines[key].title.split(" (")[0]}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{wine.title}</h2>
            {"outOfScope" in wine && (
              <div className="mt-3">
                <OutOfScopeNote>WSET Level 3 사양서(2022)에는 마데이라가 없습니다. 참고용으로만 보세요.</OutOfScopeNote>
              </div>
            )}
            <p className="mt-1 text-sm text-ink-3">{wine.region}</p>
          </div>
          <p className="leading-relaxed text-ink-2">{wine.intro}</p>
          {wine.concepts.map((c) => (
            <div key={c.name} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-bold text-ink">{c.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{c.desc}</p>
            </div>
          ))}
        </div>

        <section className="lg:col-span-7">
          <h3 className="text-sm font-semibold text-ink-3">스타일</h3>
          <dl className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
            {wine.styles.map((s) => (
              <div key={s.name} className="grid gap-1 p-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
                <dt className="font-semibold text-ink">{s.name}</dt>
                <dd className="text-sm leading-relaxed text-ink-2">{s.desc}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <div className="space-y-3">
        {wine.tips.map((tip, i) => (
          <ExamTipBox key={i} text={tip} />
        ))}
      </div>
    </div>
  );
}
