#!/usr/bin/env node 

const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('task', () => console.log('Task 1'));
emitter.on('task', () => console.log ('Task 2'));

emitter.removeAllListeners('task');
emitter.emit('task');