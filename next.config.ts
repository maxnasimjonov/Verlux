import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "primeroofingfl.com",
      },
      {
        protocol: "https",
        hostname: "captainhandy.ca",
      },
      {
        protocol: "https",
        hostname: "www.bankrate.com",
      },
      {
        protocol: "https",
        hostname: "www.ctvnews.ca",
      },
    ],
  },
};

export default nextConfig;
