const express = require('express')

const server = express();

//Routers
const dishRouter = require('./routers/dishRouter.js')

//middleware
server.use(express.json());
server.use('/api/dishes', dishRouter)

server.get('/', (req,res) => {
    res.send(`Web DB III Challenge `)
})

module.exports = server;