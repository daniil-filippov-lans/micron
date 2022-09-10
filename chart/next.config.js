

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  webpack: (config, options) => {
	config.plugins.push(
		new options.webpack.container.ModuleFederationPlugin({
			name: 'chart',
			filename:
		})
	)
  }
}

module.exports = nextConfig
