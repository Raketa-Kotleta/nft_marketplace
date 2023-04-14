// const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader")
const path = require("path");
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname,'src', 'main.js'),
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "build.js",
        clean: true,
    },
    devtool: 'inline-source-map',
    resolve: {
        fallback: {
            assert: require.resolve("assert/"),
            "crypto-browserify": require.resolve("crypto-browserify"),
            "path-browserify": require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            // path: require.resolve("path-browserify"),
            path: false,
            stream: require.resolve("stream-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            url: require.resolve("url"),
            fs: false,
            zlib: require.resolve("browserify-zlib"),
            extensions: ['.tsx', '.ts', '.js'],
        }
    },
    experiments: {
        topLevelAwait: true,
    },

    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // {
            //     test: /\.js$/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     use: ['source-map-loader'],
            // },

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
    // ignoreWarnings: [/Failed to parse source map/],
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack App123",
            template: path.resolve(__dirname,'templates','index.html')
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"]
        }),
    ],
    devServer: {
        static: path.join(__dirname,"templates"),
        port: 8080,
        hot: true,
    },
}