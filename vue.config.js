const path = require('path')
const WebpackBar = require('webpackbar')
const TerserPlugin = require('terser-webpack-plugin')

const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // 是否开启 eslint 自动校验
  lintOnSave: false,
  // 不输出 map 文件，以加速生产环境构建
  productionSourceMap: false,
  devServer: {
    devMiddleware: {
      publicPath: '/',
    },
    hot: true,
    port: '9999',
    client: {
      overlay: false
    },
    proxy: {
      '/gezida-api/': {
        target: process.env.VUE_APP_BASE_API,
        ws: true,
        pathRewrite: {
          '^/gezida-api/': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  configureWebpack: () => {
    const config = {
      // webpack 配置的项目名称, 可以在 index.html 中被访问，用来注入页面标题
      name: 'gezida-pro',
      resolve: {
        fallback: {
          // 默认情况下，webpack5 不再包含用于 node.js 模块的 polyfills，所以引入 path-browserify
          path: require.resolve('path-browserify')
        }
      }
    };
    if (process.env.NODE_ENV === 'production') {
      config.plugins = [
        new WebpackBar({
          // webpack 配置的项目名称
          name: 'gezida-pro'
        })
      ]
      // 生产环境清除 console.log
      config.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              mangle: true,
              compress: {
                warnings: false,
                drop_console: false,
                drop_debugger: false,
                // 清除 console.log
                pure_funcs: ['console.log']
              },
              output: {
                // 删除注释
                comments: false
              }
            }
          })
        ]
      }
    }
    return config
  },
  chainWebpack: config => {
    // 当有很多页面时，它会导致太多毫无意义的请求
    config.plugins.delete('prefetch')
    config.resolve.alias
      .set('@', resolve('src'))
    // 开发环境 sourcemap 不包含列信息
    config.when(process.env.NODE_ENV === 'development',
      config => config.devtool('source-map')
    )
    // svg
    // const dir = resolve('src')
    // config.module
    //   .rule('svg-sprite')
    //   .test(/\.svg$/)
    //   .include
    //   .add(dir)
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({ extract: false })
    //   .end()
    // config.plugin('svg-sprite')
    //   .use(require('svg-sprite-loader/plugin')),
    //   [{ pluginSprite: true }]
    // config.module
    //   .rule('svg')
    //   .exclude
    //   .add(dir)
    // config.module.rule('ts').use('ts-loader').loader('ts-loader').tap((options) => {
    //   options.transpileOnly = true
    //   options.ignoreDiagnostics = [2322]
    // })
    // 将运行代码单独生成文件
    if (process.env.NODE_ENV !== 'development') {
      config.cache({
        // 将缓存类型设置为 filesystem, 默认是 memory
        type: 'filesystem',
        buildDependencies: {
          // 更改配置文件时重新缓存
          config: [__filename]
        }
      })
      config.optimization.runtimeChunk('single')
    }
  }
}
