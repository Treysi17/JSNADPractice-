#!/usr/bin/env node

const fs = require('fs');

fs.unlink("writtenText.txt", (err) => {
if (err) throw err;
});
