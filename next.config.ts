import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/concepts/variant-b/:path*",
        destination: "https://ai-ready-workforce.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
