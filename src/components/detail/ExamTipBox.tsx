import { Lightbulb } from "@phosphor-icons/react/dist/ssr";

export default function ExamTipBox({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-tip-soft p-4">
      <Lightbulb size={20} weight="duotone" className="text-tip shrink-0 mt-0.5" aria-hidden />
      <div className="text-sm leading-relaxed text-ink">
        <span className="font-semibold text-tip mr-2">시험 포인트</span>
        {text}
      </div>
    </div>
  );
}
