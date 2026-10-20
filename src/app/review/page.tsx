import PageHeader from "@/components/ui/PageHeader";
import ReviewSession from "@/components/review/ReviewSession";

export const metadata = { title: "오늘의 복습 - 와인 러너" };

export default function ReviewPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="오늘의 복습"
        lead="틀린 문제는 다음 날, 맞힌 문제는 1·3·7·14·30일 간격으로 다시 나옵니다. 매일 새 문제 10개가 더해집니다."
      />
      <ReviewSession />
    </div>
  );
}
