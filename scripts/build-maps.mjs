// Generates src/components/map/geo-paths.ts from Natural Earth (world-atlas) data.
// Run: node scripts/build-maps.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { geoNaturalEarth1, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
const world110 = JSON.parse(readFileSync(require.resolve("world-atlas/countries-110m.json"), "utf8"));
const world50 = JSON.parse(readFileSync(require.resolve("world-atlas/countries-50m.json"), "utf8"));

// ISO 3166-1 numeric ids used by world-atlas
const WINE_COUNTRIES = {
  france: "250", italy: "380", spain: "724", portugal: "620", germany: "276", austria: "040",
  australia: "036", "new-zealand": "554", usa: "840", chile: "152", argentina: "032", "south-africa": "710",
};

// ---------- World ----------
const W = 960, H = 470;
const countries110 = feature(world110, world110.objects.countries).features.filter((f) => f.id !== "010"); // drop Antarctica
const worldProj = geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], { type: "FeatureCollection", features: countries110 });
const worldPath = geoPath(worldProj).digits(1);

const wineIds = new Set(Object.values(WINE_COUNTRIES));
const land = countries110.filter((f) => !wineIds.has(f.id)).map((f) => worldPath(f)).join("");
const wine = Object.fromEntries(
  Object.entries(WINE_COUNTRIES).map(([slug, id]) => {
    const f = countries110.find((c) => c.id === id);
    const [cx, cy] = worldPath.centroid(f);
    return [slug, { d: worldPath(f), cx: +cx.toFixed(1), cy: +cy.toFixed(1) }];
  }),
);
// USA centroid is pulled by Alaska; Portugal / Austria are tiny. Pin labels to a sensible point.
const labelFix = { usa: [-98, 39], france: [2.5, 46.5], "new-zealand": [172, -41.5] };
for (const [slug, lonlat] of Object.entries(labelFix)) {
  const [x, y] = worldProj(lonlat);
  wine[slug].cx = +x.toFixed(1);
  wine[slug].cy = +y.toFixed(1);
}

const y = (lat) => +worldProj([0, lat])[1].toFixed(1);
const belts = { north: [y(50), y(30)], south: [y(-30), y(-45)] };

