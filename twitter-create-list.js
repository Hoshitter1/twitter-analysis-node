const fs = require("fs");

const filename = "accounts.txt";
const util = require("util");

fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;
  console.log("INSIDE DATA");
  const str = util.inspect(data);
  console.log(str);
  //   console.log(data.split("\n"));
});

// console.log("hello");
