/*
1. Print 1-255
print1To255()
Print all the integers from 1 to 255.
*/

function print1To255(){
  for(var i = 1; i <= 255; i++){
    console.log(i);
  }
}
print1To255();

/*
2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255
*/

function printOdds1To255(){
  for(var i = 1; i <= 255; i+=2){
    console.log(i);
  }
}
printOdds1To255();

/*
3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. 
*/

function printIntsAndSum0To255(){
  var sum = 0;
  for (var i = 0; i <= 255; i++){
    sum += i;
    console.log(i, sum);
  }
}
printIntsAndSum0To255();

/*
4. Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value. 
*/

function printArrayVals(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
printArrayVals(["blue", 3, true, 75.5]);

/*
5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.
*/

function printMaxOfArray(arr){
  var max = arr[0];
  for (var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  console.log("max is: " + max);
}
printMaxOfArray([3, 7, 99, 1, 3, 33, 56]);

/*
6. Get and Print Average
printAverageOfArray(arr)
Analyze an array’s values and print the average.
*/

function printAverageOfArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  console.log(sum/arr.length);
}

printAverageOfArray([1, 2, 3, 4]);

/*
7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).  
*/

function returnOddsArray1To255(){
  var oddsArr = [];
  for (var i = 1; i <= 255; i+=2){
    oddsArr.push(i);
  }
  return oddsArr;
}
console.log(returnOddsArray1To255());

/*
8. Square the Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values. 
*/

function squareArrayVals(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
  }
  return arr;
}
console.log(squareArrayVals([1, 2, 3, 4]));

/*
9. Greater than Y
returnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.
Example: returnArrayCountGreaterThanY([1, 2, 3, 4, 5], 3) --> 2
*/

function returnArrayCountGreaterThanY(arr, y){
  var count = 0
  for (var i = 0; i < arr.length; i++){
    if(arr[i] > y){
      count++;
    }
  }
  return count;
}
console.log(returnArrayCountGreaterThanY([1, 2, 3, 4, 5], 3));

/*
10. Zero Out Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero. 
Example: zeroOutArrayNegativeVals([-1, 2, 3, -4, 5]) --> [0, 2, 3, 0, 5]
*/

function zeroOutArrayNegativeVals(arr){
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(zeroOutArrayNegativeVals([-1, 2, 3, -4, 5]));

/*
11. Max, Min, Average
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array.
Example: printMaxMinAverageArrayVals([1, 2, 3, 4]) --> max: 4, min: 1, avg: 2.5
*/

function printMaxMinAverageArrayVals(arr){
  var max = arr[0], min = arr[0], sum = arr[0]
  for (var i = 1; i < arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i]
  }
  console.log('max: ' + max + ', ' + 'min: ' + min + ', ' + 'avg: ' + sum/arr.length);
}
printMaxMinAverageArrayVals([1, 2, 3, 4]);

/*
12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
Example: shiftArrayValsLeft([1, 2, 3, 4, 5]) --> [2, 3, 4, 5, 0]
*/

function shiftArrayValsLeft(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i+1];
  }
  arr[arr.length-1] = 0;
  return arr;
}
console.log(shiftArrayValsLeft([1, 2, 3, 4, 5]));

/*
13. Swap String For Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'.

Example: swapStringForArrayNegativeVals([-1, 2, 3, -4, 5]) -- ["Dojo", 2, 3, "Dojo", 5]

*/

function swapStringForArrayNegativeVals(arr){
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
console.log(swapStringForArrayNegativeVals([-1, 2, 3, -4, 5]));