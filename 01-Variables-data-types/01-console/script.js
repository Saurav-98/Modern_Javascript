// // let firstName = "Saurav";
// let lastName = "Verma";

// console.log(
//   "Your Name is",
//   firstName + " " + lastName + "and your age is",
//   age
// );

// var age = 25;

// console.log("and your age is", age);

// Data Types

//  01 - PRIMITIVE DATA TYPES

/*
  -- String
  -- Number
  -- Boolean
  -- Null 
  -- Undefined 
  -- Symbol
  -- BigInt
*/

// 02 - REFERENCE TYPES
/*
    OBJECTS 
    ARRAYS 
*/

//  String

const firstName = "Sarah";

const age = 24;
const temp = 98.8;
const aptNumber = null;
const hasKids = true;

const output = hasKids;
console.log(output, typeof output);

// Primitive vs reference types

let yourName = "Saurav verma";
let youAge = 24;

let newName = yourName;

newName = "John Abraham";

console.log(yourName, newName);

// Reference Type

const newHero = {
  hisName: "Saurav Verma",
  hisAge: 24,
};

const newerHero = newHero;
newerHero.hisName = "Shah Rukh Khan";

console.log(newHero.hisName, newerHero.hisName);

// Type Conversion

// Change String to Number

let amount = 0;
// amount = Number(amount);
// amount = +amount;
// amount = parseInt(amount);
// amount = parseFloat(amount);

// Change Number to String

// amount = amount.toString();
// amount = String(amount);

// Convert Number to Boolean

amount = Boolean(amount);

console.log(amount, typeof amount);

// Operators

// Arithmetic Operators

// String Properties and Methods

const s = "Hello, My People.";

x = s.length;
x = s[1];
console.log(x);

// Capitalize Challenge

const myString = "my Name";

const newString = myString[0].toUpperCase() + myString.slice(1).toLowerCase();

console.log(newString);

// Number CHallenge

const xm = Math.floor(Math.random() * 100 + 1);
const ym = Math.floor(Math.random() * 50 + 1);

const sumOutput = `${xm} + ${ym}  = ${xm + ym}`;
const diffOutput = `${xm} - ${ym}  = ${xm - ym}`;
const productOutput = `${xm} * ${ym}  = ${xm * ym}`;
const divisionOutput = `${xm} / ${ym}  = ${xm / ym}`;
const remainderOutput = `${xm} % ${ym}  = ${xm % ym}`;

console.log(sumOutput);
console.log(diffOutput);
console.log(productOutput);
console.log(divisionOutput);
console.log(remainderOutput);
