/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    staticPageGenerationTimeout: 1000,
  };
  
  module.exports = nextConfig;