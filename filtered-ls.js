const fs = require("fs");

let directory = process.argv[2],
  extension = process.argv[3],
  i = 0,
  listLength = 0,
  fileName = "";

fs.readdir(directory, (err, list) =>{
    if (err) return console.error(err);

    listLength = list.length;

    for (i = 0; i < listLength; i++){
        fileName = list[i];
        if (fileName.includes("." + extension)){
            console.log(fileName);
        }
    }
    
})