var num1 = 20;
var num2 = 5;

if (num1 < num2) {
  num2 = num2 * num1;
}

else {
  num1 = num1 / num2;
  // Nested conditional below
  if (num1 > num2) {
    num1 = num1 * 2;
  } else if (num1 == num2) {
    num2 = num1 * num2;
  } else {
    num2 = num2 * 2;
  }
}

console.log(num1);
console.log(num2);

// Compound Conditionals with AND or OR
// AND operator - &&
// OR operator - ||

var num = 5;
if(num < 10 && num > 4){
  console.log('num is between four and ten');
}

var num2 = 5;
if (num2 < 10 || num2 > 4){
  console.log('num2 is less than ten or greater than')
}