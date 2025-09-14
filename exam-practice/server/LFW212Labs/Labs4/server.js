/*
Lab 4.2 - Stream Some Content

- Use the following code to create a stream with a built-in delay:
    const { Readable, Transform } = require('stream');
    function stream() {
        const readable = Readable.from(['this','is','a','stream','of','data'].map((s) => s + '<br>'));
        const delay = new Transform({
            transform(chunk, enc, cb) {
                setTimeout(cb, 500, null, chunk);
            }
        });
        return readable.pipe(delay);
    }

- Using either Fastify or Express, create a new route at path /data.
- Send the data from this stream to the response when the /data route is requested.
- The labs-2 folder contains a file named validate.js.
- Make sure the server that the /data route was added to is running in another terminal.
- With the current working directory set to the labs-2 folder, run the following to check the implementation:
    node validate

- If successful, the following output should be the result of this command.
*/

const express = require('express');
const {Readable, Transform} = require('stream');

const app = express();
const PORT = 3000;

//stream function 

function stream (){
    const readable = Readable.from(
        ["This","is","a","stream","of","data"].map((s) => s + "<br>")
    )
    const delay = new Transform({
        transform(chunk, encoding, callback){
            setTimeout(callback, 500, null, chunk);
    },
    });
    return readable.pipe(delay);
}

app.get('/data', (req, res) => {
    res.setHeader("content-type", "text/html; charset=utf-8" );
    stream().pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/data`);
});