// require our dependencies
const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
// const CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin.js');

module.exports = {
    // the base directory (absolute path) for resolving the entry option
  context: __dirname,
    // the entry point we created earlier. Note that './' means
    // your current directory. You don't have to specify the extension  now,
    // because you will specify extensions later in the `resolve` section
  // entry: './assets/js',
  entry: {
    main: './assets/js/index',
    cust: './assets/js/cust',
    index: './assets/index',
  },

  output: {
        // where you want your compiled bundle to be stored
    path: path.resolve('./assets/bundles/'),
        // naming convention webpack should use for your files
    filename: '[name]-bundle.js',
    // chunkFilename: '[id].chunk.js',
  },

  plugins: [
        // tells webpack where to store data about your bundles.
    new BundleTracker({ filename: './webpack-stats.json' }),
    // new CommonsChunkPlugin({
    //   filename: 'commons.jsx',
    //   name: 'commons',
    // })
        // makes jQuery available in every module
    //   new webpack.ProvidePlugin({
    //       $: 'jquery',
    //       jQuery: 'jquery',
    //       'window.jQuery': 'jquery',
    //     }),
  ],

  devtool: 'eval-source-map',

  scripts: {
    watch: './node_modules/.bin/webpack -d --watch',
    build: './node_modules/.bin/webpack',
  },

  module: {
    loaders: [
            // a regexp that tells webpack use the following loaders on all
            // .js and .jsx files
      { test: /\.jsx?$/,
                // we definitely don't want babel to transpile all the files in
                // node_modules. That would take a long time.
        exclude: /node_modules/,
                // use the babel loader
        loader: 'babel-loader',
        query: {
                    // specify that we will be dealing with React code
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  resolve: {
        // tells webpack where to look for modules
    modulesDirectories: ['node_modules'],
        // extensions that should be used to resolve modules
    extensions: ['', '.js', '.jsx'],
  },
};
