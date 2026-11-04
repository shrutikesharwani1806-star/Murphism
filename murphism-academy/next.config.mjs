import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname, '..'),
  },

  // ── Image Optimization ─────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Aggressive caching — 30 days
    minimumCacheTTL: 2592000,
  },

  // ── Gzip / Brotli Compression ──────────────────────────────────────────────
  compress: true,

  // ── Cache headers for static assets ───────────────────────────────────────
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/courses/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.mp4',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
    ];
  },
};

export default nextConfig;
