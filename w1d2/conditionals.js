// Conditionals

// Control the code flow with boolean expressions or "if statements".

// Start with the if keyword
// Parentheses immediately following
// Inside parentheses write your condition (must evaluate to a boolean true or false)
// After closing parens, write your code block inbetween two curly braces.

if(10 < 2){
  // code to be run
  console.log("math.")
}

// else if's must follow an initial if
// you can have as many of these as you like
else if(11 < 2){
  console.log("math.")
}

// OTHERWISE
else {
  console.log('none of the above conditions were true')
}

var myName = "Narciso";

if(myName == "Narciso") {
  console.log("What's up, Ciso")
}

else if(myName == "Narciso") {
  console.log("I already said hello.")
}

var num = 10;

if(num > 5) {
  // num = num - 2;
  num += 2; // num is at 12 now
}

if (num < 12) {
  console.log('if you see this, we wrote it wrong');
}

else {
  console.log(num + 10);
}

console.log(num)

// New shorthand operators!
// +=, -=, *=, /=