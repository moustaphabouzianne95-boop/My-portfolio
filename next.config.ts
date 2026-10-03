import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["**.manuspre.computer"],
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
