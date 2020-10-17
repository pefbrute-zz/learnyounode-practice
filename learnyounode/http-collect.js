const bl = require("bl");
const http = require("http");

let url = process.argv[2];

http
  .get(url, (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);

        stringData = data.toString();
        console.log(stringData.length);
        console.log(stringData);
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);
