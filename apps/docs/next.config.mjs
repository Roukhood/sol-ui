import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@sol-ui/bank-kit", "@sol-ui/components"],
  async rewrites() {
    return [
      {
        source: "/bank-kit/docs/:path*.md",
        destination: "/bank-kit/llm/:path*",
      },
    ];
  },
};

const withMDX = createMDX({
  // customise the config file path
  

});

export default withMDX(config);