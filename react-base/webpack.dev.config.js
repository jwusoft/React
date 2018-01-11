const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    build: path.join(__dirname, 'public'),
    app: path.join(__dirname, 'src')
};

module.exports = {
    entry: {
        app : [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            path.join(PATHS.app, 'index.js')
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'epa-portal.js',
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /.jsx?$/,
            use: ['babel-loader?cacheDirectory=true'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        //contentBase: commonConfig.resolve.alias.build,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether',
            Popper: ['popper.js', 'default'],
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        })
    ],
    resolve: {
        alias: {
            build: path.join(__dirname, 'public'),
            app: path.join(__dirname, 'src'),
            css: path.join(__dirname, 'src', 'css'),
            actions: path.join(__dirname, 'src', 'actions'),
            components: path.join(__dirname, 'src', 'components'),
            constants: path.join(__dirname, 'src', 'constants'),
            pages: path.join(__dirname, 'src', 'pages'),
            reducers: path.join(__dirname, 'src', 'reducers'),
            shared: path.join(__dirname, 'src', 'shared'),
            store: path.join(__dirname, 'src', 'store'),
            utils: path.join(__dirname, 'src', 'utils'),
            mocks: path.join(__dirname, 'src', 'mocks')
        }
    }
};