#!/usr/bin/env node

// Task
// Create a script called apiServer.js that:
// Starts an HTTP server on port 4000.
// Supports three routes:
// GET /
// Responds with status 200 and HTML:
// <h1>Welcome to JSNAD Server</h1>
// GET /api/time
// Responds with status 200 and JSON containing the current server time:
// { "time": "2025-09-13T12:34:56Z" }
// POST /api/echo
// Accepts a JSON body (e.g., { "message": "Hello" }).
// Responds with status 200 and JSON echoing back the same object, wrapped inside:
// { "youSent": { "message": "Hello" } }
// For any other route, respond with 404 Not Found.
// Handle invalid JSON in the POST body by responding with 400 Bad Request.
// Rules
// Use only the built-in http module.
// Do not use Express or other frameworks.
// Must handle async request body parsing.
// Properly set Content-Type headers (text/html, application/json).


const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to JSNAD Server</h1>');

  } else if (req.url === '/api/time' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ time: new Date().toISOString() }));

  } else if (req.url === '/api/echo' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ youSent: parsed }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
      }
    });

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(4000, () => {
  console.log('✅ Server running at http://localhost:4000/');
});
