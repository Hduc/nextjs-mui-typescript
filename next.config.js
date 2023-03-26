/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
}

module.exports = nextConfig
