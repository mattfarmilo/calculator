//Basic calculation functions
function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

//Global variables
let answer = 0;
let newNumber = 0;
let operator;

//Function to determine calculation mode
function operate (num1, num2, operator) {
  switch (operator) {
    case 'plus':
      return add(num1, num2);
      break;
    case 'minus':
      return subtract(num1, num2);
      break;
    case 'multiply':
      return multiply(num1, num2);
      break;
    case 'divide':
      return divide(num1, num2);
      break;
  }
}