/*
Lab 5 - RESTful HTTP Server Instructions

- Use either Fastify or Express to implement a RESTful HTTP server.
- When the command `npm start` is executed, a server should start and listen on process.env.PORT.
- If implementing in Fastify, running `npm init fastify -- --integrate` in the labs-1 folder will set up the project.
- When `npm start` is executed, the server will automatically listen on process.env.PORT.

- The server should support a GET request to a single route: /boat/{id}
  - {id} is a placeholder for any given ID (e.g., /boat/2).
  - The GET /boat/{id} route should respond with a JSON payload.
  - The response should have the correct headers for a JSON response (Content-Type: application/json).
  - The server should only support this GET route.
  - Any other routes or HTTP verbs should be handled according to the HTTP specification (404 for not found, etc.).

- The following cases must be successfully handled:
  ● A successful request should respond with a 200 status code.
  ● The response should have the correct mimetype header (Content-Type: application/json).
  ● A GET request to a route that does not exist should respond with a 404 status code.
  ● If a given boat ID isn't found in the model, the server should respond with a 404 status code.
    The response body can contain anything, but it's important that the response status is set to 404.

*/

const express = require('express');
const {boat} = require('./model.js')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/boat/:id', (req, res) => {
    const id = req.params.id

    boat.read(id, (err, data) => { //Calls the read method from the boat model,
        if(err){
            if(err.code === 'E_NOT_FOUND') {
                return res.status(404).json({error: 'Boat not found'})
            }
            return res.status(500).json({err: err.message})
        }
        res.status(200).json(data)
    })
})

app.use((req, res) =>  {
    res.status(404).json({error:'Not Found'})
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})