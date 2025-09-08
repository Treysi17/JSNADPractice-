#!/usr/bin/env node 

const path = require('path');

const fullPath = '/mnt/c/Users/loyol/JSNAD_Practice/exam-practice/path-module/extractFileInfo.js'

console.log(path.basename(fullPath));   //extractFileInfo.js
console.log(path.extname(fullPath));    //.js
console.log(path.dirname(fullPath));    ///mnt/c/Users/loyol/JSNAD_Practice/exam-practice/path-module
