#!/usr/bin/env node

const {Transform} = require('stream')

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    },
})

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);


// Run script and type some input and press Enter. 
// output should uppercase the text input