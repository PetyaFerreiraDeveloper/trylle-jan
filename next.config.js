/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tryllejan.dk",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "wp.tryllejan.dk",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
