import type { NextConfig } from "next";

const canonicalOrigin =
  process.env.SITE_CANONICAL_ORIGIN ?? "https://ai-ready-workforce.vercel.app";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";
const imageConfig = {
  qualities: [75, 90],
};

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      trailingSlash: true,
      images: {
        ...imageConfig,
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
      images: imageConfig,
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
