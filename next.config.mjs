/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		remotePatterns: [
			{
        protocol: "https",
        hostname: "thumb-g1.lalatoon.com",
      },
			{
        protocol: "https",
        hostname: "thumb-g2.lalatoon.com",
      },
		]
  },
};

export default nextConfig;
