#!/usr/bin/env node

const fs = require('fs');

const readable = fs.createReadStream('Input.txt',{ encoding: 'utf8' });

readable.on('data', (chunk) => {
	console.log(`chunk size: ${chunk.length} characters`);
	console.log(`new chunk: chunk.slice(0, 50) + '....'`);
});

readable.on('end', () => {
	console.log('finish reading file.');
});


