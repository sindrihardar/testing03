import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true, // Enable source maps for production builds
  images: {
    domains: [], // Add any external domains if needed
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Disable optimization for local images
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
  },
};

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

export default nextConfig;