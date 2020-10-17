const fs = require("fs");
const path = require("path");

module.exports = function filterFiles(directory, extension, callback) {
  // let i = 0,
  //   listLength = 0,
  //   fileName = "",
  //   fileArray = [];

  fs.readdir(directory, (err, list) => {
    if (err) return callback(err);

    // listLength = list.length;

    list = list.filter((file) => {
      return path.extname(file) === "." + extension;
    });

    // for (i = 0; i < listLength; i++) {
    //   fileName = list[i];
    //   if (fileName.includes("." + extension)) {
    //     console.log(fileName);
    //     fileArray.push(fileName);
    //   }
    // }

    // callback(null, fileArray);
    callback(null, list);
  });
};
