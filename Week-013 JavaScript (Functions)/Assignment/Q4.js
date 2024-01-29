// Q4 - Write a JavaScript function called calculateTax that takes an income as an argument and returns the
// amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
// function with various incomes.
function calculateTax(income) {
  function tax(slab, rate, fix) {
    return (income - slab) * rate + fix;
  }
  let result;
  if (income < 3000) {
    result = 0;
  } else if (income < 30000) {
    result = tax(3000, 0.05, 0);
  } else if (income < 300000) {
    result = tax(30000, 0.1, 1500);
  } else if (income < 3000000) {
    result = tax(300000, 0.15, 15000);
  } else if (income < 30000000) {
    result = tax(3000000, 0.3, 150000);
  }
  return result;
}
console.log(calculateTax(250000)); // 23500
console.log(calculateTax(500000)); //45000
console.log(calculateTax(800000)); //90000
console.log(calculateTax(1100000)); //135000
console.log(calculateTax(1300000)); //165000
console.log(calculateTax(1600000)); //210000
