const x = 10;
const y = 10;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is less than ${y}`);
}

const d = new Date(10, 30, 2022, 12, 0, 20);

console.log(d.getHours());

const hour = d.getHours();

if (hour < 12) {
  console.log("Good Morning!");
} else if (hour === 12) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Night");
}

const month = d.getMonth();

switch (month) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is Not Jan, Feb or March");
}

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
    default:
      result = "This is an Invalid Operator";
  }
};
