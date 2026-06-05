import type { NextConfig } from "next";

const canonicalOrigin =
  process.env.SITE_CANONICAL_ORIGIN ?? "https://ai-ready-workforce.vercel.app";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
      ...(githubPagesBasePath
        ? {
            assetPrefix: `${githubPagesBasePath}/`,
            basePath: githubPagesBasePath,
          }
        : {}),
    }
  : {
      async redirects() {
        return [
          {
            source: "/concepts/variant-b/:path*",
            destination: `${canonicalOrigin}/`,
            permanent: false,
          },
        ];
      },
    };

export default nextConfig;
