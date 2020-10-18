const { Writable } = require("stream");
const { Readable } = require("stream");

const arguments = process.argv;
const content = arguments[2];

class MyStream extends Readable {
  _read(size) {}
}

class MyWritable extends Writable {
  constructor() {
    super();
  }

  _write(chunk, encoding, callback) {
    // stream.push(chunk);
    // stream.pipe(process.stdout);
    console.log("writing: " + chunk);
    // process.stdout.write("writing: ");
    // process.stdin.pipe(process.stdout);

    callback();
  }
}
// const stream = new MyStream(content);
const writable = new MyWritable();

// stream.push(content);
// writable._write(content);

// stream.pipe(process.stdout);

process.stdin.on("data", (chunk) => {
    // stream.push(chunk);
    // process.stdin.pipe(writable);
    // stream.pipe(writable);
    writable.write(chunk);
});

// const stream = new MyStream(content);
// stream.push(content);
// stream.pipe(process.stdout);
