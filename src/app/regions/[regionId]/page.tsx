import type { Metadata } from "next";
import RegionView from "@/components/views/RegionView";
import { getAllRegionIds, getRegion } from "@/lib/data-loader";

// Every region page is generated at build time (static export for GitHub Pages).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllRegionIds().map((regionId) => ({ regionId }));
}

export async function generateMetadata({ params }: { params: Promise<{ regionId: string }> }): Promise<Metadata> {
  const { regionId } = await params;
  const region = getRegion(regionId);
  return { title: region ? `${region.nameKo} - 와인 러너` : "와인 러너" };
}

export default async function RegionPage({ params }: { params: Promise<{ regionId: string }> }) {
  const { regionId } = await params;
  return <RegionView regionId={regionId} />;
}
