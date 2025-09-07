#!/usr/bin/env node

const fs = require('fs');

fs.writeFile("writtenText.txt", 'Hello JSNAD!', (err) => {
  if(err) throw err;
  console.log('File written successfully')
});

