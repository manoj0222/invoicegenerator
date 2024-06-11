const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Order Details Schema
const OrderDetailsSchema = new Schema({
    orderNo: { type: String, required: true },
    orderDate: { type: Date, required: true }
  });


  module.exports = OrderDetailsSchema;