// ---------- Country region maps ----------
// One config per country: ISO id, an optional lon/lat box to drop overseas territories,
// an optional extent to zoom into (when regions cluster), and region pins at real locations.
const CW = 460;
const COUNTRIES = {
  france: { iso: "250", keep: [-6, 10, 41, 52], pins: [
    { id: "france-champagne", nameKo: "샹파뉴", href: "/sparkling", at: [3.95, 49.05] },
    { id: "france-alsace", at: [7.35, 48.1] }, { id: "france-loire", at: [0.2, 47.3] },
    { id: "france-burgundy", at: [4.75, 47.0] }, { id: "france-bordeaux", at: [-0.55, 44.85] },
    { id: "france-rhone", at: [4.8, 44.6] }, { id: "france-south", at: [3.0, 43.4] } ] },
  italy: { iso: "380", pins: [
    { id: "italy-piedmont", at: [8.0, 44.6] }, { id: "italy-veneto", at: [11.0, 45.5] },
    { id: "italy-tuscany", at: [11.3, 43.4] }, { id: "italy-south", at: [15.8, 40.9] } ] },
  spain: { iso: "724", keep: [-10, 5, 35, 44.5], pins: [
    { id: "spain-rias-baixas", at: [-8.7, 42.4] }, { id: "spain-rioja", at: [-2.6, 42.5] },
    { id: "spain-ribera-del-duero", at: [-3.8, 41.65] }, { id: "spain-rueda", at: [-4.96, 41.4] },
    { id: "spain-priorat", at: [0.8, 41.2] } ] },
  portugal: { iso: "620", keep: [-10, -6, 36.8, 42.2], pins: [
    { id: "portugal-vinho-verde", at: [-8.4, 41.7] }, { id: "portugal-douro", at: [-7.6, 41.15] },
    { id: "portugal-alentejo", at: [-7.9, 38.6] } ] },
  germany: { iso: "276",
    insets: [{ title: "라인강 유역", zoom: [[6.4, 50.3], [8.9, 49.0]], pins: ["germany-mosel", "germany-rheingau", "germany-rheinhessen", "germany-pfalz"] }], pins: [
    { id: "germany-mosel", at: [7.0, 49.9] }, { id: "germany-rheingau", at: [8.0, 50.0] },
    { id: "germany-rheinhessen", at: [8.2, 49.8] }, { id: "germany-pfalz", at: [8.15, 49.3] } ] },
  austria: { iso: "040", pins: [
    { id: "austria-niederosterreich", at: [15.6, 48.4] }, { id: "austria-burgenland", at: [16.8, 47.8] },
    { id: "austria-steiermark", at: [15.5, 46.8] } ] },
  usa: { iso: "840", keep: [-125, -66, 24, 50],
    insets: [{ title: "캘리포니아 북부", zoom: [[-123.6, 39.0], [-121.6, 37.6]], pins: ["usa-sonoma", "usa-napa"] }], pins: [
    { id: "usa-washington", at: [-119.8, 46.3] }, { id: "usa-oregon", at: [-123.1, 45.2] },
    { id: "usa-sonoma", at: [-122.8, 38.5] }, { id: "usa-napa", at: [-122.3, 38.4] },
    { id: "usa-central-coast", at: [-120.8, 35.6] }, { id: "usa-new-york", at: [-77.0, 42.6] } ] },
  chile: { iso: "152", keep: [-76, -66, -56, -17], zoom: [[-74, -29.0], [-69.5, -38.5]],
    insets: [{ title: "센트럴 밸리 북부", zoom: [[-72.0, -32.9], [-70.2, -34.9]], pins: ["chile-casablanca", "chile-maipo", "chile-colchagua"] }], pins: [
    { id: "chile-elqui-limari", at: [-71.2, -30.5] }, { id: "chile-casablanca", at: [-71.4, -33.3] },
    { id: "chile-maipo", at: [-70.7, -33.6] }, { id: "chile-colchagua", at: [-71.2, -34.6] },
    { id: "chile-bio-bio", at: [-72.5, -37.3] } ] },
  argentina: { iso: "032", keep: [-74, -53, -56, -21], zoom: [[-72, -22.5], [-62, -41.5]], pins: [
    { id: "argentina-salta", at: [-65.95, -26.07] }, { id: "argentina-mendoza", at: [-68.8, -33.0] },
    { id: "argentina-patagonia", at: [-68.0, -38.9] } ] },
  "south-africa": { iso: "710", zoom: [[17.6, -32.6], [20.4, -34.9]], pins: [
    { id: "sa-swartland", at: [18.7, -33.35] }, { id: "sa-paarl", at: [18.97, -33.73] },
    { id: "sa-stellenbosch", at: [18.86, -33.93] }, { id: "sa-constantia", at: [18.43, -34.03] },
    { id: "sa-elgin", at: [19.05, -34.15] }, { id: "sa-walker-bay", at: [19.25, -34.4] } ] },
  australia: { iso: "036", keep: [110, 155, -45, -9],
    insets: [{ title: "사우스오스트레일리아", zoom: [[138.2, -33.5], [139.6, -35.5]], pins: ["australia-clare-valley", "australia-barossa", "australia-eden-valley", "australia-adelaide-hills", "australia-mclaren-vale"] }], pins: [
    { id: "australia-margaret-river", at: [115.1, -33.9] }, { id: "australia-clare-valley", at: [138.6, -33.85] },
    { id: "australia-barossa", at: [138.95, -34.55] }, { id: "australia-eden-valley", at: [139.15, -34.6] },
    { id: "australia-adelaide-hills", at: [138.8, -34.95] }, { id: "australia-mclaren-vale", at: [138.55, -35.22] },
    { id: "australia-coonawarra", at: [140.83, -37.3] }, { id: "australia-yarra-valley", at: [145.5, -37.7] },
    { id: "australia-hunter-valley", at: [151.2, -32.8] }, { id: "australia-tasmania", at: [147.1, -42.0] } ] },
  "new-zealand": { iso: "554", keep: [165, 179, -48, -34], pins: [
    { id: "nz-hawkes-bay", at: [176.8, -39.6] }, { id: "nz-martinborough", at: [175.45, -41.2] },
    { id: "nz-marlborough", at: [173.9, -41.5] }, { id: "nz-central-otago", at: [169.2, -45.0] } ] },
};

