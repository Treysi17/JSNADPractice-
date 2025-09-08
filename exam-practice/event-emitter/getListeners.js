#!/usr/bin/env node

const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.setMaxListeners(1); //Default is 10. Node will show memory leak warning since I declared 2 listener

emitter.on('task', () => 
    console.log('Task 1'));
emitter.on('task', () => 
    console.log('Task 2'));

console.log(emitter.listeners('task').length); 
console.log(emitter.listenerCount('task'))

