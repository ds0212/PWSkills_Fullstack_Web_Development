// Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.

let start = 1;
let end = 25;

while (start <= end) {
  console.log(start);
  start++;
}
console.log("***************");
start = 1;
while (end >= start) {
  console.log(end);
  end--;
}
// Method 2 to print both in one loop.
start = 1;
end = 25;

while (start <= end) {
  console.log(start);
  if (start === end) break; // To avoid printing twice when start equals end
  console.log(end);
  start++;
  end--;
}
