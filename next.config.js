/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.weatherbit.io"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
