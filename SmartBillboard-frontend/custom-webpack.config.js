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
        "os": require.resolve("os-browserify/browser"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
      } 
    }
  }