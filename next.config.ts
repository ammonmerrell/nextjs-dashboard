import type { NextConfig } from 'next'
 
const isProd = process.env.NODE_ENV === 'production'

// Top-level await and dynamic import are supported

const nextConfig: NextConfig = {
  /* config options here */


  typedRoutes: true,

    experimental: {
      typedEnv: true,
    },

  typescript: {
    tsconfigPath: isProd ? 'tsconfig.build.json' : 'tsconfig.json',
  },

  //  typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },


}
 
export default nextConfig