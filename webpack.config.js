const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|eot|otf|pdf|svg|ttf|woff|woff2|xlsx)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(sass|css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: [
          path.resolve(__dirname, 'src', 'scss')
    ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
};
