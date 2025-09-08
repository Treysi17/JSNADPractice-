#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');


const dirname = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4] || 'Default Content';

filePath = path.join(dirname, fileName);

async function run (){
    await fs.writeFile(filePath, content);
    console.log(`File written successfully: ${filePath}`);
}

run();




