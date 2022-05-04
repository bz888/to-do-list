// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Dotenv = require('dotenv-webpack')
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// if (process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' })
// } else if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' })
// }

module.exports = (env) => {
  const isProduction = env === 'production'
  return {
    entry: './client/index.tsx',
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.join(__dirname, './server/public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'ts-loader',
          test: /\.(ts|js)x?$/,
          exclude: path.join(__dirname, './node_modules'),
          options: {
          // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        }
      ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: 'source-map'
  }
}
