var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: path.resolve(__dirname),
    // alias: {
    //   Greeter: 'public/components/Greeter.js',
    //   GreeterMessage: 'public/components/GreeterMessage.js',
    //   GreeterForm: 'public/components/GreeterForm.js'
    // },
    modules: [
    path.resolve('./app/components'),
    path.resolve('./node_modules'),
    path.resolve('./app/api/'),
    path.resolve('./app/styles/')
    ],
    extensions: [" " ,".js", "jsx"]
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react','es2015', 'stage-0']
      }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }
  ]
},
devtool: 'cheap-module-eval-source-map'
};
