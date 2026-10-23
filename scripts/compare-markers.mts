// Compare AI markers (Claude vs Gemini) on written answers with known intended scores.
// Run: npx tsx scripts/compare-markers.mts   (keys in .env.local: ANTHROPIC_API_KEY, GEMINI_API_KEY)
import { readFileSync, writeFileSync } from "node:fs";
import Anthropic from "@anthropic-ai/sdk";
import { examWrittenQuestions } from "../src/data/quiz/exam-written";

// ---------- keys (never printed) ----------
const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("="))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()]),
);
const ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY;
const GEMINI_API_KEY = env.GEMINI_API_KEY;

// ---------- the question and the designed answers ----------
const q = examWrittenQuestions.find((x) => x.id === "ex-s2-chablis-meursault")!;

type Sample = { id: string; label: string; expect: [number, number, number] | "0-3"; parts: [string, string, string] };
const samples: Sample[] = [
  {
    id: "A",
    label: "강한 답안",
    expect: [8, 10, 7],
    parts: [
      "샤블리는 부르고뉴 북쪽 끝에 있어 서늘한 대륙성 기후다. 서늘해서 포도가 천천히 익고 산도가 높게 유지되며, 그린 애플과 레몬 같은 풍미가 난다. 봄 서리가 큰 위험으로, 새순이 얼어 수확량이 줄 수 있다. 재배자는 포도밭에 히터나 캔들을 두어 공기를 데우거나, 스프링클러로 물을 뿌려 새순 표면에 얼음막을 만들어 보호한다. 프르미에 크뤼와 그랑 크뤼는 주로 키메리지안 토양으로, 석회질 점토에 작은 굴껍질 화석이 섞여 있다. 그랑 크뤼는 스랭 강 옆 남서향 경사지에 있어 햇빛을 많이 받아 더 잘 익는다.",
      "뫼르소가 있는 코트 드 본은 샤블리보다 남쪽이라 더 따뜻하다. 그래서 포도가 더 잘 익어 복숭아, 멜론 같은 핵과 풍미와 더 높은 바디를 갖는다. 포도밭은 동향 경사지라 아침 햇빛을 받아 잘 익는다. 양조에서는 오크통에서 발효해 오크와 질감이 잘 어우러지고, 젖산 발효로 산도가 부드러워지며 버터 풍미가 생긴다. 앙금 숙성과 바토나주로 크리미한 질감과 비스킷 풍미가 더해지고, 새 오크를 일부 써서 바닐라, 토스트, 견과 풍미가 생긴다. 오크통의 미세한 산소 유입도 복합성을 높인다. 그 결과 미디엄~풀바디에 복합적인 견과, 버터 풍미의 와인이 된다. 반면 샤블리는 주로 스테인리스 스틸이나 오래된 오크를 써서 1차 과일 풍미를 살린다.",
      "샤블리 프르미에 크뤼는 높은 산도 덕분에 수년간 숙성할 수 있고, 숙성하면 꿀, 버섯, 견과 같은 3차 풍미가 나타난다. 뫼르소는 농축도와 오크 구조 덕분에 장기 숙성 잠재력이 있으며, 숙성하면 헤이즐넛, 토스트, 버섯 풍미가 강해진다. 오크 풍미는 시간이 지나며 과일과 통합되고, 1차 과일 풍미는 줄어 말린 과일 쪽으로 변한다. 다만 조기 산화 위험이 있어 보관 상태가 중요하다.",
    ],
  },
  {
    id: "B",
    label: "중간 답안",
    expect: [5, 4, 1],
    parts: [
      "샤블리는 부르고뉴 북쪽에 있어 서늘한 대륙성 기후다. 그래서 산도가 높고 레몬, 그린 애플 풍미가 난다. 봄 서리 위험이 있어 새순이 피해를 입을 수 있는데, 히터를 써서 공기를 데운다. 좋은 밭은 키메리지안 토양이다.",
      "뫼르소는 코트 드 본에 있어 샤블리보다 남쪽이고 더 따뜻하다. 그래서 더 잘 익어 복숭아 같은 풍미와 더 높은 바디가 난다. 젖산 발효를 해서 버터 풍미와 부드러운 산도가 생긴다. 앙금과 함께 숙성하며 바토나주를 해 크리미한 질감이 생긴다. 오크도 쓴다.",
      "샤블리는 산도가 높아 숙성할 수 있다. 뫼르소도 숙성 잠재력이 있다.",
    ],
  },
  {
    id: "C",
    label: "약한 답안",
    expect: [2, 1, 0],
    parts: [
      "샤블리는 서늘한 대륙성 기후다. 봄에 서리가 와서 새순이 피해를 입는다.",
      "뫼르소는 더 따뜻한 곳이라 와인이 더 풍부하다. 오크를 쓴다.",
      "둘 다 숙성할 수 있다.",
    ],
  },
  {
    id: "D",
    label: "키워드 나열",
    expect: "0-3",
    parts: [
      "대륙성. 키메리지안. 서리, 스프링클러, 캔들. 쁘띠 샤블리 포틀랜디안.",
      "코트 드 본, 동향, 오크통 발효, MLF, 바토나주, 새 오크, 버터, 토스트.",
      "3차 풍미, 헤이즐넛, 조기 산화.",
    ],
  },
  {
    id: "E",
    label: "틀린 사실 섞임",
    expect: [2, 2, 0],
    parts: [
      "샤블리는 부르고뉴 남쪽의 따뜻한 해양성 기후라 포도가 아주 잘 익는다. 봄 서리 위험이 있어 새순이 얼 수 있는데, 스프링클러로 물을 뿌려 새순에 얼음막을 만들어 보호한다. 토양은 화산토다.",
      "뫼르소는 샤블리보다 북쪽이라 더 서늘하지만, 오크통에서 발효해 오크와 질감이 잘 어우러지고, 바토나주로 크리미한 질감과 비스킷 풍미가 생긴다. 젖산 발효는 하지 않는다.",
      "샤블리는 산도가 낮아 숙성하지 못하고 바로 마셔야 한다. 뫼르소도 1~2년 안에 마셔야 한다.",
    ],
  },
];

