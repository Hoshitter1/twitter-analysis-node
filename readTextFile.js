const fs = require("fs");

const filename = "accounts.txt";

const data = fs.readFileSync(filename, "utf-8");
console.log(data.split("\n"));

// if you want to see if there is new line
// const util = require("util");
// const str = util.inspect(data);
// console.log(str)
