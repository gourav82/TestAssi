/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spiceheavenrestaurant.com',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fbom5-1.fna.fbcdn.net',
      },
    ],
  }}

  module.exports = {
    plugins: {
      autoprefixer: {},
    },
}

module.exports = nextConfig
