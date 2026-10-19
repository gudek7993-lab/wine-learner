"use client";

import { Archive, Wine, Warning, ForkKnife, ChatCircle, BookOpen } from "@phosphor-icons/react";
import PageHeader from "@/components/ui/PageHeader";
import TopicBlock from "@/components/ui/TopicBlock";
import { serviceGroups } from "@/data/service/service-content";

const icons: Record<string, typeof Archive> = {
  storage: Archive,
  service: Wine,
  faults: Warning,
  pairing: ForkKnife,
  advice: ChatCircle,
};

export default function ServicePage() {
  return (
    <div className="space-y-14">
      <PageHeader
        title="서비스와 페어링"
        lead="보관, 서비스, 결함, 음식 페어링, 고객 추천. 객관식 4문항과 서술형 10점이 걸린 영역으로, 서술형 3번과 4번 문제에 매번 나옵니다."
        aside={
          <nav aria-label="섹션" className="flex flex-wrap gap-2">
            {serviceGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-3.5 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {g.title}
              </a>
            ))}
          </nav>
        }
      />
      {serviceGroups.map((g) => {
        const Icon = icons[g.id] ?? BookOpen;
        return (
          <section key={g.id} id={g.id} className="scroll-mt-24">
            <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
              <Icon size={26} weight="duotone" className="text-accent" aria-hidden />
              {g.title}
              <span className="text-base font-normal text-ink-3">{g.en}</span>
            </h2>
            <div className="mt-6 space-y-4">
              {g.topics.map((t) => (
                <TopicBlock key={t.title} topic={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
