#!/usr/bin/env node

const eventEmitter = require('events');
const emitter = new eventEmitter();

function greet(){
    console.log('Hello!');
}

emitter.on('greet', greet);
emitter.removeListener('greet', greet) // or emitter.off('greet', greet);
emitter.emit('greet'); //nothing happens 