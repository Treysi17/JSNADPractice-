#!/usr/bin/env node

const fs = require('fs');
const {Transform} = require('stream');
const { transferableAbortController } = require('util');

//transform to uppercase 

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

//File streaming function

function transformFile(){
    readable = fs.createReadStream('input1.txt', {encoding: 'utf8'});
    writeable = fs.createWriteStream('output.txt');

    readable
        .pipe(upperCaseTransform)
        .pipe(writeable)

    //error handling 
    readable.on('error', (err) => console.log('Read error:, err.message'));
    writeable.on('error', (err) => console.log('write error, err.message '));

    writeable.on('finish', () => {
        console.log('File has been transformed and copied')
    });
}

//run file transform 

transformFile();

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);



