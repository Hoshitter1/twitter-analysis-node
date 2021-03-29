// let intersection = arrA.filter(x => arrB.includes(x));
const arry1 = [1, 2, 3, 4];

function isNotThree(value) {
  return value != 3;
}

const filteredArry = arry1.filter(isNotThree);
console.log(filteredArry);

/// normal function style

// // arrow function style (Just a shoter version of the above)
// const isBiggerThanThree = (value) => value > 3;

// const value1 = "1";
// const value2 = "2";
// const value3 = "4";

// const retVal = isBiggerThanThree(value3);
// console.log(retVal);
