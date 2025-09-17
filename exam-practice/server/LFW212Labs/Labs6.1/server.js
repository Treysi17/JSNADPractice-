/*
Lab 5 - RESTful HTTP Server Instructions (POST & GET)

- Use either Fastify or Express to implement a RESTful HTTP server.
- When the command `npm start` is executed, a server should start and listen on process.env.PORT.

- The server should support:
  ● POST request to /boat that uses the model.js file to create a new entry.
    - Only accept application/json mime-type requests.
    - Respond with application/json content-type responses.
    - The POST request should expect JSON data in the format: { data: { brand, color } }
    - A successful request should respond with a 201 Created status code.
    - Unexpected errors should result in a 500 Server Error response.

  ● GET /boat/{id} route as implemented in the previous chapter.

- It is not necessary to validate user input for this exercise.
- Any other routes or HTTP verbs should be handled according to the HTTP specification (404 for not found, etc.).

LFW212 © Copyright the Linux Foundation 2020-2024. All rights reserved.
*/