/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
  async redirects() {
    return [
      {
        destination: '/home',
        source: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
