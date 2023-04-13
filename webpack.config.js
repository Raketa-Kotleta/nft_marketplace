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
    resolve: {
        fallback: {
            assert: require.resolve("assert/"),
            "crypto-browserify": require.resolve("crypto-browserify"),
            "path-browserify": require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            fs: false,
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            url: require.resolve("url"),
        }
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
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                      modules: true,
                    },
                  },
                  "vue-style-loader",
                ],
                include: /\.module\.css$/,
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
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
        hot: true,
    },
}