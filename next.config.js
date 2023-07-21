/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        // pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'www.mykite.in',
        port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },

}

module.exports = nextConfig
