// JavaScript scope with the var keyword.

// Global scope, function scope

// Any variable created outside of a function using the keyword var has global scope.
var myName = "Narciso"; // global scope

function changeName(){
  myName = "Johnny"
}

changeName();
console.log(myName);

// function scope - variable is created inside of the function
function changeName2(){
  var myName = "Ciso";
}

changeName2();
// global myName remains "Johnny"
console.log(myName);

// const, let - block scoped

for (let i = 0; i < arr.length; i++){
  // i only exists in this block - the for loop itself
}