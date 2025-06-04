const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product (admin use)
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send('Product added');
});

module.exports = router;
