const filterFiles = require("./mymodule");
let directory = process.argv[2],
  extension = process.argv[3];

filterFiles(directory, extension, (err, list) => {
  if (err) return console.error("There was an error:", err);

  list.forEach(file => {
    console.log(file);
  });
});
