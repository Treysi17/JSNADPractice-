#!/usr/bin/env node

const fs = require('fs');

const readable = fs.createReadStream('Input.txt');
const writeable = fs.createWriteStream('Copy.txt');

readable.pipe(writeable);