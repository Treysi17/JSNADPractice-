#!/usr/bin/env node

const fs = require('fs');

const readStream = fs.createReadStream("bigFile.txt", 'utf8');
const writeStream = fs.createWriteStream("NewStreamText.txt");

readStream.pipe(writeStream);
