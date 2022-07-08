const path = require( 'path' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyPlugin = require( "copy-webpack-plugin" );
const { VueLoaderPlugin } = require( 'vue-loader' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve( __dirname, './dist' ),
    assetModuleFilename: '[name][ext][query]'
  },
  module: {
    rules: [
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
              publicPath: "/dist/",
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg)/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin( {
      filename: '[name].css',
      chunkFilename: '[name].css',
    } ),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin( {
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_OPTIONS_API__: true,
    } ),
    new CopyPlugin( {
      patterns: [
        { from: "src/assets/*.svg", to: '[name].svg' },
      ],
    } ),
  ],
  watchOptions: {
    poll: 1000,
  },
};
