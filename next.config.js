/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['i.postimg.cc'],  // Add the hostname here
  }
}

module.exports = nextConfig
