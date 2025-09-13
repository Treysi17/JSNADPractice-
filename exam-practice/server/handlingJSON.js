const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET'){
        res.writeHead(200, {'content-type':'application/json'})
        res.end(JSON.stringify({message: 'Hello', time: Date.now()}));
    }
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
});