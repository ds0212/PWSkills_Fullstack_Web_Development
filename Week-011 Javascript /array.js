const newArray = [1, 2, 3, 4, 5];

const newArrayy = new Array(1, 2, 3, 4, 5);

console.log(newArray[0]);

const Heroes = ["Adinath", "Parasnath", "Ram", "Mahavir", false, 12];

console.log(Heroes.length);

// Heroes[Heroes.length] = "Bajrangbali"

Heroes.push("Bajerangbali");

const lastHero = Heroes.pop();

Heroes.unshift("Kundkund");

console.log(Heroes);

console.log(Heroes.toString());
console.log(Heroes.join("-"));

console.log(Heroes.slice(1, 3));
console.log(Heroes.splice(1, 3));
console.log(Heroes);
