const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/react-monorep'),
  },
  devServer: {
    port: 4100,
    hot: true,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  devtool: process.env['NODE_ENV'] === 'production' ? 'source-map' : 'cheap-module-source-map',
  cache: {
    type: 'memory',
  },
  watchOptions: {
    ignored: /node_modules/, // Ignore node_modules for faster rebuilds
    poll: 1000, // Check for changes every second
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Enable Babel caching
          },
        },
      },
    ],
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/index.js',
      index: './public/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.scss'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new webpack.DefinePlugin({
      global: 'window',
    }),
  ],
};
