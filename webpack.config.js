var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  context: __dirname,

  entry: {
    header: "./frontend/static/js/header",
    subCategory: "./products/static/js/subCategory",
  },

  output: {
    path: path.resolve("./frontend/static/js/bundles/"),
    filename: "[name].js",
  },

  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      maxSize: 0,
      name: "vendor",
    },
  },
};
