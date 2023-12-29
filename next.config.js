/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // image config
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "metrics.lecoq.io",
    ],
  },
  // env
    env: {
      GITHUB_API_GRAPHQL_KEY: process.env.GITHUB_API_GRAPHQL_KEY,
      FIREBASE_CONFIG_API_KEY: process.env.FIREBASE_CONFIG_API_KEY,
      FIREBASE_CONFIG_AUTH_DOMAIN: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
      FIREBASE_CONFIG_STORAGE_BUCKET: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
      FIREBASE_CONFIG_MESSAGING_SENDER_ID:
        process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
      FIREBASE_CONFIG_APP_ID: process.env.FIREBASE_CONFIG_APP_ID,
    },
};

module.exports = nextConfig;
