const withLess = require("@zeit/next-less");

module.exports = withLess({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use:  {
        loader:  "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
});
