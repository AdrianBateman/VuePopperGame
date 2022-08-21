const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: '[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(wav)/,
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|png|svg)/,
        type: 'asset/resource',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/*.svg',
          to: '[name].svg',
          info: { minimized: true },
        },
        {
          from: 'src/assets/*.wav',
          to: '[name].wav',
          info: { minimized: true },
        },
      ],
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_OPTIONS_API__: true,
    }),
  ],
  watchOptions: {
    poll: 1000,
  },
};
