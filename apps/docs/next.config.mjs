import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@sol-ui/bank-kit"],
};

const withMDX = createMDX({
  // customise the config file path
  

});

export default withMDX(config);