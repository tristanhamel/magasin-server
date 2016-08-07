'use strict';

const path = require('path');

module.exports = (app) => {
  // Insert routes below
  app.use('/products', require('./api/products'));
  // app.use('/api/users', require('./api/user'));

//  app.use('/auth', require('./auth'));
};
