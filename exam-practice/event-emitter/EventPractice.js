#!/usr/bin/env node
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(5);

function TaskStarted() {
    console.log('Task Started');
}
function Processing() {
    console.log('Processing...');
}
function Finished() {
    console.log('Task Finished');
}

emitter.on('task', TaskStarted);
emitter.on('task', Processing);
emitter.on('task', Finished);

emitter.once('init', () => {
    console.log('Initialization complete');
});

console.log('\n--- Emitting init twice ---');
emitter.emit('init');
emitter.emit('init');

console.log('\n--- Emitting task for the first time ---');
emitter.emit('task');

console.log(`\nNumber of listeners for 'task': ${emitter.listeners('task').length}`);

console.log('\n--- Removing "Processing" listener ---');
emitter.off('task', Processing);

console.log('\n--- Emitting task after removal ---');
emitter.emit('task');

console.log('\n--- Removing all listeners for task ---');
emitter.removeAllListeners('task');

console.log('\n--- Emitting task after removing all listeners ---');
emitter.emit('task'); // Nothing happens
