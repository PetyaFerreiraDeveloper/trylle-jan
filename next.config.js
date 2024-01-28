/** @type {import('next').NextConfig} */
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.tryllejan.dk",
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
