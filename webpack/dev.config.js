const baseWebpackConfig = require('./base.config.js');
const devWebpackPartialConfig = {
    watch:true,
    devServer: {
        // 非webpack编译范围内的内容目录
        contentBase: path.join(process.cwd(), "sample"),
        compress:true,
        port:8080
    }
} 

module.exports = Object.assign({},
    baseWebpackConfig,
    devWebpackPartialConfig
)
