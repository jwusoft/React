var path = require('path');
var webpack = require('webpack');

const PATHS = {
    build: path.join(__dirname, 'public'),
    app: path.join(__dirname, 'resources', 'js')
};

module.exports = {
    entry: path.join(PATHS.app, 'index.js'),
    output: {
        path: PATHS.build,
        filename: 'epa-portal.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }, plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
            Popper: ['popper.js', 'default'],
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
    ]
};