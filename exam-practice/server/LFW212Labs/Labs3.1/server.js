const http = require('http');
const {data} = require("./data.js");

const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(data()));
    } else {
        res.write(400, {"content-type": "type/plain"});
        res.end("Not found");
    }
} );

server.listen(3000, () => {
    console.log('server listening on http://localhost:3000')
})