// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/h5TestApi': {
        target: 'https://testwaterbuild.zhongcaicloud.com/api/v1', // 目标服务器地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/h5TestApi': '' // 重写路径
        }
      }
    }
  }
};