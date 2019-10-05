const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageFile = require('./package.json');

const { libraryName, libVersion, license } = packageFile;

const libraryHeaderComment = `${libraryName} - v${libVersion}\n
${license} License`;

const plugins = [
  new webpack.BannerPlugin({
    banner: libraryHeaderComment,
    entryOnly: true
  }),
  new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './index.html',
    filename: 'index.html'
  })
];

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    filename: `${libraryName}.js`,
    auxiliaryComment: 'Test Comment'
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  },
  plugins,
  devServer: {
    contentBase: 'dist',
    watchContentBase: true,
    port: 9000
  }
};
