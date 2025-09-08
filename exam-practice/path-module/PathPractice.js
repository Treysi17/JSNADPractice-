#!/usr/bin/env node
// ✅ Your JSNAD-Style Challenge
// Create a script called createNote.js that:
// Takes two arguments:
// filename (e.g., note.txt)
// content (e.g., My first note)
// Creates the file inside a notes folder (create it if it doesn’t exist).
// Writes the content into the file.
// Prints the absolute path of the created file.
// Rules
// Use:
// path.join() or path.resolve()
// fs.promises methods
// process.argv for arguments
// Handle errors properly.

const fs = require('fs').promises;
const path = require('path');

const filename = process.argv[2];
const content = process.argv[3];

async function run(){
    try
    {   
        const notesdir = "notes"
        await fs.mkdir(notesdir, {recursive: true})
        const fullPath = await path.resolve(notesdir, filename)
        await fs.writeFile(fullPath, content);
        console.log(`Absolute Path:${fullPath}`)
    } 
    catch(err){
        console.log(err.message);
    }
}

run();