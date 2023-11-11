const salutation = "Namaste";
const salutation1 = "Namaskar";

console.log(salutation + salutation1);

const firstName = "Dhrumil";

const lastName = "DS";
console.log(firstName + lastName);
// `` - template literals. ${}
console.log(`The first name is ${firstName} and lastname is ${lastName}`);

const username = new String("dhrumildoctcom");

console.log(username[0]);
console.log(username.length);
console.log(username.charAt(0));
console.log(username.substring(0, 5));

let email = " d@ds.com      ";

console.log(email.trim());

let thewebsite = "d@dh.com";
console.log(thewebsite.replace("dh", "dhrumil"));

console.log(email.includes("ds"));
console.log(email.toUpperCase());

const num = new Number(5.23456);
console.log(num.toString());

console.log(num.toFixed(2));

const subscribers = 1000000;

console.log(subscribers.toLocaleString());

console.log(Number.MAX_VALUE);

console.log(Math);

console.log(Math.random());
