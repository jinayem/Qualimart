// backend/middleware/errorMiddleware.js
// This file contains middleware for handling errors in the application

// It includes a 404 error handler and a general error handler
// This middleware catches 404 errors for unmatched routes
// and handles other errors that occur during request processing
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// This middleware handles errors that occur during request processing
// It sends a JSON response with the error message and stack trace
// The stack trace is only included in development mode for security reasons
// In production, it sends a generic message to avoid exposing sensitive information
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};

// Export the error handling middleware functions
// This allows them to be used in the main application file
module.exports = { notFound, errorHandler };
