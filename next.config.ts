import type { NextConfig } from "next";

const BASE_PATH = "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: `${BASE_PATH}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
