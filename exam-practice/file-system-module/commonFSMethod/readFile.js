#!/usr/bin/env node

const fs = require('fs');

fs.readFile('sampletext.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});









