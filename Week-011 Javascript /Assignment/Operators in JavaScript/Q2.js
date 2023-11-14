// In JavaScript, the comma operator allows you to include multiple expressions in a single statement,
// and it evaluates them from left to right.
// The value of the entire expression is the value of the rightmost expression.
//  It's important to note that each expression is evaluated,
// but only the result of the rightmost expression is returned.

// Here's the syntax for the comma operator:
// expression1, expression2, ..., expressionN

// Example using the comma operator
let a = 1,
  b = 2,
  c = 3;

// The value of the entire expression is the value of the rightmost expression (c in this case)
let result = (a++, b++, c++);

console.log(result); // Output: 3
console.log(a); // Output: 2
console.log(b); // Output: 3
console.log(c); // Output: 4
