/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*
   see all experimental feature https://github.com/vercel/next.js/blob/f9795fdd2665369b60a153fbb6231f478e4a7d08/packages/next/server/config-shared.ts
  */
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
