"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Grains, Flask, Champagne, Drop, Eye, Exam, ArrowRight, ForkKnife, Timer } from "@phosphor-icons/react";
import WorldMap from "@/components/map/WorldMap";
import SearchBar from "@/components/ui/SearchBar";
import StyleSpectrum from "@/components/grape/StyleSpectrum";
import TodayCard from "@/components/home/TodayCard";
import { search, allGrapes } from "@/lib/data-loader";

const studyLinks = [
  { href: "/grapes", icon: Grains, title: "포도 품종", desc: `${allGrapes.length}개 품종의 맛 프로필` },
  { href: "/techniques", icon: Flask, title: "재배와 양조", desc: "기후, 토양, 양조 선택" },
  { href: "/sparkling", icon: Champagne, title: "스파클링", desc: "전통 방식과 탱크 방식" },
  { href: "/fortified", icon: Drop, title: "강화 와인", desc: "셰리, 포트, 강화 뮈스카" },
  { href: "/service", icon: ForkKnife, title: "서비스와 페어링", desc: "보관, 서비스, 결함, 음식" },
  { href: "/tasting", icon: Eye, title: "SAT 테이스팅", desc: "체계적 테이스팅 접근법" },
  { href: "/quiz", icon: Exam, title: "연습 문제", desc: "객관식과 서술형 연습" },
  { href: "/mock", icon: Timer, title: "모의고사", desc: "실전 형식 2시간 시험" },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="space-y-12">
      <TodayCard />
      <div className="space-y-20 md:space-y-24">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="rise md:col-span-7">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-ink text-balance md:text-5xl">
            와인을 산지와 구조로 이해하기
          </h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-2">
            WSET Level 3 범위의 산지, 품종, 양조를 지도와 맛 프로필로 정리했습니다.
          </p>
          <div className="mt-8">
            <SearchBar onSearch={search} onSelect={(r) => router.push(r.href)} />
          </div>
        </div>

        <nav
          aria-label="학습 메뉴"
          className="rise grid grid-cols-1 gap-px self-start overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 md:col-span-5"
          style={{ ["--i" as string]: 2 }}
        >
          {studyLinks.map(({ href, icon: Icon, title, desc }) => (
            <Link key={href} href={href} className="group flex items-start gap-3 bg-surface p-4 transition-colors hover:bg-sunken">
              <Icon size={22} weight="duotone" className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="min-w-0">
                <span className="flex items-center gap-1 font-semibold text-ink">
                  {title}
                  <ArrowRight
                    size={14}
                    className="-translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
                <span className="mt-0.5 block text-sm text-ink-3">{desc}</span>
              </span>
            </Link>
          ))}
        </nav>
      </section>

      {/* Map */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">국가별 산지</h2>
        <p className="mt-1 text-ink-3">국가를 선택하면 기후, 토양, 주요 품종과 등급 체계를 볼 수 있습니다.</p>
        <div className="mt-6">
          <WorldMap />
        </div>
      </section>

      {/* Style spectrum */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight">스타일로 보는 품종</h2>
        <p className="mt-1 text-ink-3">가벼운 화이트부터 묵직한 레드까지, 품종을 와인 스타일 순서로 배열했습니다.</p>
        <div className="mt-6">
          <StyleSpectrum />
        </div>
      </section>
      </div>
    </div>
  );
}
