// backend/controllers/productController.js
// This file contains the controller functions for handling product-related API requests

// Importing the products data from a local file
// This file contains the product data that will be served by the API
const products = require('../data/products');

// Controller function to handle the request for all products
// This function retrieves all products from the data source and sends them as a JSON response
const getAllProducts = (req, res) => {
  res.json(products);
};

// Controller function to handle the request for a single product by ID
// This function retrieves a specific product based on the ID provided in the request parameters
const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);

  // If the product is not found, return a 404 status with an error message
  // This ensures that the API responds appropriately when a product is not found
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // If the product is found, return it as a JSON response
  // This allows the client to receive the product details
  res.json(product);
};

// Exporting the controller functions so they can be used in the routes
// This allows the functions to be imported in the routes file
module.exports = { getAllProducts, getProductById };
