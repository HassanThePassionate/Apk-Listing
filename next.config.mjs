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
      {
        protocol: "https",
        hostname: "static.extfans.com",
      },
      {
        protocol: "https",
        hostname: "puui.qpic.cn",
      },
    ],
  },
};

export default nextConfig;
