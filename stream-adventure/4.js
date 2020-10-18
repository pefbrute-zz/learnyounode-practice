const { Readable } = require('stream');
const arguments = process.argv;
const content = arguments[2];

class MyStream extends Readable {
    _read(size){
    }
}

const stream = new MyStream(content);
stream.push(content);
stream.pipe(process.stdout);