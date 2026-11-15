import { allRegions, allGrapes, getGrapeProfile, getRegion } from "@/lib/data-loader";
import { allMcq } from "@/lib/exam";
import { topicAnchor } from "@/lib/anchors";
import type { SearchDoc } from "@/lib/search";
import type { StudyTopic } from "@/data/types";
import { serviceGroups } from "@/data/service/service-content";
import { extraViticulture, extraVinification } from "@/data/techniques/extra-topics";
import { viticultureTopics, vinificationTopics } from "@/data/topics/techniques";
import { methods, champagneStyles, dosageTable, otherSparkling } from "@/data/topics/sparkling";
import { fortifiedWines } from "@/data/topics/fortified";
import { satFramework, tastingTips } from "@/data/topics/tasting";
import { writtenQuestions } from "@/data/quiz/written-questions";
import { lo5WrittenDrills } from "@/data/quiz/lo5-questions";

const j = (...parts: (string | (string | undefined)[] | undefined | null)[]) =>
  parts.flatMap((p) => (Array.isArray(p) ? p : p ? [p] : [])).filter(Boolean).join(" ");

function topicBody(t: StudyTopic): string {
  return j(t.content, t.items?.map((i) => `${i.label} ${i.desc}`), t.tip);
}

let cached: SearchDoc[] | null = null;

/** Flat list of everything searchable in the app. Built once, on first use. */
export function buildIndex(): SearchDoc[] {
  if (cached) return cached;
  const docs: SearchDoc[] = [];

  for (const r of allRegions) {
    const parent = r.parentId ? getRegion(r.parentId)?.nameKo : undefined;
    docs.push({
      id: `region:${r.id}`,
      type: "region",
      title: r.nameKo,
      subtitle: j(r.nameEn, parent ? `· ${parent}` : undefined),
      keywords: r.nameEn,
      body: j(
        r.summary,
        r.climate.description,
        r.climate.type,
        r.soils.map((s) => `${s.type.join(" ")} ${s.description}`),
        r.grapes.map((g) => g.notes),
        r.classifications?.map(
          (c) => `${c.name} ${c.description} ${(c.levels ?? []).map((l) => `${l.name} ${l.description}`).join(" ")}`,
        ),
        r.wineStyles.map((s) => `${s.name} ${s.description}`),
        r.keyFacts,
        r.examTips,
      ),
      href: `/regions/${r.id}`,
    });
  }

  for (const g of allGrapes) {
    const p = getGrapeProfile(g.id);
    docs.push({
      id: `grape:${g.id}`,
      type: "grape",
      title: g.nameKo,
      subtitle: j(g.nameEn, g.color === "red" ? "· 적포도" : "· 청포도"),
      keywords: j(g.nameEn, g.regions.map((r) => r.localName), p?.synonyms),
      body: j(
        p?.summary,
        p?.primaryFlavors,
        p?.pairings,
        p?.origin,
        g.characteristics.aromas,
        g.characteristics.otherNotes,
        g.regions.map((r) => r.significance),
        g.winemaking,
        g.examTips,
      ),
      href: `/grapes/${g.id}`,
    });
  }

  const addTopics = (type: "technique" | "service", page: string, group: string, topics: StudyTopic[]) => {
    for (const t of topics) {
      docs.push({
        id: `${type}:${t.title}`,
        type,
        title: t.title,
        subtitle: group,
        body: topicBody(t),
        href: `${page}#${topicAnchor(t.title)}`,
      });
    }
  };
  addTopics("technique", "/techniques/", "포도 재배", [...(viticultureTopics as StudyTopic[]), ...extraViticulture]);
  addTopics("technique", "/techniques/", "양조", [...(vinificationTopics as StudyTopic[]), ...extraVinification]);
  for (const g of serviceGroups) addTopics("service", "/service/", g.title, g.topics);

  const sp = (id: string, title: string, subtitle: string, body: string, sec: string) =>
    docs.push({ id: `sparkling:${id}`, type: "sparkling", title, subtitle, body, href: `/sparkling/#${sec}` });
  for (const m of methods) sp(m.name, m.name, "양조 방법 비교", j(m.nameEn, m.steps, m.characteristics, m.wines), "methods");
  for (const s of champagneStyles) sp(s.name, s.name, "샴페인", s.desc, "champagne");
  sp("dosage", "당도 표기 (도사주)", "샴페인", dosageTable.map((d) => `${d.style} ${d.sugar}`).join(" "), "champagne");
  for (const w of otherSparkling) sp(w.name, w.name, "그 밖의 스파클링", j(w.meta, w.desc), "others");

  for (const [key, w] of Object.entries(fortifiedWines)) {
    const href = `/fortified/#${key}`;
    docs.push({ id: `fortified:${key}`, type: "fortified", title: w.title, subtitle: w.region, body: w.intro, href });
    for (const c of w.concepts) {
      docs.push({ id: `fortified:${key}:${c.name}`, type: "fortified", title: c.name, subtitle: w.title, body: c.desc, href });
    }
    for (const s of w.styles) {
      docs.push({ id: `fortified:${key}:${s.name}`, type: "fortified", title: s.name, subtitle: w.title, body: s.desc, href });
    }
    for (const [i, t] of ((w as { tips?: string[] }).tips ?? []).entries()) {
      docs.push({ id: `fortified:${key}:tip${i}`, type: "fortified", title: "시험 포인트", subtitle: w.title, body: t, href });
    }
  }

  for (const [key, sec] of Object.entries(satFramework)) {
    for (const item of sec.items) {
      docs.push({
        id: `tasting:${key}:${item.label}`,
        type: "tasting",
        title: item.label,
        subtitle: `SAT ${sec.title}`,
        body: item.options.join(", "),
        href: `/tasting/#${key}`,
      });
    }
  }
  tastingTips.forEach((tip, i) =>
    docs.push({ id: `tasting:tip${i}`, type: "tasting", title: "고득점 원칙", subtitle: "SAT 테이스팅", body: tip, href: "/tasting/#tips" }),
  );

  for (const q of allMcq) {
    docs.push({
      id: `quiz:${q.id}`,
      type: "quiz",
      title: q.question,
      subtitle: `객관식 · ${q.category}`,
      keywords: q.tags.join(" "),
      body: j(q.options, q.explanation),
      href: "/quiz/",
    });
  }
  for (const q of [...writtenQuestions, ...lo5WrittenDrills]) {
    docs.push({
      id: `quiz:w:${q.id}`,
      type: "quiz",
      title: q.question,
      subtitle: `서술형 · ${q.category}`,
      body: j(q.markingPoints, q.examinerTip),
      href: "/quiz/?mode=written",
    });
  }

  cached = docs;
  return docs;
}
