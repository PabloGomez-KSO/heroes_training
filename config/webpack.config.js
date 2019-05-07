const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ContextReplacementPlugin } = require('webpack');

module.exports = {
    entry: {
        main: './src/main.ts',
        styles: './src/styles.scss'
    },

    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "[name].bundle.js",
        chunkFilename: "[name]-chunk.js",
    },

    resolve: {
        extensions: ['.js', '.ts', '.html', '.scss']
    },

    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.(ts|js)$/, loaders: ['angular-router-loader'] },
            { test: /.html$/, use: 'html-loader' },
            { test: /\.(s*)css$/, use: ['to-string-loader','style-loader','css-loader','sass-loader'] },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            showErrors: true,
            title: "Webpack App",
            path: path.join(__dirname, "../dist/"),
            hash: true
        }),

        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            path.resolve(__dirname, '../src')
        )
    ]
}
