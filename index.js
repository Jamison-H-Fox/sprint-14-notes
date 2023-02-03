const express = require('express')

const server = express()

const port = 9000

server.listen(port, () => {
    res.json('hello there')
})

server.listen(port, () => {
    console.log('lisening on port 9000')
})