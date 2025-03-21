/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      optimizeCss: false, 
      esmExternals: true, // Allows ES module support
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false }; // Fixes filesystem dependency issues
      return config;
    },
  };
  
  export default nextConfig;
  