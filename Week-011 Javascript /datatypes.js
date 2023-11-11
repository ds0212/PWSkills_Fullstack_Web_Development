// https://app.eraser.io/workspace/gGQB8RlwymdEcdUOA4Wn

// Primitive (STACK)

/*
String
Number
Boolean
Null
Undefined
Symbol  - Used in react specially library
BigInt
*/
const firstname = "Dhrumil";
const age = 20;
const score = 200;
let isLoggedIn = true;
const nodeVersion = null;

let bankBalance = undefined;
const buttonId = Symbol("id");
const aReallyLongNumber = 10007131519n;

// Reference (Non - Primitive) - Objects (HEAPS)
/*
Arrays
Objects
Functions
*/

const numbers = [1, 2, 3, 4, 5];
const heroes = ["Aadinath", "Parasnath", "Vidyasagar"];
const userObject = {
  name: "Dhrumil",
  age: 20,
  isLoggedIn: true,
};

//Functions - To store the functionality.

const sayHello = function () {
  console.log("Dhrumil");
};

const registerAUser = function () {};
const loginUser = function () {};

let anotherName = firstname; // Changing firstname doesnt change another name.

let anotherUser = userObject; // Changing userObject does change another user.
