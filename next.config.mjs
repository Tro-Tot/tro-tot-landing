/** @type {import('next').NextConfig} */
const nextConfig = {
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
