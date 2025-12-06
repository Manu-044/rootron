import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable source maps in production to avoid Differ.js.map errors in Netlify
  productionBrowserSourceMaps: false,
};

export default nextConfig;
