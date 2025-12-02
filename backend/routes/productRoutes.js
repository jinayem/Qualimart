// backend/routes/productRoutes.js
// This file defines the routes for handling product-related API requests

// Importing the express module to create a router
// This module is used to handle HTTP requests and responses in a web application
const express = require('express'); 
// Importing the express module to create a router for handling product-related routes
// This router will define the endpoints for product-related API requests
const router = express.Router();
// Importing the controller functions for handling product-related requests
// These functions will be used to respond to the API requests for products
const { getAllProducts, getProductById } = require('../controllers/productController');

// Route to get all products
// This route will respond to GET requests at the root path '/'
router.get('/', getAllProducts);

// Route to get a single product by ID
// This route will respond to GET requests at the path '/:id'
router.get('/:id', getProductById);

// Exporting the router so it can be used in the main app file
// This allows the routes defined in this file to be included in the main application
module.exports = router;
