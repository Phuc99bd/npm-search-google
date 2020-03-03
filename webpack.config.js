// webpack.config.js

const { resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'disk/search-keyword-google.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'search-keyword-google.js',
        library: 'scrollSpy'
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        })
    ]
}