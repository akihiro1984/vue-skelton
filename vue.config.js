const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: '/',
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    https: false,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 1000,
      poll: 1000
    },
    // proxy: {
    //   '/endpoint': {
    //     target: process.env.API_MOCK_URI,
    //     // pathRewrite: {'^/endpoint' : '/endpoint'}
    //   }
    // },
    progress: false,
    // ビルドメッセージ長すぎなので抑止
    stats: {
      depth: false,
      entrypoints: false,
      usedExports: false,
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      performance: false,
      providedExports: false,
      publicPath: false,
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      maxModules: 0,
      modules: false
    }
  },
  lintOnSave: false,
  productionSourceMap: !isProduction,
  transpileDependencies: ['resize-detector'],
  css: {
      loaderOptions: {
          less: {
              javascriptEnabled: true
          },
          sass: {
          }
      }
  },
  configureWebpack: config => {
    config.plugins.push(
        new webpack.DefinePlugin({
            // 'ENDPOINT_URI': JSON.stringify('wss://192.168.0.8:8080'),
        })
    )

    if (config.optimization) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          parallel: true,
          extractComments: /@extract/i,
          terserOptions: {
            ecma: 6,
          },
        })
      )
    }

    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
  chainWebpack: config => {

    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|ico)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
    //   .options({
    //       name: path.join('/static/img', 'img/[name].[ext]')
    //   })
    ;

    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    config.module
      .rule('glsl')
      .test(/\.(frag|vert|glsl)$/)
      .use('glsl-shader-loader')
      .loader('glsl-shader-loader')
      .options({
      })
  }
}
