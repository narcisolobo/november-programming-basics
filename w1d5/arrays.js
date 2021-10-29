// ARRAYS - WHAT ARE THEY EVEN?

// Refererence Datatype that can hold more than one value.
// Arrays can hold any datatype - even other arrays.
// You can mix and match datatypes in arrays.
// The values in an array have index numbers, they ALWAYS start at 0.

var faveColors = ["red", "blue", "green", "purple", "yellow"];

// Bracket notation - setting and getting

// setting a specific value
faveColors[2] = "orange";
// console.log(faveColors);

// getting a specific value
// console.log(faveColors[2]);

// DRY CODE - Don't Repeat Yourself

for(var i = 0; i < faveColors.length; i++){
  // console.log(faveColors[i]);
}

var meAsArray = ["Narciso", "Lobo", 25, true, ["December", 23, 1990], faveColors]

console.log(meAsArray[5][3]);

/*
4. Iterate and Print Array
Iterate through a given array, printing each value. 
PrintArrayVals(arr)
*/

function printArrayVals(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
var arr = [5, 6, 7];
printArrayVals([1, 2, 3, 4, 5]);
printArrayVals(meAsArray);
printArrayVals(arr);

/*
5. Find and Print Max
PrintMaxOfArray(arr)
Given an array, find and print its largest element.
*/

// Pseudocode
// Create a function named printMaxOfArray that takes in an array.
// Create a variable named max and assign the number zero to it.
// Create a for loop starting at zero, ending at arr.length, incrementing by 1.
// Inside the for loop:
  // Create a conditional (if arr[i] is greater than max, then max = arr[i]). If the current value in the array is greater than max, then make that the new max.
// After the for loop, console.log max
// Return max

function printMaxOfArray(arr){
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    // arr[i] means 'the current value in the array'
    if(arr[i] > max){
      // debugging with console.log()
      console.log(arr[i]);
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}

printMaxOfArray([1, 5, 2, 8, 9, 3, 5, 6, 7]);

/*
6. Get and Print Average
PrintAverageOfArray(arr)
Analyze an array’s values and print the average.
*/

// Pseudocode
// Create a function named printAverageOfArray(arr) that takes in an array as input.
// Create a variable called sum to total all the values in the array and set it to 0.
// Create a for loop that starts at 0, ends at arr.length (the end of the array), and increments by 1.
  // Inside the for loop, update sum (sum += arr[i]). sum = sum + arr[i]
// Outside the loop, create a variable called avg and set it to sum / arr.length.
// Console.log avg
// Return avg

function printAverageOfArray(arr){
  var sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum / arr.length);
  return sum / arr.length;
}

printAverageOfArray([1, 2, 3, 4]);

/*
7. Array with Odds
ReturnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).  
*/

// Pseudocode
// Create a function called returnOddsArray1To255()
// Create a variable called arr and set it to an empty array (var arr = []).
// Create a for loop that starts var i at 1, ends at 255, and increments by 1.
// Create a conditional - if i % 2 != 0, then arr.push(i).
// After the loop console.log(arr).
// Return arr.

// Method 1
function returnOddsArray1To255(){
  var arr = [];
  for(var i = 1; i <= 255; i++){
    if(i % 2 != 0){
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

returnOddsArray1To255();

// Method 2
function returnOddsArray1To255b(){
  var arr = [];
  for(var i = 1; i <= 255; i+=2){
    arr.push(i);
  }
  console.log(arr);
  return arr;
}

returnOddsArray1To255b();

/*
8. Square the Values
SquareArrayVals(arr)
Square each value in a given array, returning that same array with changed values. 
*/

// Pseudocode
// Create a function called squareArrayVals(arr) that takes in an array.
// Create a for loop that starts at 0, ends at arr.length, and increments by 1.
  // Inside the for loop, arr[i] *= arr[i] (arr[i] = arr[i] * arr[i]).
// Outside the loop, return arr.

function squareArrayVals(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
  }
  return arr;
}

var newArr = [1, 2, 3, 4]

squareArrayVals(newArr);
// When we console.log a function call, we are console.logging whatever that function RETURNS
console.log(squareArrayVals(newArr));
console.log(newArr);