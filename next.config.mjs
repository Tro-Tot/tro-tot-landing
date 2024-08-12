/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'images.unsplash.com'],
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
