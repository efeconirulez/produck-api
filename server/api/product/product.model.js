'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  manufacturer: String,
  imageUrl: String,
  technicalDetails: {
    microProcessor: String,
    screenDimension: String,
    battery: String,
    camera: String
  }, 
  category: { type: String, enum:['cellphone', 'tablet', 'laptop']},
});

module.exports = mongoose.model('Product', ProductSchema);