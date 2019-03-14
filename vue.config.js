const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
      //配置eslint 代码校验
      lintOnSave: false,
      //配置目录别名
      chainWebpack: (config)=>{
          config.resolve.alias
              .set('@$', resolve('src'))
              .set('assets',resolve('src/assets'))
              .set('components',resolve('src/components'))
              .set('layout',resolve('src/layout'))
              .set('base',resolve('src/base'))
              .set('static',resolve('src/static'))
      },
      //开发代理服务
      devServer:{//代理
          port:8088,
          proxy:'http://192.168.255.201:8082'
      }
  }