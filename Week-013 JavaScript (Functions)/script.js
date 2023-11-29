//  Applications to be made genereic (reuse things.)
// Dry principle - Don't repeat yourself.

//  Most of the programming languages has got the concept of function.
//  Functions help us to implement DRY principle.
//  Functions help us to wrap a piece of code together and reuse it wherevver required.
//  Keyword function nameOfTheFunction (p1,p2,p3...)

//  Returns output/ In JS the return statement is also not mandatory. if return statement is not written the function automatically returns undefinded.

function calculateSquare(num) {
  // logic to calculate square of a number.
  let squareValue = num * num;

  return squareValue;
}

let result1 = calculateSquare(3);
console.log(result1);

console.log(calculateSquare(5));

//  Write a function to  calculate sum of 3 numbers passed as an arugment
function calculateSum(a, b, c) {
  return a + b + c;
}

console.log(calculateSum(1 + 2 + 3));

//  Write a function to  calculate sum of some numbers passed as an arugment
function func() {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  return sum;
}
func(3, 4, 7); // 14
func(3, 4, 12, 10, 21); //
func(3, 4, 4, 8); // 19


console.log("Palindrome Problem")

let isPalin = "racecar"


function isPalindrome(newString){
  if
}