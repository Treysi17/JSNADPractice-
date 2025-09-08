#!/usr/bin/env node 

const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('sayHello', (name) => { // sayHello is the event, name is listener 
	console.log(`Hello, ${name}!`);
});

emitter.emit('sayHello','Tracy'); // Trigger an event



