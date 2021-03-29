const fs = require("fs");

const filename = "accounts.txt";
const util = require("util");

const data = fs.readFileSync(filename, "utf-8");
console.log(data.split("\n"));

// if you want to see if there is new line
// const str = util.inspect(data);
// console.log(str)
