import type { Metadata } from "next";
import GrapeDetailView from "@/components/views/GrapeDetailView";
import { getAllGrapeIds, getGrape } from "@/lib/data-loader";

// Every grape page is generated at build time (static export for GitHub Pages).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGrapeIds().map((grapeId) => ({ grapeId }));
}

export async function generateMetadata({ params }: { params: Promise<{ grapeId: string }> }): Promise<Metadata> {
  const { grapeId } = await params;
  const grape = getGrape(grapeId);
  return { title: grape ? `${grape.nameKo} - 와인 러너` : "와인 러너" };
}

export default async function GrapeDetailPage({ params }: { params: Promise<{ grapeId: string }> }) {
  const { grapeId } = await params;
  return <GrapeDetailView grapeId={grapeId} />;
}
