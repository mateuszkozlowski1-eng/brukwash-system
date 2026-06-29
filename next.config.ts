import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholdery realizacji pochodzą z Unsplash — TODO: klient dostarczy własne zdjęcia
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
