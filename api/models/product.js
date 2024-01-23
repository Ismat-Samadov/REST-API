// models/product.js

// Importing the mongoose library
const mongoose = require('mongoose');

// Defining a Mongoose schema for the product
const productSchema = new mongoose.Schema({
    // Defining the 'name' field as a required String
    name: { type: String, required: true },

    // Defining the 'price' field as a required Number
    price: { type: Number, required: true }
});

// Creating a Mongoose model named 'Product' based on the productSchema
module.exports = mongoose.model('Product', productSchema);
