/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tryllejan.dk",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
