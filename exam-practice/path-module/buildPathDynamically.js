#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');
await fs.writeFile(filePath, "Hello, JSNAD!");
console.log("File written successfully");
const data = await fs.readFile("message.txt", utf8);

console.log(data);
