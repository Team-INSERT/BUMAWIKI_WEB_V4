import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['bumawiki.kro.kr', 'bumawiki.s3.ap-northeast-2.amazonaws.com'],
  },
  async rewrites() {
    return [
      {
        source: '/insert-proxy/:path*',
        destination: 'https://buma.wiki/api/:path*',
        basePath: false,
      },
    ];
  },
  webpack: (config, { webpack }) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        BUMAWIKI_URL: 'https://buma.wiki/',
        USE_PROXY: true,
      }),
    ];
    return config;
  },
};

export default nextConfig;
