// const x = 10;
// const y = 10;

// if (x > y) {
//   console.log(`${x} is greater than ${y}`);
// } else if (x === y) {
//   console.log(`${x} is equal to ${y}`);
// } else {
//   console.log(`${x} is less than ${y}`);
// }

// const d = new Date(10, 30, 2022, 12, 0, 20);

// console.log(d.getHours());

// const hour = d.getHours();

// if (hour < 12) {
//   console.log("Good Morning!");
// } else if (hour === 12) {
//   console.log("Good Afternoon!");
// } else {
//   console.log("Good Night");
// }

// const month = d.getMonth();

// switch (month) {
//   case 1:
//     console.log("It is January");
//     break;
//   case 2:
//     console.log("It is February");
//     break;
//   case 3:
//     console.log("It is March");
//     break;
//   default:
//     console.log("It is Not Jan, Feb or March");
// }

const calculator = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "This is an Invalid Operator";
  }
  return result;
};
console.log("///");
console.log(calculator(8, 3, "%"));
function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}

// console.log(timeToMixJuice("Tropical Island"));
// console.log(timeToMixJuice("Green Garden"));
// console.log(timeToMixJuice("Energizer"));
// console.log(timeToMixJuice("Berries & Lime"));

// function limesToCut(wedgesNeeded, limes) {
//   let cutPeices = 0;
//   for (let l = 0; l < limes.length; l++) {
//     if (limes[l] === "small") {
//       cutPeices += 6;
//     } else if (limes[l] === "medium") {
//       cutPeices += 8;
//     } else {
//       cutPeices += 10;
//     }

//     if (cutPeices >= wedgesNeeded) {
//       return l + 1;
//     }
//   }
// }

// console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));

function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  console.log(orders);
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
const orders = [
  "Tropical Island",
  "Energizer",
  "Limetime",
  "All or Nothing",
  "Pure Strawberry Joy",
];
console.log(remainingOrders(7, orders));

console.log("Truthy and Falsy Value");

// Falsy Values

// - false
// - 0
// - ""
// - null
// - undefined
// - NaN

let a = null;

// if (!a) {
//   a = 20;
// }

// a = a || 30;

// a ||= 40;
// console.log(a);

// let b = 6;
// b &&= 560;

// // console.log(b);

// let c = 0;

// // if (c === null || c === undefined) {
// //   c = 70;
// // }

// c ??= 50312;
// console.log(c);

const age = 18;

age >= 18 ? console.log("You can Vote") : console.log("You can not vote");
