/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "p3-flow-imagex-download-sign.byteimg.com" },
    ],
  },
};

export default nextConfig;
