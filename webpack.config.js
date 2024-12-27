const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    // devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 5000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:/\.(scss|css)$/,
                use: [
                    // {loader: MiniCssExtractPlugin.loader},
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpeg|jpg|webp|gif)$/i,
                type: 'asset/resource'
            }
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource'
            //   }
        ]
    },
    plugins: [
        new HTMLwebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        //     analyzerPort: 5001
        // }),
        // new MiniCssExtractPlugin({
        //     // filename: "src/assets/css/"
        // }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'src/assets'),
                    to: 'assets'
                },
                { 
                    from: path.resolve(__dirname, 'src/pages'),
                    to: 'pages'
                }
            ]
          })
    ]
}