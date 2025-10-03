import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Reduce dev server warnings
    optimizePackageImports: ['@heroicons/react']
  },
  // Additional performance optimizations
  poweredByHeader: false,
  compress: true,
  // Reduce source map related warnings
  productionBrowserSourceMaps: false,
  // Suppress webpack warnings in development
  webpack: (config, { dev }) => {
    if (dev) {
      // Suppress noisy webpack warnings
      config.infrastructureLogging = {
        level: 'error',
      };
      
      // Reduce file system warnings
      config.watchOptions = {
        ignored: /node_modules/,
      };
      
      // Suppress hydration warnings in development
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      };
    }
    return config;
  },
  // Suppress Next.js warnings
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  // Disable strict mode to reduce hydration sensitivity
  reactStrictMode: false,
};

export default nextConfig;
