/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@images'] = path.join(__dirname, 'src/public/images');
    config.resolve.alias['@icons'] = path.join(__dirname, 'src/public/icons');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
      
    return config;
  },
}

module.exports = nextConfig
