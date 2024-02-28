/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
    ],
  },
};

export default nextConfig;
