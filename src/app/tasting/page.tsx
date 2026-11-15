"use client";

import { Eye, Wind, Drop, Scales } from "@phosphor-icons/react";
import PageHeader from "@/components/ui/PageHeader";
import { satFramework, tastingTips } from "@/data/topics/tasting";

const sectionIcons = { appearance: Eye, nose: Wind, palate: Drop, conclusions: Scales } as const;

export default function TastingPage() {
  const sections = Object.entries(satFramework) as [keyof typeof sectionIcons, (typeof satFramework)["nose"]][];

  return (
    <div className="space-y-12">
      <PageHeader
        title="SAT 테이스팅"
        subtitle="WSET Level 3 Systematic Approach to Tasting"
        lead="외관, 향, 맛, 결론 순서로 관찰하고 모든 관찰을 품질 판단으로 연결합니다. 아래 용어는 답안지에 그대로 쓰는 표현입니다."
      />

      <section id="tips" className="scroll-mt-24 rounded-xl bg-accent-soft p-5 md:p-6">
        <h2 className="font-bold text-ink">고득점 원칙</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-2">
          {tastingTips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-2">
              <span className="w-4 shrink-0 font-bold tabular-nums text-accent">{i + 1}</span>
              {tip}
            </li>
          ))}
        </ol>
      </section>

      {sections.map(([key, section], idx) => {
        const Icon = sectionIcons[key];
        return (
          <section key={key} id={key} className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sunken text-sm font-bold tabular-nums text-ink-2">
                {idx + 1}
              </span>
              {section.title}
              <Icon size={20} className="text-ink-3" aria-hidden />
            </h2>
            <dl className="mt-5 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface">
              {section.items.map((item) => (
                <div key={item.label} className="grid gap-2 p-4 md:grid-cols-[10rem_1fr] md:gap-6">
                  <dt className="text-sm font-semibold text-ink">{item.label}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {item.options.map((opt) => (
                      <span key={opt} className="rounded-full bg-sunken px-2.5 py-1 text-xs text-ink-2">
                        {opt}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}

      <p className="max-w-[70ch] border-t border-line pt-8 leading-relaxed text-ink-2">
        WSET Level 3 테이스팅의 핵심은 품종 맞히기가 아니라 <strong className="text-ink">구조 분석과 품질 판단</strong>입니다.
        각 요소의 강도, 특성, 복합성을 순서대로 평가하고, 결론의 품질 등급을 그 관찰로 뒷받침하세요.
      </p>
    </div>
  );
}
