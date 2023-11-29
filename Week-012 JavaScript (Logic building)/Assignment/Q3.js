//  What are loops, and what do we need them? Explain different types of loops with their syntax and examples,

// Loops in programming are structures that allows to execute a block of code repeatedly as long as a specified condition is true.
// They are essential for automating repetitive tasks and iterating over collections of data.

// The for loop is used when you know the number of iterations in advance.

for (initialization; condition; increment / decrement) {
  // code to be executed in each iteration
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// The while loop is used when the number of iterations is not known in advance, and the loop continues as long as the condition is true.

while (condition) {
  // code to be executed as long as the condition is true
}

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
