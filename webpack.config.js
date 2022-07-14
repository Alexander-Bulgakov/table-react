const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     "style-loader",
      //     "css-loader",
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.(png|jp(e*)g|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'images/[hash]-[name].[ext]',
      //       },
      //     },
      //   ],
      // }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    hot: true,
    port: 9000,
  },
};