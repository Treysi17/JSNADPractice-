const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/echo' && req.method === 'POST'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, {'content-type':'application/json'});
            res.end(JSON.stringify({youSent:body}));
        });
    }
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000/');
})

//run curl -X POST http://localhost:3000/echo -d "Hello, JSNAD!"
// output should be : {"youSent":"Hello, JSNAD!"}