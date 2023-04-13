// Array Literal

const numbers = [12, 45, 36, 74, 15, 59];

// console.log(numbers);

// Array Constructor

const fruits = new Array("apple", "grape", "orange", "banana");

const mixed = [12, "Hello", 45, true, "World"];

// console.log(fruits);

let x = numbers[0] + numbers[4];

// console.log(mixed.length);

// console.log(x);
// console.log(mixed);

fruits[2] = "watermelon";
fruits[fruits.length] = "Mango";
fruits[fruits.length] = "Blueberry";
// console.log(fruits.length);
// console.log(fruits);

// Array Methods

console.log(numbers);
numbers.push(99);
numbers.unshift(02);
numbers.reverse();
numbers.pop();
numbers.shift();

x = numbers.includes(15);
console.log(numbers);

console.log(numbers.indexOf(306));

// Slice and Splice

x = numbers.slice(1, 4);
// x = numbers.splice(1, 4);

console.log(numbers);

x = console.log(x);
