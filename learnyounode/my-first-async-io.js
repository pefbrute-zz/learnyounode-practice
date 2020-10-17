const fs = require('fs');
let path = process.argv[2];
// let buffer = 
fs.readFile(path, "utf-8", (err, data) => {
    if (err) throw err;
    let amountOfMatches = data.match(/\n/gi).length;
    console.log(amountOfMatches);
});