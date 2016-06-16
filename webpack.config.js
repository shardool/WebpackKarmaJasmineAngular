'use strict';
module.exports = {
    entry: ['./main.js'],
    output: {
        path: 'home/builds',
        publicPath: 'home/builds',
        filename: 'walker.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ]
    },
    watch: true
    /*resolve: {
        extensions: ['.js']
    }*/
};