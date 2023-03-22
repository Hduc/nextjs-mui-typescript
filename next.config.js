/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n:{
    locales:['vi','es'],
    defaultLocale:'vi'
  }
}

module.exports = nextConfig