const feats50 = feature(world50, world50.objects.countries).features;
const keepPolys = (f, [x0, x1, y0, y1]) => ({
  type: "Feature",
  geometry: {
    type: "MultiPolygon",
    coordinates: (f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates).filter(([ring]) => {
      const [lon, lat] = ring[0];
      return lon >= x0 && lon <= x1 && lat >= y0 && lat <= y1;
    }),
  },
});

function frame(c, shape, target, width, pinList, maxH) {
  const proj = geoMercator().fitWidth(width - 32, target);
  const [[, by0], [, by1]] = geoPath(proj).bounds(target);
  const h = Math.round(Math.min(Math.max(by1 - by0, 200), maxH) + 32);
  proj.fitExtent([[16, 16], [width - 16, h - 16]], target);
  // Neighbours are drawn unclipped (clipExtent turns some polygons into full-frame boxes);
  // only countries overlapping the frame are kept, and the SVG viewBox crops the rest.
  const raw = geoPath(proj).digits(1);
  const overlaps = (f) => {
    const [[x0, y0], [x1, y1]] = raw.bounds(f);
    return x1 > 0 && x0 < width && y1 > 0 && y0 < h && x1 - x0 < width * 40;
  };
  const neighbours = countries110.filter((f) => f.id !== c.iso && overlaps(f)).map((f) => raw(f)).join("");
  proj.clipExtent([[0, 0], [width, h]]);
  const path = geoPath(proj).digits(1);
  const pins = pinList.map((p) => {
    const [x, y] = proj(p.at);
    return { id: p.id, n: p.n, ...(p.nameKo ? { nameKo: p.nameKo } : {}), ...(p.href ? { href: p.href } : {}), x: +x.toFixed(1), y: +y.toFixed(1) };
  });
  return { proj, frame: { viewBox: `0 0 ${width} ${h}`, neighbours, outline: path(shape), pins } };
}

const countryMaps = {};
for (const [slug, c] of Object.entries(COUNTRIES)) {
  const raw = feats50.find((f) => f.id === c.iso);
  const shape = c.keep ? keepPolys(raw, c.keep) : raw;
  const numbered = c.pins.map((p, i) => ({ ...p, n: i + 1 }));
  const inInset = new Set((c.insets ?? []).flatMap((x) => x.pins));
  const main = frame(c, shape, c.zoom ? { type: "MultiPoint", coordinates: c.zoom } : shape, CW, numbered.filter((p) => !inInset.has(p.id)), 640);
  const insets = (c.insets ?? []).map((ins) => {
    const [[x0, y0], [x1, y1]] = ins.zoom.map((ll) => main.proj(ll));
    const f = frame(c, shape, { type: "MultiPoint", coordinates: ins.zoom }, 300, numbered.filter((p) => ins.pins.includes(p.id)), 260);
    return { title: ins.title, box: [+Math.min(x0, x1).toFixed(1), +Math.min(y0, y1).toFixed(1), +Math.abs(x1 - x0).toFixed(1), +Math.abs(y1 - y0).toFixed(1)], ...f.frame };
  });
  countryMaps[slug] = { ...main.frame, insets };
}

const out = `// GENERATED by scripts/build-maps.mjs from Natural Earth via world-atlas. Do not edit by hand.
export const WORLD_VIEWBOX = "0 0 ${W} ${H}";
export const wineBelts = ${JSON.stringify(belts)};
export const worldLand = ${JSON.stringify(land)};
export const wineCountryShapes: Record<string, { d: string; cx: number; cy: number }> = ${JSON.stringify(wine)};
`;
writeFileSync(new URL("../src/components/map/geo-paths.ts", import.meta.url), out);

const out2 = `// GENERATED by scripts/build-maps.mjs from Natural Earth via world-atlas. Do not edit by hand.
export interface RegionPin { id: string; n: number; nameKo?: string; href?: string; x: number; y: number }
export interface MapFrame { viewBox: string; neighbours: string; outline: string; pins: RegionPin[] }
export interface CountryMap extends MapFrame { insets: (MapFrame & { title: string; box: [number, number, number, number] })[] }
export const countryMaps: Record<string, CountryMap> = ${JSON.stringify(countryMaps)};
`;
writeFileSync(new URL("../src/components/map/country-maps.ts", import.meta.url), out2);
console.log("geo-paths.ts", (out.length / 1024).toFixed(1), "KB, country-maps.ts", (out2.length / 1024).toFixed(1), "KB");
