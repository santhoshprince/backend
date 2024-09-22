const express = require('express');
const router = express.Router();
const Product = require('../models/productSchema'); // Assuming you have a Product model for your database

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProduct = new Product({ name, description });
    const savedProduct = await newProduct.save();
    res.status(201).json({ product: savedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


module.exports = router;
