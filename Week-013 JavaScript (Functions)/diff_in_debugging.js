function isEvenorOdd(x, fn) {
  console.trace("Trace of functions");

  // call fn here
  fn();
  return x % 2 == 0;
}

const namedFunctionExpression = function exec() {
  const result = isEvenorOdd(10);
};

const anonFunctionExpression = function () {
  const result = isEvenorOdd(11);
};

isEvenorOdd(10, function process() {
  console.log("Processing");
  console.trace("Trace of functions");
});
namedFunctionExpression();
// Using console. trace we can print the order in which the function is called.
