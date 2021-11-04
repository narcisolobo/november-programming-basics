/*
    The Problem
//Return the second largest element of any array
//Given [42,1,4,Math.PI, 7] return 7
//If the array is too short, return null
function secondLargest(arr){

console.log(secondLargest([42,1,4,Math.PI, 7]));
console.log(secondLargest([5,1,2,3,4,6]));
console.log(secondLargest([14]));
console.log(secondLargest([4,8,15,16,23,42]));]));
*/

//PSEUDO CODE

//1. if the array is too short, return null
//2. run a for loop to find max and store max
//3. then have a for loop to check for the location of the largest number
//4. remove the number from the array
//5. check the new array for its largest number, return second max


function secondLargest(arr) {
  if (arr.length <= 2) {        //1.checking for proper length
    return null;
  }

  var firstMax = arr[0];
  var secondMax = arr[0];

  for (var first = 1; first < arr.length; first++) {     //2. checking for largest and creating 
    if (arr[first] > firstMax) {                            // firstMax
      firstMax = arr[first];
    }
  }

  for (var sec = 1; sec < arr.length; sec++) {
    if (arr[sec] == firstMax) {          //3. checking for the largest number by         
      // console.log(arr[sec]);                   // variable firstMax.
      arr.splice(sec, 1);            //4. once the if statements verifies the largest location 
      // console.log(arr);              //within the array it slices it from the array.
    }
    else if (arr[sec] > secondMax) {         //5. checking the new array for its largest 
      secondMax = arr[sec];                    // number which is the second largest number.
      // console.log(secondMax);
    }
  }
  return secondMax;
}
console.log(secondLargest([4, 8, 15, 16, 23, 42]));

for (var i = 1; i <= 100; i++) {
  // random integer between 5 and 9
  var rando = Math.floor(Math.random() * 5) + 5
  console.log(rando)
}