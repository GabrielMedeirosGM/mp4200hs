import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mp4200hs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
