// Coersion - Explicit-we forcefully convert it. , Implicit

let bankBalance = "100";

let bankBalanceInt = parseInt(bankBalance);
let bankBalanceInt1 = Number(bankBalance);

console.log(bankBalance);

console.log(bankBalanceInt);

console.log(typeof bankBalance);

console.log(typeof bankBalanceInt);

let bankBalanceString = String(bankBalance);

let bankBalanceBool = Boolean(bankBalance);
console.log(bankBalanceBool);

console.log(NaN == NaN);

console.log(5 + undefined);
// Undefined is not defined yet, no resereved space in the memory.

console.log(5 + null);
// null  is intentionally empty value.

let c = null;
