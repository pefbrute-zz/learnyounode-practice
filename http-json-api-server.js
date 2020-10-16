const fs = require("fs");
const http = require("http");
const url = require("url");
const map = require("through2-map");
const { time } = require("console");

let port = process.argv[2];
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    const requestedURL = req.url;
    const myURL = url.parse(requestedURL);
    // const parsedURL = parse(requestedURL);

    // console.log(myURL);

    // res.end(myURL);

    const requiredPath = myURL.pathname;
    const query = myURL.query;
    const indexOfT = query.indexOf("T");
    const date = query.substring(4, indexOfT);
    
    const indexOfYear = date.indexOf("-");
    const year = Number(date.substring(0, indexOfYear));
    const indexOfMonth = indexOfYear + 1;
    const month = Number(date.substring(indexOfYear + 1, indexOfMonth + 2));
    const indexOfDay = indexOfMonth + 2;
    const day = Number(date.substring(indexOfMonth, indexOfDay));

    // console.log(year, month, day);

    const timeAndWeirdEndString = query.substring(indexOfT, query.length);
    // const indexOfDot = timeAndWeirdEndString.indexOf('.');
    // const timeString = timeAndWeirdEndString.substring(0, indexOfDot);

    const indexOfHours = timeAndWeirdEndString.indexOf(':');
    const indexOfMinutes = indexOfHours;
    const indexOfSeconds = indexOfMinutes + 3;
    const indexOfMilliseconds = indexOfSeconds + 3;

    console.log(timeAndWeirdEndString);

    // const hours = Number(timeAndWeirdEndString.substring(1, indexOfHours));
    const hours = new Date().getHours();
    const minutes = Number(timeAndWeirdEndString.substring(indexOfMinutes + 1, indexOfMinutes + 3));
    const seconds = Number(timeAndWeirdEndString.substring(indexOfSeconds + 1, indexOfSeconds + 3));
    const milliseconds = Number(timeAndWeirdEndString.substring(indexOfMilliseconds + 1, indexOfMilliseconds + 4));


    // console.log(hours, minutes, seconds);

    if (requiredPath === "/api/parsetime") {
        // res.end(myURL);
        console.log(myURL);
        res.end(JSON.stringify({hour: hours, minute: minutes, second: seconds}))
    //   console.log(requiredPath);
    } else if (requiredPath === "/api/unixtime") {
        const date = new Date(year, month - 1, day + 6);
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
        date.setMilliseconds(milliseconds);
        console.log("My date =", date);
        console.log("Accepted date = ", query);
        const hardStuff = Math.floor(+date)
        res.end(JSON.stringify({unixtime: hardStuff}))
        // res.end(date.getDay());

    } else {
    //   console.log(requiredPath);
      res.end(requiredPath);
    }
  })
  .listen(port);
