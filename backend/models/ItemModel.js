// Item Details Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    description: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    discount: { type: Number, required: true },
    taxRate: { type: Number, required: true },
    taxType: { type: String, required: true }  // New field
  });


  module.exports = ItemSchema;