import { supabase } from "@/lib/sync";

export interface MarkPart {
  label: string;
  prompt: string;
  marks: number;
  markingPoints: string[];
  answer: string;
}

export interface AiPart {
  label: string;
  awarded: { index: number; evidence: string }[];
  score: number;
  marks: number;
  feedback: string;
}

/** Calls the `mark` Edge Function (Claude Sonnet 5.5). Needs a signed-in user. */
export async function aiMark(stem: string, parts: MarkPart[]): Promise<AiPart[]> {
  if (!supabase) throw new Error("AI 채점은 동기화 설정 후 쓸 수 있습니다.");
  const { data: s } = await supabase.auth.getSession();
  if (!s.session) throw new Error("화면 맨 아래에서 Google로 로그인하면 AI 채점을 쓸 수 있습니다.");
  const { data, error } = await supabase.functions.invoke("mark", { body: { stem, parts } });
  if (error) {
    const detail = await (error as { context?: Response }).context?.json?.().catch(() => null);
    throw new Error(detail?.error ?? "AI 채점에 실패했습니다. 잠시 뒤 다시 시도하세요.");
  }
  return (data as { parts: AiPart[] }).parts;
}
