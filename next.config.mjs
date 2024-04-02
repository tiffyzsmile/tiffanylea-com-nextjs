/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `@import "./src/scss/mixins.scss";`,
  },
  images: {
    minimumCacheTTL: 600,
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "tiffanylea-com-content20191210135709-master.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
