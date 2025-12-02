// backend/routes/index.js

// Import necessary modules
// Import express to create a router instance
const express = require('express');
// Import product routes
// This will handle all product-related routes
const productRoutes = require('./productRoutes.js');

// Create a new router instance
// This router will handle all the routes related to products
const router = express.Router();

// Define the base route for products
// This will handle all requests to /products
router.use('/products', productRoutes);

// Export the router to be used in the main application
// This allows the main server file to use these routes under the /api path
module.exports = router;
