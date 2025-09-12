#!/usr/bin/env node 

const fs = require('fs');

const writeable = fs.createWriteStream('Output.txt');


writeable.write('Hello, ');
writeable.write('JSNAD!, \n');
writeable.end('Done writing!');


