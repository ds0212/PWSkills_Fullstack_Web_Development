let temperature = 16;
if (temperature < 20) {
  //body = Executable code
  console.log("Really cold");
} else {
  console.log("Really hot");
}
console.log("dhrumil");

let score = 99;
let life = 3;
let bullets = 1000;
if (score >= 100) {
  console.log("Life up");
  score = score - 100;
  life = life + 1;
  bullets = 2000;
} else {
  console.log("No life up");
}
console.log("Welcome to the game!!!!");

let balance = 500;

if (balance > 100) console.log("Balance is above 100");

if (balance > 100) console.log("Balance is above 100"), console.log("Hi");

// Build a rating system for pizzahut.

// 1 star = poor ; 2 stars = emm, ok   3 stars =  average 4 stars =  Cool 5 stars = great 6 stars = awesome 7 stars = nailed it

const ratingstr = "5";
rating = parseInt(ratingstr);

if (rating === 1) {
  console.log("poor");
}
if (rating === 2) {
  console.log("emm, ok!");
}
if (rating === 3) {
  console.log("average");
}
if (rating === 4) {
  console.log("cool");
}
if (rating === 5) {
  console.log("great");
}
if (rating === 6) {
  console.log("awesome");
}
if (rating === 7) {
  console.log("Nailed it");
}

// Login system

const email = "dhrumil@google.com";

if (email) {
  console.log("Enter password");
} else {
  console.log("Enter email");
}

if (email == "dhrumil@google.com") {
  console.log("Enter password");
} else {
  console.log("Enter email");
}

if (email != "") {
  console.log("Enter password");
} else {
  console.log("Enter email");
}

// truthy and falsy values

/*

false
0 (-0 and BigInt 0)
""
null
undefined 
NaN

*/

/*

Rest are truthy

*/

// If user provides email, password , then allow login.

if (email && password) {
  console.log("login granted");
} else {
  console.log("enter email and pass");
}

if (email) {
  if (password) {
    console.log("Welcome to the app");
  } else {
    console.log("enter password");
  }
} else {
  log("Enter email");
}

//allow user to signin with google or github
const googleLoginToken = "";
const githubLoginToken = "";

if (googleLoginToken || githubLoginToken) {
  console.log("Welcome to the app");
} else {
  console.log("Please login to view account");
}

let age = 20;

if (age > 18) {
  console.log("Driving licence");
} else {
  console.log("No driving licnence");
}
