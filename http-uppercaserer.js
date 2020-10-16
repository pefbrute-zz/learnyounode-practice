const fs = require("fs");
const http = require("http");
const map = require("through2-map");

let port = process.argv[2];
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    // let readStream = fs.createWriteStream();
    if (req.method === "POST") {
      let body = "";
      req.pipe(map((chunk) => {
          return chunk.toString().toUpperCase();
      })).pipe(res);
    //   req.on("data", (chunk) => {
    //     console.log(chunk.toString().toUpperCase());
    //     body += chunk.toString().toUpperCase(); // convert Buffer to string
    //     // req.pipe(res);
    //   });
      //   req.on("end", () => {
    //   console.log(body);
    //   res.end(body)
    //   res.end("ok");
      //   });
    } else {
        res.end("send me a POST\n")
    }
  })
  .listen(port);
