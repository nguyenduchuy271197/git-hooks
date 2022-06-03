const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
var withDuplicatePackageCheckerPlugin =
  require("duplicate-package-checker-webpack-plugin")();

module.exports = {
  plugins: [new DuplicatePackageCheckerPlugin()],
};

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
      {
        /* plugin config here ... */
      },
    ], // analyze the Next.js app bundles
    [
      withDuplicatePackageCheckerPlugin,
      {
        /* plugin config here ... */
      },
    ], // Remove duplicate packages
  ],
  {
    /* global config here!*/
  }
);
