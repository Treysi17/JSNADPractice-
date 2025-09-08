#!/usr/bin/env node 

const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.once('sayHello', (name) =>{
    console.log(`Hello, ${name}`);
});

emitter.emit('sayHello', 'Ganda'); // Works
emitter.emit('sayHello', 'Tracy'); // Ignored