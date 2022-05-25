const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    index: path.resolve(__dirname, './test/dev/tests.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './test/index.html'),
      title: 'DOM Element',
    }),
  ],
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.js', '.json'],
  },
  devServer: {
    port: 1010,
    open: true,
    static: true,
    hot: true,
  },
  infrastructureLogging: {
    level: 'error',
  },
  stats: 'errors-only',
};
