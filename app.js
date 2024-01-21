const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const { nextTick } = require('async');
const { message } = require('statuses');

app.use(morgan('dev'));


app.use((req, res, next) => { 
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
           message: error.message
        }
    });
});

// Routes which should handle
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;