# Description

JSX Vanilla loader for webpack

# Examples of webpack.config.js

```js
const path = require('path');

module.exports = {
	mode: "development",
	devtool : 'source-map',
	entry: {
		main: "./src/main.js"
	},
	output: {
		path: path.resolve(__dirname, '../js'),
		filename: "[name].js"
	},
	module : {
    rules : [
		{
        test : /\.js$/,
        include : path.resolve(__dirname, "src"),
        loader : 'jsx-vanilla-loader'
      }
    ]
  }
}

```