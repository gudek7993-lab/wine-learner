
import { Plant, Flask } from "@phosphor-icons/react/dist/ssr";
import PageHeader from "@/components/ui/PageHeader";
import TopicBlock from "@/components/ui/TopicBlock";
import type { StudyTopic } from "@/data/types";
import { extraViticulture, extraVinification } from "@/data/techniques/extra-topics";
import { viticultureTopics, vinificationTopics } from "@/data/topics/techniques";

export default function TechniquesPage() {
  const groups = [
    { id: "viticulture", title: "포도 재배", en: "Viticulture", icon: Plant, topics: [...(viticultureTopics as StudyTopic[]), ...extraViticulture] },
    { id: "vinification", title: "양조", en: "Vinification", icon: Flask, topics: [...(vinificationTopics as StudyTopic[]), ...extraVinification] },
  ];

  return (
    <div className="space-y-14">
      <PageHeader
        title="재배와 양조"
        lead="포도밭과 양조장에서의 선택이 와인 스타일로 어떻게 이어지는지 정리했습니다. 시험에서는 원인과 결과를 함께 설명해야 합니다."
        aside={
          <nav aria-label="섹션" className="flex gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {g.title}
              </a>
            ))}
          </nav>
        }
      />
      {groups.map(({ id, title, en, icon: Icon, topics }) => (
        <section key={id} id={id} className="scroll-mt-24">
          <h2 className="flex items-center gap-2.5 text-2xl font-bold tracking-tight">
            <Icon size={26} weight="duotone" className="text-accent" aria-hidden />
            {title}
            <span className="text-base font-normal text-ink-3">{en}</span>
          </h2>
          <div className="mt-6 space-y-4">
            {topics.map((topic) => (
              <TopicBlock key={topic.title} topic={topic} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
