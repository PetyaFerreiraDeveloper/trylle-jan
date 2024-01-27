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
        hostname: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "",
        pathname: "/photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
