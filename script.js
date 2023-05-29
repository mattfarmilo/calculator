//Global variables
let answer = null;
let newNumber = "0";
let operator;

//Display variables to screen
function display () {
  const entry = document.querySelector("#entry");
  entry.textContent = newNumber;

  const holding = document.querySelector("#holding");
  holding.textContent = answer;

  const sign = document.querySelector("#sign");
  sign.textContent = operator;
}
display();


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

//Function to determine calculation mode
function operate (num1, num2, operator) {
  switch (operator) {
    case '+':
      return parseFloat(add(num1, num2).toFixed(5));
      break;
    case '-':
      return parseFloat(subtract(num1, num2).toFixed(5));
      break;
    case '*':
      return parseFloat(multiply(num1, num2).toFixed(5));
      break;
    case '/':
    return parseFloat(divide(num1, num2).toFixed(5));
      break;
  }
}

//Button event listeners
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if(newNumber === "0") {
      newNumber = e.target.value;
    } else {
      newNumber = newNumber + e.target.value;
    }
    display();
  });
});

const signs = document.querySelectorAll(".sign");
signs.forEach((sign) => {
  sign.addEventListener('click', (e) => {
    if (answer === null) {
      operator = e.target.value;
      answer = parseFloat(newNumber);
      newNumber = "0";
    } else {
      answer = operate(answer, parseFloat(newNumber), operator);
      operator = e.target.value;
      newNumber = "0";
    }
    display();
  });
});

const equals = document.querySelector(".equals");
equals.addEventListener('click', (e) => {
  if(operator) {
    newNumber = operate(answer, parseFloat(newNumber), operator);
    operator = e.target.value;
    answer = null;
    display();
  }
});

const clear = document.querySelector("#clear");
clear.addEventListener('click', () => {
  newNumber = "0";
  answer = null;
  operator = "";
  display();
});

const backspace = document.querySelector("#backspace");
backspace.addEventListener('click', () => {
  if (newNumber.length > 1) {
    newNumber = newNumber.slice(0,-1);
  } else {
    newNumber = "0";
  }
  display();
});

const decimal = document.querySelector("#decimal");
decimal.addEventListener('click', () => {
  if(!newNumber.includes(".")) {
    newNumber = newNumber + ".";
  }
  display();
});