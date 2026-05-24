import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence workspace root warning (we have the project inside a larger folder)
  turbopack: {
    root: __dirname,
  },

  // Good defaults for Cloudflare Pages deployment
  images: {
    unoptimized: true, // Cloudflare Pages static hosting
  },
};

export default nextConfig;
