/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `@import "./src/scss/mixins.scss";`,
  },
};

export default nextConfig;
