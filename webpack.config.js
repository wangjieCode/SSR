const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    devtool: 'node',
    entry: './src/index.js',
    target: 'node',
    resolve: {
        extensions: [".js", ".jsx", "css"]
    },
    externals: [nodeExternals()],
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    }
}