#!/usr/bin/env node

const fs = require('fs');
const { Transform } = require('stream');

// --- WordCount Transform ---
class WordCountTransform extends Transform {
  constructor() {
    super();
    this.remaining = ''; // handle chunk split words
    this.count = 0;
  }

  _transform(chunk, encoding, callback) {
try{
    const text = this.remaining + chunk.toString();

    const parts = text.split(/\s+/)

    this.remaining = parts.pop();

    this.count += parts.filter(part => part.trim()).length;

    this.push(text.toUpperCase());
    callback();
  }catch (err){
    callback(err);
  }
  }

  _flush(callback) {
   try{
    if (this.remaining.trim()) {
        this.count += 1;
        this.push(this.remaining.toUpperCase());
   }
    this.push(`\n\nWord Count: ${this.count}\n`);
    callback();
  } catch (err){
    callback(err);
  }
  }
}

// --- Entry Point ---
function main() {
  const inputFile = process.argv[2]; // optional filename
  const readable = inputFile 
    ? fs.createReadStream(inputFile, { encoding: 'utf-8' })
    : process.stdin;

  const writable = fs.createWriteStream('output.txt');

  const wordCounter = new WordCountTransform();

  readable.pipe(wordCounter).pipe(writable);
  
  readable.on('end', () => {
    console.log(`Final Word Count: ${wordCounter.count}`);
  });
}

main();
