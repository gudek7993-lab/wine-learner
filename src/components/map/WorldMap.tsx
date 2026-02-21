"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface WineCountry {
  id: string;
  nameKo: string;
  nameEn: string;
  summary: string;
  color: string;
  path: string;
  labelX: number;
  labelY: number;
}

const countries: WineCountry[] = [
  {
    id: "france",
    nameKo: "프랑스",
    nameEn: "France",
    summary: "보르도, 부르고뉴, 론, 알자스, 루아르",
    color: "#722f37",
    path: "M 465,155 L 480,148 L 498,152 L 502,160 L 510,168 L 505,180 L 498,190 L 488,195 L 475,192 L 465,185 L 458,175 L 456,165 Z",
    labelX: 483,
    labelY: 172,
  },
  {
    id: "italy",
    nameKo: "이탈리아",
    nameEn: "Italy",
    summary: "피에몬테, 토스카나, 베네토, 남부",
    color: "#8B4513",
    path: "M 510,168 L 518,162 L 525,170 L 522,182 L 518,195 L 524,202 L 520,210 L 514,218 L 508,212 L 510,200 L 505,192 L 498,190 L 505,180 Z",
    labelX: 515,
    labelY: 190,
  },
  {
    id: "spain",
    nameKo: "스페인",
    nameEn: "Spain",
    summary: "리오하, 리베라 델 두에로, 프리오라트",
    color: "#A0522D",
    path: "M 445,185 L 458,178 L 465,185 L 475,192 L 488,195 L 482,205 L 472,212 L 458,210 L 445,205 L 438,195 Z",
    labelX: 462,
    labelY: 198,
  },
  {
    id: "portugal",
    nameKo: "포르투갈",
    nameEn: "Portugal",
    summary: "도우루, 비뉴 베르드, 알렌테주",
    color: "#CD853F",
    path: "M 432,185 L 438,180 L 445,185 L 438,195 L 445,205 L 438,210 L 432,205 L 430,195 Z",
    labelX: 437,
    labelY: 197,
  },
  {
    id: "germany",
    nameKo: "독일",
    nameEn: "Germany",
    summary: "모젤, 라인가우, 팔츠",
    color: "#6B8E23",
    path: "M 490,132 L 505,128 L 518,135 L 520,148 L 510,155 L 502,160 L 498,152 L 490,148 Z",
    labelX: 505,
    labelY: 145,
  },
  {
    id: "austria",
    nameKo: "오스트리아",
    nameEn: "Austria",
    summary: "바하우, 캄프탈, 부르겐란트",
    color: "#9ACD32",
    path: "M 520,148 L 535,142 L 548,148 L 542,155 L 530,158 L 518,162 L 510,155 Z",
    labelX: 532,
    labelY: 152,
  },
  {
    id: "usa",
    nameKo: "미국",
    nameEn: "USA",
    summary: "나파, 소노마, 오레곤, 워싱턴",
    color: "#4169E1",
    path: "M 100,140 L 160,135 L 200,145 L 230,155 L 240,170 L 220,180 L 180,178 L 140,175 L 110,168 L 95,158 Z",
    labelX: 168,
    labelY: 160,
  },
  {
    id: "chile",
    nameKo: "칠레",
    nameEn: "Chile",
    summary: "마이포, 카사블랑카, 콜차과",
    color: "#DC143C",
    path: "M 240,320 L 245,310 L 248,330 L 250,350 L 248,370 L 244,385 L 240,370 L 238,350 L 236,330 Z",
    labelX: 244,
    labelY: 348,
  },
  {
    id: "argentina",
    nameKo: "아르헨티나",
    nameEn: "Argentina",
    summary: "멘도사, 우코 밸리, 살타",
    color: "#FF6347",
    path: "M 250,310 L 272,305 L 280,320 L 278,340 L 275,360 L 268,375 L 258,385 L 248,370 L 250,350 L 248,330 Z",
    labelX: 265,
    labelY: 342,
  },
  {
    id: "south-africa",
    nameKo: "남아프리카",
    nameEn: "South Africa",
    summary: "스텔렌보쉬, 콘스탄시아, 스워틀랜드",
    color: "#FF8C00",
    path: "M 530,350 L 548,342 L 562,348 L 568,360 L 560,372 L 548,378 L 535,375 L 525,365 L 525,355 Z",
    labelX: 547,
    labelY: 360,
  },
  {
    id: "australia",
    nameKo: "호주",
    nameEn: "Australia",
    summary: "바로사, 쿠나와라, 마가렛 리버",
    color: "#DAA520",
    path: "M 750,320 L 790,305 L 830,310 L 850,330 L 845,355 L 825,370 L 795,375 L 765,365 L 745,345 L 742,330 Z",
    labelX: 795,
    labelY: 342,
  },
  {
    id: "new-zealand",
    nameKo: "뉴질랜드",
    nameEn: "New Zealand",
    summary: "말보로, 센트럴 오타고, 호크스 베이",
    color: "#2E8B57",
    path: "M 870,370 L 878,362 L 885,368 L 882,380 L 878,392 L 872,398 L 868,390 L 866,380 Z",
    labelX: 876,
    labelY: 380,
  },
];

