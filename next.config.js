/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/demos/difference-of-means-44PjV",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
