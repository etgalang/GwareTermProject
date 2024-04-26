// routes/products.js

const express = require('express');
const router = express.Router();
const productsController = require('../models/products');

router.get('/products', (req, res) => {
    const products = productsController.getAllProducts();
    res.json(products);
});

router.get('/products/:id', (req, res) => {
    const product = productsController.getProductById(req.params.id);
    res.json(product);
});

module.exports = router;
