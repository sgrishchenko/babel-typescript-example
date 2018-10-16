import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default (env: any, argv: any): Configuration => ({
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './src/index.tsx',
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: argv && argv.mode === 'production'
                ? []
                : ['react-hot-loader/babel'],
            },
          },
          'eslint-loader',
        ],
      },
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
    }),
    new CleanWebpackPlugin([
      path.resolve(__dirname, 'dist'),
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root',
    }),
  ],
});
