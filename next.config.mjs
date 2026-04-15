/** @type {import('next').NextConfig} */
const nextConfig = {
  // cacheComponents findes ikke i standard Next.js config,
  // så den har jeg fjernet for at undgå fejl.
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
