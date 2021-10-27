// Loops Again!

// 1. Sentry
// 2. Where does it start?
// 3. How does it end?
// 4. How does it change?

// for loops:
for(var i = 0; i <= 10; i++){
  console.log(i);
}

// Print out the even numbers from 1 - 100
for(var i = 1; i <= 100; i++){
  if (i % 2 == 0){
    console.log(i);
  }
}

for(var i = 2; i <= 100; i += 2){
  console.log(i);
}

for(var i = 1; i <= 50; i++) {
  console.log(i * 2);
}

// The FizzBuzz Algorithm
// Print the integers from 1 to 100. If the number is a multiple of 3, print the word "Fizz" instead of the number. If the number is a multiple of 5, print the word "Buzz" instead of the number.  If the number is a multiple of 3 and 5, print the word "FizzBuzz" instead of the number.

/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
14
FizzBuzz
*/

for(var i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
}

// While Loops

// 1. Sentry
// 2. Where does it start?
// 3. How does it end?
// 4. How does it change?

var num = 1;
while(num <= 10){
  console.log(num);
  num++;
}

// When to use while loops and when to use for loops?
// A for loop is best when you know when the loop ends. A while loop is best for when you don't.

// First three of Basic 13:

// 1. Print all the integers from 1 to 255.
for(var i = 1; i <= 255; i++){
  console.log(i);
}

// 2. Print all odd integers from 1 to 255.
for(var i = 1; i <= 255; i++) {
  if(i % 2 != 0){
    console.log(i);
  }
}

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

// Rewrite the above as a while loop for practice.

// Write a for loop that prints the integers from 10 to 1, decrementing.
// 1. Sentry
// 2. Where does it start?
// 3. How does it end?
// 4. How does it change?

for(var i = 10; i >= 0; i--){
  console.log(i);
}

// Rewrite the above as a while loop for practice.