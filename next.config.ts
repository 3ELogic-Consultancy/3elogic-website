/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for IIS
  trailingSlash: true, // Required for static export
  distDir: 'out', // Specify output directory for static export
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    minimumCacheTTL: 60, // 1 minute
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
