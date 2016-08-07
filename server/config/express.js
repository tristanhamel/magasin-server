'use strict';

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const config = require('./environment');
//const passport = require('passport');

module.exports = function(app) {
  const env = app.get('env');

  app.use(compression());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
//  app.use(passport.initialize());

  if ('production' === env) {
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
//    app.use(require('connect-livereload')());
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};