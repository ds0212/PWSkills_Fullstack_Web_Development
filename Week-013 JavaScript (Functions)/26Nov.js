//  Simple function declaration.
function fun() {}

const f = function process() {}; // Named function expresion

const g = function () {}; // Anonymous funciton expression

const h = () => {}; // Anonymous funciton expression

// Iife - Immediately invoked function expression.
(function () {})()(function exec() {})(); // IIFE function expression.

// function expression - Why do we need it?
//  How to identify if a written function is declaration or expression.
//

// Why in JS we consider functions as first class citizens?
// A lot or programming paradigms. JS is functional programming language.
// Apart from declaring and using it , we can store a function in an array/variable.
// 2. Pass function as an argument.
// 3. Return a function from a function.

//  If the first valid word is not function then it is a function expression.

//  Q - Is there any difference apart from syntax between function declaration and expression?

//  The scoping mechanism is different.

// Types of function expression.
// 1.Named func ex. 2.Anonymous func ex 3. IIFE function ex.

const isEvenorOdd = function process(num) {
  return num % 2 == 0;
};
//  How to call it?
//  Using the name fo the varialbe which is stored the function to call it.

const result = isEvenorOdd(50);
console.log(result);

// Why named function exp is important?

// 1. debugging 2. Recursion. 3. Readability.

function isEvenorOdd(x) {
  console.trace("trace of the functions.");
  return x % 2 == 0;
}
const namedFunctionExpression = function exec() {
  const result2 = isEvenorOdd(10);
};
const anonFunctionExpression = function exec() {
  const resut3 = isEvenorOdd(11);
};
// Recursion - Call stack.