// ---------- one prompt and schema for every marker ----------
const SYSTEM = `당신은 WSET Level 3 서술형 채점관이다. 채점 포인트 목록을 기준으로만 채점한다.
규칙:
- 각 채점 포인트마다 학생 답안이 그 내용을 실제로 서술했는지 판단한다.
- 포인트가 원인과 결과(예: "~해서 ~가 됨")를 담고 있으면, 답안도 그 원인과 결과를 함께 써야 인정한다. 용어만 나열하거나 결과 없이 원인만 쓰면 인정하지 않는다.
- 사실이 틀린 서술은 어떤 포인트로도 인정하지 않는다.
- 인정한 포인트는 학생 답안에서 근거가 되는 부분을 한 글자도 바꾸지 말고 그대로 인용한다. 인용할 문장이 없으면 인정하지 않는다.
- 점수 합산은 하지 않는다. 포인트별 판단만 한다.
- feedback에는 놓친 핵심과 고쳐 쓰는 방법을 한국어 한두 문장으로 쓴다.`;

const schema = {
  type: "object",
  properties: {
    parts: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: { type: "string" },
          points: {
            type: "array",
            items: {
              type: "object",
              properties: { index: { type: "integer" }, awarded: { type: "boolean" }, evidence: { type: "string" } },
              required: ["index", "awarded", "evidence"],
              additionalProperties: false,
            },
          },
          feedback: { type: "string" },
        },
        required: ["label", "points", "feedback"],
        additionalProperties: false,
      },
    },
  },
  required: ["parts"],
  additionalProperties: false,
} as const;

function userPrompt(s: Sample) {
  return [
    `문제 상황: ${q.stem}`,
    ...q.parts.map((p, i) =>
      [
        `\n[파트 ${p.label}] ${p.prompt} (${p.marks}점)`,
        "채점 포인트:",
        ...p.markingPoints.map((m, k) => `  ${k}. ${m}`),
        `학생 답안:\n${s.parts[i]}`,
      ].join("\n"),
    ),
    "\n모든 파트의 모든 채점 포인트에 대해 index(0부터), awarded, evidence(인정하지 않으면 빈 문자열)를 출력하라.",
  ].join("\n");
}

