// Import Express
const express = require('express');

// Initialize the Express app
const app = express();

// Middleware to log HTTP method and endpoint accessed
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); // Pass control to the next middleware or route handler
  });
  

// Use middleware to parse JSON data for POST requests
app.use(express.json());

// Define routes

// GET /orders
app.get('/orders', (req, res) => {
  res.send('Here is the list of all orders.');
});

// POST /orders
app.post('/orders', (req, res) => {
  res.send('A new order has been created.');
});

// GET /users
app.get('/users', (req, res) => {
  res.send('Here is the list of all users.');
});

// POST /users
app.post('/users', (req, res) => {
  res.send('A new user has been added.');
});


// Wildcard route to handle undefined routes
app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
  });
  
// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
