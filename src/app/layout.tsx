import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "와인 러너 - WSET Level 3 학습 도구",
  description: "와인 지역, 포도 품종, 양조 기법을 인터랙티브하게 학습하세요",
  manifest: `${base}/manifest.json`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "와인 러너",
  },
  icons: {
    icon: `${base}/icon.svg`,
    apple: `${base}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#f6f6f4" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111113" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="와인 러너" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('${base}/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `
        }} />
      </head>
      <body className="min-h-[100dvh] bg-paper text-ink antialiased">
        <Navigation />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-ink-3">
            WSET Level 3 학습용 개인 노트. 품종 맛 프로필은 Wine Folly와 WSET 교재를 참고해 정리했습니다.
          </div>
        </footer>
      </body>
    </html>
  );
}
