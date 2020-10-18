const concat = require('concat-stream');

process.stdin
    .pipe(concat((body) => {
        const string = body.toString().split('').reverse().join('');
        process.stdout.write(string);
    }))