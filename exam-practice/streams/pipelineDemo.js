#!/usr/bin/env node

const { Readable, Writable, Transform } = require('stream');
const fs = require('fs');

// --- 1. Custom Readable ---
class MyReadable extends Readable {
  constructor(chunks, options) {
    super(options);
    this.chunks = chunks;
    this.index = 0;
  }

  _read() {
    if (this.index < this.chunks.length) {
      const chunk = this.chunks[this.index];
      this.push(chunk);
      this.index++;
    } else {
      this.push(null); // end of stream
    }
  }
}

// --- 2. Custom Transform ---
class UpperCaseCounter extends Transform {
  constructor(options) {
    super(options);
    this.charCount = 0;
  }

  _transform(chunk, encoding, callback) {
    const str = chunk.toString().toUpperCase();

    // count non-whitespace chars
    this.charCount += str.replace(/\s/g, '').length;

    this.push(str + '\n'); // add newline for readability
    callback();
  }

  _flush(callback) {
    console.log(`\n✅ Total character count (excluding whitespace): ${this.charCount}`);
    callback();
  }
}

// --- 3. Custom Writable ---
class MyWritable extends Writable {
  constructor(file, options) {
    super(options);
    this.fileStream = fs.createWriteStream(file, { flags: 'w' });
  }

  _write(chunk, encoding, callback) {
    const str = chunk.toString();
    console.log(`Writing: ${str.trim()}`); // log to console
    this.fileStream.write(str, callback); // also write to file
  }

  _final(callback) {
    this.fileStream.end();
    console.log('✅ Writing complete. Check pipeline.txt');
    callback();
  }
}

// --- Main pipeline ---
function main() {
  const messages = [
    "Node.js streams are powerful",
    "Practice makes perfect",
    "JSNAD exam ready"
  ];

  const readable = new MyReadable(messages);
  const transform = new UpperCaseCounter();
  const writable = new MyWritable('pipeline.txt');

  readable
    .pipe(transform)
    .pipe(writable)
    .on('error', (err) => {
      console.error('Pipeline failed:', err.message);
    });
}

main();
