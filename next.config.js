// import { withContentlayer } from "next-contentlayer"
const { createContentlayerPlugin } = require("next-contentlayer")

import("./env.mjs")

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
}

// export default withContentlayer(nextConfig)
const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig)
