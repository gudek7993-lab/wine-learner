import ProcessFlow from "@/components/ui/ProcessFlow";
import ExamTipBox from "@/components/detail/ExamTipBox";
import type { StudyTopic } from "@/data/types";

export default function TopicBlock({ topic }: { topic: StudyTopic }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-5 md:p-6">
      <h3 className="text-lg font-bold text-ink">{topic.title}</h3>
      {topic.content && (
        <div className="mt-4">
          {topic.content.includes("→") ? <ProcessFlow steps={topic.content} /> : <p className="text-ink-2">{topic.content}</p>}
        </div>
      )}
      {topic.items && (
        <dl className="mt-5 grid gap-x-8 gap-y-4 md:grid-cols-2">
          {topic.items.map((item) => (
            <div key={item.label}>
              <dt className="text-sm font-semibold text-ink">{item.label}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-2">{item.desc}</dd>
            </div>
          ))}
        </dl>
      )}
      {topic.tip && (
        <div className="mt-5">
          <ExamTipBox text={topic.tip} />
        </div>
      )}
    </article>
  );
}