export default function WorldMap() {
  const router = useRouter();
  const [hovered, setHovered] = useState<WineCountry | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div className="relative">
      <svg
        viewBox="0 0 960 480"
        className="w-full h-auto"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        {/* Background */}
        <rect width="960" height="480" fill="#f0ebe3" rx="12" />

        {/* Grid lines for visual interest */}
        {[120, 240, 360].map((y) => (
          <line key={y} x1="0" y1={y} x2="960" y2={y} stroke="#e5ddd0" strokeWidth="0.5" />
        ))}
        {[192, 384, 576, 768].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="480" stroke="#e5ddd0" strokeWidth="0.5" />
        ))}

        {/* Wine belt indicators */}
        <rect x="0" y="130" width="960" height="90" fill="#722f37" opacity="0.04" />
        <text x="20" y="145" className="text-[8px] fill-burgundy-300">북위 30°~50° 와인 벨트</text>
        <rect x="0" y="300" width="960" height="80" fill="#722f37" opacity="0.04" />
        <text x="20" y="315" className="text-[8px] fill-burgundy-300">남위 30°~45° 와인 벨트</text>

        {/* Country shapes */}
        {countries.map((country) => (
          <g
            key={country.id}
            className="map-region"
            onClick={() => router.push(`/regions/${country.id}`)}
            onMouseEnter={() => setHovered(country)}
            onMouseLeave={() => setHovered(null)}
          >
            <path
              d={country.path}
              fill={hovered?.id === country.id ? "#e04d73" : country.color}
              stroke="white"
              strokeWidth="1.5"
              className="transition-all duration-200"
            />
            <text
              x={country.labelX}
              y={country.labelY + 28}
              textAnchor="middle"
              className="text-[7px] font-bold fill-burgundy-800 pointer-events-none select-none"
            >
              {country.nameKo}
            </text>
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div
          className="absolute pointer-events-none bg-white border border-cream-200 rounded-lg shadow-lg px-4 py-3 z-50 min-w-[180px]"
          style={{
            left: Math.min(mousePos.x + 15, (typeof window !== "undefined" ? window.innerWidth : 800) - 220),
            top: mousePos.y - 80,
          }}
        >
          <div className="font-bold text-burgundy-700">{hovered.nameKo}</div>
          <div className="text-xs text-burgundy-400 mb-1">{hovered.nameEn}</div>
          <div className="text-xs text-burgundy-600">{hovered.summary}</div>
          <div className="text-[10px] text-burgundy-400 mt-1">클릭하여 탐색 →</div>
        </div>
      )}
    </div>
  );
}
