const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Billing Details Schema
const BillingDetailsSchema = new Schema({
  companyName: { type: String, required: true },
  streetAddress: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  stateUTCCode: { type: String, required: true }
});



module.exports = BillingDetailsSchema