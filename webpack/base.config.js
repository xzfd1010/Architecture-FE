const path = require('path');
const entry = require('./entry');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(process.cwd(), "src"),
    entry: entry,   
    output: {
        // 打包的绝对路径，process.cwd()是npm启动目录
        path: path.resolve(process.cwd(), "dist"),
        // webpack dev server的路由路径，所有的路径都会放在/dist目录下面
        publicPath:'/dist',
        // 导出目录的文件名
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        // 生成Html
        new HtmlWebpackPlugin({
            title: 'sale', // 文件的title
            template: 'base/webpack.template.html', // 编译的模板
            filename: 'sale.html', // 文件名
            chunks: ['sale','list']  // 需要的css/js
        }),
    ],
    module: {
        rules: [
            // 处理js文件
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 初始sass文件
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            // 处理css文件
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // 处理less文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            // 处理图片
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                // 算法添加了文件后缀
                loader: "file-loader",
                options: {
                    // 配置路径
                    name: 'assets/name=[name]_[sha512:hash:base64:7].[ext]'
                }
            }
        ]
    }
}