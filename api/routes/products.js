// Importing required modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

// Handling GET requests to /products
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get requests to /products'
    });
});

// Handling POST requests to /products
router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Product created successfully',
                createdProduct: result
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                error: err
            });
        });
});


// Handling GET requests to /products/:productId
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).exec().then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => { 
        console.log(err);
        res.status(500).json({ error: err });
    });
});

// Handling PATCH requests to /products/:productId
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product updated',
    });
});

// Handling DELETE requests to /products/:productId
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product deleted',
    });
});

// Exporting the router
module.exports = router;
