import type { NextConfig } from "next";

// GitHub Pages serves the site under /<repo>. Set NEXT_PUBLIC_BASE_PATH=/wine-learner when building for Pages;
// leave it empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
