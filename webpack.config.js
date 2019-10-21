const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageFile = require('./package.json');

const { libraryName, libVersion, license } = packageFile;

const libraryHeaderComment = `${libraryName} - v${libVersion}\n
${license} License`;

const plugins = argv => [
  new webpack.BannerPlugin({
    banner: libraryHeaderComment,
    entryOnly: true
  }),
  new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './index.html',
    filename: argv.production ? 'index.html' : 'index.dev.html'
  })
];

module.exports = (_env, argv) => ({
  entry: {
    main: './src/main.js'
  },
  mode: argv.production ? 'production' : 'development',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    filename: argv.production ? '[name].[chunkhash].min.js' : '[name].js',
    auxiliaryComment: 'Test Comment'
  },
  devtool: argv.production ? false : 'eval-source-map',
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: plugins(argv),
  devServer: {
    contentBase: 'dist',
    watchContentBase: true,
    port: 9000
  }
});
