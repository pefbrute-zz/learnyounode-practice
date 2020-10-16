const strftime = require("strftime");
const net = require("net");
const port = process.argv[2];
const server = net.createServer((socket) => {
//   console.log(strftime("%Y-%m-%d %H:%M"));
  socket.end(strftime("%Y-%m-%d %H:%M" + "\n"))
});

server.listen(port);
