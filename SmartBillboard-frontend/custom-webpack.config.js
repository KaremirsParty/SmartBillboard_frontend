const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.export = {
    plugins: [
		new NodePolyfillPlugin()
	],
    resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "zlib": false,
        "os": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "crypto-browserify": false, //if you want to use this module also don't forget npm i crypto-browserify 
      } 
    }
  }