/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizeCss: false, // Disables Tailwind CSS optimization
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false }; // Fixes filesystem dependency issues
      return config;
    },
  };
  
  export default nextConfig;
  