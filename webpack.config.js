// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: './client/index.tsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, './server/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new Dotenv()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map'
}
