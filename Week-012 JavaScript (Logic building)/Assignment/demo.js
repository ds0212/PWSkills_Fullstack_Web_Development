let start = 1;
let end = 25;

while (start <= end) {
  console.log(start);
  if (start === end) break; // To avoid printing twice when start equals end
  console.log(end);
  start++;
  end--;
}
