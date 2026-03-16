/** @type {import('next').NextConfig} */
const nextConfig = {
  // SWC minification (faster than Terser)
  swcMinify: true,

  // Compress responses with gzip
  compress: true,

  // Optimise all remote images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Serve modern formats — AVIF is ~50% smaller than WebP, WebP ~30% smaller than JPEG
    formats: ['image/avif', 'image/webp'],
    // Match real device breakpoints — avoids over-fetching on mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised images for 60 days
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // Tree-shake heavy packages — stops them being bundled per-route
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // HTTP caching headers for static assets
  async headers() {
    return [
      {
        // Immutable cache for all Next.js static chunks (_next/static)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images for 7 days
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache public assets (profile.jpg etc) for 30 days
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Security + performance headers on all pages
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',   value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          // Tell browser to preconnect to Google Fonts early
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin',
          },
        ],
      },
    ]
  },
}
module.exports = nextConfig
