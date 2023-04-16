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

// const calculator = (num1, num2, operator) => {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//     default:
//       result = "This is an Invalid Operator";
//   }
// };

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
