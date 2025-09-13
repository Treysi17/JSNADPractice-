#!/usr/bin/env node 

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'}); //status & header
    res.end('Hello, JSNAD!\n'); //response body
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
