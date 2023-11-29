// Q1. What are conditional statements? Explain conditional statements with syntax and examples.

// Conditional statements in JavaScript are used to make decisions
// based on certain conditions.
// They allow to execute different blocks of code depending
// on whether a specified condition is true or false.

// 1. If statement - to execute a block of code only if the specified condition is true.

let num = 10;

if (num > 0) {
  console.log("Positive");
}

// 2. If-else: Executes if block if true or executes else block.

let num1 = -5;

if (num1 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

//  3. if...else if...else statement: For checking multiple conditions.
let num2 = 0;

if (num2 > 0) {
  console.log("Number is positive");
} else if (num2 < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}
