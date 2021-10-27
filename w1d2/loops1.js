// For Loops

// THIS IS NOT DRY CODE
console.log(1);
console.log(2);
console.log(3);
console.log(4);

// DRY - DON'T REPEAT YOURSELF

// What do you need for a for loop?
// 1. A sentry
// 2. Where does it start?
// 3. Where does it end? BOOLEAN EXPRESSION
// 4. How it changes

for(var i = 1; i <= 100; i++){
  console.log(i)
}

// Modulo or modulus operator
// % - modulo

2 % 2 // 0
3 % 2 // 1
4 % 2 // 0
5 % 2 // 1

for (var i = 1; i <= 10; i++) {
  if(i % 2 != 0) {
    console.log(i, "is odd");
  }
}

for(var i = 1; i <= 10; i++){
  if(i % 3 == 0 && i % 7 == 0){
    console.log(i, "is a multiple of 3 and 7");
  }
}