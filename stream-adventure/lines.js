const split2 = require("split2");
const through2 = require("through2");
let lineNumber = 1;

process.stdin
  .pipe(split2())
  .pipe(
    through2((line, _, next) => {
      if (lineNumber % 2 !== 0) {
        console.log(line.toString().toLowerCase())
        this.push(line.toString().toLowerCase())
        
      } else {
        this.push(line.toString().toLowerCase())
      }

      lineNumber++;

      next();
    })
  )
  .pipe(process.stdout);
