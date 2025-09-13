const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('<h1> Home Page<h1>');
    }
    else if (req.url === '/about' && req.method === 'GET'){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('<h1> About Page<h1>');
    } else {
        res.writeHead(404, {'content-type': 'type/plain'});
        res.end('not found')
    }
})

server.listen(3000, () => {
    console.log('server running');
})