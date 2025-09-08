#!/usr/bin/env node

const fs = require('fs')

fs.appendFile("writtenText.txt", "New line of text", (err) => {
if (err) throw err;
});
