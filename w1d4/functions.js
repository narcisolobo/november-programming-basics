// FUNCTIONS - What are they even?
// A function is a series of steps to perform a task (recipe).
// This task may or may not need input (ingredients).
// In order for your function to run, you must call it by name (invoke the function)

// Function declaration:
function greeting(){
  console.log('Hello there!');
}

// Invoking or calling the function:
greeting();

// The ingredients that functions require are called parameters.
function greetingName(name){
  // Edge case
  if(typeof name == 'string'){
    console.log('Hello there, ' + name + '!');
  } else {
    console.log('Please provide a string.')
  }
}

// Supply the necessary arguments
greetingName('Ciso');
greetingName('Daniel');
greetingName('Yoda');
greetingName(8);

function greetingNameTime(tod, name){
  // Edge case
  if(typeof tod == 'string' && typeof name == 'string'){
    console.log('Good ' + tod + ', ' + name + '!');
  } else {
    console.log('Please provide a string.');
  }
}

greetingNameTime('morning', 'Narciso');
greetingNameTime('afternoon', 'Maria');
greetingNameTime(4, 'Narciso');

var num1 = 1;
var myName = "Narciso";
var isSleeping = false;

console.log(typeof num1);
console.log(typeof myName);
console.log(typeof isSleeping);

// Rewrite our three algorithms from yesterday as functions.

// 1. Print all the integers from 1 to 255.
function print1To255(start, end){
  for(var i = start; i <= end; i++){
    console.log(i);
  }
}

var beginNum = 1;
var stopNum = 255;

print1To255(beginNum, stopNum);

// 2. Print all odd integers from 1 to 255.
function printOdds1To255(){
  for(var i = 1; i <= 255; i++) {
    if(i % 2 != 0){
      console.log(i);
    }
  }
}

printOdds1To255();

for(var i = 1; i <= 255; i+=2){
  console.log(i);
}

// 3. Print integers from 0 to 255, and with each integer print the sum so far.

// PSEUDOCODE
// 1. Create a variable called sum to keep track of the running total and initialize it at zero.
// 2. Create a for loop starting at 0, ending at 255, and incrementing by one.
// 3. Print i
// 4. Updating sum by adding the current integer to it (sum += i, shorthand for sum = sum + i)
// 5. Print sum

function printIntsAndSum0To255(){
  var sum = 0;
  // <= less than or equal to
  // {} Curly brackets or curly braces
  // i++ is shorthand for i = i + 1
  // i += 2 is shorthand for i = i + 2
  for(var i = 0; i <= 255; i++){
    // sum = sum + i
    sum += i;
    console.log(i, sum);
  }
}

printIntsAndSum0To255();

