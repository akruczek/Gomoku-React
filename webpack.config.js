module.exports = {
    entry: ["whatwg-fetch", "./script/main.jsx"],
    output: {
      filename: "./script/out.js",
    },
    devServer: {
      inline: true,
      contentBase: "./",
      port: 3001
    },
    devtool: 'source-map',
    watch: true,
    module: {
         loaders: [
             {
                 test: /\.jsx$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: { presets: ['es2015', 'stage-2',	'react'] }
             },
             {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
             {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
         ]
    }
}
