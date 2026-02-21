export default function ExamTipBox({ text }: { text: string }) {
  return (
    <div className="exam-tip">
      <div className="flex items-start gap-2">
        <span className="text-gold-500 font-bold text-sm shrink-0">EXAM TIP</span>
        <p className="text-sm text-burgundy-800 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
