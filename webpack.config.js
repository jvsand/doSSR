
const path = require('path');

module.exports = {
    entry: './server/index.js', // またはエントリーポイントに対応するファイル
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    mode:"development",
    devtool: "source-map",
    devServer: {
      static: {
        directory: "./dist",
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: {
            loader: "babel-loader",
            // options:{
            //     presets:[
            //         "@babel/preset-env",
            //         "@babel/react"
            //     ]
            // }
          }
        }
      ]
    },
    target:["web","es5"],
  };
