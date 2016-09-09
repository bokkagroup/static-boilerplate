var webpack = require('webpack');
module.exports = {
    watch:true,
    entry: {
        initialize: "./assets/src/js/initialize.js",
        common: [
            'jquery',
            'lodash',
            'backbone'
        ]
    },
    output: {
        path: __dirname + "/assets/build/js/",
        filename: "[name].min.js"
    },
    module: {
        loaders: [ { test: /\.handlebars$/, loader: "handlebars-loader" } ]
    },
    resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.html', '.js', '.json', '.coffee']
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            _               : 'lodash',
            backbone        : 'backbone',
        }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]

}

