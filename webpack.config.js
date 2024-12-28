const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
        assetModuleFilename: 'ignore-assets/[name][ext]',
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
                    {loader: MiniCssExtractPlugin.loader},
                    // 'style-loader',
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
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           outputPath: 'images',
            //           name: 'ignore-assets/[name][ext]',
            //         },
            //       },
            //     ],
            //   },
            //   {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           outputPath: 'fonts',
            //           name: 'ignore-assets/[name][ext]',
            //         },
            //       },
            //     ],
            //   },
        ]
    },
    plugins: [
        new HTMLwebpackPlugin({
            title: 'My personal website',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        // new BundleAnalyzerPlugin({
        //     openAnalyzer: false,
        //     analyzerPort: 5001
        // }),
        new MiniCssExtractPlugin({
            // filename: "src/assets/css/"
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { 
                //     from: path.resolve(__dirname, 'src/assets'),
                //     to: 'assets'
                // },
                { 
                    from: path.resolve(__dirname, 'public/pages'),
                    to: 'pages'
                },
                {
                    from: path.resolve(__dirname, 'public/assets'),
                    to: 'assets'
                }
            ]
          })
    ]
}