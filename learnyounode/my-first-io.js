const fs = require('fs');

let pathToFile = process.argv[2];
let buffer = fs.readFileSync(pathToFile);
let stringBuffer = buffer.toString();

var amountOfMatches = stringBuffer.match(/\n/gi).length;

console.log(amountOfMatches);
