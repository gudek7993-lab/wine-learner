import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "와인 러너 - WSET Level 3 학습 도구",
  description: "와인 지역, 포도 품종, 양조 기법을 인터랙티브하게 학습하세요",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "와인 러너",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
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
        <meta name="theme-color" content="#722f37" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="와인 러너" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
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
      <body className="min-h-screen bg-cream-50 text-burgundy-900 antialiased">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
