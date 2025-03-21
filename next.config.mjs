const nextConfig = {
    experimental: {
      optimizeCss: false, 
      esmExternals: true,
    },
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
      return config;
    },
  };
  
  export default nextConfig;