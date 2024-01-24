const express = require("express");
const accountsRouter = require("./accounts/accounts-router")
const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Barrd Aim. Something went wrong'
    })
})

module.exports = server;
