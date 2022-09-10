const NextFederationPlugin = require('@module-federation/nextjs-mf/lib/NextFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
    webpack(config, options) {
		if (!option)
        config.plugins.push(
            new options.webpack.container.ModuleFederationPlugin({
                name: 'chat',
                filename: 'chatEntry.js',
                remoteType: 'var',
                shared: [
                    {
                        react: {
                            eager: true,
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                    {
                        'react-dom': {
                            eager: true,
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                ],
            })
        );

        return config;
    },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