type Marked = { parts: { label: string; points: { index: number; awarded: boolean; evidence: string }[]; feedback: string }[] };
type Run = { marks: number[]; total: number; badEvidence: number; awarded: number; ms: number; inTok: number; outTok: number; feedback: string };

function score(s: Sample, m: Marked, ms: number, inTok: number, outTok: number): Run {
  const norm = (t: string) => t.replace(/\s+/g, " ").trim();
  let badEvidence = 0;
  let awarded = 0;
  const marks = q.parts.map((p, i) => {
    const part = m.parts.find((x) => x.label === p.label) ?? m.parts[i];
    const ok = (part?.points ?? []).filter((pt) => pt.awarded);
    awarded += ok.length;
    for (const pt of ok) if (!pt.evidence || !norm(s.parts[i]).includes(norm(pt.evidence))) badEvidence++;
    return Math.min(new Set(ok.map((pt) => pt.index)).size, p.marks);
  });
  return { marks, total: marks.reduce((a, b) => a + b, 0), badEvidence, awarded, ms, inTok, outTok, feedback: m.parts.map((x) => x.feedback).join(" / ") };
}

// ---------- markers ----------
const anthropic = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

// Haiku 5.5 has no server-side refusal fallback; the others take fallbacks: "default".
const PRICE: Record<string, [number, number]> = { "claude-opus-5-5": [4, 20], "claude-sonnet-5-5": [2, 10], "claude-haiku-5-5": [0.1, 0.5] };

async function markClaude(model: string, s: Sample): Promise<Run> {
  const t = Date.now();
  const fallback = model === "claude-haiku-5-5" ? {} : { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" };
  const res = await anthropic.beta.messages.create({
    model,
    max_tokens: 16000,
    ...fallback,
    output_config: { effort: "medium", format: { type: "json_schema", schema } },
    system: SYSTEM,
    messages: [{ role: "user", content: userPrompt(s) }],
  } as never);
  const r = res as unknown as Anthropic.Beta.BetaMessage;
  if (r.stop_reason === "refusal") throw new Error("refused");
  const text = r.content.find((b) => b.type === "text") as { text: string };
  return score(s, JSON.parse(text.text), Date.now() - t, r.usage.input_tokens, r.usage.output_tokens);
}

const G = "https://generativelanguage.googleapis.com/v1beta";
function geminiSchema(x: unknown): unknown {
  // Gemini's responseSchema is an OpenAPI subset: no additionalProperties.
  if (Array.isArray(x)) return x.map(geminiSchema);
  if (x && typeof x === "object")
    return Object.fromEntries(Object.entries(x).filter(([k]) => k !== "additionalProperties").map(([k, v]) => [k, geminiSchema(v)]));
  return x;
}

async function markGemini(model: string, s: Sample): Promise<Run> {
  const t = Date.now();
  const res = await fetch(`${G}/${model}:generateContent`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents: [{ role: "user", parts: [{ text: userPrompt(s) }] }],
      generationConfig: { responseMimeType: "application/json", responseSchema: geminiSchema(schema) },
    }),
  });
  const j = (await res.json()) as {
    error?: { message: string };
    candidates?: { content: { parts: { text?: string }[] } }[];
    usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number; thoughtsTokenCount?: number };
  };
  if (!res.ok || j.error) throw new Error(j.error?.message ?? String(res.status));
  const text = j.candidates![0].content.parts.map((p) => p.text ?? "").join("");
  const u = j.usageMetadata ?? {};
  return score(s, JSON.parse(text), Date.now() - t, u.promptTokenCount ?? 0, (u.candidatesTokenCount ?? 0) + (u.thoughtsTokenCount ?? 0));
}

