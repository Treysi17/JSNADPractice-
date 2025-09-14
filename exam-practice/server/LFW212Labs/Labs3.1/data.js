/*
Lab - HTTP Server Requirements

- Use any Node core library and/or web framework to create an HTTP server that:
  ● Listens on localhost
  ● Listens on port 3000
  ● Responds to HTTP GET requests to / with data from the data function as exported from data.js
  ● Responds with a 404 to GET requests to any other route

- The package.json start script must contain a command to start the server.

- Run the following command to check whether the created server meets the criteria:
    node validate

- If the server was correctly implemented, the output of this command should be as follows:
    LFW212 © Copyright the Linux Foundation 2020-2024. All rights reserved.
*/

const { timeStamp } = require("console");

function data() {
    return{
        message: "Hello from data.js",
        timeStamp: new Date().toISOString()
    };
}

module.exports = {data};