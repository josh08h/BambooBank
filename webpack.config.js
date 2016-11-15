module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  resolve: {
  	extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
  	loaders: [
  		{
  			test: /\.jsx?$/,
  			exclude: /node_modules/,
  			loaders: ["babel-loader"]
  		},
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
  	]
  }
};