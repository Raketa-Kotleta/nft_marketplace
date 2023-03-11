// const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader")
const path = require("path");
module.exports = {
    entry: path.join(__dirname,'src', 'main.js'),
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "build.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\\.css$/,
                use:[
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    'vue-style-loader',
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App123",
            template: path.resolve(__dirname,'templates','index.html')
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: path.join(__dirname,"templates"),
        port: 8080,
        open: true,
        hot: true,
    },
}