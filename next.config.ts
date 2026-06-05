import type { NextConfig } from "next";

const canonicalOrigin =
  process.env.SITE_CANONICAL_ORIGIN ?? "https://ai-ready-workforce.vercel.app";

const nextConfig: NextConfig = {
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
