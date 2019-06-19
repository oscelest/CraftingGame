const withTypescript = require("@zeit/next-typescript");
// const withLess       = require("@zeit/next-less");

module.exports = withTypescript({
  pageExtensions: ["ts", "tsx"],
  // assetPrefix:    "./",
});
