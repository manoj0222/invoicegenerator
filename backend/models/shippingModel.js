const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Shipping Details Schema
const ShippingDetailsSchema = new Schema({
  companyName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  stateUTCCode: { type: String, required: true },
  signature: {
    type: Buffer, // Change the type to Buffer
  }
});



module.exports = ShippingDetailsSchema;