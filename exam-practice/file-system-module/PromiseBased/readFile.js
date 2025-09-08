#!/usr/bin/env node

const fs = require('fs').promises;

async function run(){
  await fs.writeFile("Newtxt.txt", "Hello ulit from promises!");
  const data = await fs.readFile("Newtxt.txt", 'utf8');
  console.log(data);
};

run();