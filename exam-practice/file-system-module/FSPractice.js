#!/usr/bin/env node
// ✅ Mini JSNAD-Style Challenge
// Create a directory called practice-fs.
// Inside it:
// Create a script manageFiles.js.
// The script should:
// Create a file message.txt with the text Hello, JSNAD!.
// Read the file and print its content.
// Append Exam Practice to the file.
// Finally, rename it to final-message.txt.

const fs = require('fs').promises;

async function run(){
    try{
        //create and write on file message.txt
        await fs.writeFile("message.txt", "Hello, JSNAD!");
        // read the file and print its content
        const data = await fs.readFile("message.txt", 'utf8');
        console.log(data);

        // append exam practice to file 
        await fs.appendFile("message.txt", "Exam Practice");

        // rename it to final-message.txt
        await fs.rename("message.txt", "final-message.txt");
    }
    catch(err){
        console.error("Error:", err.message);
    } 
}

run();
