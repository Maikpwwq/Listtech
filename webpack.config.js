const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const FaviconsWebpackPlugin = require("favicons-webpack-plugin")
const { DuplicatesPlugin } = require("inspectpack/plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    // mode: 'production', //'development'
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css'],
        alias: {
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            'lodash': path.resolve(__dirname, 'node_modules/lodash'),
            'react-scripts': path.resolve('./node_modules/react-scripts'),

        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'astroturf/loader'],                          

                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                }],

                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'style-loader', 'postcss-loader'],

                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[path][name]-[hash:8].[ext]"
                        }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./build/index.html/",
            file: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new FaviconsWebpackPlugin({
            logo: 'Listtech-Logo.png',
            prefix: './src/imagenes/',
        }),
        new DuplicatePackageCheckerPlugin(),
        new DuplicatesPlugin({
            // Emit compilation warning or error? (Default: `false`)
            emitErrors: false,
            // Handle all messages with handler function (`(report: string)`)
            // Overrides `emitErrors` output.
            emitHandler: undefined,
            // Display full duplicates information? (Default: `false`)
            verbose: false
        }),
        new DashboardPlugin(),
    ] 
}