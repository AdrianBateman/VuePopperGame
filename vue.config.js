const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, './dist'),
  configureWebpack: {
    entry: './src/main.js',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
      }),
      new CleanWebpackPlugin(),
    ],
    watchOptions: {
      poll: 1000,
    },
  },
});
