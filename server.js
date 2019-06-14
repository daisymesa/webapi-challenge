const express = require('express');

const ProjectRouter = require('./projectRouter');
const ActionRouter = require('./actionRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectRouter);
server.use('/api/actions', ActionRouter);

server.get('/', (req,res) => {
    res.send(`
    <h2>Server is working!</h2>
    `)
})

module.exports = server;