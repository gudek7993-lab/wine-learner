"use client";

import { useRouter } from "next/navigation";
import WorldMap from "@/components/map/WorldMap";
import SearchBar from "@/components/ui/SearchBar";
import Card from "@/components/ui/Card";
import { search } from "@/lib/data-loader";

const quickLinks = [
  { href: "/grapes", icon: "🍇", title: "포도 품종", desc: "21가지 주요 품종의 특성과 산지" },
  { href: "/techniques", title: "양조 기법", icon: "🏺", desc: "재배학과 양조학의 핵심 개념" },
  { href: "/sparkling", title: "스파클링 와인", icon: "✨", desc: "전통 방식부터 탱크 방식까지" },
  { href: "/fortified", title: "강화 와인", icon: "🥃", desc: "셰리, 포트, 마데이라" },
  { href: "/tasting", title: "SAT 테이스팅", icon: "👃", desc: "체계적 접근법으로 와인 분석" },
  { href: "/quiz", title: "연습 퀴즈", icon: "✏", desc: "WSET Level 3 시험 대비" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-burgundy-800">
          와인의 세계를 탐험하세요
        </h1>
        <p className="text-burgundy-500 max-w-xl mx-auto">
          지도를 클릭하여 와인 산지를 탐색하고, 포도 품종과 양조 기법의 연결을 발견하세요.
        </p>
        <div className="flex justify-center">
          <SearchBar
            onSearch={search}
            onSelect={(r) => router.push(r.href)}
          />
        </div>
      </div>

      {/* World Map */}
      <Card className="p-2 sm:p-4">
        <WorldMap />
      </Card>

      {/* Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {quickLinks.map((link) => (
          <Card
            key={link.href}
            hover
            onClick={() => router.push(link.href)}
            className="text-center p-4"
          >
            <div className="text-2xl mb-2">{link.icon}</div>
            <div className="font-semibold text-sm text-burgundy-700">{link.title}</div>
            <div className="text-xs text-burgundy-400 mt-1">{link.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
