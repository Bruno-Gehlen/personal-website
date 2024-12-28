const path = require('path')
const HTMLwebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
// const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    // mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: 'ignore-assets/[name][ext]',
    },
    devtool: 'source-map',
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
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        minimizer: [
          // JS Minification
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                drop_console: true,
                drop_debugger: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                unused: true,
                passes: 3,
              },
              mangle: {
                reserved: ['$', 'exports', 'require']
              },
              format: {
                comments: false,
              },
            },
            parallel: true,
          }),
    
          // CSS Minification
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  // Remove comentários
                  discardComments: { removeAll: true },
                  // Combina media queries similares
                  mergeMQ: true,
                  // Reduz valores CSS quando possível
                  reduceIdents: true,
                  // Remove zeros desnecessários
                  zeroUnits: true,
                },
              ],
            },
            parallel: true,
          }),
    
          // HTML Minification
          new HtmlMinimizerPlugin({
            minimizerOptions: {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
              minifyCSS: true,
              minifyJS: true,
            },
          }),
    
          // JSON Minification
        //   new JsonMinimizerPlugin(),
    
          // Image Optimization
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  ['gifsicle', { interlaced: true }],
                  ['jpegtran', { progressive: true }],
                  ['optipng', { optimizationLevel: 5 }],
                  ['svgo', { plugins: [{ name: 'preset-default' }] }],
                ],
              },
            },
          }),
        ],
        splitChunks: {
            chunks: 'all', // 'async', 'initial', ou 'all'
            minSize: 20000, // Tamanho mínimo de um chunk em bytes
            minRemainingSize: 0,
            minChunks: 1, // Número mínimo de chunks que devem compartilhar um módulo
            maxAsyncRequests: 30, // Máximo de requisições paralelas para chunks
            maxInitialRequests: 30, // Máximo de requisições paralelas para chunks iniciais
            enforceSizeThreshold: 50000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules[\\/]/, // Agrupa módulos de node_modules
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2, // Mínimo de vezes que um módulo é usado
                priority: -20,
                reuseExistingChunk: true,
              },
              // Exemplo de grupo personalizado para bibliotecas específicas
            //   react: {
            //     test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            //     name: 'react',
            //     chunks: 'all',
            //     priority: 10,
            //   },
              // Grupo para códigos comuns da aplicação
              commons: {
                name: 'commons',
                chunks: 'initial',
                minChunks: 2,
                priority: 1,
              },
            },
          },
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