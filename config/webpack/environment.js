const { environment } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript');
const webpack = require('webpack');
const path = require('path');

environment.loaders.append('typescript', typescript);
module.exports = environment;

environment.plugins.append(
  'ContextReplacementPlugin',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core/,
    path.resolve(__dirname, 'app/javascript/')
  )
);
