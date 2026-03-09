/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error handling
  reactStrictMode: true,
  
  // Optimize images from external sources (add your domains here if needed)
  images: {
    domains: [],
  },
}

module.exports = nextConfig
