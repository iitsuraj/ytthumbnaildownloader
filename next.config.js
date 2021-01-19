const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfiguration = withBundleAnalyzer({
  target: "serverless",
  trailingSlash: true,
});
const runtimeCaching = require("./cache");

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          register: true,
          disable: process.env.NODE_ENV === "development",
          scope: "/",
          runtimeCaching: runtimeCaching,
        },
      },
    ],
  ],
  nextConfiguration
);
