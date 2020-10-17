const fs = require("fs");
const http = require("http");
const map = require("through2-map");

let port = process.argv[2];
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    if (req.method === "POST") {
      req.pipe(map((chunk) => {
          return chunk.toString().toUpperCase();
      })).pipe(res);
    } else {
        res.end("send me a POST\n")
    }
  })
  .listen(port);
