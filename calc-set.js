// let intersection = arrA.filter(x => arrB.includes(x));
// const arry1 = [1, 2, 3, 4];

// function isNotThree(value) {
//   return value != 3;
// }

// const filteredArry = arry1.filter(isNotThree);
// console.log(filteredArry);

/// normal function style

// // arrow function style (Just a shoter version of the above)
// const isBiggerThanThree = (value) => value > 3;

// const value1 = "1";
// const value2 = "2";
// const value3 = "4";

// const retVal = isBiggerThanThree(value3);
// console.log(retVal);

// const arryA = [1, 2, 3, 4];
// const arryC = arryA.filter((value) => 1 === 1);
// console.log(arryC);

// const arryA = [1, 2, 3, 4];
// let arryC = [];
// for (let i = 0; i < arryA.length; i++) {
//   const targetValue = arryA[i];
//   if (targetValue != 3) {
//     arryC.push(targetValue);
//   }
// }

// console.log(arryC);

const arryA = ["abc", "def", "pq"];
const arryB = ["abc", "aaa", "ddd"];
function hasValueInArryb(value) {
  return arryB.includes(value);
}
let intersection = arryA.filter(hasValueInArryb);
console.log(intersection);
