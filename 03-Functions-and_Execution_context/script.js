// // function add(Num1, Num2) {
// //   console.log(Num1 + Num2);
// // }

// // add(5, 15);

// // function subtract(num1, num2) {
// //   return num1 - num2;
// // }

// // const subtractResult = subtract(8, 6);
// // console.log(subtractResult);

// // function registerUser(user = "Bot") {
// //   return user + ` is registered`;
// // }
// // console.log(registerUser("Saurav"));
// // console.log(registerUser());

// // function sum(...numbers) {
// //   return numbers;
// // }

// // console.log(sum(1, 2, 3, 4, 5));

// // // Function expression

// // function addDollarSign(value) {
// //   return `$${value}`;
// // }
// // console.log(addDollarSign(77));

// // const addPlusSign = function (value) {
// //   return `+${value}`;
// // };

// // console.log(addPlusSign(78));

// const farToCel = (far) => ((far - 32) * 5) / 9;

// console.log(`The temperature is ${farToCel(50)}\xB0C`);

// const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });

// console.log(minMax([2, 5, 4, 7, 4, 6, 9, 8, 71, 5, 6]));

// ((width, length) =>
//   console.log(
//     `The area of a rectangle with the length of ${length} and width of ${width} is ${
//       length * width
//     }`
//   ))(20, 40);

let x = 100;
let y = 320;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(500, 410);

console.log(sum1);
console.log(sum2);
