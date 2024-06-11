const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = require("./ItemModel");
const SellerDetailsSchema = require("./SellerModel")
const BillingDetailsSchema = require("./billingModel");
const OrderDetailsSchema = require("./orderModel");
const ShippingDetailsSchema = require("./shippingModel");

// Invoice Details Schema
const InvoiceDetailsSchema = new Schema({
  invoiceNo: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
  invoiceDetails: { type: String, required: true }
});

// Company Schema
const CompanySchema = new Schema({
  sellerDetails: SellerDetailsSchema,
  logo: { type: String },
  billingDetails: BillingDetailsSchema,
  shippingDetails: ShippingDetailsSchema,
  orderDetails: OrderDetailsSchema,
  invoiceDetails: InvoiceDetailsSchema,
  reverseCharge: { type: String, required: false },
  itemDetails: [ItemSchema]
});

// Creating the Company model
const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
