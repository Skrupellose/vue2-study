module.exports = {
  // 是否开启babel-loader转译所有依赖
  transpileDependencies: true,
  // 是否在dev环境保存时lint代码
  lintOnSave: false,
  // 是否在生产环境开启SourceMap
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 通过这种方式可以向所有less文件注入全局变量
      less: {
        additionalData: `@import '@/assets/less/common.less';`
      }
    }
  }
}
