// Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate arithmetic operators.

let radius = 10;

let PI = 22 / 7;

let areaOfCircle = PI * (radius * radius);
let areaOfCircle1 = PI * Math.pow(radius, 2);

console.log(` The area of circle is ${areaOfCircle.toFixed(2)}.`);
// The area of circle is 314.29.
