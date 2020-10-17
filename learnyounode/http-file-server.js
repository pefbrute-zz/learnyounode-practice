const fs = require("fs");
const http = require("http");

let port = process.argv[2],
  path = process.argv[3];

const server = http
  .createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    fs.createReadStream(path).pipe(res);
  })
  .listen(port);