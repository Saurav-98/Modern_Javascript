// // // // Array Literal

// // // const numbers = [12, 45, 36, 74, 15, 59];

// // // // console.log(numbers);

// // // // Array Constructor

// // // const fruits = new Array("apple", "grape", "orange", "banana");

// // // const mixed = [12, "Hello", 45, true, "World"];

// // // // console.log(fruits);

// // // let x = numbers[0] + numbers[4];

// // // // console.log(mixed.length);

// // // // console.log(x);
// // // // console.log(mixed);

// // // fruits[2] = "watermelon";
// // // fruits[fruits.length] = "Mango";
// // // fruits[fruits.length] = "Blueberry";
// // // // console.log(fruits.length);
// // // // console.log(fruits);

// // // // Array Methods

// // // console.log(numbers);
// // // numbers.push(99);
// // // numbers.unshift(02);
// // // numbers.reverse();
// // // numbers.pop();
// // // numbers.shift();

// // // x = numbers.includes(15);
// // // console.log(numbers);

// // // console.log(numbers.indexOf(306));

// // // // Slice and Splice

// // // x = numbers.slice(1, 4);
// // // // x = numbers.splice(1, 4);

// // // console.log(numbers);

// // // x = console.log(x);

// // // Nesting Concatenating and Spread Operator

// // const fruits = new Array("apple", "grape", "orange", "banana");
// // const berries = [
// //   "strawberry",
// //   "raspberry",
// //   "blueberry",
// //   "blackberry",
// //   "mullberry",
// // ];

// // // fruits.push(berries);

// // console.log(...fruits);
// // // console.log(fruits[4][3]);

// // // const allFruits = fruits.concat(berries);

// // // SPREAD OPERATOR

// // const allFruits = [...fruits, ...berries];

// // // FLATTEN ARRAYS
// // const arr = [1, 2, 3, [4, 5, 6], [5, 6], 7, 8, [9]];

// // console.log(arr.flat());

// // console.log(allFruits);

// // // Static Methods on Array Object

// // x = Array.isArray("fruits");
// // x = Array.from("123456", Number);

// // const a = 45;
// // const b = 55;
// // const c = 65;
// // const d = 85;

// // x = Array.of(a, b, c, d);

// // console.log(x);

// // // Array Challenges

// // const arr1 = [1, 2, 3, 4, 5];
// // arr1.unshift(0);
// // console.log(arr1);
// // arr1.push(6);
// // console.log(arr1);
// // arr1.reverse();
// // console.log(arr1);

// // const arr2 = [1, 2, 3, 4, 5];
// // const arr3 = [5, 6, 7, 8, 9, 10];

// // const arr4 = [...arr2, ...arr3];
// // arr4.splice(4, 1);
// // console.log(arr4);

// // OBJECTS

// const person = {
//   name: "Jason Momoa",
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: "123 main st",
//     city: "Boston",
//     state: "MA",
//   },
//   hobbies: ["music", "sports"],
// };

// console.log(person.hobbies[1]);

// person.name = "Henry Cavil";

// person.hasChildren = true;
// person.greet = function () {
//   console.log(`Hello My Name is ${this.name}`);
// };

// console.log(person);
// person.greet();

// // Object Methods

// const todo = new Object();
// todo.name = "Buy Milk";
// todo.completed = false;

// console.log(todo);

// // Destructuring & Namming

// const firstName = "Jason";
// const lastName = "Momoa";
// const age = 38;

// const superStar = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(superStar);

const library = [
  {
    title: "Harry Potter",
    author: "J.K Rowlings",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Jungle Book",
    author: "Rudyard Kipling",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Snow White",
    author: "James Finn Garner",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.reading = true;
library[1].status.reading = true;
library[2].status.reading = true;

console.log(library[0]);

const { title: firstBook } = library[0];
console.log(firstBook);
