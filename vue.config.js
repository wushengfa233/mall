const { defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  },
  lintOnSave:false //关闭eslint检查
}
