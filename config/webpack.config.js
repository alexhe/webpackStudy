const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: "./src/index.js", //需要打包文件的入口路径
    output: {
        filename: "static/[name].bundle.js", //打包后文件的名称
        path: path.resolve(__dirname, "../dist"), //打包后文件的输出路径
        clean: true, // 清理打包后上次遗留的js和html文件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /.css$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        //配置打包后的html文件
        new HtmlWebpackPlugin({
            title: 'study1',
            template: './template/index.html', //指定打包前使用的html模版
            filename: 'index.html', //打包后的html文件名
            // inject: 'body' //这里指的是将打包后的script标签添加的位置
        }),
        new MiniCssExtractPlugin(
            {
                filename: "static/[name].css"
            }
        ),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            algorithm: "gzip",
            threshold: 50,
            filename: "[path][base].gz",
            deleteOriginalAssets: false,
          }),
    ],
    mode: "development", //将mode设置成开发环境
    devtool: 'inline-source-map', //可以对打包后的文件进行调试代码
    devServer: {
        static: './dist',
        compress: false,
    }
};
