// server/server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productsRoutes = require('../routes/products');

const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Use routes
app.use('/api', productsRoutes);

// Simulated endpoints for form submissions
app.post('/submit-contact', (req, res) => {
    console.log('Contact Form Submission:', req.body);
    res.send('Contact form submitted successfully!');
});

app.post('/subscribe', (req, res) => {
    console.log('Subscription:', req.body);
    res.send('Subscribed successfully!');
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
