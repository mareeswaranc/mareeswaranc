import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === 'production' ? '/mareeswaranc' : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
