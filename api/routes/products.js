const express = require('express');
const router = express.Router();

const Product = require('/models/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get requests to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
    };
    res.status(200).json({
        message: 'Handling post requests to /products',
        createdProduct:product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') { // Corrected typo from 'spcial' to 'special'
        res.status(200).json({
            message: 'you discovered special products',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed ordinary products id'
        });
    }
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product updated',
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'product deleted',
    });
});

module.exports = router;
