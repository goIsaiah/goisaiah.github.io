import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages
  basePath: "/goisaiah.github.io", // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Fixes image loading on GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
        port: "",
        search: "",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
