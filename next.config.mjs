/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf'

const isGithubActions = process.env.GITHUB_ACTIONS || false
const repo = isGithubActions
  ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}`
  : ''

const nextConfig = {
  assetPrefix: repo,
  basePath: repo,
  output: 'export',
  images: { unoptimized: true },
  webpack(config, { isServer }) {
    if (!isServer)
      config.plugins.push(
        new NextFederationPlugin({
          name: 'luigi',
          filename: 'index.js',
          exposes: {
            './bootstrap': './src/app/bootstrap',
          },
          shared: {
            next: {
              requiredVersion: false,
              singleton: true,
            },
            react: {
              requiredVersion: false,
              singleton: true,
            },
            'react/jsx-runtime': {
              requiredVersion: false,
              singleton: true,
            },
            'react-dom': {
              requiredVersion: false,
              singleton: true,
            },
          },
        }),
      )
    return config
  },
}

export default nextConfig
