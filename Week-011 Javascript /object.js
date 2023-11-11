const user = {
  username: "ds",
  name: "dhrumil",
  "first Name": "Dhrumil",
  email: "d@d.com",
  age: 23,
  isAdmin: true,
  isLoggedIn: true,
  hero: ["Adinath", "Parasnath", "Raam"],
  address: {
    city: "Ahmedabad",
    state: "Gujarat",
  },
};
const anotheruser = user;

console.log(user.age), console.log(user["age"]);

console.log(user.hero[0]);
console.log(user.address.state);
console.log(user["address"]["state"]);

user.email = "dhrumil@dhrumil.com";

console.log(user);
console.log(anotheruser);

delete user.isAdmin;

console.log(user);
console.log(anotheruser);

const userListFromDatabase = [{}, {}, {}];

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.entries(user));
console.log(user.keyboard);

console.log(user.hasOwnProperty("hero"));
