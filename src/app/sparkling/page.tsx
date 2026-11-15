"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import ProcessFlow from "@/components/ui/ProcessFlow";
import ExamTipBox from "@/components/detail/ExamTipBox";
import { OutOfScopeBadge } from "@/components/ui/OutOfScope";
import { methods, champagneStyles, dosageTable, otherSparkling } from "@/data/topics/sparkling";

export default function SparklingPage() {
  return (
    <div className="space-y-14">
      <PageHeader
        title="스파클링 와인"
        lead="기포를 만드는 2차 발효를 어디서, 얼마나 오래 하느냐가 스타일을 가릅니다."
      />

      <Section id="methods" title="양조 방법 비교">
        <div className="grid gap-4 md:grid-cols-2">
          {methods.map((m) => (
            <article key={m.name} className="flex flex-col rounded-xl border border-line bg-surface p-5 md:p-6">
              <h3 className="text-lg font-bold text-ink">{m.name}</h3>
              {m.nameEn && <p className="text-sm text-ink-3">{m.nameEn}</p>}
              <div className="mt-4">
                <ProcessFlow steps={m.steps} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">{m.characteristics}</p>
              <p className="mt-auto pt-4 text-sm text-ink-3">
                <span className="font-semibold text-ink-2">예시</span> {m.wines.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="champagne" title="샴페인" description="샤르도네, 피노 누아, 피노 뮈니에가 주요 품종입니다.">
        <div className="grid gap-10 lg:grid-cols-12">
          <dl className="divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface lg:col-span-7">
            {champagneStyles.map((s) => (
              <div key={s.name} className="grid gap-1 p-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="font-semibold text-ink">{s.name}</dt>
                <dd className="text-sm leading-relaxed text-ink-2">{s.desc}</dd>
              </div>
            ))}
          </dl>
          <div className="lg:col-span-5">
            <h3 className="text-sm font-semibold text-ink-3">당도 표기 (도사주 후 잔당)</h3>
            <ol className="mt-3 space-y-1.5">
              {dosageTable.map((d, i) => (
                <li key={d.style} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg px-3 py-2" style={{ backgroundColor: `color-mix(in srgb, var(--style-rich-white) ${8 + i * 9}%, var(--surface))` }}>
                  <span className="text-sm font-semibold text-ink">{d.style}</span>
                  <span className="text-sm tabular-nums text-ink-2">{d.sugar}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-ink-3">아래로 갈수록 달아집니다.</p>
          </div>
        </div>
        <div className="mt-6">
          <ExamTipBox text="전통 방식의 각 단계(2차 발효, 앙금 숙성, 리들링, 데고르주망)가 와인에 미치는 영향을 설명할 수 있어야 합니다." />
        </div>
      </Section>

      <Section id="others" title="그 밖의 스파클링">
        <dl className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          {otherSparkling.map((w) => (
            <div key={w.name} className="border-t border-line pt-4">
              <dt className="flex flex-wrap items-center gap-2 font-bold text-ink">
                {w.name}
                {"outOfScope" in w && <OutOfScopeBadge />}
              </dt>
              <dd className="mt-0.5 text-xs text-ink-3">{w.meta}</dd>
              <dd className="mt-2 text-sm leading-relaxed text-ink-2">{w.desc}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}
