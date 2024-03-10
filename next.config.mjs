/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./src/scss/mixins.scss";`,
  },
};

export default nextConfig;
