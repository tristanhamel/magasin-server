'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type:String, required: true},
  bids: [{
    user_id: String,
    value: Number,
    time: Date,
    message: String
  }],
  created: Date,
  deadline: Date,
  description: {type:String, required: true},
  images: {type:String, required: true},
  startPrice: {type:Number, required: true},
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);