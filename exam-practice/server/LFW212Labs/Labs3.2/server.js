/*
Lab - HTTP Server Requirements

- Use any Node core library and/or web framework to create an HTTP server that:
  ● Listens on localhost
  ● Listens on port 3000
  ● Responds to HTTP GET requests to / with a 200 OK HTTP status (content is irrelevant)
  ● Responds to HTTP POST requests to / with a 405 Method Not Allowed HTTP status

- The package.json start script must contain a command to start the server.
*/

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
    } else if (req.url === '/' && req.method === 'POST') {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

    

server.listen(3000, () => {
    console.log('server listening on http://localhost:3000')
})