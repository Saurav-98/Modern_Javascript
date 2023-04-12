// // // // let firstName = "Saurav";
// // // let lastName = "Verma";

// // // console.log(
// // //   "Your Name is",
// // //   firstName + " " + lastName + "and your age is",
// // //   age
// // // );

// // // var age = 25;

// // // console.log("and your age is", age);

// // // Data Types

// // //  01 - PRIMITIVE DATA TYPES

// // /*
// //   -- String
// //   -- Number
// //   -- Boolean
// //   -- Null
// //   -- Undefined
// //   -- Symbol
// //   -- BigInt
// // */

// // // 02 - REFERENCE TYPES
// // /*
// //     OBJECTS
// //     ARRAYS
// // */

// // //  String

// // const firstName = "Sarah";

// // const age = 24;
// // const temp = 98.8;
// // const aptNumber = null;
// // const hasKids = true;

// // const output = hasKids;
// // console.log(output, typeof output);

// // // Primitive vs reference types

// // let yourName = "Saurav verma";
// // let youAge = 24;

// // let newName = yourName;

// // newName = "John Abraham";

// // console.log(yourName, newName);

// // // Reference Type

// // const newHero = {
// //   hisName: "Saurav Verma",
// //   hisAge: 24,
// // };

// // const newerHero = newHero;
// // newerHero.hisName = "Shah Rukh Khan";

// // console.log(newHero.hisName, newerHero.hisName);

// // // Type Conversion

// // // Change String to Number

// // let amount = 0;
// // // amount = Number(amount);
// // // amount = +amount;
// // // amount = parseInt(amount);
// // // amount = parseFloat(amount);

// // // Change Number to String

// // // amount = amount.toString();
// // // amount = String(amount);

// // // Convert Number to Boolean

// // amount = Boolean(amount);

// // console.log(amount, typeof amount);

// // // Operators

// // // Arithmetic Operators

// // // String Properties and Methods

// // const s = "Hello, My People.";

// // x = s.length;
// // x = s[1];
// // console.log(x);

// // // Capitalize Challenge

// // const myString = "my Name";

// // const newString = myString[0].toUpperCase() + myString.slice(1).toLowerCase();

// // console.log(newString);

// // // Number CHallenge

// // const xm = Math.floor(Math.random() * 100 + 1);
// // const ym = Math.floor(Math.random() * 50 + 1);

// // const sumOutput = `${xm} + ${ym}  = ${xm + ym}`;
// // const diffOutput = `${xm} - ${ym}  = ${xm - ym}`;
// // const productOutput = `${xm} * ${ym}  = ${xm * ym}`;
// // const divisionOutput = `${xm} / ${ym}  = ${xm / ym}`;
// // const remainderOutput = `${xm} % ${ym}  = ${xm % ym}`;

// // console.log(sumOutput);
// // console.log(diffOutput);
// // console.log(productOutput);
// // console.log(divisionOutput);
// // console.log(remainderOutput);

// // //

// // let d;

// // d = new Date();
// // console.log(d, typeof d);
// // console.log(d.toString());

// // e = new Date("2021-07-10T12:30:00");
// // console.log(e);

// // f = Date.now();
// // console.log(f);

// let dd = new Date("2022/05/15");

// console.log(dd);
// console.log(dd.toString());
// console.log(dd.getTime());
// console.log(dd.valueOf());

// console.log(dd.getFullYear());
// console.log(dd.getMonth() + 1);
// console.log(dd.getDate());
// console.log(dd.getDay());
// console.log(dd.getHours());
// console.log(dd.getMinutes());

// console.log(`${dd.getFullYear()}-${dd.getMonth() + 1}-${dd.getDate()}`);

// // let xx = Intl.DateTimeFormat("default", { month: "long" }).format(dd);

// console.log(dd.toLocaleString("default"));
// // console.log(xx);

// let a = 35231;
// a = String(a);
// // console.log(a.length);

// function digitize(n) {
//   // return Array.from(String(a), Number).reverse();
//   const result = [];
//   n = String(n);
//   for (let i = 0; i < n.length; i++) {
//     // console.log(n[i]);
//     result.unshift(Number(n[i]));
//   }

//   return result;
// }

// console.log(digitize(a));
let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

function countPositivesSumNegatives(input) {
  if (!input) {
    console.log("Case Failed Due to No Input");
    return [];
  }

  let positive = 0;
  let negative = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positive++;
    } else if (input[i] < 0) {
      negative += input[i];
    } else {
      continue;
    }
  }
  return [positive, negative];
}

console.log(countPositivesSumNegatives(testData1));
console.log(countPositivesSumNegatives(testData2));
