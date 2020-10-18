const http = require("http");
const through = require("through2");
const server = http.createServer((req, res) => {
   req.pipe(through(write, end)).pipe(res);
});
server.listen(process.argv[2]);

function write(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}
