// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can change this port number as needed

// Define route for the home page (/)
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

// Define route for the products page (/products)
app.get('/products', (req, res) => {
    res.send('This is the products page.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
