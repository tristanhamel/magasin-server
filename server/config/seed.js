/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Products = require('../api/products/products.model');
//var User = require('../api/user/user.model');

// Insert seed data below
var ProductSeed = require('../api/products/products.seed.json');

// Insert seed inserts below
Products.find({}).remove(() => {
  Products.create(ProductSeed);
});