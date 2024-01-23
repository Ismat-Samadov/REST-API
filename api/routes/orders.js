// Importing required modules
const express = require('express');
const router = express.Router();

// Handling GET requests to /orders
router.get('/', (req, res, next) => { 
    res.status(200).json({
        message: 'Orders fetched'
    });
});

// Handling POST requests to /orders
router.post('/', (req, res, next) => { 
    // Creating an order object based on the request body
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    
    res.status(201).json({
        message: 'Order created',
        order: order
    });
});

// Handling GET requests to /orders/:orderId
router.get('/:orderId', (req, res, next) => { 
    res.status(200).json({
        message: 'Order details',
        id: req.params.orderId
    });
});

// Handling DELETE requests to /orders/:orderId
router.delete('/:orderId', (req, res, next) => { 
    res.status(200).json({
        message: 'Order deleted',
        id: req.params.orderId
    });
});

// Exporting the router
module.exports = router;