async function pickGeminiModels(): Promise<string[]> {
  const res = await fetch(`${G}/models?pageSize=200`, { headers: { "x-goog-api-key": GEMINI_API_KEY } });
  const j = (await res.json()) as { models?: { name: string; supportedGenerationMethods?: string[] }[]; error?: { message: string } };
  if (!j.models) throw new Error(j.error?.message ?? "cannot list Gemini models");
  const usable = j.models
    .filter((m) => m.supportedGenerationMethods?.includes("generateContent"))
    .map((m) => m.name)
    .filter((n) => /gemini-\d/.test(n) && !/(preview|exp|lite|tts|image|audio|live|embedding|thinking)/.test(n));
  const ver = (n: string) => parseFloat(n.match(/gemini-(\d+(\.\d+)?)/)![1]);
  const best = (kind: string) => usable.filter((n) => n.includes(kind)).sort((a, b) => ver(b) - ver(a))[0];
  console.log("Gemini models available:", usable.join(", "));
  return [best("pro"), best("flash")].filter(Boolean);
}

// ---------- run ----------
const RUNS = 2;
// MARKERS=claude-opus-5-5,gemini-4-argon picks exact models; default: Claude + newest Gemini Pro/Flash.
const only = process.env.MARKERS?.split(",").map((x) => x.trim()).filter(Boolean);
const markers: { name: string; mark: (s: Sample) => Promise<Run> }[] = [];
if (only) {
  for (const m of only)
    markers.push(m.startsWith("claude") ? { name: m, mark: (s) => markClaude(m, s) } : { name: m, mark: (s) => markGemini(`models/${m}`, s) });
} else {
  if (ANTHROPIC_API_KEY) markers.push({ name: "claude-opus-5-5", mark: (s) => markClaude("claude-opus-5-5", s) });
  if (GEMINI_API_KEY) for (const m of await pickGeminiModels()) markers.push({ name: m.replace("models/", ""), mark: (s) => markGemini(m, s) });
}

const results: Record<string, Record<string, (Run | { error: string })[]>> = {};
for (const mk of markers) {
  results[mk.name] = {};
  for (const s of samples) {
    results[mk.name][s.id] = [];
    for (let r = 0; r < RUNS; r++) {
      try {
        results[mk.name][s.id].push(await mk.mark(s));
      } catch (e) {
        results[mk.name][s.id].push({ error: String(e).slice(0, 200) });
      }
    }
  }
}
writeFileSync(new URL(`../compare-markers-result-${Date.now()}.json`, import.meta.url), JSON.stringify({ samples, results }, null, 2));

// ---------- summary ----------
const expTotal = (s: Sample) => (s.expect === "0-3" ? null : s.expect.reduce((a, b) => a + b, 0));
for (const [name, bySample] of Object.entries(results)) {
  console.log(`\n=== ${name} ===`);
  let absErr = 0, n = 0, inconsistent = 0, bad = 0, awardedAll = 0, ms = 0, inTok = 0, outTok = 0, runs = 0;
  for (const s of samples) {
    const rs = bySample[s.id];
    const ok = rs.filter((r): r is Run => !("error" in r));
    const exp = expTotal(s);
    const line = rs.map((r) => ("error" in r ? `ERR(${r.error.slice(0, 60)})` : `${r.total} [${r.marks.join("/")}]`)).join("  ");
    console.log(`${s.id} ${s.label} 의도 ${exp ?? "0-3"}${exp !== null ? ` [${(s.expect as number[]).join("/")}]` : ""} -> ${line}`);
    for (const r of ok) {
      if (exp !== null) { absErr += Math.abs(r.total - exp); n++; } else { absErr += Math.max(0, r.total - 3); n++; }
      bad += r.badEvidence; awardedAll += r.awarded; ms += r.ms; inTok += r.inTok; outTok += r.outTok; runs++;
    }
    if (ok.length === 2 && ok[0].total !== ok[1].total) inconsistent++;
  }
  console.log(`평균 오차 ${(absErr / Math.max(n, 1)).toFixed(1)}점 | 두 번 채점이 다른 답안 ${inconsistent}/${samples.length} | 근거 인용 불일치 ${bad}/${awardedAll} | 평균 ${(ms / Math.max(runs, 1) / 1000).toFixed(1)}초 | 평균 토큰 입력 ${Math.round(inTok / Math.max(runs, 1))} 출력 ${Math.round(outTok / Math.max(runs, 1))}`);
  const price = PRICE[name];
  if (price) console.log(`  예상 비용($${price[0]}/$${price[1]} per MTok): 답안당 약 $${((inTok * price[0] + outTok * price[1]) / 1e6 / Math.max(runs, 1)).toFixed(4)}`);
}
