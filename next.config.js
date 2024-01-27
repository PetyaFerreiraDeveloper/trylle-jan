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
        hostname: "www.tryllejan.dk",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "www.tryllejan.dk",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "www.tryllejan.dk",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
