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
