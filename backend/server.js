// backend/server.js

// Import necessary modules
// Import express
const express = require('express');
// Import cors for handling CORS issues
const cors = require('cors');
// Import dotenv to manage environment variables
require('dotenv').config();

// Create an instance of express
// This will be our main application object
const app = express();

// Use cors middleware to allow cross-origin requests
// This is important for enabling requests from different origins, especially in development
app.use(cors());
// Use express.json() middleware to parse JSON request bodies
// This allows us to handle JSON data sent in requests
app.use(express.json());

// Import the routes from the routes directory
// This will include all the routes defined in the index.js file
const routes = require('./routes/index.js');

// Use the imported routes in the application
// This will mount the routes under the /api path
app.use('/api/', routes);

// Define a simple route for the root path
// This will respond with a welcome message when accessing the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Qualimart API!');
});

// Import error handling middleware
// This will handle 404 errors and other errors that occur during request processing
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js');

// Use the notFound middleware to catch 404 errors
// This will respond with a 404 status code and an error message for unmatched routes
app.use(notFound);
// Use the errorHandler middleware to handle errors
// This will respond with a JSON object containing the error message and stack trace
app.use(errorHandler);

// Start the server on the specified port
// The port is defined in the .env file or defaults to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Qualimart Backend Server is running on port ${PORT}`);
});
