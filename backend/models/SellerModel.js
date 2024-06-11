const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Seller Details Schema
const SellerDetailsSchema = new Schema({
    companyName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    panNo: { type: String, required: true },
    gstRegistrationNo: { type: String, required: true }
  });

  
  module.exports = SellerDetailsSchema;