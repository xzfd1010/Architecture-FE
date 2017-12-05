const path = require('path');
const baseWebpackConfig = require('./base.config.js');
const devWebpackPartialConfig = {
    watch:true,
    devServer: {
        // 设置本地服务器的启动目录
        contentBase: path.join(process.cwd(), "sample"),
        compress:true,
        port:8080
    }
} 

module.exports = Object.assign({},
    baseWebpackConfig,
    devWebpackPartialConfig
)
