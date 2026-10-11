import PageHeader from "@/components/ui/PageHeader";
import MockExam from "@/components/mock/MockExam";

export const metadata = { title: "모의고사 - 와인 러너" };

export default function MockPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="모의고사"
        lead="실제 이론 시험과 같은 형식입니다. 객관식 50문항과 서술형 4문항을 2시간 안에 풉니다."
      />
      <MockExam />
    </div>
  );
}
