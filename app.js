const express = require('express');
const { message } = require('statuses');
const app = express();
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works'
    });
});

module.exports = app;