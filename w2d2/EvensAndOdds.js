/*
Evens and Odds
Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"
*/

// [2, 2, 2, 2, 3]

/*
PSEUDOCODE
Create a function called evensAndOdds that takes in an array.
Create two variables - evenTally and oddTally and initialize them at 0.
Create a for loop that starts i at 0, ends at arr.length, and increments by 1.
Inside the for loop, check if the current value is even or odd
If so, increment the corresponding tally variable.
Reset the opposite tally to 0.
Check if either tally value is 3.
If so print the corresponding message.
Reset the appropriate tally to 0.
*/

function evensAndOdds(arr){
  var evenTally = 0;
  var oddTally = 0;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      evenTally++;
      oddTally = 0;
      if(evenTally == 3) {
        console.log('Even more so!');
        evenTally = 0;
      }
    } else {
      oddTally++;
      evenTally = 0;
      if(oddTally == 3) {
        console.log('That\'s odd!');
        oddTally = 0;
      }
    }
  }
}

evensAndOdds([2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 67, 1, 23, 5, 7, 8, 8, 88, 23, 3, 56, 34])