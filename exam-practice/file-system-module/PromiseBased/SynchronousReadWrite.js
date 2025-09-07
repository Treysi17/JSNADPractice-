#!/usr/bin/env node

const fs = require('fs');

fs.writeFileSync("newFile.txt", "Sync write");
const data = fs.readFileSync("newFile.txt", 'utf8');
console.log(data);


