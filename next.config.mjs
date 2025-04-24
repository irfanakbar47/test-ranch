/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acdn.dnamicro.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/privacy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/en/terms',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/en/support',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/validate-otp',
        destination: '/download-app',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
