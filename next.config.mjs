/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "p3-flow-imagex-download-sign.byteimg.com" },
    ],
  },
};

export default nextConfig;
