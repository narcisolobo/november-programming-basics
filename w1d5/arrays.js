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