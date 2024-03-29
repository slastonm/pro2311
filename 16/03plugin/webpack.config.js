const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        bundle:path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path:path.resolve(__dirname, 'build'),
        filename:'index.js',
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          }
        ],
      },
}