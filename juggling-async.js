const bl = require("bl");
const http = require("http");

let firstURL = process.argv[2],
  secondURL = process.argv[3],
  thirdURL = process.argv[4];

let firstData = "",
  secondData = "",
  thirdData = "";

let check = 0;

http
  .get(firstURL, (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err);

        firstData = data.toString();
        console.log(firstData);

        http
          .get(secondURL, (res) => {
            res.pipe(
              bl((err, data) => {
                if (err) return console.error(err);

                secondData = data.toString();
                console.log(secondData);

                http
                  .get(thirdURL, (res) => {
                    res.pipe(
                      bl((err, data) => {
                        if (err) return console.error(err);

                        thirdData = data.toString();
                        console.log(thirdData);
                      })
                    );
                    res.on("error", console.error);
                  })
                  .on("error", console.error);
              })
            );
            res.on("error", console.error);
          })
          .on("error", console.error);
      })
    );
    res.on("error", console.error);
  })
  .on("error", console.error);

