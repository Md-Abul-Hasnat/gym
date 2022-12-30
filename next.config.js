/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "mygreatness.com",
      "www.futurefit.co.uk",
      "wallpaperaccess.com",
      "image-cdn.essentiallysports.com",
    ],
  },
};

module.exports = nextConfig;
