const fs = require("fs");

const filename = "accounts.txt";

fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;
  console.log("INSIDE DATA");
  console.log(data.split("\n"));
});

// const randomText = "hoshito1zilya1takato1icecoffe";
// console.log(randomText.split("1"));
