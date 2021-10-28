// The Return Statement - what is it even?

// The return statements stops the execution of a function and optionally returns a value from that function. If a value is not provided, the return is undefined.

// The value of a function is whatever that function returns
function add(num1, num2){
  return num1 + num2;
}

// console logging a function prints out the value of that function call.
// console.log(add(2, 2));

// The function returns a value to the caller.
var sum = add(3, 3);

// console.log(sum) // -> expecting a 6

function multiply(num1, num2) {
  return num1 * num2
}

// console.log(multiply(sum, 2));

var product = multiply(sum, 2);

console.log(product);

// What is the difference between console.log and return?
// Console.log shows you the info, return gives you the info.

// Return value not needed
function returnUndefined(){
  return;
}

console.log(returnUndefined());

