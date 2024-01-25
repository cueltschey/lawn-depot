const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/homepage/dist/index.html'));
});

// Define route for the products page (/products)
app.get('/products', (req, res) => {
    res.send('This is the products page.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
