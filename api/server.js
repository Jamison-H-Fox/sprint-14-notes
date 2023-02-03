const express = require('express');

const server = express();
server.use(express.json());

server.use('/', (req, res) => { // basic welcome endpoint
    res.status(200).json({
        message: 'Welcome to Sprint 14 Notes!!!'
    })
})

server.use((err, req, res, next) => { // catch all error endpoint
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;