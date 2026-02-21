import { Region, GrapeVariety } from "@/data/types";
import { franceRegions } from "@/data/regions/france";
import { italyRegions } from "@/data/regions/italy";
import { spainRegions } from "@/data/regions/spain";
import { portugalRegions } from "@/data/regions/portugal";
import { germanyRegions } from "@/data/regions/germany";
import { austriaRegions } from "@/data/regions/austria";
import { australiaRegions } from "@/data/regions/australia";
import { newZealandRegions } from "@/data/regions/new-zealand";
import { usaRegions } from "@/data/regions/usa";
import { chileRegions } from "@/data/regions/chile";
import { argentinaRegions } from "@/data/regions/argentina";
import { southAfricaRegions } from "@/data/regions/south-africa";
import { redGrapes } from "@/data/grapes/red-grapes";
import { whiteGrapes } from "@/data/grapes/white-grapes";

export const allRegions: Region[] = [
  ...franceRegions,
  ...italyRegions,
  ...spainRegions,
  ...portugalRegions,
  ...germanyRegions,
  ...austriaRegions,
  ...australiaRegions,
  ...newZealandRegions,
  ...usaRegions,
  ...chileRegions,
  ...argentinaRegions,
  ...southAfricaRegions,
];

export const allGrapes: GrapeVariety[] = [...redGrapes, ...whiteGrapes];

// Indexes
const regionMap = new Map<string, Region>();
const grapeMap = new Map<string, GrapeVariety>();

function buildIndexes() {
  allRegions.forEach((r) => regionMap.set(r.id, r));
  allGrapes.forEach((g) => grapeMap.set(g.id, g));
}
buildIndexes();

export function getRegion(id: string): Region | undefined {
  return regionMap.get(id);
}

export function getGrape(id: string): GrapeVariety | undefined {
  return grapeMap.get(id);
}

export function getRegionChildren(parentId: string): Region[] {
  return allRegions.filter((r) => r.parentId === parentId);
}

export function getRegionBreadcrumbs(id: string): Region[] {
  const crumbs: Region[] = [];
  let current = regionMap.get(id);
  while (current) {
    crumbs.unshift(current);
    current = current.parentId ? regionMap.get(current.parentId) : undefined;
  }
  return crumbs;
}

export function getGrapesForRegion(regionId: string): GrapeVariety[] {
  const region = regionMap.get(regionId);
  if (!region) return [];
  return region.grapes
    .map((g) => grapeMap.get(g.grapeId))
    .filter((g): g is GrapeVariety => g !== undefined);
}

export function getRegionsForGrape(grapeId: string): Region[] {
  const grape = grapeMap.get(grapeId);
  if (!grape) return [];
  return grape.regions
    .map((r) => regionMap.get(r.regionId))
    .filter((r): r is Region => r !== undefined);
}

export function getCountries(): Region[] {
  return allRegions.filter((r) => r.level === "country");
}

export function getAllRegionIds(): string[] {
  return allRegions.map((r) => r.id);
}

export function getAllGrapeIds(): string[] {
  return allGrapes.map((g) => g.id);
}

export interface SearchResult {
  type: "region" | "grape";
  id: string;
  nameKo: string;
  nameEn: string;
  href: string;
}

export function search(query: string): SearchResult[] {
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  allRegions.forEach((r) => {
    if (
      r.nameKo.includes(q) ||
      r.nameEn.toLowerCase().includes(q)
    ) {
      results.push({
        type: "region",
        id: r.id,
        nameKo: r.nameKo,
        nameEn: r.nameEn,
        href: `/regions/${r.id}`,
      });
    }
  });

  allGrapes.forEach((g) => {
    if (
      g.nameKo.includes(q) ||
      g.nameEn.toLowerCase().includes(q)
    ) {
      results.push({
        type: "grape",
        id: g.id,
        nameKo: g.nameKo,
        nameEn: g.nameEn,
        href: `/grapes/${g.id}`,
      });
    }
  });

  return results.slice(0, 10);
}
