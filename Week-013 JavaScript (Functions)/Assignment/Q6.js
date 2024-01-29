// Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.

function curry(fn) {
  return function (argument1) {
    return function (argument2) {
      return fn(argument1, argument2);
    };
  };
}

const add = (a, b) => a + b;

const curryAdd = curry(add);

console.log(curryAdd(2)(3));