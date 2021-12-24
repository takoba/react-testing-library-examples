/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './src/App.tsx',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'json'],
    plugins: [new TsconfigPathsWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /(?<!\.test)\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 9003,
    static: {
      directory: __dirname,
    },
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/*/,
          to: '/index.html',
        },
      ],
    },
  },
}
