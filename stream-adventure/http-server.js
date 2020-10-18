const http = require("http");
const through = require("through2");
const server = http.createServer((req, res) => {
  //   if (req.method === "POST") {
  //     req.pipe(fs.createWriteStream("post.txt"));
  //   }
  //   res.end("beep boop\n");

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
